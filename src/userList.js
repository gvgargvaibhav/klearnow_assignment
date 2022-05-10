import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {


    constructor() {
        super();
       
    }
   
    render() {

        return <div className="main_div" >
            <h1> All User </h1>

            {this.props.user.map((post, key) =>
                <p >
                    <span>{key + 1} | {post.name}</span>
                  
                    <button onClick={() => this.props.user_edit(key)}>Edit</button>
                    <button onClick={() => this.props.user_delete(post.id)}>Delete</button></p>

            )}


        </div>

    }
}


const mapStateToProps = state => {
    return { user: state.users };
};

export default connect(mapStateToProps )(UserList);

