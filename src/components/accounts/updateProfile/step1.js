import { Paper,Box,Grid } from '@material-ui/core'
import React from 'react'
import {renderButton,renderInputText,renderPasswordText, renderSelect, renderText} from '../updateProfile/displayComponent'
import StepOne from '../../../assets/StepOne.png'


function Step1({state,handleChange,handleNextPage}) {
    return (

        <Paper component={Box} p={2} style={{backgroundColor:"#DCE3ED"}}>
                 <Box p={1} mb={2}  >
                 <img src={StepOne} width="15%"  alt="step1" />
                            
                            {renderText({ label : "Please Fill personal Data" ,variant:"h6"}) }
                        </Box>
                   
              <Grid container spacing={2} style={{marginBottom:"10px"}}>

                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({
                                label:'First Name',
                                name:"firstName",
                                state,
                                handleChange,
                                })}
                        </Box>
                   </Grid>
                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'Last Name',
                                                name:"lastName",
                                                state,
                                                handleChange,
                                                })}
                        </Box>
                        </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>

                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'Phone',
                                                name:"phone",
                                                state,
                                                handleChange,
                                                })}
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderSelect({label:'Gender',
                                                name:"genre",
                                                state,
                                                options:[
                                                    {key:"male",value:"MALE"},
                                                    {key:"female",value:"FEMALE"}
                                                ],
                                                handleChange
                                                })}
                        </Box>
                        </Grid>
                         </Grid>

                         <Grid container spacing={2} justify="flex-end">
                              <Box p={2}>
                               {renderButton({
                                   label: "next" ,
                                   handleOnClick:handleNextPage
                                   
                               })} 
                               </Box>            
                        </Grid>
        </Paper>
    )
}

export default Step1
