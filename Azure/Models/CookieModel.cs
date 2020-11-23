using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace CookieClickGame
{
    public class CookieClicksContext : DbContext
    {
        public CookieClicksContext(DbContextOptions<CookieClicksContext> options)
        : base(options)
        {

        }

        public DbSet<CookieClicks> Clicks { get; set; }
    }

    public class CookieClicks
    {
        [Key]
        public int Id { get; set; } = 1;
        public int Clicks { get; set; }
        public int CookiesEaten
        {
            get
            {
                return Clicks / 3;
            }
        }

    }
}