import { useEffect } from 'react';

const useDataApi = () => {
  const KEY = 'availableItems';

  const setData = data => {
    localStorage.setItem(KEY, JSON.stringify(data));
  };

  const fetchData = date => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  };

  const submit = formData => {
    const random = Math.random();

    return false;

    // if (random < 0.5) {
    //   return false;
    // }

    // const upd = fetchData(formData.date).filter(t => t !== formData.time);
    // setData(upd);

    // return true;
  };

  useEffect(() => {
    setData([ '17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ])

    return () => {
      localStorage.removeItem(KEY);
    };
  }, []);

  return { fetchData, submit, setData };
}

export default useDataApi;
