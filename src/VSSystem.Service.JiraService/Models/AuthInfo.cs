using VSSystem.Collections.Generic.Extensions;

namespace VSSystem.Service.JiraService.Models
{
    [Newtonsoft.Json.JsonObject(ItemNullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public class AuthInfo
    {
        string _RestApiUrl;
        public string RestApiUrl { get { return _RestApiUrl; } set { _RestApiUrl = value; } }
        string _Email;
        public string Email { get { return _Email; } set { _Email = value; } }
        string _Token;
        public string Token { get { return _Token; } set { _Token = value; } }
        public static object Comparer
        {
            get
            {
                return TComparer.Create<AuthInfo>((a1, a2) =>
                (a1.RestApiUrl?.Equals(a2.RestApiUrl, System.StringComparison.InvariantCultureIgnoreCase) ?? false)
                && (a1.Email?.Equals(a2.Email, System.StringComparison.InvariantCultureIgnoreCase) ?? false)
                );
            }
        }
    }
}