using System;
using System.Collections.Generic;
using System.Linq;
using Jira.Models;

namespace VSSystem.Service.JiraService.Controllers
{
    class StoryExtension
    {
        static Dictionary<string, List<StoryInfo>> _mCacheStory;
        public static void AddStoryCache(string accountId, List<StoryInfo> stories)
        {
            if (_mCacheStory == null)
            {
                _mCacheStory = new Dictionary<string, List<StoryInfo>>(StringComparer.InvariantCultureIgnoreCase);
            }
            try
            {
                _mCacheStory[accountId] = stories;
            }
            catch { }
        }
        public static List<StoryInfo> GetStories(string accountId)
        {
            return _mCacheStory?.ContainsKey(accountId) ?? false ? _mCacheStory[accountId] : null;
        }

        static Dictionary<string, List<IssueInfo>> _mCacheTask;
        public static void AddTaskCache(string accountId, IEnumerable<IssueInfo> tasks)
        {
            if (_mCacheTask == null)
            {
                _mCacheTask = new Dictionary<string, List<IssueInfo>>(StringComparer.InvariantCultureIgnoreCase);
            }
            try
            {
                _mCacheTask[accountId] = tasks?.ToList();
            }
            catch { }
        }
        public static List<IssueInfo> GetTasks(string accountId)
        {
            return _mCacheTask?.ContainsKey(accountId) ?? false ? _mCacheTask[accountId] : null;
        }
    }
}