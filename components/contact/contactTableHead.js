import {TableCell, TableHead, TableRow} from "@mui/material";

const ContactTableHead = ({matchContactTable}) => {
    return(
        <TableHead>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell>User Profile</TableCell>
                {matchContactTable ?
                    <>
                        <TableCell>Type</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Favorite</TableCell>
                    </> : null}
            </TableRow>
        </TableHead>
    )
}

export default ContactTableHead