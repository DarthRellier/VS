using CookieClickGame;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Hangman;

namespace Azure
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddDbContext<CookieClicksContext>(options =>
                options.UseSqlite(Configuration.GetConnectionString("CookieClicksContext")));

            services.AddDbContext<HangmanContext>(options =>
                options.UseSqlite(Configuration.GetConnectionString("HangmanContext")));
            // services.AddMvc()
            // .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();

                app.Use(async (context, next) =>
                {
                    if (!context.Request.Host.HasValue
                         || string.IsNullOrEmpty(context.Request.Host.Host)
                         || context.Request.Host.Host != "www.darthrellier.com")
                    {


                        context.Response.Redirect("https://www.darthrellier.com", true);
                    }
                    else
                    {
                        await next.Invoke();
                    }

                });
            }


            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
