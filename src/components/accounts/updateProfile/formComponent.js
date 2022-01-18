import { Grid, Box ,Paper, Typography, TextField, Button, Stepper, StepButton, Step, StepLabel } from '@material-ui/core'
import { prototype } from 'progress';
import React, { Component } from 'react'
import '../profile.css'
import { renderButton, renderInputText, renderPasswordText, renderPhoneText, renderText } from './displayComponent';
import { PropTypes } from 'prop-types';
import Step1 from './step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Finished from './Finished';
import NavbarList from '../../Bar/NavBarList';
import Swal from 'sweetalert2'
import {  Redirect } from "react-router-dom";
import axios from 'axios';
 
const emails=window.localStorage.getItem('userInfo');

const emailuser = JSON.parse(emails);


export class FormComponent extends Component {
    state ={
        id: emailuser.id,
        users:{
            firstName:'',
            lastName:'',
            phone:'',
            gender:'',

            hightDegres:'',
            issuedBy:'',
            yearOfPassing:'',
            jobType:'',

            skill:'',
            jobApplyFor:'',
            workExperience:'',
            expectedSalary:''


        },
            
        errors:{},
        currentStep:0,

    }
    render() {
        
        if (localStorage.getItem("token")===null) {
            return <Redirect to="/login" />;
          }
        const { classes } =this.props;

        const handleChange =
        ({target}) => {
            const {users,errors} =this.state;

            console.log("event", target.name,"value", target.value);

            target.value.length <=3 ?
             (errors[target.name]=`${target.name} have at least 3 letters`): 
            errors[target.name] ="";
            users[target.name] = target.value;
            users[target.name]=target.value;
            this.setState({
                users:users,
                errors:errors
            });
            console.log(this.state.users)
            
        }
        
    
      

        const handleNextPage =()=>{
            console.log("next page clicked")
            let {currentStep} =this.state;
            currentStep =currentStep+1;
            this.setState({
                currentStep:currentStep
            })
            console.log(this.state.currentStep)

        }

        
        const handlePrev =()=>{
            console.log("next page clicked")
            let {currentStep} =this.state;
            currentStep =currentStep-1;
            this.setState({
                currentStep:currentStep
            })
        }

        const StepperStep=[
            {label:"Personal Bio"},
            {label:"Educational"},
            {label:"Professional"}


        ]
        const onUsersDetails = (event) => {
            event.preventDefault();
            const config={
                headers:{
                    Authorization: 'Bearer ' +localStorage.getItem('token')            }
                    
                };
                console.log("id :",this.state.id);
                console.log("state",this.state);
    
                
            axios.put('http://localhost:9091/api/changeuserdetails'+'/'+(this.state.id),this.state.users,config)
                .then(res=>{
                  console.log(res.data);
                  Swal.fire({
                    title: "Success!",
                    text: "Add successfuly",
                    icon: 'success',
                    button:"OK!"
                  });
             
        
                  
                console.log(this.state.users)
                 
                  
              })
              .catch(err=>{
                Swal.fire({
                    title: "Error!",
                    text: "Field Is Invalid Please Try Again",
                    icon: 'error',
                    button:"OK!"
                  });
             
        
              console.log(err)
              })
        
            }    ;
        
      
        const getStepItems = (steps) =>{
            switch (steps){
                case 0:
                   return (<Step1 
                   state={this.state}
                   handleChange={handleChange}
                   handleNextPage={handleNextPage}                    
                   />);

                break;

                case 1:
                    return (<Step2 
                    
                        state={this.state}
                        handleChange={handleChange}
                        handleNextPage={handleNextPage}    
                        handlePrev={handlePrev}                
                    />);
                     
                 break;
                 case 2:
                    return (<Step3
                    
                        state={this.state}
                        handleChange={handleChange}
                        handleNextPage={handleNextPage}    
                        handlePrev={handlePrev}                
                    />);
                     
                 break;

                case 3:
                    return <Finished
                        state={this.state.users}
                        onUsersDetails={onUsersDetails}
                    />

                 default: 
                 return (<Step1 
                 state={this.state}
                 handleChange={handleChange}
                 handleNextPage={handleNextPage}                    
                 />);
                }
        
        }
    
    
        return (
            
        <div>
            {console.log(this.state.id)}
            <div>
                <NavbarList/>
            </div>          
            
            <div className="body" >

                <Grid container spacing={2} >
                    <Grid item xs={12} sm={7}>
                        <form className="formComponent" > 
                        <Paper style={{backgroundColor:"#DCE3ED"}} component={Box} p={2}>
                        <Box  mb={1} pt={2} >
                            {renderText({ label : "User Details" })}
                           
                           
                            <Stepper alternativeLabel activeStep={this.state.currentStep} >
                            {StepperStep.map((item, i) => (
                                <Step key={i} >
                                    
                                      <StepButton color="inherit" >
                                          {item.label}
                                </StepButton>
                                </Step>
                            ))}
                            </Stepper>


                        </Box></Paper>
                        
                        {getStepItems(this.state.currentStep)}

                  
                    </form>
                        </Grid>

                </Grid>
            </div></div>
        )
    }
}
FormComponent.propTypes ={
    classes : PropTypes.object.isRequired
};

export default FormComponent
