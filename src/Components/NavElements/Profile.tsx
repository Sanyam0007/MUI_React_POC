import { Card, CardContent, Grid, Typography } from "@mui/material"

export const Profile = () => {
  return (
    <div>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin:"auto"  }}>
          <CardContent>
            <Typography>
              Hello User welcome
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}
