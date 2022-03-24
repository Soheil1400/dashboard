import {theme} from "../../../theme/theme";
import {Paper, Grid} from "@mui/material";
import {useState} from "react";
import AlertMessage from "../../../components/alert/alert";
import {useDispatch} from "react-redux";
import {addIncome,addExpense} from "../../../redux/reducers/money.reducer";
import {useRouter} from "next/router";
import AddMoneyForm from "../../../components/moneyManager/addMoney/addMoneyForm";

const AddMoney = () => {
    const router = useRouter()
    const [moneyObj, setMoneyObj] = useState({type: '', title: '', count: 0, month: ''})
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(moneyObj).filter(c => c === '').length === 0 && moneyObj.count > 0){
            if (moneyObj.type === 'income'){
                dispatch(addIncome(moneyObj))
            }else {
                dispatch(addExpense(moneyObj))
            }
            setMessage('success')
            setOpen(true)
            setMoneyObj({type: '', title: '', count: 0, month: ''})
            router.replace('/moneyManager')
        }else {
            setOpen(true)
            setMessage('empty')
        }
    }
    return (
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <Grid item xs={12}>
                <Paper>
                    <Grid p={2}>
                        <form onSubmit={handleSubmit}>
                            <AddMoneyForm moneyObj={moneyObj} setMoneyObj={setMoneyObj}/>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
            <AlertMessage message={message} setOpen={setOpen} open={open}/>
        </Grid>
    )
}

export default AddMoney