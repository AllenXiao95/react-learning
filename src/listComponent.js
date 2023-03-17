import React from "react";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'orange' },
      ]
    };
  }

  render() {
    return (
      <ul>
        {this.state.list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

export default ListComponent;