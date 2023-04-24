import { useEffect, useState } from 'react';
import { componentWithApiProps } from '../components/componentDefine';
import { guid8 } from '../extensions/HashFuncs';
import { getAsync } from '../extensions/HttpExtension';
import { sleep } from '../extensions/ThreadExtension';
import thisCss from './WorkLog.module.scss';
function WorkLog(props?: componentWithApiProps & {
    headers?: any,
    issueKey?: string,
    storyPoints?: number,
    delayMiliseconds?: number
}) {
    const thisId = props.id ?? guid8();
    const [logs, setLogs] = useState<any[]>(undefined);
    const [loadded, setLoadded] = useState<boolean>(false);

    const delayMiliseconds = props.delayMiliseconds ?? 0;

    useEffect(() => {
        load();
    }, []);

    async function load() {
        await sleep(delayMiliseconds);
        const url = `${props.apiUrl}/api/jira/getissueworklogs?issueKey=${props.issueKey}`;
        await getAsync(url, props.headers, async response => {
            if (response.status == 200) {
                const rObjs = await response.json();
                // console.log(rObjs);

                if (rObjs?.length > 0) {
                    setLogs(rObjs);
                }
                else {
                    setLogs(undefined);
                }
                setLoadded(true);
            }
        });
    }

    let className = thisCss["WorkLog"];
    if (props?.className) {
        className += ` ${props.className}`;
    }
    try {
        let logsElement: JSX.Element = loadded ? (<span>Not yet</span>) : (<span>Loading...</span>);
        if (logs?.length > 0) {
            let totalSeconds = 0;
            logs.forEach(log => {
                totalSeconds += log.TimeSpentSeconds;
            });
            logsElement = (<span key={`${props.issueKey}-worklogs`}>{Math.round(totalSeconds / 3600)}h / {props.storyPoints * 2}h</span>);
        }
        let contents = (<div id={thisId} className={className}>
            {logsElement}
        </div>);
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
export default WorkLog;