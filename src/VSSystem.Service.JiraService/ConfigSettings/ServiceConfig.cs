namespace VSSystem.Service.JiraService
{
    class ServiceConfig
    {
        #region auth
        static string _auth_url;
        public static string auth_url { get { return _auth_url; } set { _auth_url = value; } }
        static string _auth_email;
        public static string auth_email { get { return _auth_email; } set { _auth_email = value; } }
        static string _auth_token;
        public static string auth_token { get { return _auth_token; } set { _auth_token = value; } }
        #endregion
    }
}