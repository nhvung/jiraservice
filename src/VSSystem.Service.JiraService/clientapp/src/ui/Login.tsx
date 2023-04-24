import { useEffect } from 'react';
import { componentWithApiProps } from '../components/componentDefine';
import Authenticate, { SubmitProps } from '../components/forms/Authenticate';
import { navigate } from '../components/router/methods';
import { guid8 } from '../extensions/HashFuncs';
import { getAsync } from '../extensions/HttpExtension';
import thisCss from './Login.module.scss';

export interface tokenProps {
    token?: string,
    name?: string,
    accountType?: string
};

function Login(props?: componentWithApiProps & {
    alias?: string
}) {
    console.log("view login");

    const thisId = props.id ?? guid8();
    let className = thisCss["Login"];
    if (props?.className) {
        className += ` ${props.className}`;
    }
    const apiUrl = props.apiUrl ?? window.location.href;
    const alias = props.alias ?? '';

    const jUrl = localStorage.getItem('j-url');
    const jEmail = localStorage.getItem('j-email');
    const jToken = localStorage.getItem('j-token');


    const loginElement = (<Authenticate
        apiUrlOptionsHandler={() => ["https://evidenceiq.atlassian.net"]}
        logoPath='./eiq-logo-blue.webp'
        submitHandler={submitHandler}
        successHandler={() => new Promise(r => r(navigate(`/jira/main`)))}
        apiUrlLabel="Jira url"
        defaultUrl={jUrl}
        usernameLabel="Email"
        defaultUsername={jEmail}
        passwordLabel="Jira token"
        defaultPassword={jToken}
        zIndex={1}
    />);
    useEffect(() => {
        try {

        }
        catch (e) {
        }
    }, []);
    async function submitHandler(submit: SubmitProps): Promise<any> {
        try {
            const url = `${apiUrl}/api/jira/myself`;
            const headers = {
                "j-url": submit.apiUrl,
                "j-email": submit.username,
                "j-token": submit.clearpassword
            };
            const result = await getAsync(url, headers, async response => {
                if (response.status === 200) {
                    const myselfObj = await response.json();
                    localStorage.setItem('j-url', submit.apiUrl);
                    localStorage.setItem('j-email', submit.username);
                    localStorage.setItem('j-token', submit.clearpassword);
                    sessionStorage.setItem('j-accountid', myselfObj.AccountId);
                    sessionStorage.setItem('j-name', myselfObj.DisplayName);

                    return 200;
                }
            }, undefined,
                () => {
                    return "Invalid username or password";
                });
            return result;
        }
        catch (e) {
        }
    }

    try {
        let contents = (<div id={thisId} className={className}>
            {loginElement}
            <div className={thisCss["Login-gettoken"]}>If you have not token yet, get <a target={"_blank"} className={thisCss["Login-gettoken-link"]} href="https://id.atlassian.com/manage-profile/security/api-tokens">here</a></div>
        </div>);
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
export default Login;
