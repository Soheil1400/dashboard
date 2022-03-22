import {Divider, Grid, Paper, Typography} from "@mui/material";
import Link from "next/link";
import {PrimeButton} from "../../styles/globals";
import {useSelector} from "react-redux";

const TodoDashboard = () => {
    const todos = useSelector(state => state.todo.items)
    return(
        <Grid item xs={12} sm={6} md={4}>
            <Paper>
                <Grid p={2}>
                    <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={1}>
                        <Typography>
                            Some Todos
                        </Typography>
                        <Link href={'/todo'}>
                            <PrimeButton>
                                Check More
                            </PrimeButton>
                        </Link>
                    </Grid>
                    <Divider my={1}/>
                    <Grid>
                        {todos.filter( t => t.done === false).map( t => (
                            <Typography key={t.id} my={1}>
                                {t.title}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default TodoDashboard