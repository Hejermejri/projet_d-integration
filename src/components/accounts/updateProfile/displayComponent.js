import { Button, MenuItem, TextField, Typography } from "@material-ui/core"

export const renderText = ({label , color , align , variant}) =>(
    <Typography
    color={color ? color: "primary"}
    align ={ align ? align: "center"}
    variant = {variant ? variant : "h6"}
    >
    {label}


    </Typography>
);

    export const renderInputText = ({label,color,name,state,handleChange}) =>{
        const {users,errors} = state;
        return(
        <TextField
        label={label}
        color={color ? color: "primary"}
        variant="outlined"
        fullWidth
        size="small"
        name={name}
        value={users[name]}
        error={errors[name]}
        helperText={errors[name]}
        onChange={handleChange}
        margin="normal"

        />
    )}
    export const renderPasswordText = ({label,color,name,state,handleChange}) =>{
        const {users,errors} = state;
        return(
    
    <TextField
    id="filled-password-input"
    type="password"
    autoComplete="current-password"
    variant="outlined"
    label={label}
    color={color ? color: "primary"}
    fullWidth
    size="small"
    name={name}
    value={users[name]}
    error={errors[name]? true: false}
    helperText={errors[name]}
    onChange={handleChange}
    margin="normal"

  />
  )}

  export const renderButton =({label,color,variant,handleOnClick}) =>  (
  <Button 
    variant={variant ? variant :"outlined"}
    color={color ? color: "primary"}
    size="small"
    onClick={handleOnClick}
         >
    {label}
  </Button>
  )

  export const renderSelect = ({label,color,name,state,options,handleChange}) =>{
    const {users,errors} = state;
    return(
    <TextField
    select
    label={label}
    color={color ? color: "primary"}
    variant="outlined"
    fullWidth
    size="small"
    name={name}
    value={users[name]}
    error={errors[name]}
    helperText={errors[name]}
    onChange={handleChange}
    margin="normal"

    >        
    {options.map((item)=>(
        <MenuItem key={item.value} value={item.value} >
            {item.value}  
        </MenuItem>
        ))}
        </TextField>

    );
  }
