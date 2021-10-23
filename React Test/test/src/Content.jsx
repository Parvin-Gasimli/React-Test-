import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";

const Content = () => {
  const [items, Setitems] = useState([
    {
      id: 1,
      checked: true,
      item: "Item1",
    },
    {
      id: 2,
      checked: false,
      item: "items2",
    },
    {
      id: 3,
      checked: false,
      item: "items3",
    },
    {
      id: 4,
      checked: false,
      item: "Items4",
    },
  ]);

  const heandleCheck = (id) => {
    const Listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    Setitems(Listitems);
    localStorage.setItem("ShoppingList", JSON.stringify(Listitems));
  };

   const handleDeleted = (Id) => {
    const ListItems = items.filter((item) => item.id !== Id);
    Setitems(ListItems);
    localStorage.setItem("ShoppingList", JSON.stringify(ListItems));
  };

  return (
    <main>
      
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => heandleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => heandleCheck(item.id)}
              >
                {" "}
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDeleted(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is Empty</p>
      )}
    </main>
  );
};

export default Content;
