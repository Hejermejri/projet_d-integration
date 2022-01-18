import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import './loginForm.css'
import Noir from '../../assets/noir.jpg'
import axios from 'axios';
import Swal from 'sweetalert2'


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

export class registerForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            username: '',
            email:'',
            password: '',
            islogged: false,
            loading:true,
            message: '',
            error: {
                username: '',
                email:'',
                password: ''
            }
        }
    }
 

onFormSubmit = event => {
        event.preventDefault();
        if (validation(this.state)) {
        const data={
          username:this.state.username,
          email:this.state.email,
          password:this.state.password
      };
      console.log(data)
      axios.post('http://localhost:9091/api/auth/signup',data)
          .then(res=>{
              console.log(res.data);
            
             this.setState ({    
                islogged: true,
                loading:false,
                message: 'Please wait...'
          });
          console.log(this.state.message);
          console.log(this.state.loading);
          

          if (this.state.islogged===true)
          {
            Swal.fire({
                title: "Success!",
                text: "Account Created Successfully ",
                icon: 'success',
                button:"OK!"
            });
           
            this.props.history.push('/login');

        
          }
          else {
            
            
            this.props.history.push('/');

          }
              
          })
          .catch(err=>{
           
            //alert("username or password invalid please try again");
            Swal.fire({
                title: "Error!",
                text: "Username Or Password Is Invalid Please Try Again",
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
              case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
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
            <h1>Register</h1>
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
                            <label className="labelsign">Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>
                                {error.email.length > 0 && (
                                       <div className="alert alert-danger" role="alert" style={{color:'red'}}>
                                       {error.email}
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
         <p className="youdont" style={{marginTop:'-290px'}}>Already have an account ? </p>

        <Link to="/login">
         <p className="img-btn" style={{marginTop:'-190px'}}>
            <span className="m-up" >
                
                Login
                </span>
        </p></Link>
  
        </div>
      </div>
</div>
</div>

        )
    }
}

export default registerForm
