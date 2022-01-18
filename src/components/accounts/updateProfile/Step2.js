import { Paper,Box,Grid } from '@material-ui/core'
import React from 'react'
import {renderButton,renderInputText,renderPasswordText, renderText} from '../updateProfile/displayComponent'
import StepTwo from '../../../assets/Professional.png'


function Step2({state,handleChange,handleNextPage,handlePrev}) {
    return (
        <Paper component={Box} p={2} style={{backgroundColor:"#DCE3ED"}}>
                 <Box p={1} mb={2}  >
                 <img src={StepTwo} width="15%"  alt="step1" />

                            {renderText({ label : "A bit About Education" ,variant:"h6"}) }
                        </Box>
                   
              <Grid container spacing={2} style={{marginBottom:"10px"}}>
              <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({
                                label:'Job Type',
                                name:"jobType",
                                state,
                                handleChange,
                                })}
                        </Box>
                   </Grid>
                  
                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({
                                label:'Qualification',
                                name:"hightDegres",
                                state,
                                handleChange,
                                })}
                        </Box>
                   </Grid>
                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'issued By College',
                                                name:"issuedBy",
                                                state,
                                                handleChange,
                                                })}
                        </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'year Of Passing',
                                                name:"yearOfPassing",
                                                state,
                                                handleChange,
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
                               <Box p={2}>
                               {renderButton({
                                   label: "Back" ,
                                   color:"default",
                                   handleOnClick:handlePrev
                                   
                               })} 
                               </Box>            
                                 
                        </Grid>
        </Paper>
    )
}

export default Step2
