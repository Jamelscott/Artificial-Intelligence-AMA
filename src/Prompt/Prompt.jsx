import './prompt.css';

function Prompt() {
  return (
    <div className="prompt-container">
      <h3 className="prompt-header">Enter prompt</h3>
      <textarea className="prompt-textarea" />
      <div className="button-container">
        <input className="prompt-button" type="button" value="Submit" />
      </div>
    </div>
  );
}

export default Prompt;
