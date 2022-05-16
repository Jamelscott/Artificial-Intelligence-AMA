import './responses.css';
import Response from '../Response/Response';
function Responses({ responses }) {
  const allResponses = responses.map((elem, idx) => {
    return (
      <Response
        key={`response-${idx}`}
        prompt={elem.prompt}
        response={elem.response}
        engine_name={elem.engine_name}
      />
    );
  });

  return (
    <div className="responses-container">
      <hr className="divider"></hr>
      {responses.length < 1 ? (
        <h4 style={{ textAlign: 'center' }}>
          Go ahead and ask them something. They won't bite.. I don't think..
        </h4>
      ) : (
        allResponses
      )}
      <hr className="divider"></hr>
    </div>
  );
}

export default Responses;
