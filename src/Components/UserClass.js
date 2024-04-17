import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };

    console.log("This is Child Constructor");

  }

componentDidMount(){
  console.log("This is Child componentDidMount");
}

  render() {
    const { name, age } = this.props;

console.log("This is Child Render");

    return (
      <div>
        <h1>Hello Class</h1>
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Update Count
        </button>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
      </div>
    );
  }
}

export default UserClass;
