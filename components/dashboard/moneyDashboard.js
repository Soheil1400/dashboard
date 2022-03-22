import {Divider, Grid, Paper, Typography} from "@mui/material";
import Link from "next/link";
import {PrimeButton} from "../../styles/globals";
import {useSelector} from "react-redux";
import MoneyManagerCardHead from "../moneyManager/moneyManagerCardHead";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

const MoneyDashboard = () => {
    const moneys = useSelector(state => state.money.items)
    const income = moneys.map(i => i.income.reduce((total,item)=> {total = total + item.count ; return total},0))
    const expense = moneys.map(i => i.expense.reduce((total,item)=> {total = total + item.count ; return total},0))
    const incomes = income.reduce((total,item)=> {total = total + item ; return total},0)
    const expenses = expense.reduce((total,item)=> {total = total + item ; return total},0)
    const balance = income.reduce((total,item)=> {total = total + item ; return total},0) - expense.reduce((total,item)=> {total = total + item ; return total},0)
    return(
        <Grid item xs={12} sm={6} md={4}>
            <Paper>
                <Grid p={2}>
                    <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={1}>
                        <Typography>
                            Money Manager
                        </Typography>
                        <Link href={'/moneyManager'}>
                            <PrimeButton>
                                Check More
                            </PrimeButton>
                        </Link>
                    </Grid>
                    <Divider my={1}/>
                    <Grid my={1}>
                        <MoneyManagerCardHead total={balance} title={'Balance'} icon={<AttachMoneyRoundedIcon/>}/>
                    </Grid>
                    <Grid my={1}>
                        <MoneyManagerCardHead total={incomes} title={'Income'} icon={<TrendingUpIcon color={'success'}/>}/>
                    </Grid>
                    <Grid my={1}>
                        <MoneyManagerCardHead total={expenses} title={'Expense'} icon={<TrendingDownIcon color={'error'}/>}/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default MoneyDashboard