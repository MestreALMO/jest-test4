import { useState } from "react";

export const Test2 = () => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(["Diego", "Rodz", "Mayk"]);

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  return (
    <>
      <input
        placeholder="Novo item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
