import React from 'react';
import './App.css';
import Form from "react-jsonschema-form";
import { JSONSchema7, JSONSchema6 } from 'json-schema';

interface AppProps {
    schema: JSONSchema7;
}

const App: React.FC<AppProps> = ({schema}) => {
  return (
      <div id={'container-h'}>

          <Form id={'data-input'}
              schema={schema as JSONSchema6}
                onChange={d => console.log('change', d)}
                onSubmit={d => console.log('submit', d)}
                onError={d => console.log('error', d)} />

          <pre id="schema-output">
              {JSON.stringify(schema, undefined, '\t')}
          </pre>

      </div>
  );
};

export default App;
