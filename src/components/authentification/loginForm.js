import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './loginForm.css';
import Noir from '../../assets/noir.jpg'
import './loginForm.css'
import Swal from 'sweetalert2'
import {  Redirect } from "react-router-dom";



const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            username: '',
            password: '',
            islogged: false,
            loading:true,
            message: '',
            error: {
                username: '',
                password: ''
            }
        }
    }
 

onFormSubmit = event => {
        event.preventDefault();
        if (validation(this.state)) {
        const data={
          username:this.state.username,
          password:this.state.password
      };
      console.log(data)
      axios.post('http://localhost:9091/api/auth/signin',data)
          .then(res=>{
              console.log(res.data);
             localStorage.setItem('token',res.data.accessToken);
            
             this.setState ({    
                islogged: true,
                loading:false,
                message: 'Please wait...'
          });
          console.log(this.state.message);
          console.log(this.state.loading);
          console.log("token",res.data.accessToken)
          console.log("Id",res.data.id)
          console.log("Role",res.data.roles)
          const id =res.data.id;

          if (this.state.islogged===true)
          { 
            localStorage.setItem('userInfo',JSON.stringify(res.data));

            this.props.history.push(`/offres`);

        
          }
          else {
            
            
            this.props.history.push('/login');

          }
              
          })
          .catch(err=>{
           
              Swal.fire({
                title: "Error!",
                text: "Email Or Password Is Invalid Please Try Again",
                icon: 'error',
                button:"OK!"
              });
         
          console.log(err)
          })
  
        }    };


    formObject = event => {

        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "username":
              error.username =
                  value.length < 3 ? "Userame should 3 characaters long" : "";
              break;
              case "password":
                  error.password =
                      value.length < 5 ? "Password should 8 characaters long" : "";
                  break;
              default:
                  break;
          }
  
        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;
        return (
              
            <div className="login-form">
                <div className="cont">
                    <div className="main">
                        <div className="content">
                 

                    <form  onSubmit={this.onFormSubmit } >
                    <h1>Login</h1>
                    <div >
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img" style={{height:'20%' , width:"30%"}}
        /> </div>
                        <div className="form-group">
                            
                            <label className="labelsign">Username</label>
                            <input
                                required
                                type="text"
                                name="username"
                                className={error.username.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>
                                {error.username.length > 0 && (
                                <div className="alert alert-danger" style={{color:'red'}} role="alert">

                                        {error.username}
                                    </div>
                                )}
               
                        </div>

                        <br/>

                        <div >
                            <label className="labelsign">Password</label>
                            <input
                                required
                                type="password"
                                name="password"
                                className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>

                                {error.password.length > 0 && (
                                <div className="alert alert-danger" style={{color:'red'}} role="alert">

                                        {error.password}
                                    </div>
                                )}
               
        </div>

                     <br/>
                 
                     <div className="d-grid mt-3">
                        <button type="submit" value="submit"  >submit</button>
                    </div>
                    </form> 
                    </div>
       <div className="form-img">
         <img src={Noir} alt="contact" />
         <p className="youdont" style={{marginTop:'-390px'}}>Don't have an account ? </p>

        <Link to="/register">
         <p className="img-btn" style={{marginTop:'-190px'}}>
            <span className="m-up">
                
                Register
                </span>
        </p></Link>
  
        </div>
      </div>

</div>
</div>

);
    }
}
export default LoginForm
