import {Grid, Paper, Typography} from "@mui/material";
import {PrimeButton} from "../../styles/globals";

const TodoHeader = ({setInput}) => {
    return(
        <Grid item xs={12} my={1}>
            <Paper>
                <Grid p={2}>
                    <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant={'h6'}>
                            Todos
                        </Typography>
                        <PrimeButton variant={'contained'} onClick={() => setInput({open: true, title: '', obj: 'New Todo'})}>
                            <Typography>
                                Add New Todo
                            </Typography>
                        </PrimeButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default TodoHeader