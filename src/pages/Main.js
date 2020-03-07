import React from 'react';
import { useState, useCallback } from 'react';

function Main({ greet }) {

  const [items, setItems] = useState([{ id: 'I123', name: 'mamama', isChecked: false }]);

  const addItem = useCallback(ev => {
    if (ev.which !== 13 || ev.target.value === '') return;
    setItems([...items, { id: Date.now(), name: ev.target.value, isChecked: false }]);
    ev.target.value = '';
  }, [setItems, items]);

  const toggleCheck = useCallback(itemId => {
    const updateItems = items.map(item => {
      if (item.id === itemId) item.isChecked = !item.isChecked;
      return item;
    });
    setItems(updateItems);
  }, [setItems, items]);

  const list = items.map(item => {
    return <div className="item" key={item.id}>
      <input type="checkbox" className="item-check" value={item.isChecked} onChange={() => toggleCheck(item.id)} />
      <span className="item-name">{item.name}</span>
    </div>
  })

  const lala = (ev) => {
    console.log(ev);
  }

  return (
    <div className="Main">
      <h1 data-testid="greet-text">{greet}</h1>
      <div className="contant">
        <div className="items">
          <h2 className="main-title">Item List</h2>
          <input type="text" className="input-add-items" onKeyUp={addItem}
            onBlur={lala} />
          {list}
        </div>
        <div className="details">
          <h2>Details</h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
