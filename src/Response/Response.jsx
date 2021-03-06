import './response.css';
function Response({ prompt, response, engine_name }) {
  const str = engine_name;
  str.split('');
  return (
    <div className="response-container full">
      {/* {msg} */}
      <div className="response-innerContainers1">
        <h3 className="response-prompt-header">Question:</h3>
        <h3 className="response-prompt-text">{prompt}</h3>
      </div>
      <div className="response-innerContainers2">
        <h3 className={`response-prompt-header ${str}`}>
          {engine_name}
          <span style={{ color: 'white' }}>:</span>
        </h3>
        <h3 className="response-prompt-text">{response}</h3>
      </div>
    </div>
  );
}

export default Response;
