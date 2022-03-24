import {Checkbox, Grid, InputAdornment, Paper, TextField, Typography, useMediaQuery} from "@mui/material";
import {PrimeButton} from "../../../styles/globals";
import {theme} from "../../../theme/theme";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {addContact, deleteContact, editContact} from "../../../redux/reducers/contact.reducer";
import {useDispatch} from "react-redux";
import {profileInput} from "./data";
import {useRouter} from "next/router";

const ContactProfileInput = ({contact, setContact, setMessage, setOpen,edit ,setEdit}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const matchContactTable = useMediaQuery('(min-width:500px)')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(contact).filter(c => c === '').length === 0) {
            setOpen(true)
            setMessage('success')
            dispatch(editContact(contact))
            setEdit(true)
        }else if (Object.values(contact).filter(c => c === '').length === 2 && contact.id === ''){
            setOpen(true)
            setMessage('success')
            dispatch(addContact(contact))
            setEdit(true)
            router.replace('/contact')
        }else {
            setOpen(true)
            setMessage('empty')
        }
    }
    const handleChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }
    const handleDelete = (id) => {
        dispatch(deleteContact(id))
        router.replace('/contact')
    }
    return (
        <Grid item xs={12}>
            <Paper>
                <form onSubmit={handleSubmit}>
                    <Grid p={3} display={'flex'} flexDirection={'column'}>
                        <Grid container spacing={2}>
                            {profileInput.map((i, index) => (
                                <Grid item xs={12} sm={6} md={3} lg={2} key={index} display={'flex'}
                                      alignItems={'center'} justifyContent={'center'}>
                                    <TextField color="secondary" onChange={handleChange} disabled={edit} InputProps={{
                                        startAdornment: (<InputAdornment position="start">{i.icon}</InputAdornment>)
                                    }} name={i.title} label={i.label} value={contact[i.title]}/>
                                </Grid>))}
                        </Grid>
                        <Grid display={'flex'} flexDirection={matchContactTable ? 'row' : 'column'}
                              justifyContent={'space-between'} mt={2}>
                            {!edit ? (
                                <PrimeButton sx={{
                                    backgroundColor: theme.palette.secondary.light,
                                    color: theme.palette.secondary.main
                                }}
                                             onClick={() => setContact({...contact, favorite: !contact.favorite})}
                                             variant={'contained'} disabled={edit}>
                                    <Checkbox checked={contact.favorite}
                                              icon={<FavoriteBorder/>}
                                              checkedIcon={<Favorite color={'secondary'}/>} sx={{padding: '0'}}/>
                                    <Typography ml={1}>
                                        Favorite
                                    </Typography>
                                </PrimeButton>
                            ) : (
                                <PrimeButton color={'secondary'} variant={'contained'} onClick={() => setEdit(false)}>
                                    <ModeEditOutlineRoundedIcon/>
                                    <Typography ml={1}>
                                        Edit
                                    </Typography>
                                </PrimeButton>
                            )}

                            <Grid my={1}/>
                            {edit ? (
                                <PrimeButton onClick={()=>handleDelete(contact.id)} variant={'contained'}>
                                    <DeleteOutlineRoundedIcon/>
                                    <Typography ml={2}>
                                        Delete
                                    </Typography>
                                </PrimeButton>
                            ) : (
                                <PrimeButton type={'submit'} variant={'contained'}>
                                    <CheckRoundedIcon/>
                                    <Typography ml={2}>
                                        Check
                                    </Typography>
                                </PrimeButton>
                            )}
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}

export default ContactProfileInput