import {Grid, Paper} from "@mui/material";
import {theme} from "../../theme/theme";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MoneyManagerCard from "../../components/moneyManager/moneyManagerCard";
import {useSelector} from "react-redux";
import MoneyManagerCardHead from "../../components/moneyManager/moneyManagerCardHead";

const Index = () => {
    const moneys = useSelector(state => state.money.items)
    const incomes = moneys.map(i => i.income.reduce((total,item)=> {total = total + item.count ; return total},0))
    const expenses = moneys.map(i => i.expense.reduce((total,item)=> {total = total + item.count ; return total},0))
    const balance = incomes.reduce((total,item)=> {total = total + item ; return total},0) - expenses.reduce((total,item)=> {total = total + item ; return total},0)
    return(
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <Grid item xs={12}>
                <Paper>
                    <Grid p={2}>
                        <MoneyManagerCardHead total={balance} icon={<AttachMoneyRoundedIcon/>} title={'Balance'}/>
                    </Grid>
                </Paper>
            </Grid>
            <MoneyManagerCard title={'Income'} arr={incomes} icon={<TrendingUpIcon color={'success'}/>}/>
            <MoneyManagerCard title={'Expense'} arr={expenses} icon={<TrendingDownIcon color={'error'}/>}/>
        </Grid>
    )
}

export default Index