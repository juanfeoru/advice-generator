import { useEffect, useState } from 'react';
import Advice from './components/Advice';

const ADVICE_ENDPOINT = 'https://api.adviceslip.com/advice';

function App() {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAdvice = () => {
    setLoading(true);
    if (loading) return;

    fetch(ADVICE_ENDPOINT, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <Advice onClick={fetchAdvice} id={id} advice={advice} loading={loading} />
  );
}

export default App;
