import React from 'react';
import { createRoot } from 'react-dom/client';
import { guid8 } from './extensions/HashFuncs';
import './default-styles.module.scss';
import App from './App';
import { Routes } from './components/router/Routes';
import { Route } from './components/router/Route';
import Login from './ui/Login';

const divRootId = guid8();
let divRoot = document.getElementById(divRootId);
if (!divRoot) {
    divRoot = document.createElement("div");
    divRoot.id = divRootId;
    document.body.appendChild(divRoot);
}

const alias = 'jira';

const root = createRoot(divRoot);

root.render(<React.StrictMode>
    <Routes>
        <Route path="/" redirectPath={`/jira/login`} />
        <Route path={`/jira/login`} element={<Login alias={alias} />} />
        <Route path={`/jira/main`} element={<App />} />
    </Routes>


</React.StrictMode >);