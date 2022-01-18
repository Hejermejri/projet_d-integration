import{FormControl, Navbar ,Nav,Form, Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';
import logo from '../../assets/Logo.png'
import {Link,BrowserRouter} from 'react-router-dom';


             
class NavbarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          islogout: false
        };
      }
      signOut = () => {
        localStorage.removeItem("users");
        axios.get('https://127.0.0.1:8000/logout/').then(
        this.setState({
          islogout: true
        })

        )
        console.log("logout")

      };
    
    render() {
        if (this.state.islogout) {

            return <Redirect to="/" />;
          }
        return(
            <div >
                    <div>
                    <Navbar  className="navbar" >
                <a href="#">
                    <img src={logo} alt=""  width="55%"/>
                     </a>

                     <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" >
                        <span className="nav-icon">
                        </span>
                    </label>
                    <ul className="menu">
                        <li><Link to='/' className="active">HOME</Link></li>
                        <li> 
                        <Link to='/login' > ABOUT</Link> 
                        </li>
                        <li>
                        <Link to='/login' >AGENTS</Link>
                             </li>
                        <li>  
                        <Link to='/profile' >PROFILE</Link>
                        
                        </li>
                        <li>
                        <Link to='/login' >CONTACT</Link>
                                </li>
                                <li>
                                <Link to='/login' className="property">
                    Login     
                </Link>

                                </li>

                    </ul>

                
                      
            </Navbar>
    </div>
    
     
                </div>
                
                
        )
    }
}

export default NavbarList

