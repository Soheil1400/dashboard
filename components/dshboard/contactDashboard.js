import {Avatar, Divider, Grid, Paper, Typography} from "@mui/material";
import Link from "next/link";
import {PrimeButton} from "../../styles/globals";
import {theme} from "../../theme/theme";
import {useSelector} from "react-redux";

const ContactDashboard = () => {
    const contacts = useSelector(state => state.contact.items)
    return(
        <Grid item xs={12} sm={6} md={4}>
            <Paper>
                <Grid p={2}>
                    <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={1}>
                        <Typography>
                            Some Contacts
                        </Typography>
                        <Link href={'/contact'}>
                            <PrimeButton>
                                Check More
                            </PrimeButton>
                        </Link>
                    </Grid>
                    <Divider my={1}/>
                    <Grid>
                        {contacts.slice(0,3).map(c => (
                            <Grid key={c.id} display={'flex'} alignItems={'center'} my={1.8}>
                                <Link href={`/contact/${c.fName}`}>
                                    <Grid mr={2} sx={{cursor: 'pointer'}}>
                                        <Avatar src={c.image}/>
                                    </Grid>
                                </Link>
                                <Grid display={'flex'} flexDirection={'column'}>
                                    <Grid>
                                        <Typography>
                                            {c.fName}
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography color={theme.palette.grey["600"]}
                                                    variant={'caption'}>
                                            {c.email}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ContactDashboard