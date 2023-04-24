using BSSystem.Service.JiraService.Middlewares;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.FileProviders;
using VSSystem.Extensions.Hosting;

namespace VSSystem.Service.JiraService
{
    public class VSStartup : AStartup
    {
        public VSStartup() : base()
        {
        }
        public override void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            base.Configure(app, env);
            string webRootPath = env.WebRootPath ?? $"{env.ContentRootPath}/wwwroot";
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(webRootPath),
                RequestPath = "/jira"
            });
        }
        protected override void _ConfigureMiddleware(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseMiddleware<ProxyMiddleware>();
        }
    }
}
