import React, {Component} from 'react';
import NavbarList from '../Bar/NavBarList'
import './profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Redirect ,useHistory } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

const emails=window.localStorage.getItem('userInfo');

const emailuser = JSON.parse(emails);
    
class Profile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      id: emailuser.id,
      islogout: false,
      lists:[],

    };  
    
  }
  
  signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");

    this.setState({
      islogout: true
    });
  };
  componentDidMount()
  {
    console.log("id idi ",this.state.id)
      const config={
          headers:{
              Authorization: 'Bearer ' +localStorage.getItem('token')            }
              
          };
      console.log("config",config);
      axios.get('http://localhost:9091/api/users'+'/'+(this.state.id),config).then(
          res =>{
          const lists = res.data;
          this.setState({
               lists:lists
           })
           console.log("lista",this.state.lists)
           //localStorage.setItem('lista',JSON.stringify(res.data));

          },
          err=>{
              console.log(err);
              console.log("config",config);
     
          }

      )

  }

  handleUpdate(id)
  {
      this.props.history.push(`/editProfile/${id}`);

  }
  render(){
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    console.log("email",emailuser.email)
 
    return (

        <div>
            <NavbarList/>  
            
        
        <div className="container emp-profile" >
                     
        <button onClick={this.signOut} href="/" style={{marginLeft:'90%', marginTop:"2%" }}>
              Sign Out
            </button>
                                      
        
          <form style={{ marginTop:"-6%" ,backgroundColor:"#DDDAE1"}}>

          <div className="row">
              <div className="col-md-4">
              <div style={{marginTop:"20%"}}>
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="45%"  />
              </div>
              <div >

              <div className="col-md-6" style={{marginLeft:'75%', marginTop:"-30%" }} >
                <div className="profile-head">
                <h4>{this.state.lists.username} </h4>
                <h6> web developer </h6>
                      <p className="profile-rating mt-3 mb-5" >Full Stack Developer</p>
                    </div></div>
                    </div>
                    <div style={{marginLeft:'266%', marginTop:"-8%" }} >
                   
                         <Link to="/editProfile">
                         <input type="button" className="profile-edit-btn" style={{borderRadius:'2em'}} value="edit"  />
                         </Link>

                    </div>
                </div>
                <div className="row">
                <div className="col-md-4" style={{marginTop:'3%',marginLeft:"5%"}} >
                  
                <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                        <span className="text-secondary">lien<a href=""></a></span>
                      </li>
                      <li className="list-group-item d-flex justifsy-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                        <span className="text-secondary">lien</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                        <span className="text-secondary">lien</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                        <span className="text-secondary">lien</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                        <span className="text-secondary">lien</span>
                      </li>
                    </ul>
                  </div>
                  </div>
          
              <div className="col" style={{marginTop:'2%',marginLeft:"5%"}} >

              
              <div className="col-md-10">
                <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {this.state.lists.firstName} {this.state.lists.lastName}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {this.state.lists.email}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender </h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {this.state.lists.genre}

                  </div>
                </div>
              
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    (+216) 00-000-000
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Address
                  </div>
                </div>

                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Profession</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                       Profession

                  </div>
                </div>
              
              </div>
            </div>  
            </div>
            </div>
                  
           
            </div> 
          
          </div>
          </form>
               
         
            </div>
        </div>

               )}           
}

export default Profile
