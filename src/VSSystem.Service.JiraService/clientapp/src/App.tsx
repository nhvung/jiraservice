import thisCss from './App.module.scss';
import { componentWithApiProps } from './components/componentDefine';
import { guid8 } from './extensions/HashFuncs';
import List from './ui/List';
function App(props?: componentWithApiProps & {}) {
    const thisId = props.id ?? guid8();
    const apiUrl = props.apiUrl ?? window.location.href;
    const headers = {
        "j-url": localStorage.getItem('j-url'),
        "j-email": localStorage.getItem('j-email'),
        "j-token": localStorage.getItem('j-token')
    };
    let className = thisCss["App"];
    if (props?.className) {
        className += ` ${props.className}`;
    }
    try {
        let contents = (<div id={thisId} className={className}>
            <List id={`${thisId}-list`} apiUrl={apiUrl} headers={headers} />
        </div>);
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
export default App;