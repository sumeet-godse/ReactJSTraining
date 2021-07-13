import React from "react";
import Records from "../components/Records";
import Button from '@material-ui/core/Button';
import NavBar from "../components/NavBar";
import Form from "../components/Form";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      act: 0,
      index: ''
    }

    this.txtEmail = React.createRef();
    this.txtName = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();

    let userData = this.state.userData;
    let name = this.txtName.current.value;
    let email = this.txtEmail.current.value;

    if( this.state.act === 0 ) {
      let newUser = {
        "name": name,
        "email": email
      }
  
      userData.push(newUser);
    } else {
      let index = this.state.index;
      userData[index].name = name;
      userData[index].email = email;
    }

    this.setState({
      userData: userData,
      act: 0
    })
    document.getElementById("myForm").reset();
  }

  handleEdit = (i) =>{
    let data = this.state.userData[i];
    this.txtName.current.value = data.name;
    this.txtEmail.current.value = data.email;

    this.setState({
      act:1,
      index:i
    })
  }

  handleDelete = (i) => {
    let userData = this.state.userData;
    userData.splice(i,1);
    this.setState({
      userData: userData
    })
  }

  render() {
    let userData = this.state.userData;
    return (
        <div>
        <NavBar />
        <Form txtEmail = {this.txtEmail} txtName = {this.txtName} handleSubmit = {(e) => this.handleSubmit(e)} />
        <Records userData = {userData} handleEdit = {(i) => this.handleEdit(i)} handleDelete = {(i) => this.handleDelete(i)} />
        </div>
    )
  }
}

export default HomePage;
