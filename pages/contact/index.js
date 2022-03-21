import {Grid,} from "@mui/material";
import {theme} from "../../theme/theme";
import ContactHead from "../../components/contact/contactHead";
import ContactTable from "../../components/contact/contactTable";

const Contact = () => {
    return (
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <ContactHead/>
            <ContactTable/>
        </Grid>
    )
}

export default Contact