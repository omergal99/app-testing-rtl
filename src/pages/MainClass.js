import React, { Component } from 'react';

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  state = {
    items: [{ id: 'I123', name: 'mamama', isChecked: false }]
  }

  addItem(ev) {
    if (ev.which !== 13 || ev.target.value === '') return;
    this.setState({ items: [...this.state.items, { id: Date.now(), name: ev.target.value, isChecked: false }] });
    ev.target.value = '';
  }

  toggleCheck(itemId) {
    const updateItems = this.state.items.map(item => {
      if (item.id === itemId) item.isChecked = !item.isChecked;
      return item;
    });
    this.setState({ items: updateItems });
  }

  render() {
    const list = this.state.items.map(item => {
      return <div className="item" key={item.id}>
        <input type="checkbox" className="item-check" value={item.isChecked} onChange={() => this.toggleCheck(item.id)} />
        <span className="item-name">{item.name}</span>
      </div>
    })
    return (
      <div className="Main">
        <h1 data-testid="greet-text">{this.props.greet}</h1>
        <div className="contant">
          <div className="items">
            <h2 className="main-title">Item List</h2>
            <input type="text" className="input-add-items" onKeyUp={this.addItem.bind(this)} />
            {list}
          </div>
          <div className="details">
            <h2>Details</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
