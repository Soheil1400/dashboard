import styles from '../styles/Home.module.css'
import {Grid} from "@mui/material";
import {theme} from "../theme/theme";
import TodoDashboard from "../components/dashboard/todoDashboard";
import ContactDashboard from "../components/dashboard/contactDashboard";
import DashboardHead from "../components/dashboard/dashboardHead";
import MoneyDashboard from "../components/dashboard/moneyDashboard";

export default function Home() {
    return (
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <DashboardHead/>
            <ContactDashboard/>
            <MoneyDashboard/>
            <TodoDashboard/>
        </Grid>
    )
}
