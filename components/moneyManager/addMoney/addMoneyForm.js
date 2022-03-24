import {Grid, MenuItem, TextField, Typography} from "@mui/material";
import {PrimeButton} from "../../../styles/globals";

const AddMoneyForm = ({moneyObj,setMoneyObj}) => {
    const typeDrop = ['income','expense']
    const monthDrop = ['Jan','Feb','Mar','Apr','May','Jul','Aug','Sep','Oct','Nov','Dec']
    const handleChange = (e) => {
        setMoneyObj({...moneyObj, [e.target.name]: e.target.value})
    }
    return(
        <>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField color={'secondary'} select fullWidth label={'Type'} name={'type'}
                               value={moneyObj.type} onChange={handleChange}>
                        {typeDrop.map((m, index) => (
                            <MenuItem key={index} value={m}>
                                {m}
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
                    <TextField color={'secondary'} select fullWidth label={'Month'} name={'month'}
                               value={moneyObj.month} onChange={handleChange}>
                        {monthDrop.map((m, index) => (
                            <MenuItem key={index} value={m}>
                                {m}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Grid display={'flex'} justifyContent={'center'}>
                <PrimeButton type={'submit'} sx={{width:'100%'}}>
                    <Typography>
                        Add Money
                    </Typography>
                </PrimeButton>
            </Grid>
        </>
    )
}

export default AddMoneyForm