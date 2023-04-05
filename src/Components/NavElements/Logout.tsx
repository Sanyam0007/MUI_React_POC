import { Card, CardContent, Grid, Typography , Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'


export const Logout = () => {

  const navigate = useNavigate()
  const logoutUser=()=>{
    navigate('/home')
  }

  return (
    <div>
       <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin:"auto"  }}>
          <CardContent>
            <Typography>
              Are You sure you want to logout?
            </Typography>
            <Button onClick={logoutUser}>
              LogOut
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}
