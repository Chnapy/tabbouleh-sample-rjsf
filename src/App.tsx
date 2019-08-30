import React from 'react';
import './App.css';
import Form from "react-jsonschema-form";
import { JSONSchema7, JSONSchema6 } from 'json-schema';

interface AppProps {
    schema: JSONSchema7;
}

const App: React.FC<AppProps> = ({schema}) => {
  return (
      <div>
      <div id={'container-h'}>

          <Form id={'data-input'}
              schema={schema as JSONSchema6}
                liveValidate={true}
                showErrorList={false} />

          <pre id="schema-output">
              {JSON.stringify(schema, undefined, '\t')}
          </pre>

      </div>

          <div className={'links'}>
              <a href={'https://github.com/Chnapy/tabbouleh'}>tabbouleh</a>
              +
              <a href={'https://github.com/mozilla-services/react-jsonschema-form'}>react-jsonschema-form</a>
          </div>

      </div>
  );
};

export default App;
