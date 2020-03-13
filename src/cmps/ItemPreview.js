import React, { useState, useEffect } from 'react';

function ItemPreview({ item,
  onUpdateItem }) {

  const [isEditMode, setIsEditMode] = useState(false);
  const [itemName, setItemName] = useState(item ? item.name : '');

  useEffect(() => {
    setItemName(item ? item.name : '');
  }, [item])
  
  return (
    <>
      {item !== null
        ? <div className="item-details">

          <button onClick={() => setIsEditMode(!isEditMode)}>{isEditMode ? 'Edit' : 'View'}</button>

          <div className="data-preview">
            <span>Id: {item.id}</span>
            {isEditMode
              ? <>
                <span>Name:</span>
                <input type="text" value={itemName} onChange={ev => setItemName(ev.target.value)} />
              </>
              : <span>Name: {item.name}</span>
            }
            <span>Is Checked: {item.isChecked ? 'True' : 'False'}</span>
          </div>

          <button onClick={() => onUpdateItem({ ...item, name: itemName })}>Save</button>

        </div>
        : <span>No Item Selected</span>
      }
    </>
  );
}

export default ItemPreview;
