namespace VSSystem.Service.JiraService.Models
{
    [Newtonsoft.Json.JsonObject(ItemNullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public class WorklogInfo
    {
        string _ID;
        public string ID { get { return _ID; } set { _ID = value; } }
        string _IssueKey;
        public string IssueKey { get { return _IssueKey; } set { _IssueKey = value; } }
        string _TimeSpent;
        public string TimeSpent { get { return _TimeSpent; } set { _TimeSpent = value; } }
        string _Comment;
        public string Comment { get { return _Comment; } set { _Comment = value; } }
        long _TimeSpentSeconds;
        public long TimeSpentSeconds { get { return _TimeSpentSeconds; } set { _TimeSpentSeconds = value; } }
    }
}