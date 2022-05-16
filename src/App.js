import './App.css';
import Form from './Form/Form';
import Responses from './Responses/Responses';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import { supabase } from './Utility/supabseClient';
function App() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [payload, setPayload] = useState({
    prompt: '',
    temperature: 0.5,
    max_tokens: 64,
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data, error } = await supabase.from('Responses').select();
    setLoading(false);
    setResponses(data.reverse());
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Form
        setLoading={setLoading}
        payload={payload}
        setPayload={setPayload}
        setResponses={setResponses}
        responses={responses}
        getData={getData}
      />
      <Responses
        loading={loading}
        setLoading={setLoading}
        responses={responses}
      />
    </>
  );
}

export default App;
