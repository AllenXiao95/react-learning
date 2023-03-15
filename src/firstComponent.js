import React from 'react'

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Now is {this.props.date}</h1>
      </div>
    );
  }
}

// function FirstComponent(props) {
//     return (
//         <div>
//             <h1>Now is {props.date}</h1>
//         </div>
//     );
// }


export default FirstComponent;