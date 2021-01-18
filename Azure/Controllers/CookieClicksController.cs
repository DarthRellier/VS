using CookieClickGame;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Azure
{
    public class CookieClicksController : Controller
    {
        private readonly CookieClicksContext _context;

        public CookieClicksController(CookieClicksContext context)
        {
            _context = context;
        }

        // GET: CookieClicks
        public async Task<IActionResult> Index()
        {
            return View(await _context.Clicks.ToListAsync());
        }

        // GET: CookieClicks/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cookieClicks = await _context.Clicks
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cookieClicks == null)
            {
                return NotFound();
            }

            return View(cookieClicks);
        }

        public async Task<IActionResult> DetailsJson(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cookieClicks = await _context.Clicks
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cookieClicks == null)
            {
                return NotFound();
            }

            return Json(cookieClicks);
        }

        // GET: CookieClicks/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: CookieClicks/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Clicks")] CookieClicks cookieClicks)
        {
            if (ModelState.IsValid)
            {
                _context.Add(cookieClicks);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(cookieClicks);
        }

        // GET: CookieClicks/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cookieClicks = await _context.Clicks.FindAsync(id);
            if (cookieClicks == null)
            {
                return NotFound();
            }
            return View(cookieClicks);
        }

        // POST: CookieClicks/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Clicks")] CookieClicks cookieClicks)
        {
            if (id != cookieClicks.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(cookieClicks);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CookieClicksExists(cookieClicks.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(cookieClicks);
        }

        // POST: CookieClicks/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditJson(int id, [Bind("Id,Clicks")] CookieClicks cookieClicks)
        {
            if (id != cookieClicks.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(cookieClicks);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                   if (!CookieClicksExists(cookieClicks.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return Json(cookieClicks);
        }

        // GET: CookieClicks/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cookieClicks = await _context.Clicks
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cookieClicks == null)
            {
                return NotFound();
            }

            return View(cookieClicks);
        }

        // POST: CookieClicks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var cookieClicks = await _context.Clicks.FindAsync(id);
            _context.Clicks.Remove(cookieClicks);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CookieClicksExists(int id)
        {
            return _context.Clicks.Any(e => e.Id == id);
        }

        private static object LockObject = new object();
        public async Task<IActionResult> DbIncJson(int id)
        {
            var cookieClicks = await _context.Clicks
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cookieClicks == null)
            {
                return NotFound();
            }

            lock (LockObject)
            {
                var tempClicks = _context.Clicks.Find(id);
                tempClicks.Clicks++;
                _context.Update(tempClicks);
                _context.SaveChanges();
                return Json(tempClicks);
            }
        }
    }
}
