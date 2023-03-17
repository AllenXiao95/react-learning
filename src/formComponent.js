import React from "react";

class formComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: 'male',
      isChecked: false
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleReset = () => {
    this.setState({
      name: '',
      age: '',
      gender: 'male',
      isChecked: false
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select name="gender" value={this.state.gender} onChange={this.handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange} />
            Is Checked?
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    );
  }
}

export default formComponent;