using Microsoft.AspNetCore.Hosting;
using VSSystem.Extensions.Hosting;
using VSSystem.Logger;

namespace VSSystem.Service.JiraService
{
    public class VSHost : AWebHost
    {
        public static string SERVICE_NAME = null;
        public static string PRIVATE_KEY = null;
        public VSHost(string name, string displayName, int port, string rootName, string privateKey)
            : base(name, displayName, port, rootName, privateKey)
        {
            SERVICE_NAME = _Name;
        }
        public static ALogger StaticLogger = null;
        protected override void _InitializeLogger()
        {
            base._InitializeLogger();
            StaticLogger = _logger;
        }
        protected override void _InitializeInjectionServices()
        {
            string rootName = _rootName;
            if (!string.IsNullOrWhiteSpace(rootName))
            {
                rootName = _Name;
            }
            _AddInjectedServices(new Service.VSService(_Name, _server_ID, rootName, _privateKey, _logger));
        }

        protected override void _UseStartup(IWebHostBuilder webHostBuilder)
        {
            webHostBuilder.UseStartup<VSStartup>();
        }
        protected override void _UseConfiguration(string[] args)
        {
            base._UseConfiguration(args);
            PRIVATE_KEY = _privateKey;
        }
    }
}