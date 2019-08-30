import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tabbouleh from "tabbouleh";
import {UserData} from "./UserData";

// generate the UserData schema
const schema = Tabbouleh.generateJSONSchema(UserData);
console.log('schema:', schema);

ReactDOM.render(<App
    schema={schema}
/>, document.getElementById('root'));

