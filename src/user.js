import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser,deleteUser,updateUser } from './action/actions'
import UserList from './userList';
class User extends Component {


  constructor() {
    super();
    this.state={
      edit_id:'',
    }
  }



  handleSubmit = (e) => {
    var edit_id= this.state.edit_id;
    const name = this.getName.value;
    if(edit_id==''){
     const data = { id: new Date(), name };
      this.props.addUser(data);
    }
    else{
      var id=edit_id;
      const data = { id, name };
      this.props.updateUser(data);
     this.setState({edit_id:''})
    }
    
    
    this.getName.value = '';

  }
  user_remove = (user) => {
    this.props.deleteUser(user);

}
user_edit = (index) =>{
  var user_data= this.props.user[index];
  var id= user_data['id'];
  var user_name=user_data['name'];
  this.setState({edit_id:id})
  this.getName.value = user_name;
  

}


  render() {

    return <div className="main_div">
      <div className="formDiv">

        <h1>Create User</h1>
        <div className="form-control">
          <label>Name : </label>
          <input required type="text" ref={(input) => this.getName = input}
            placeholder="Enter Name" />
        </div>

        <div className="form-control">
          <button onClick={this.handleSubmit} className="btn-success">Add</button>
        </div>
      </div>
      <UserList user_delete={this.user_remove} user_edit={this.user_edit} /> 
    </div>
    
  }
}
const mapStateToProps = state => {
  return { user: state.users };
};
const mapDispatchToProps = dispatch => {
  return { 
    addUser: text => dispatch(addUser(text)),
    updateUser:text => dispatch(updateUser(text)),
    deleteUser: user => dispatch(deleteUser(user))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);