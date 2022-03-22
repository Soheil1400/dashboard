import {Grid, Typography} from "@mui/material";

const MoneyManagerCardHead = ({icon, total, title}) => {
    return(
        <Grid>
            <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Grid display={'flex'} alignItems={'center'}>
                    {icon}
                    <Typography ml={1} variant={'h6'}>
                        {title}
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant={'h6'} fontWeight={'bold'}>
                        ${total}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MoneyManagerCardHead