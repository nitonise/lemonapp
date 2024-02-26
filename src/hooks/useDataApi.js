import { useEffect, useState } from 'react';

const useDataApi = () => {
  const KEY = 'availableItems';

  const setData = data => {
    localStorage.setItem(KEY, JSON.stringify(data));
  };

  const fetchData = date => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  };

  const [response, setResponse] = useState({ code: 0 });

  const submit = formData => {
    const random = Math.random();

    if (random < 0.5) {
      setResponse(r => ({...r, code: 500}));
      return;
    }

    const upd = fetchData(formData.date).filter(t => t !== formData.time);
    setData(upd);

    setResponse(r => ({...r, code: 200}));
  };

  useEffect(() => {
    setData([ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ])

    return () => {
      localStorage.removeItem(KEY);
    };
  }, []);

  return { fetchData, submit, response, setData };
}

export default useDataApi;
