import {Avatar, Grid, Paper, Typography} from "@mui/material";
import {theme} from "../../../theme/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const ContactProfileHead = ({contact}) => {
    return(
        <Grid item xs={12}>
            <Paper>
                <Grid container p={2}>
                    <Grid item xs={12} sm={8} lg={10} p={1}>
                        <Grid display={'flex'} alignItems={'center'}>
                            <Grid mr={2} sx={{cursor: 'pointer'}}>
                                <Avatar sx={{width: '100px', height: '100px'}} alt={contact.fName} src={contact.image}/>
                            </Grid>
                            <Grid display={'flex'} flexDirection={'column'}>
                                <Grid>
                                    <Typography variant={'h5'}>
                                        {contact.fName}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography color={theme.palette.grey["600"]} variant={'caption'}>
                                        {contact.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={2} p={1}>
                        <Grid bgcolor={theme.palette.secondary.light} borderRadius={2} p={2}>
                            <Grid sx={{cursor: 'pointer'}} display={'flex'} mb={1}>
                                <InstagramIcon/>
                                <Typography ml={2}>
                                    {contact.fName}@instagram
                                </Typography>
                            </Grid>
                            <Grid sx={{cursor: 'pointer'}} display={'flex'}>
                                <ShareOutlinedIcon/>
                                <Typography ml={2}>
                                    {contact.fName}@share
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ContactProfileHead