import { types } from '@babel/core';
import { useEffect, useState } from 'react';
import { componentWithApiProps } from '../components/componentDefine';
import { ConfirmButtons, DialogOptions, openDialog } from '../components/forms/dialog/Dialog';
import ButtonFilter from '../components/forms/filters/ButtonFilter';
import DateTimeFilter from '../components/forms/filters/DateTimeFilter';
import Filters from '../components/forms/filters/Filters';
import { itemFilterProps, sortItemFilter } from '../components/forms/filters/filtersDefine';
import LabelFilter from '../components/forms/filters/LabelFilter';
import OptionsFilter from '../components/forms/filters/OptionsFilter';
import Layout from '../components/forms/Layout';
import { dataResponse, rowProps } from '../components/forms/table/PagingTable';
import PagingTableV2 from '../components/forms/table/PagingTableV2';
import ToolStripItem from '../components/forms/toolstrip/ToolStripItem';
import ToolStripMenu from '../components/forms/toolstrip/ToolStripMenu';
import { navigate } from '../components/router/methods';
import { guid8 } from '../extensions/HashFuncs';
import { getAsync, postAsync } from '../extensions/HttpExtension';
import thisCss from './List.module.scss';
import WorkLog from './WorkLog';
function List(props?: componentWithApiProps & {
    headers?: any
}) {
    const thisId = props.id ?? guid8();
    const [boards, setBoards] = useState<itemFilterProps[]>(undefined);
    const [sprints, setSprints] = useState<itemFilterProps[]>(undefined);
    const [projects, setProjects] = useState<itemFilterProps[]>(undefined);
    const [tableKey, setTableKey] = useState<string>(undefined);
    const [usageTableKey, setUsageTableKey] = useState<string>(undefined);
    const [mode, setMode] = useState<number>(0);

    const jUrl = localStorage.getItem('j-url');

    useEffect(() => {
        reload();
    }, []);

    function reload() {
        try {

            loadBoards();
        }
        catch (e) {
        }
    }
    function loadBoards() {
        try {
            setBoards(undefined);
            setSprints(undefined);
            setProjects(undefined);
            const url = `${props.apiUrl}/api/jira/getallboards`;
            getAsync(url, props.headers, async response => {
                if (response.status == 200) {
                    const rObjs = await response.json();
                    setBoards(rObjs.map((b: any) => { return { id: b.ID, name: b.Name, checked: false } }));
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    function applyBoardClick(itemObjs?: any[]) {
        try {
            boards?.forEach(ite => {
                ite.checked = false;
            });
            if (itemObjs?.length > 0) {
                const id = itemObjs[0].id;
                boards.forEach(ite => {
                    if (ite.id.toString() === id) {
                        ite.checked = true;
                    }
                });
                loadSprints(id);
                loadProjects(id);
            }
        }
        catch (e) {
        }
    }
    function loadSprints(boardId: string) {
        try {
            const url = `${props.apiUrl}/api/jira/getsprints?boardId=${boardId}`;
            getAsync(url, props.headers, async response => {
                if (response.status == 200) {
                    const rObjs = await response.json();
                    setSprints(rObjs.map((b: any, idx: number) => { return { id: b.ID, name: b.Name, checked: idx == 0 } }));

                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    function applySprintClick(itemObjs?: any[]) {
        try {
            sprints?.forEach(ite => {
                ite.checked = false;
            });
            if (itemObjs?.length > 0) {
                const id = itemObjs[0].id;
                sprints?.forEach(ite => {
                    if (ite.id.toString() === id) {
                        ite.checked = true;
                    }
                });
            }
        }
        catch (e) {
        }
    }

    function loadProjects(boardId: string) {
        try {
            const url = `${props.apiUrl}/api/jira/getprojects?boardId=${boardId}`;
            getAsync(url, props.headers, async response => {
                if (response.status == 200) {
                    const rObjs = await response.json();
                    setProjects(rObjs.map((b: any, idx: number) => { return { id: b.ID, name: b.Name, checked: idx == 0 } }));

                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    function applyProjectClick(itemObjs?: any[]) {
        try {
            projects.forEach(ite => {
                ite.checked = false;
            });
            if (itemObjs?.length > 0) {
                const id = itemObjs[0].id;
                projects.forEach(ite => {
                    if (ite.id.toString() === id) {
                        ite.checked = true;
                    }
                });
            }
        }
        catch (e) {
        }
    }
    function onSearchClick(evt?: React.MouseEvent) {
        setTableKey(guid8());
    }
    function fetchData(pageSize?: number, pageNumber?: number) {
        try {
            if (!tableKey) {
                return;
            }
            pageSize = pageSize;
            const sprintObj = sprints.find(ite => ite.checked);
            const projectObj = projects.find(ite => ite.checked);
            if (sprintObj || projectObj) {
                let url = `${props.apiUrl}/api/jira/getstoryinsprint?includeSubtasks`;
                if (sprintObj) {
                    url += `&sprintId=${sprintObj.id}`;
                }
                if (projectObj) {
                    url += `&pjKey=${projectObj.id}`;
                }

                const taskRowSelector = (task: any, itemIdx: number, rowIdx: number, parentIdx: number, hasWorklogs?: boolean) => {
                    const rowObj: rowProps =
                    {
                        id: task.Key,
                        className: parentIdx > 0 ? thisCss["List-list-row-subtask"] : thisCss["List-list-row-story"],
                        cells: [
                            { text: parentIdx > 0 ? `${parentIdx}.${itemIdx + rowIdx}` : `${itemIdx + rowIdx}`, align: 'center' },
                            { text: `${task.Key}`, align: 'center', element: (<a className={thisCss["List-list-task-link"]} target="_blank" href={`${jUrl}/browse/${task.Key}`}>{task.Key}</a>) },
                            {
                                element: (<div contentEditable className={parentIdx > 0 ? thisCss["List-list-txt-summary"] : thisCss["List-list-txt-psummary"]} defaultValue={task.Summary} >{task.Summary}</div>)
                            },
                            { text: `${task.Assignee}`, },
                            { text: `${task.Status}`, align: 'center' },
                            { align: 'center', element: (<div><input className={thisCss["List-list-txt-sps"]} type="number" defaultValue={task.StoryPoints} /></div>) },
                            { align: "center", element: hasWorklogs ? (<WorkLog id={guid8()} delayMiliseconds={500} storyPoints={task.StoryPoints} headers={props.headers} apiUrl={props.apiUrl} issueKey={task.Key} />) : (<span></span>) }
                        ]
                    };
                    return rowObj;
                };

                const convertData = async (response: any) => {
                    if (response.status === 200) {
                        const data = await response.json();
                        const rIdx = pageSize * (pageNumber - 1) + 1;
                        const records: rowProps[] = [];
                        [...data].forEach((ite, idx) => {
                            records.push(taskRowSelector(ite.MainTask, idx, rIdx, 0, !ite.HasSubTasks));
                            if (ite.SubTasks?.length > 0) {
                                [...ite.SubTasks].forEach((sIte, sIdx) => {
                                    records.push(taskRowSelector(sIte, sIdx, 1, idx + 1, true));
                                });
                            }
                        });
                        const result: dataResponse = {
                            records: records
                        };

                        return result;
                    }
                    else if (response.status === 401) {
                        navigate("/jira/login");
                    }
                    else {
                        return {
                            totalPages: 0,
                            totalRecords: 0,
                            pageNumber: 0,
                            records: []
                        }
                    }
                };
                return getAsync(url, props.headers,
                    convertData,
                    async err => {
                        if (err.status === 401) {
                            navigate('/jira/login');
                        }
                        return {
                            totalPages: 0,
                            totalRecords: 0,
                            pageNumber: 0,
                            records: []
                        }
                    }, () => setUsageTableKey(guid8()));
            }


        }
        catch (e) {
        }
        return Promise.resolve({
            totalPages: 0,
            totalRecords: 0,
            pageNumber: 0,
            records: []
        });
    }
    function fetchUsageData(pageSize?: number, pageNumber?: number) {
        try {
            if (!tableKey) {
                return;
            }
            pageSize = pageSize;
            const url = `${props.apiUrl}/api/jira/getusageinsprint`;
            const convertData = async (response: any) => {
                if (response.status === 200) {
                    const data = await response.json();
                    const rIdx = pageSize * (pageNumber - 1) + 1;
                    const records: rowProps[] = [];
                    [...data].forEach((ite, idx) => {
                        const assigneeRowObj: rowProps =
                        {
                            className: thisCss["List-usage-list-row-assignee"],
                            cells: [
                                // { text: `${idx + 1}`, align: 'center' },
                                { text: `${ite.Assignee}`, colSpan: 2 },
                                { text: `${ite.Total}`, align: 'center' },
                                { text: `` },
                            ]
                        };
                        records.push(assigneeRowObj);
                        if (ite.Tasks?.length > 0) {
                            [...ite.Tasks].forEach(t => {
                                if (t.Key) {
                                    records.push({
                                        className: thisCss["List-usage-list-row-ptask"],
                                        cells: [
                                            // { text: ``, align: 'center' },
                                            { align: 'center', element: (<a className={thisCss["List-list-task-link"]} target="_blank" href={`${jUrl}/browse/${t.Key}`}>{t.Key}</a>) },
                                            { element: (<div contentEditable={!(t.Tasks?.length > 0)} className={thisCss["List-list-txt-psummary"]}>{t.Summary}</div>), text: `${t.Summary}`, },
                                            {
                                                align: 'center',
                                                element: t.Tasks?.length > 0 ? <div></div> : (<div><input className={thisCss["List-list-txt-sps"]} type="number" defaultValue={t.StoryPoints} /></div>)
                                            },
                                            {
                                                align: "center",
                                                element: t.Tasks?.length > 0 ? (<div></div>) : (<WorkLog id={guid8()} delayMiliseconds={500} storyPoints={t.StoryPoints} headers={props.headers} apiUrl={props.apiUrl} issueKey={t.Key} />)
                                            }
                                        ]
                                    });
                                    if (t.Tasks?.length > 0) {
                                        [...t.Tasks].forEach((st: any, stIdx) => {
                                            records.push({
                                                className: thisCss["List-usage-list-row-task"],
                                                cells: [
                                                    // { text: ``, align: 'center' },
                                                    { align: 'center', element: (<a className={thisCss["List-list-task-link"]} target="_blank" href={`${jUrl}/browse/${st.Key}`}>{st.Key}</a>) },
                                                    { element: (<div contentEditable className={thisCss["List-list-txt-summary"]}>{st.Summary}</div>) },
                                                    { element: (<div><input className={thisCss["List-list-txt-sps"]} type="number" defaultValue={st.StoryPoints} /></div>), align: 'center' },
                                                    { align: "center", element: (<WorkLog id={guid8()} delayMiliseconds={500} storyPoints={st.StoryPoints} headers={props.headers} apiUrl={props.apiUrl} issueKey={st.Key} />) }
                                                ]
                                            });
                                        });
                                    }
                                }
                            });
                        }

                        // records.push(taskRowSelector(ite, 0, 0, 0));
                    });
                    const result: dataResponse = {
                        records: records
                    };
                    return result;
                }
                else if (response.status === 401) {
                    navigate("/jira/login");
                }
                else {
                    return {
                        totalPages: 0,
                        totalRecords: 0,
                        pageNumber: 0,
                        records: []
                    }
                }
            };
            return getAsync(url, props.headers,
                convertData,
                async err => {
                    if (err.status === 401) {
                        navigate('/jira/login');
                    }
                    return {
                        totalPages: 0,
                        totalRecords: 0,
                        pageNumber: 0,
                        records: []
                    }
                });
        }
        catch (e) {
        }
        return Promise.resolve({
            totalPages: 0,
            totalRecords: 0,
            pageNumber: 0,
            records: []
        });
    }

    function onUpdateStory() {
        const dUpdateStory: DialogOptions = {
            zIndex: 1,
            id: guid8(),
            body: (<div className={thisCss["List-dialog-updatestory"]}>
                Are you sure?
            </div>),
            title: 'Update stories',
            confirmButtons: ConfirmButtons.YesNo,
            onAcceptHandler: updateStory
        };
        openDialog(dUpdateStory);
    }
    function updateStory() {
        try {
            var taskObjs: any[] = [];
            var rowClassNames = [thisCss["List-list-row-story"], thisCss["List-list-row-subtask"]];
            rowClassNames.forEach(rowClassName => {
                try {
                    var taskRowObjs = document.getElementsByClassName(rowClassName) as HTMLCollectionOf<HTMLTableRowElement>;
                    if (taskRowObjs?.length > 0) {

                        [...taskRowObjs].forEach((rowObj, rIdx) => {
                            try {
                                const key = (rowObj.childNodes[2] as HTMLTableColElement).innerText;
                                const summary = (rowObj.childNodes[3] as HTMLTableColElement).innerText;
                                let storypoints = 0;
                                try {
                                    storypoints = parseInt((rowObj.childNodes[6] as HTMLTableColElement).getElementsByTagName("input")[0].value);
                                }
                                catch (e) {
                                }
                                if (storypoints > 0) {
                                    taskObjs.push({ key, summary, storypoints });
                                }
                            }
                            catch (e) {
                            }
                        });
                    }
                }
                catch (e) {
                }
            });
            if (taskObjs?.length > 0) {
                let url = `${props.apiUrl}/api/jira/issue/update`;
                postAsync(url, taskObjs, props.headers, async response => {
                    if (response.status === 200) {

                    }
                }, undefined, () => setTableKey(guid8()));
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    function onUpdateStorage() {
        const dUpdateStory: DialogOptions = {
            zIndex: 1,
            id: guid8(),
            body: (<div className={thisCss["List-dialog-updatestorage"]}>
                Are you sure?
            </div>),
            title: 'Update storages',
            confirmButtons: ConfirmButtons.YesNo,
            onAcceptHandler: updateStorage
        };
        openDialog(dUpdateStory);
    }
    function updateStorage() {
        try {
            var taskObjs: any[] = [];
            var rowClassNames = [thisCss["List-usage-list-row-ptask"], thisCss["List-usage-list-row-task"]];
            rowClassNames.forEach(rowClassName => {
                try {
                    var taskRowObjs = document.getElementsByClassName(rowClassName) as HTMLCollectionOf<HTMLTableRowElement>;
                    if (taskRowObjs?.length > 0) {

                        [...taskRowObjs].forEach((rowObj, rIdx) => {
                            try {
                                const key = (rowObj.childNodes[0] as HTMLTableColElement).innerText;
                                const summary = (rowObj.childNodes[1] as HTMLTableColElement).innerText;
                                let storypoints = 0;
                                try {
                                    storypoints = parseInt((rowObj.childNodes[2] as HTMLTableColElement).getElementsByTagName("input")[0].value);
                                }
                                catch (e) {
                                }
                                if (storypoints > 0) {
                                    taskObjs.push({ key, summary, storypoints });
                                }
                            }
                            catch (e) {
                            }
                        });
                    }
                }
                catch (e) {
                }
            });
            if (taskObjs?.length > 0) {
                let url = `${props.apiUrl}/api/jira/issue/update`;
                postAsync(url, taskObjs, props.headers, async response => {
                    if (response.status === 200) {

                    }
                }, undefined, () => setTableKey(guid8()));
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    let className = thisCss["List"];
    if (props?.className) {
        className += ` ${props.className}`;
    }
    try {
        const filterElement = (<Filters className={thisCss["List-layout-header"]}>
            <LabelFilter><b title='Click to refresh'>Filters:</b></LabelFilter>
            <ButtonFilter onClick={reload}>&#8635;</ButtonFilter>
            <OptionsFilter
                id={`${thisId}-ft-board`}
                text={`Board`}
                options={boards}
                applyClick={(evt, itemObjs) => applyBoardClick(itemObjs)}
            />
            <OptionsFilter
                id={`${thisId}-ft-sprint`}
                text={`Sprint`}
                options={sprints}
                applyClick={(evt, itemObjs) => applySprintClick(itemObjs)}
            />
            <OptionsFilter
                id={`${thisId}-ft-project`}
                text={`Project`}
                options={projects}
                applyClick={(evt, itemObjs) => applyProjectClick(itemObjs)}
            />

            <ButtonFilter
                text={`Search`}
                onClick={onSearchClick}
            />
        </Filters>);

        const jAccountId = sessionStorage.getItem('j-accountid');
        const jName = sessionStorage.getItem('j-name');
        let footerElement = (<div className={thisCss["List-layout-footer"]}>
            <div>Account:</div>
            <div className={thisCss["List-layout-footer-account"]}>{jName}</div>
            <div><button onClick={() => navigate('/jira/login')}>Logout</button></div>
        </div>);

        let tableHeaders = ["No.", "Key", "Summary", "Assinee", "Status", "Story Points", "Work Logs"];

        let contents = (<div id={thisId} className={className}>
            <Layout
                header={filterElement}
                footer={footerElement}
                className={thisCss["List-layout"]} maxHeight={900}
            >
                <div className={thisCss["List-container-stories"] + (mode == 0 ? "" : " " + thisCss["List-container-stories-hide"])} id={`${thisId}-story-container`}>
                    <ToolStripMenu>
                        <ToolStripItem text="Menu" />
                        <ToolStripItem text="Switch to usage mode" onClick={() => setMode(1)} />
                        <ToolStripItem text="Update" onClick={onUpdateStory} />

                    </ToolStripMenu>
                    <PagingTableV2
                        key={tableKey}
                        id={`${thisId}-table-contents`}
                        headers={tableHeaders}
                        fetchData={req => fetchData(req.pageSize, req.pageNumber)}
                        noPaging
                        className={thisCss["List-list"]}
                        onInitMessage={(<div>Please select <b>Filters</b> then click <b>Search</b></div>)}
                        includeCheckbox
                        height={'90%'}
                    />
                </div>

                <div className={thisCss["List-container-usages"] + (mode == 1 ? "" : " " + thisCss["List-container-usages-hide"])} id={`${thisId}-usage-container`}>
                    <ToolStripMenu>
                        <ToolStripItem text="Menu" />
                        <ToolStripItem text="Switch to story mode" onClick={() => setMode(0)} />
                        <ToolStripItem text="Update" onClick={onUpdateStorage} />

                    </ToolStripMenu>
                    <PagingTableV2
                        key={usageTableKey}
                        id={`${thisId}-table-usage`}
                        headers={["Key", "Summary", "Story Points", "Work Logs"]}
                        fetchData={req => fetchUsageData(req.pageSize, req.pageNumber)}
                        noPaging
                        className={thisCss["List-usage-list"]}
                        onInitMessage={(<div>Please select <b>Filters</b> then click <b>Search</b></div>)}
                        height={'90%'}
                    />
                </div>
            </Layout>

        </div>);
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
export default List;