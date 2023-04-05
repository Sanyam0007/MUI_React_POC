import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Card, CardContent } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { createContext } from "vm";


const SignIn = () => {
  const UserContext = createContext()

  const navigate = useNavigate()
  const [user,setUser] = useState({
    Fname:'',
    Lname:''
  })
  const [isSignIn,setSignIn] = useState(false)
  const handleSubmitListener = () => {
    setSignIn(!isSignIn)
    navigate('/profile')
  };

  const setUserFname=(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(isSignIn)
    setUser({Fname:e.target.value,Lname:''})
  }
  const setUserLname=(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(isSignIn)
    setUser({Fname:'',Lname:e.target.value})
  }
  console.log('Fname' , user.Fname, 'Lname' ,user.Lname)

  return (
    <UserContext.Provider value={user}>
      <div>
      <Typography gutterBottom variant="h3" align="center">
        Sign Up
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                  onChange={setUserFname}
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                  onChange={setUserLname}
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="Password"
                    placeholder="Password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={handleSubmitListener}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
                <Typography 
                sx={{textAlign:"center",justifyContent:"center" , margin:"auto"}}>
                  {isSignIn?"Sign In":"Sign Up"}
                </Typography>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
    </UserContext.Provider>
  );
};
export default SignIn;
