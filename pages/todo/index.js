import {Grid} from "@mui/material";
import {theme} from "../../theme/theme";
import {useState} from "react";
import TodoHeader from "../../components/todo/todoHeader";
import TodoInput from "../../components/todo/todoInput";
import TodoTable from "../../components/todo/todoTable";
import AlertMessage from "../../components/alert/alert";

const Todo = () => {
    const [input, setInput] = useState({open: false, title: '', obj: '',id:''})
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false);
    return (
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <TodoHeader setInput={setInput}/>
            {input.open ? <TodoInput input={input} setInput={setInput} setOpen={setOpen} setMessage={setMessage}/> : ''}
            <TodoTable setInput={setInput} title={'All Todos'} condition={''} setOpen={setOpen} setMessage={setMessage}/>
            <TodoTable setInput={setInput} title={'Remaining'} condition={true} setOpen={setOpen} setMessage={setMessage}/>
            <TodoTable setInput={setInput} title={'Complete'} condition={false} setOpen={setOpen} setMessage={setMessage}/>
            <AlertMessage open={open} setOpen={setOpen} message={message}/>
        </Grid>
    )
}

export default Todo