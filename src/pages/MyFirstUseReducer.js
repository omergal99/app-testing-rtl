import React from 'react';
import { useReducer } from 'react';

const setItem = (enable = false, value = '') => ({ enable, value });

const initialState = { title: setItem(), tags: setItem(), owner: setItem(), desc: setItem() };

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return { ...state, title: setItem(null, action.payload) };
    default:
      return state;
  }
}

function MyFirstUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTitle = ev => {
    if (ev.which !== 13 || ev.target.value === '') return;
    dispatch({ type: 'CHANGE_TITLE', payload: ev.target.value });
    ev.target.value = '';
  };

  return (
    <>
      <h2>Using Reducer</h2>
      <input type="text" onKeyUp={updateTitle} placeholder="Change Title" />
      <div>
        <span>The State Title is: <strong>{state.title.value}</strong></span>
      </div>
    </>
  );
}

export default MyFirstUseReducer;
