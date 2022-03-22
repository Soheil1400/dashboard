import {Grid, Paper, Typography} from "@mui/material";

const DashboardHead = () => {
    return(
        <Grid item xs={12}>
            <Paper>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} p={2}>
                    <Typography variant={'h6'}>
                        Welcome to the Dashboard
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default DashboardHead