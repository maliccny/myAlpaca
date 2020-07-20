import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LogInPage from "./screens/LogInPage/LogInPage";
import ManageProfile from "./screens/ManageProfile/ManageProfile";
import UserCreate from "./screens/UserCreate/UserCreate";
// import UserEdit from "./screens/UserEdit/UserEdit"
import UserDelete from "./screens/UserDelete/UserDelete"
import UserHome from "./screens/UserHome/UserHome"
import { getUsers } from "./services/users";

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: ""
    }
  }


  componentDidMount = async () => {
    const users = await getUsers()
    console.log(users[0])
    console.log(users[0]._id)
    this.setState({
      id: users[0]._id
    })
  }


  render() {
    return (
      <div className="App" >
        <Route exact path="/">Home</Route>
        <Route exact path="/login" component={LogInPage}></Route>
        <Route exact path="/manageprofile" component={ManageProfile}></Route>
        <Route exact path="/userdelete" component={UserDelete} id={this.state.id}></Route>
        {/* <Route exact path="/useredit" component={UserEdit} id={this.state.id}></Route> */}
        <Route exact path="/userhome" component={UserHome} ></Route>
        <Route path="/usercreate" component={UserCreate}></Route>
      </div >
    );
  }
}

export default App;
