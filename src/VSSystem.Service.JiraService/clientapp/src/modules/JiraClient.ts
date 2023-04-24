import { getAsync, postAsync } from "../extensions/HttpExtension";

export default class JiraClient {
    private _url: string;
    private _email: string;
    private _token: string;
    private _headers: HeadersInit | any;
    constructor(url: string, email: string, token: string) {
        this._url = url;
        this._email = email;
        this._token = token;
        const uri = new URL(url);

        this._headers = {

            authorization: "Basic " + btoa(`${this._email}:${this._token}`),
            accept: "application/json",
            host: uri.host,
        };
    }

    async getBoardsAsync() {
        try {
            const headers: HeadersInit = {

            }
            headers["authorization"] = "Basic " + btoa(`${this._email}:${this._token}`);
            let startAt = 0;
            let url = `${this._url}/rest/agile/1.0/board?startAt=${startAt}&maxResults=100`;
            await getAsync(url, headers, async response => {
                console.log(response);

            }, async err => {
                console.log(err);

            });
        }
        catch (e) {
            console.log(e);
        }
    }
}