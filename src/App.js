import './App.css';
import Prompt from './Prompt/Prompt';
import Header from './Header/Header';
import Responses from './Responses/Responses';
import { useState } from 'react';

import { PromptContext } from './UserContext';
function App() {
  const [prompt, setPrompt] = useState('');

  const data = {
    prompt: 'Write a poem about a dog wearing skis',
    temperature: 0.5,
    max_tokens: 64,
  };

  const handleSubmit = () => {
    fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.choices[0].text);
      });
  };

  return (
    <PromptContext.Provider value={'helllo from context'}>
      <Header />
      <Prompt />
      <Responses />
    </PromptContext.Provider>
  );
}

export default App;
