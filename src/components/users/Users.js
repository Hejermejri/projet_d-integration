import React,{Component} from 'react' 
import { render } from 'react-dom';
import { Link, Redirect} from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle,MDBCardHeader, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Footer from '../Bar/Footer'
import NavbarList from '../Bar/NavBarList'
import axios from 'axios';

class Users extends Component{
    constructor(props) {
        super(props);
        this.state = {
          users:[],
          islogout: false,
          noOfElement:3,
          iduser:null
    
        };
    }

    
  
 handleClickOpen = () => {
    this.setState({
        open:true
    });
  };
 handleClose = () => {
    this.setState({
        open:false
    });
  };

    signOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
    
        this.setState({
          islogout: true
        });
      };
    
    componentDidMount()
    {
        const config={
            headers:{
                Authorization: 'Bearer ' +localStorage.getItem('token')            }
                
            };   

            axios.get(`http://127.0.0.1:9091/api/users`,config)
            .then(res => {
                console.log(res.data);
                const users = res.data;
                console.log("users list",users)
                this.setState({
                    users
                });
              }).catch(err=>{
                console.log(err)
              })
            
            }
            
            loadMore =()=>{
                this.setState({
                    noOfElement : this.state.noOfElement+this.state.noOfElement
                })
            }
    
    render() {  
        const slice=this.state.users.slice(0,this.state.noOfElement);

  
   
    return (
        <div>
                   
            <NavbarList/>  
            
        
            <div className="container emp-profile" >
                         
                                
            
       

                <div>
                            <h1 style={{fontSize:"3.2em",fontWeight:"900",color:"white"}}> List of users</h1>
                            {' '}
                        <br/>
                </div>
                <div style={{display:"flex",flexWrap: "wrap", alignItems: "center",justifyContent: "space-between",padding:"20px"}  }>
                    
                 
            {
                slice.map(
                            
                            user=>{
                
                                return(     
                                            <div> 
                                                   <MDBCard   style={{ maxWidth: '18rem' ,maxHeight:'40rem'}}>
                                                    
                                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                        
                                                        <MDBCardImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png' fluid alt='...'  width="20%"/>
                                                    
                                                        <MDBCardHeader>user id:  {user.id} </MDBCardHeader>

                                                    </MDBRipple>   
                                                        <MDBCardBody>
                                                        <MDBCardTitle> {user.username}</MDBCardTitle>
                                                        <MDBCardText>
                                                        email :  {user.email} {' '}
                                                       
                                                        </MDBCardText>
                                                        <MDBCardText>
                                                   
                                                        </MDBCardText>

                                                        


                                                </MDBCardBody>     
                                                </MDBCard>
             </div>
             )}
                )}
                               <button className="btn btn-dark d-block w-30 "style={{textAlign:"center" , marginLeft:"45%", marginBottom:'2%'}} onClick ={()=> this.loadMore() }  >
         Load More
     </button>
    
            </div>
                 

        
</div>
<Footer id="footer" className="footer"/>
                                 </div>)
                                }
                                
                                }                                                                           

              
  
        
    
  export default Users