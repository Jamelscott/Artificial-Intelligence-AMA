import './response.css';
import { useContext } from 'react';
import { PromptContext } from '../UserContext';
function Response({ prompt, response }) {
  const msg = useContext(PromptContext);
  return (
    <div className="response-container">
      {msg}
      <div className="response-innerContainers">
        <h3 className="response-prompt-header">Prompt:</h3>
        <h3 className="response-prompt-text">{prompt}</h3>
      </div>
      <div className="response-innerContainers">
        <h3 className="response-prompt-header">Response:</h3>
        <h3 className="response-prompt-text">{response}</h3>
      </div>
    </div>
  );
}

export default Response;
