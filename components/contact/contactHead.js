import {Grid, Paper, Typography, useMediaQuery} from "@mui/material";
import {PrimeButton} from "../../styles/globals";
import Link from 'next/link'

const ContactHead = () => {
    const matchContactHead = useMediaQuery('(min-width:500px)')
    return(
        <Grid item xs={12}>
            <Paper>
                <Grid p={2} display={'flex'} alignItems={'center'}
                      flexDirection={matchContactHead ? 'row' : 'column'} justifyContent={'space-between'}>
                    <Grid mb={matchContactHead ? '' : 1}>
                        <Typography variant={'h6'}>
                            Social Contact
                        </Typography>
                    </Grid>
                    <Grid>
                        <Link href={'/contact/new'}>
                            <PrimeButton>
                                Add New Contact
                            </PrimeButton>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ContactHead