using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using VSSystem.Extensions.Hosting;
using VSSystem.Service.JiraService;

namespace BSSystem.Service.JiraService.Middlewares
{
    public class ProxyMiddleware : AMiddleware
    {
        public ProxyMiddleware(RequestDelegate next) : base(next, VSHost.SERVICE_NAME)
        {
            _servicePath = string.Empty;
        }
        protected override Task _Invoke(HttpContext context, string path)
        {
            int apiIdx = path.IndexOf($"api/");
            if (apiIdx > -1)
            {
                context.Request.Path = $"/{_servicePath}{path.Substring(apiIdx)}";
            }

            return base._Invoke(context, path);
        }

    }
}