using System;
using System.Threading.Tasks;
using VSSystem.Logger;
using VSSystem.ServiceProcess;
using VSSystem.ServiceProcess.Extensions;

namespace VSSystem.Service.JiraService.Service
{
    public class VSService : AService
    {
        public VSService(string name, int server_ID, string rootComponentName, string privateKey, ALogger logger)
            : base(name, server_ID, rootComponentName, privateKey, new string[]
            {
                "auth",
            }, logger)
        {
        }

        protected override void _InitializeWorkers()
        {
            try
            {
            }
            catch (Exception ex)
            {
                _ = this.LogErrorAsync(ex);
            }
        }

        async protected override Task _InitConfiguration()
        {
            await base._InitConfiguration();

            try
            {

                _ini.ReadAllStaticConfigs<ServiceConfig>(_defaultSections);
            }
            catch (Exception ex)
            {
                _ = this.LogErrorAsync(ex);
            }
        }
    }
}
