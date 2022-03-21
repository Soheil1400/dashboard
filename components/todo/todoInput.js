import {Grid, IconButton, Paper, TextField} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {addTodo, editTodo} from "../../redux/reducers/todo.reducer";
import {useDispatch} from "react-redux";

const TodoInput = ({input, setInput, setMessage, setOpen}) => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
    }
    const handleAddTodo = () => {
        if (input.obj === 'New Todo'){
            if (input.title === ''){
                return(
                    setMessage('empty'),
                    setOpen(true)
                )
            }
            dispatch(addTodo(input))
        }else if (input.obj === 'Edit Todo'){
            dispatch(editTodo(input))
        }
        setInput({open: false, title: '', obj: '',id:''})
        setMessage('success')
        setOpen(true)
    }
    return(
        <Grid item xs={12}>
            <Paper className={'animate__animated animate__bounceInLeft'}>
                <Grid p={2}>
                    <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <TextField fullWidth onChange={handleChange} value={input.title} name={'title'} color="secondary" id="standard-basic" label={input.obj} variant="outlined" autoFocus/>
                        <Grid display={'flex'} flexDirection={'row'}>
                            <IconButton onClick={handleAddTodo}>
                                <AddRoundedIcon/>
                            </IconButton>
                            <IconButton onClick={() => setInput({open: false, title: '', obj: '',id:''})}>
                                <CloseRoundedIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default TodoInput