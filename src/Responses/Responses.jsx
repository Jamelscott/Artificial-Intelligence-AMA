import './responses.css';
import Response from '../Response/Response';
function Responses() {
  const test = [
    {
      prompt: 'Excepteur sint occaecat cupidatat non proident',
      response:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      prompt: 'Excepteur sint occaecat cupidatat non proident',
      response:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      prompt: 'Excepteur sint occaecat cupidatat non proident',
      response:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const responses = test.map((elem, idx) => {
    return (
      <Response
        key={`response-${idx}`}
        prompt={elem.prompt}
        response={elem.response}
      />
    );
  });

  return (
    <div className="responses-container">
      <h2>Responses</h2>
      {responses}
    </div>
  );
}

export default Responses;
