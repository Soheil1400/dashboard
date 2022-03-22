import {theme} from "../../../theme/theme";
import {Paper, Typography, Grid, TextField, MenuItem} from "@mui/material";
import {useState} from "react";
import {PrimeButton} from "../../../styles/globals";
import AlertMessage from "../../../components/alert/alert";
import {useDispatch} from "react-redux";
import {addMoney} from "../../../redux/reducers/money.reducer";
import {useRouter} from "next/router";

const AddMoney = () => {
    const router = useRouter()
    const [moneyObj, setMoneyObject] = useState({type: '', title: '', count: 0, time: 0})
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false);
    const menu = [{title: 'income'}, {title: 'expense'}]
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(moneyObj).filter(c => c === '').length === 0 && moneyObj.count > 0){
            dispatch(addMoney(moneyObj))
            setOpen(true)
            setMessage('success')
            setMoneyObject({type: '', title: '', count: 0, time: 0})
            router.replace('/moneyManager')
        }else {
            setOpen(true)
            setMessage('empty')
        }
    }
    const handleChange = (e) => {
        setMoneyObject({...moneyObj, [e.target.name]: e.target.value})
    }
    return (
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <Grid item xs={12}>
                <Paper>
                    <Grid p={2}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2} mb={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField color={'secondary'} select fullWidth label={'Type'} name={'type'}
                                               value={moneyObj.type} onChange={handleChange}>
                                        {menu.map((m, index) => (
                                            <MenuItem key={index} value={m.title}>
                                                {m.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField fullWidth color={'secondary'} label={'Title'} name={'title'}
                                               value={moneyObj.title} onChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField fullWidth color={'secondary'} label={'Price'} name={'count'} type={'number'}
                                               value={moneyObj.count} onChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField fullWidth color={'secondary'} label={'time'} name={'time'} type={'number'}
                                               value={moneyObj.time} onChange={handleChange}/>
                                </Grid>
                            </Grid>
                            <Grid display={'flex'} justifyContent={'center'}>
                                <PrimeButton type={'submit'} sx={{width:'100%'}}>
                                    <Typography>
                                        Add Money
                                    </Typography>
                                </PrimeButton>
                            </Grid>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
            <AlertMessage message={message} setOpen={setOpen} open={open}/>
        </Grid>
    )
}

export default AddMoney