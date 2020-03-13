import React from 'react';

function ItemPreview({ item }) {

  return (
    <div className="item-details">
      {item !== null
        ? <>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>{item.isChecked}</span>
        </>
        : <span>No Item Selected</span>
      }
    </div>
  );
}

export default ItemPreview;
