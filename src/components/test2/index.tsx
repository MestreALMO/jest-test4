import { useState } from "react";

export const Test2 = () => {
  const [list, setList] = useState(["Diego", "Rodz", "Mayk"]);

  function addToList() {
    setList((state) => [...state, "Novo"]);
  }

  return (
    <>
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
