import styles from '../styles/Home.module.css'
import {Grid} from "@mui/material";
import {theme} from "../theme/theme";
import TodoDashboard from "../components/dshboard/todoDashboard";
import ContactDashboard from "../components/dshboard/contactDashboard";
import DashboardHead from "../components/dshboard/dashboardHead";

export default function Home() {
    return (
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <DashboardHead/>
            <ContactDashboard/>
            <TodoDashboard/>
        </Grid>
    )
}
