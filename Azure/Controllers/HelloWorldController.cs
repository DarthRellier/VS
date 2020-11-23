using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers
{
    public class HelloWorldController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Welcome(int numTimes = 1)
        {
            ViewData["Message"] = "Nathaniel is Best";
            ViewData["NumTimes"] = numTimes;

            return View();
        }
    }
}