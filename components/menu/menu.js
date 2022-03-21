import {Divider, Drawer, Grid, Typography} from "@mui/material";
import {PrimeListItem} from "../../styles/globals";
import Link from 'next/link'
import {useRouter} from "next/router";
import {MenuData} from "./data";
import {theme} from "../../theme/theme";

const Menu = ({menu, setMenu}) => {
    const router = useRouter()
    return (
        <Drawer anchor={'left'} open={menu} onClose={() => setMenu(false)}>
            <Grid sx={{width: '260px'}} p={2}>
                {MenuData.map((m, index) => (
                    <Grid key={index}>
                        <Grid>
                            <Typography>
                                {m.title}
                            </Typography>
                        </Grid>
                        <Grid p={1}>
                            {m.additional.map((ma, index) => (
                                <Link href={ma.link} key={index}>
                                    <PrimeListItem onClick={() => setMenu(false)}
                                                   sx={{
                                                       color: router.asPath === ma.link ? theme.palette.secondary.main : '#000',
                                                       backgroundColor: router.asPath === ma.link ? theme.palette.secondary.light : '#fff',
                                                   }}>
                                        <Grid mr={2}>
                                            {ma.icon}
                                        </Grid>
                                        <Grid>
                                            <Typography>
                                                {ma.title}
                                            </Typography>
                                        </Grid>
                                    </PrimeListItem>
                                </Link>
                            ))}
                        </Grid>
                        <Grid my={1}>
                            <Divider variant="middle"/>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Drawer>
    )
}

export default Menu