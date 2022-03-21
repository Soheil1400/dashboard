import {Divider, Grid, Paper, Typography} from "@mui/material";
import {checkTodo, deleteTodo} from "../../redux/reducers/todo.reducer";
import {PrimeIconButton} from "../../styles/globals";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import {useDispatch, useSelector} from "react-redux";

const TodoTable = ({setInput, condition, title, setMessage, setOpen}) => {
    const todos = useSelector(state => state.todo.items)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
        setOpen(true)
        setMessage('success')
    }
    return(
        <Grid item xs={12} sm={6} md={4} my={1}>
            <Paper className={'animate__animated animate__bounce'}>
                <Grid p={2}>
                    <Grid>
                        <Typography>
                            {title}
                        </Typography>
                    </Grid>
                    <Divider my={1}/>
                    {todos.filter((todo) => todo.done !== condition).map((todo) => (
                        <Grid key={todo.id} my={1} display={'flex'} alignItems={'center'}
                              justifyContent={'space-between'}>
                            <Typography onClick={() => dispatch(checkTodo(todo.id))} variant={'h6'} sx={{
                                textDecoration: todo.done === true ? 'line-through' : '',
                                cursor: 'pointer',
                            }}>
                                {todo.title}
                            </Typography>
                            <Grid>
                                <PrimeIconButton sx={{mr: 1}} onClick={() => setInput({open: true, title: todo.title, obj: 'Edit Todo',id:todo.id})}>
                                    <EditRoundedIcon/>
                                </PrimeIconButton>
                                <PrimeIconButton onClick={()=>handleDelete(todo.id)}>
                                    <DeleteOutlineRoundedIcon/>
                                </PrimeIconButton>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Grid>
    )
}

export default TodoTable