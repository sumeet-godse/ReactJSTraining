import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
  return <h1>Hello World!</h1>
}

const Text = (props) => {
  return <h1>{props.message}</h1>
}

const InputText = (props) => {
  const {placeholder, value, handleChange} = props;

  return <input type = "text" placeholder = {placeholder} value = {value} onChange = {handleChange} />
}

const Button = (props) => {
  const {label, buttonHandler} = props;
  
  return (
      <>
          <input type = "button" id = "button" value = "Submit" onClick = {buttonHandler} />
          <label htmlFor = "button" >{label}</label>
      </>
  );
}

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: "Hello from Text",
      label: "Submit Button",
      placeholder: "Please enter input...",
      value: ""
    };

    this.buttonHandler = this.buttonHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  buttonHandler() {
    this.setState({
      message: this.state.value,
      value: ""
    });
  }

  handleChange(event) {    
    this.setState({
      value: event.target.value
    }); 
  }
  
  render() {
    return (
      <>
        <HelloWorld />
        <Text message = {this.state.message} />
        <Button label = {this.state.label} buttonHandler = {this.buttonHandler} />
        <br /> <br />
        <InputText placeholder = {this.state.placeholder} value = {this.state.value} handleChange = {this.handleChange} />
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <FirstForm />
  </React.StrictMode>,
  document.getElementById('root')
);
