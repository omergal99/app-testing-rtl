import React from 'react';

function Items({ items, selectedIdx,
  onToggleCheck, onSelectItem }) {

  const list = items.map((item, idx) => {
    const isSelected = selectedIdx === idx ? 'selected' : '';
    return <li className={`item ${isSelected}`} key={item.id} onClick={() => onSelectItem(item.id)}>
      <input type="checkbox" className="item-check" value={item.isChecked}
        onChange={() => onToggleCheck(item.id)} />
      <span className="item-name">{item.name}</span>
    </li>
  })

  return (
    <ul className="items-list">
      {list}
    </ul>
  );
}

export default Items;
