const { useState } = require('react');

export const useChecked = () => {
  const [ids, setIds] = useState([]);

  const addId = (id) => {
    setIds((ids) => [...ids, id]);
  };

  const removeId = (id) => {
    setIds((ids) => ids.filter((_id) => _id !== id));
  };

  return { ids, addId, removeId };
};
