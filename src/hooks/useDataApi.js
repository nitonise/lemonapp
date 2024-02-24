import { useEffect } from "react";

const useDataApi = () => {
  const KEY = "availableItems";

  const _setData = data => {
    localStorage.setItem(KEY, JSON.stringify(data));
  };

  const fetchData = date => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  };

  const submit = formData => {
    const random = Math.random();

    if (random < 0.5) {
      return false;
    }

    const upd = fetchData(formData.date).filter(t => t !== formData.time);
    _setData(upd);

    return true;
  };

  useEffect(() => {
    _setData([ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00" ])

    return () => {
      localStorage.removeItem(KEY);
    };
  }, []);

  return { fetchData, submit };
}

export default useDataApi;
