import {Grid, Paper, Table, TableContainer, TextField, useMediaQuery} from "@mui/material";
import {useState} from "react";
import ContactTableHead from "./contactTableHead";
import ContactTableBody from "./contactTableBody";

const ContactTable = () => {
    const [search, setSearch] = useState('')
    const matchContactTable = useMediaQuery('(min-width:700px)')
    return(
        <Grid item xs={12}>
            <Paper>
                <Grid p={1.2}>
                    <Grid>
                        <TextField fullWidth onChange={(e) => setSearch(e.target.value)} value={search}
                                   name={'title'}
                                   color="secondary" id="standard-basic" label={'Search'} variant="outlined"/>
                    </Grid>
                    <TableContainer>
                        <Table sx={{maxWidth: '100%'}} aria-label="simple table">
                            <ContactTableHead matchContactTable={matchContactTable}/>
                            <ContactTableBody matchContactTable={matchContactTable} search={search}/>
                        </Table>
                    </TableContainer>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ContactTable