import {Grid, Paper, Typography} from "@mui/material";
import {theme} from "../../theme/theme";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Index = () => {
    return(
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Paper>
                    <Grid p={2}>
                        <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <Grid display={'flex'} alignItems={'center'}>
                                <AttachMoneyIcon/>
                                <Typography ml={1} variant={'h6'}>
                                    Balance
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={'h6'} color={'secondary'} fontWeight={'bold'}>
                                    $2000
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Index