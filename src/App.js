import './App.css';
import Form from './Form/Form';
import Header from './Header/Header';
import Responses from './Responses/Responses';
import { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import { supabase } from './Utility/supabseClient';
function App() {
  const [responses, setResponses] = useState([]);

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
    setResponses(data.reverse());
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        payload={payload}
        setPayload={setPayload}
        setResponses={setResponses}
        responses={responses}
        getData={getData}
      />
      <Responses responses={responses} />
      <Footer />
      {/* <Header /> */}
    </>
  );
}

export default App;
