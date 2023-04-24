using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Jira.Models;
using VSSystem.Collections.Generic.Extensions;
using VSSystem.Extensions.Hosting.Controllers;
using VSSystem.Extensions.Hosting.Models;
using VSSystem.Service.JiraService.Models;

namespace VSSystem.Service.JiraService.Controllers
{
    public class JiraController : AController
    {
        Jira.JiraClient _defaultJira;
        public JiraController() : base("JiraController", VSHost.SERVICE_NAME, VSHost.StaticLogger, VSHost.PRIVATE_KEY)
        {
            _ServicePath = string.Empty;
            _defaultJira = new Jira.JiraClient(ServiceConfig.auth_url, ServiceConfig.auth_email, ServiceConfig.auth_token);
        }
        string _parseCredentials(string email, string token)
        {
            try
            {
                var mergedCredentials = string.Format("{0}:{1}", email, token);
                var byteCredentials = Encoding.ASCII.GetBytes(mergedCredentials);
                return Convert.ToBase64String(byteCredentials);
            }
            catch { }
            return string.Empty;
        }
        protected override Task _ProcessApiContext(string path, string queryString)
        {
            if (path.Equals($"{_ServicePath}api/jira/myself/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetMySelfAsync();
            }
            else if (path.Equals($"{_ServicePath}api/jira/getallboards/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetAllBoardsAsync();
            }
            else if (path.Equals($"{_ServicePath}api/jira/getsprints/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetSprintsAsync();
            }
            else if (path.Equals($"{_ServicePath}api/jira/getepics/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetEpicsAsync();
            }
            else if (path.Equals($"{_ServicePath}api/jira/getprojects/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetProjectsAsync();
            }
            else if (path.Equals($"{_ServicePath}api/jira/getstoryinsprint/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetStoryInSprintAsync();
            }
            else if (path.Equals($"{_ServicePath}api/jira/getusageinsprint/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetUsageInSprintAsync();
            }
            else if (path.Equals($"{_ServicePath}api/jira/getissueworklogs/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetIssueWorklogs();
            }
            else if (path.Equals($"{_ServicePath}api/jira/updateissueworklog/", StringComparison.InvariantCultureIgnoreCase))
            {
                return UpdateIssueWorklog();
            }
            else if (path.Equals($"{_ServicePath}api/jira/deleteissueworklog/", StringComparison.InvariantCultureIgnoreCase))
            {
                return DeleteIssueWorklog();
            }
            else if (path.Equals($"{_ServicePath}api/jira/issue/", StringComparison.InvariantCultureIgnoreCase))
            {
                return GetIssueByKey();
            }
            else if (path.Equals($"{_ServicePath}api/jira/issue/update/", StringComparison.InvariantCultureIgnoreCase))
            {
                return UpdateIssues();
            }

            return base._ProcessApiContext(path, queryString);
        }
        Jira.JiraClient _createClient()
        {
            try
            {
                string apiUrl = Request.Headers["j-url"];
                string email = Request.Headers["j-email"];
                string token = Request.Headers["j-token"];

                var jira = new Jira.JiraClient(apiUrl, email, token);
                return jira;
            }
            catch { }
            return null;
        }
        async Task GetMySelfAsync()
        {
            try
            {
                var jira = _createClient();
                if (jira != null)
                {
                    var myselfObj = await jira.GetLoginInfoAsync();
                    if (myselfObj != null)
                    {
                        await this.ResponseJsonAsync(myselfObj, System.Net.HttpStatusCode.OK);
                    }
                    else
                    {
                        await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                    }
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
            }

        }
        async Task GetAllBoardsAsync()
        {
            try
            {
                var jira = _createClient();
                if (jira != null)
                {
                    var responseObjs = await jira.GetBoardsAsync();
                    await this.ResponseJsonAsync(responseObjs, System.Net.HttpStatusCode.OK);
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }

        }
        async Task GetSprintsAsync()
        {
            try
            {
                int boardId;
                int.TryParse(Request.Query["boardId"], out boardId);
                if (boardId > 0)
                {
                    var jira = _createClient();
                    if (jira != null)
                    {
                        var responseObjs = await jira.GetSprintsAsync(boardId);
                        responseObjs = responseObjs?.OrderByDescending(ite => ite.ID)?.ToList();
                        await this.ResponseJsonAsync(responseObjs, System.Net.HttpStatusCode.OK);
                    }
                    else
                    {
                        await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                    }
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }

        }
        async Task GetEpicsAsync()
        {
            try
            {
                int boardId;
                int.TryParse(Request.Query["boardId"], out boardId);
                if (boardId > 0)
                {
                    var jira = _createClient();
                    if (jira != null)
                    {
                        var responseObjs = await jira.GetEpicsAsync(boardId);
                        await this.ResponseJsonAsync(responseObjs, System.Net.HttpStatusCode.OK);
                    }
                    else
                    {
                        await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                    }
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }

        }
        async Task GetProjectsAsync()
        {
            try
            {
                int boardId;
                int.TryParse(Request.Query["boardId"], out boardId);
                if (boardId > 0)
                {
                    var jira = _createClient();
                    if (jira != null)
                    {
                        var responseObjs = await jira.GetProjectsAsync(boardId);
                        await this.ResponseJsonAsync(responseObjs, System.Net.HttpStatusCode.OK);
                    }
                    else
                    {
                        await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                    }
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }

        }

        async Task GetStoryInSprintAsync()
        {
            try
            {
                int sprintId;
                int.TryParse(Request.Query["sprintId"], out sprintId);
                string projectKey = Request.Query["pjKey"];
                if (sprintId > 0 || !string.IsNullOrWhiteSpace(projectKey))
                {
                    List<string> projectKeys = new List<string>(), statuses = new List<string>();
                    if (!string.IsNullOrWhiteSpace(projectKey))
                    {
                        projectKeys.Add(projectKey);
                    }
                    bool includeSubTasks = Request.Query.ContainsKey("includeSubTasks");
                    bool includeWorklogs = Request.Query.ContainsKey("includeWorklogs");
                    var jira = _createClient();
                    if (jira != null)
                    {
                        var storyObjs = await jira.GetStoryInSprintAsync(sprintId, projectKeys, statuses, includeSubTasks, includeWorklogs);
                        if (storyObjs?.Count > 0)
                        {
                            _ = Task.Run(() => StoryExtension.AddStoryCache(jira.Username, storyObjs));
                        }
                        await this.ResponseJsonAsync(storyObjs, System.Net.HttpStatusCode.OK);
                    }
                    else
                    {
                        await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                    }

                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }
        }
        async Task GetUsageInSprintAsync()
        {
            try
            {
                var jira = _createClient();
                if (jira != null)
                {
                    var storyObjs = StoryExtension.GetStories(jira.Username);
                    if (storyObjs?.Count > 0)
                    {
                        Dictionary<string, List<Tuple<string, string, float>>> mUsage = new Dictionary<string, List<Tuple<string, string, float>>>(StringComparer.InvariantCultureIgnoreCase);
                        Dictionary<string, Jira.Models.IssueInfo> mTask = new Dictionary<string, Jira.Models.IssueInfo>(StringComparer.InvariantCultureIgnoreCase);
                        foreach (var storyObj in storyObjs)
                        {
                            mTask[storyObj.MainTask.Key] = storyObj.MainTask;
                            if (storyObj.HasSubTasks)
                            {
                                foreach (var issueObj in storyObj.SubTasks)
                                {
                                    mTask[issueObj.Key] = issueObj;
                                    if (mUsage.ContainsKey(issueObj.Assignee))
                                    {
                                        mUsage[issueObj.Assignee].Add(new Tuple<string, string, float>(issueObj.PKey, issueObj.Key, issueObj.StoryPoints));
                                    }
                                    else
                                    {
                                        mUsage[issueObj.Assignee] = new List<Tuple<string, string, float>>()
                                        {
                                            new Tuple<string, string, float>(issueObj.PKey, issueObj.Key, issueObj.StoryPoints)
                                        };
                                    }
                                }
                            }
                            else
                            {
                                if (mUsage.ContainsKey(storyObj.MainTask.Assignee))
                                {
                                    mUsage[storyObj.MainTask.Assignee].Add(new Tuple<string, string, float>(storyObj.MainTask.Key, null, storyObj.MainTask.StoryPoints));
                                }
                                else
                                {
                                    mUsage[storyObj.MainTask.Assignee] = new List<Tuple<string, string, float>>()
                                {
                                    new Tuple<string, string, float>(storyObj.MainTask.Key, null, storyObj.MainTask.StoryPoints)
                                };
                                }

                            }
                        }

                        try
                        {
                            _ = Task.Run(() => StoryExtension.AddTaskCache(jira.Username, mTask.Values));
                        }
                        catch { }

                        var responseObjs = new List<object>();
                        foreach (var kv in mUsage.OrderBy(ite => ite.Key, StringComparer.InvariantCultureIgnoreCase))
                        {
                            List<UsageTaskInfo> usageObjs = new List<UsageTaskInfo>();
                            foreach (var taskObj in kv.Value.GroupBy(ite => $"{ite.Item1}", StringComparer.InvariantCultureIgnoreCase))
                            {
                                UsageTaskInfo usageObj = new UsageTaskInfo()
                                {
                                    Key = taskObj.Key,
                                    StoryPoints = taskObj.Sum(ite => ite.Item3)
                                };
                                if (!string.IsNullOrWhiteSpace(taskObj.Key) && mTask.ContainsKey(taskObj.Key))
                                {
                                    usageObj.Summary = mTask[taskObj.Key].Summary;
                                }
                                if (taskObj.All(ite => !string.IsNullOrWhiteSpace(ite.Item2)))
                                {
                                    usageObj.Tasks = new List<UsageTaskInfo>();
                                    foreach (var sTaskObj in taskObj)
                                    {
                                        UsageTaskInfo subUsageObj = new UsageTaskInfo()
                                        {
                                            Key = sTaskObj.Item2,
                                            StoryPoints = sTaskObj.Item3
                                        };
                                        if (mTask.ContainsKey(sTaskObj.Item2))
                                        {
                                            subUsageObj.Summary = mTask[sTaskObj.Item2].Summary;
                                        }
                                        usageObj.Tasks.Add(subUsageObj);
                                    }
                                }


                                usageObjs.Add(usageObj);
                            }
                            var responseObj = new
                            {
                                Assignee = kv.Key,
                                Tasks = usageObjs,
                                Total = usageObjs.Sum(ite => ite.StoryPoints)
                            };
                            responseObjs.Add(responseObj);
                        }
                        await this.ResponseJsonAsync(responseObjs, System.Net.HttpStatusCode.OK);
                        return;
                    }
                }
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }
        }

        async Task GetIssueWorklogs()
        {
            try
            {
                var jira = _createClient();
                if (jira != null)
                {
                    string issueKey = Request.Query["issueKey"];
                    var responseObjs = await jira.GetIssueWorklogsAsync(issueKey);
                    await this.ResponseJsonAsync(responseObjs, System.Net.HttpStatusCode.OK);
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }
        }
        async Task UpdateIssueWorklog()
        {
            try
            {
                var requestObjs = await this.GetRequestObject<List<Models.WorklogInfo>>(System.Text.Encoding.UTF8);
                if (requestObjs?.Count > 0)
                {
                    var jira = _createClient();
                    if (jira != null)
                    {
                        List<object> responseObjs = new List<object>();
                        foreach (var reqObj in requestObjs)
                        {
                            try
                            {
                                var updateObj = await jira.UpdateIssueWorklogsAsync(reqObj.IssueKey, reqObj.ID, reqObj.TimeSpent, reqObj.Comment);
                                if (updateObj != null)
                                {
                                    responseObjs.Add(updateObj);
                                }
                            }
                            catch { }
                        }
                        await this.ResponseJsonAsync(responseObjs, System.Net.HttpStatusCode.OK);
                    }
                    else
                    {
                        await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                    }
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.InvalidParameters, System.Net.HttpStatusCode.BadRequest);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.ServerError, System.Net.HttpStatusCode.InternalServerError);
            }
        }
        async Task DeleteIssueWorklog()
        {
            try
            {
                var requestObjs = await this.GetRequestObject<List<Models.WorklogInfo>>(System.Text.Encoding.UTF8);
                if (requestObjs?.Count > 0)
                {
                    var jira = _createClient();
                    if (jira != null)
                    {
                        foreach (var reqObj in requestObjs)
                        {
                            try
                            {
                                await jira.DeleteIssueWorklogsAsync(reqObj.IssueKey, reqObj.ID, HttpContext.RequestAborted);
                            }
                            catch { }
                        }
                        await this.ResponseJsonAsync(DefaultResponse.Success, System.Net.HttpStatusCode.OK);
                    }
                    else
                    {
                        await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                    }
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.InvalidParameters, System.Net.HttpStatusCode.BadRequest);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.ServerError, System.Net.HttpStatusCode.InternalServerError);
            }
        }
        async Task GetIssueByKey()
        {
            try
            {
                var jira = _createClient();
                if (jira != null)
                {
                    string issueKey = Request.Query["issueKey"];
                    bool includeWorklogs = Request.Query.ContainsKey("includeWorklogs");
                    var responseObj = await jira.GetIssueByKeyAsync(issueKey, includeWorklogs);
                    await this.ResponseJsonAsync(responseObj, System.Net.HttpStatusCode.OK);
                }
                else
                {
                    await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.Unauthorized);
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.NoRecordFound, System.Net.HttpStatusCode.OK);
            }
        }
        async Task UpdateIssues()
        {
            try
            {
                var requestObjs = await this.GetRequestObject<List<IssueInfo>>(System.Text.Encoding.UTF8);
                if (requestObjs?.Count > 0)
                {

                    var jira = _createClient();
                    if (jira != null)
                    {

                        var taskObjs = StoryExtension.GetTasks(jira.Username) ?? new List<IssueInfo>();

                        var comparer = TComparer.Create<IssueInfo>((i1, i2) => i1.Key.Equals(i2.Key, StringComparison.InvariantCultureIgnoreCase)
                        && i1.Summary.Equals(i2.Summary, StringComparison.InvariantCultureIgnoreCase)
                        && i1.StoryPoints.Equals(i2.StoryPoints));

                        List<IssueInfo> pendingObjs = requestObjs.Where(ite => !taskObjs.Contains(ite, comparer)).ToList();
                        if (pendingObjs?.Count > 0)
                        {
                            foreach (var issueObj in pendingObjs)
                            {
                                await jira.UpdateIssueByKeyAsync(issueObj.Key, new Jira.Models.IssueInfo() { StoryPoints = issueObj.StoryPoints, Summary = issueObj.Summary });
                            }
                        }

                    }
                }
            }
            catch (Exception ex)
            {
                this.LogError(ex);
                await this.ResponseJsonAsync(DefaultResponse.ServerError, System.Net.HttpStatusCode.InternalServerError);
            }
        }
    }
}