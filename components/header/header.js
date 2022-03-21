import {AppBar, Avatar, Box, Divider, Grid, styled, Typography, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {PrimeIconButton ,PrimeListItem, CustomDropMenu} from "../../styles/globals";
import {useState} from "react";
import Menu from "../menu/menu";

const Header = () => {
    const [open, setOpen] = useState(false)
    const [menu,setMenu] = useState(false)
    const matchHeader = useMediaQuery('(min-width:700px)')
    const CustomAppBar = styled(AppBar)({
        backgroundColor: '#fff',
        boxShadow: 'none',
        padding: '1.5rem'
    })
    return (
        <Box sx={{flexGrow: 1}}>
            <CustomAppBar position="static">
                <Grid container spacing={2}>
                    <Grid item xs={2} sm={3} lg={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Grid display={matchHeader ? 'block' : 'none'}>
                            <Typography variant={'h5'}>
                                Dashboard
                            </Typography>
                        </Grid>
                        <Grid>
                            <PrimeIconButton variant={'contained'} onClick={()=>setMenu(true)}>
                                <MenuIcon/>
                            </PrimeIconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={0} sm={6} lg={8.5} sx={{display:matchHeader ? 'flex' : 'none'}}>
                        <Grid  sx={{display:matchHeader ? 'flex' : 'none'}}>

                        </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} lg={1.5} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Grid>
                            <PrimeIconButton variant={'contained'} sx={{mr: 2}}>
                                <NotificationsNoneOutlinedIcon/>
                            </PrimeIconButton>
                            <PrimeIconButton variant={'contained'}>
                                <TranslateIcon/>
                            </PrimeIconButton>
                        </Grid>
                        <Grid>
                            <Avatar onClick={() => setOpen(!open)} sx={{border: '1px solid #000',cursor:'pointer'}} alt="Remy Sharp"
                                    src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top"/>
                            <CustomDropMenu sx={{display: open ? 'block' : 'none'}}>
                                <Grid p={1}>
                                    <PrimeListItem>
                                        <Grid mr={2}>
                                            <PermIdentityIcon/>
                                        </Grid>
                                        <Grid>
                                            <Typography>
                                                Soheil Saedi
                                            </Typography>
                                        </Grid>
                                    </PrimeListItem>
                                </Grid>
                                <Divider/>
                                <Grid p={1}>
                                    <PrimeListItem>
                                        <Grid mr={2}>
                                            <GridViewRoundedIcon/>
                                        </Grid>
                                        <Grid>
                                            <Typography>
                                                Home
                                            </Typography>
                                        </Grid>
                                    </PrimeListItem>
                                </Grid>
                                <Divider/>
                                <Grid p={1}>
                                    <PrimeListItem>
                                        <Grid mr={2}>
                                            <LogoutRoundedIcon/>
                                        </Grid>
                                        <Grid>
                                            <Typography>
                                                Logout
                                            </Typography>
                                        </Grid>
                                    </PrimeListItem>
                                </Grid>
                            </CustomDropMenu>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomAppBar>
            <Menu menu={menu} setMenu={setMenu}/>
        </Box>
    )
}

export default Header