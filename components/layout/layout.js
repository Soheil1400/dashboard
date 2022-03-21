import Header from "../header/header";
import {ThemeProvider} from "@mui/material";
import {theme} from "../../theme/theme";
import { Provider } from "react-redux";
import store, { persistor } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({children}) => {
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Header/>
                    <main>
                        {children}
                    </main>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default Layout