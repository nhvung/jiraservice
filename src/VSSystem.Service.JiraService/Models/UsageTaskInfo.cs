using System.Collections.Generic;

namespace VSSystem.Service.JiraService.Models
{
    [Newtonsoft.Json.JsonObject(ItemNullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
    public class UsageTaskInfo
    {
        string _Key;
        public string Key { get { return _Key; } set { _Key = value; } }
        string _Summary;
        public string Summary { get { return _Summary; } set { _Summary = value; } }
        float _StoryPoints;
        public float StoryPoints { get { return _StoryPoints; } set { _StoryPoints = value; } }
        List<UsageTaskInfo> _Tasks;
        public List<UsageTaskInfo> Tasks { get { return _Tasks; } set { _Tasks = value; } }
    }
}