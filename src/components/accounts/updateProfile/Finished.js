import React, { useState } from 'react'
import { renderButton, renderText } from './displayComponent'
import { Grid, Box ,Paper } from '@material-ui/core'
import Button from '@restart/ui/esm/Button'
import axios from 'axios';
import Finish from '../../../assets/announcing.png'

 
const emails=window.localStorage.getItem('userInfo');

const emailuser = JSON.parse(emails);



function Finished({state,onUsersDetails}) {
  
    return (
        <Paper component={Box} p={2} style={{backgroundColor:"#DCE3ED"}}>
                 <Box p={1} mb={2}  >
                 <img src={Finish} width="15%"  alt="step1" />

                            {renderText({ label : "Your Given Details" ,variant:"h6"}) }
                        </Box>

                        
                               
                         <Grid container spacing={2} justify="flex-end">
                               <Box p={2}>
                               {
                                   JSON.stringify(state,null,4)
                               } 
                               </Box> 

                               <Grid container spacing={2} justify="flex-end">
                              <Box p={2}>
                               {renderButton({
                                   label: "save" ,
                                   handleOnClick:onUsersDetails
                                   
                               })} 
                               </Box>            
                        </Grid>
                                     </Grid>       
                                 
        </Paper>
    )
}

export default Finished
