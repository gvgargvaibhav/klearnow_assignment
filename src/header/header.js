import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import User from '../user';

import Home from '../Home';



class Header extends React.Component{

 
    render(){

        return(<div >
            
            <Router>
                <div >
                <nav className="sidenav">
                    <ul>
                        <li><a><Link to="/">Home</Link></a></li>
                        <li ><a><Link to="user">User</Link></a></li>
                       
                    </ul>
                </nav>
                <switch>
                   
                    <Route path="/user"><User/></Route>
                   
                    <Route path="/"><Home></Home></Route>

                </switch>
                </div>
            </Router>
            <div className="topnav"></div>
                    
        </div>)
    }
}

export default Header;
