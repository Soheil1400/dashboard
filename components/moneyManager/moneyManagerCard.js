import {Grid, Paper, Typography} from "@mui/material";
import Chart from "./chart";
import MoneyManagerCardHead from "./moneyManagerCardHead";
import {PrimeButton} from "../../styles/globals";
import Link from 'next/link'

const MoneyManagerCard = ({title, icon, arr}) => {
    const total = arr.reduce((total,item)=> {total = total + item ; return total},0)
    return(
        <Grid item xs={12} sm={6}>
            <Paper>
                <Grid p={2}>
                    <MoneyManagerCardHead title={title} icon={icon} total={total}/>
                    <Grid>
                        <Chart arr={arr}/>
                    </Grid>
                    <Grid my={2}>
                        <Link href={'/moneyManager/addMoney'}>
                            <PrimeButton sx={{width:'100%'}}>
                                <Typography>
                                    Add {title}
                                </Typography>
                            </PrimeButton>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default MoneyManagerCard