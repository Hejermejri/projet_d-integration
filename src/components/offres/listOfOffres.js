import React, { Component } from 'react'
import axios from 'axios';
import { Link ,withRouter} from "react-router-dom";
import { Confirm } from 'react-st-modal';
import { MDBCard, MDBCardBody, MDBCardTitle,MDBCardHeader, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'
import NavbarList from '../Bar/NavBarList'
import Footer from '../Bar/Footer'

export class ListOfOffres extends Component {
    constructor(props) {
        super(props);
        this.state = {
          offres:[],
          islogout: false,
          noOfElement:3,
          idOffre:null
    
        };
    }

    
    handleReadDescription(id)
    {
        
        this.props.history.push(`/offredetails/${id}`);

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

            axios.get(`http://127.0.0.1:9091/api/offre/offres`,config)
            .then(res => {
                console.log(res.data);
                const offres = res.data;
                console.log("offres list",offres)
                this.setState({
                    offres
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
        const slice=this.state.offres.slice(0,this.state.noOfElement);

  
   
    return (
        <div>
                   
            <NavbarList/>  
            
        
            <div className="container emp-profile" >
                         
            <button onClick={this.signOut} href="/" style={{marginLeft:'90%', marginTop:"2%" }}>
                  Sign Out
                </button>
                                          
            
       

                <div>
                            <h1 style={{fontSize:"3.2em",fontWeight:"900",color:"white"}}> List of Offres</h1>
                            {' '}
                        <br/>
                </div>
                <div style={{display:"flex",flexWrap: "wrap", alignItems: "center",justifyContent: "space-between",padding:"20px"}  }>
                    
                 
            {
                slice.map(
                            
                            offre=>{
                
                                return(     
                                            <div> 
                                                   <MDBCard   style={{ maxWidth: '20rem' ,maxHeight:'40rem'}}>
                                                    
                                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                        
                                                        <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxPkGczHKaWpzuFPivM3gqmEdxMEI4aPELzlyyC7MQRy1I4M9bocB1lkI20tVvvHN5g8&usqp=CAU' fluid alt='...'  width="80%"/>
                                                    
                                                        <MDBCardHeader>Published At:  {offre.published} </MDBCardHeader>

                                                    </MDBRipple>   
                                                        <MDBCardBody>
                                                        <MDBCardTitle> {offre.title}</MDBCardTitle>
                                                        <MDBCardText>
                                                        Post For  :  {offre.posteNumber} {' '}
                                                        Country : {offre.country}
                                                        </MDBCardText>
                                                        <MDBCardText>
                                                   
                                                        </MDBCardText>

                                                        <MDBBtn 
                                                            
                                                            onClick={ () => this.handleReadDescription(offre.id)}

                                                        
                                                        >Click Here To Read More </MDBBtn>



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

              
  
        
    


export default withRouter(ListOfOffres)
