import React from 'react';
import { useState, useCallback } from 'react';
import Items from '../cmps/Items';
import ItemPreview from '../cmps/ItemPreview';

function Main({ greet }) {

  const getEmptyItem = (name = 'New item') => ({ id: Date.now(), name, isChecked: false });

  const [items, setItems] = useState([getEmptyItem()]);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const addItem = useCallback(ev => {
    if (ev.which !== 13 || ev.target.value === '') return;
    setItems([...items, getEmptyItem(ev.target.value)]);
    ev.target.value = '';
  }, [setItems, items]);

  const toggleCheck = useCallback(id => {
    const updateItems = items.map(item => item.id === id ? { ...item, isChecked: !item.isChecked } : item);
    setItems(updateItems);
  }, [setItems, items]);

  const selectItem = id => {
    const itemIdx = items.findIndex(item => item.id === id);
    selectedIdx !== itemIdx && setSelectedIdx(itemIdx);
  }

  const selectedItem = selectedIdx !== null ? items[selectedIdx] : null;
  return (
    <div className="Main">
      <h1 data-testid="greet-text">{greet}</h1>
      <div className="contant">
        <div className="wrap-items">
          <h2 className="main-title">Item List</h2>
          <input type="text" className="input-add-items" onKeyUp={addItem} />
          <Items items={items} selectedIdx={selectedIdx}
            onToggleCheck={toggleCheck} onSelectItem={selectItem} />
        </div>
        <div className="details">
          <h2>Details</h2>
          <ItemPreview item={selectedItem} />
        </div>
      </div>
    </div>
  );
}

export default Main;
