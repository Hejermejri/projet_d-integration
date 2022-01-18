import React from "react"
import{
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from 'react-admin'

const Userlist = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField  source='id'/>
                <TextField  source='username'/>
                <TextField  source='email'/>
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    )
}

export default Userlist