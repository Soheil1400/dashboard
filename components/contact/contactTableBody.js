import {Avatar, Checkbox, Chip, Grid, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import Link from "next/link";
import {theme} from "../../theme/theme";
import {checkFavorite} from "../../redux/reducers/contact.reducer";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";

const ContactTableBody = ({search ,matchContactTable}) => {
    const contacts = useSelector(state => state.contact.items)
    const dispatch = useDispatch()
    return(
        <TableBody>
            {contacts.filter(s => s.fName.toLowerCase().includes(search.toLowerCase())).map((c, index) => (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                        <Grid display={'flex'} alignItems={'center'}>
                            <Link href={`/contact/${c.fName}`}>
                                <Grid mr={2} sx={{cursor: 'pointer'}}>
                                    <Avatar src={c.image}/>
                                </Grid>
                            </Link>
                            <Grid display={'flex'} flexDirection={'column'}>
                                <Grid>
                                    <Typography>
                                        {c.fName}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography color={theme.palette.grey["600"]}
                                                variant={'caption'}>
                                        {c.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TableCell>
                    {matchContactTable ?
                        <>
                            <TableCell>
                                <Chip label={c.type} color="secondary"/>
                            </TableCell>
                            <TableCell>{c.age}</TableCell>
                            <TableCell>{c.country}</TableCell>
                            <TableCell>
                                <Checkbox checked={c.favorite}
                                          onClick={() => dispatch(checkFavorite(c.id))}
                                          icon={<FavoriteBorder/>}
                                          checkedIcon={<Favorite color={'error'}/>}/>
                            </TableCell>
                        </>
                        : null}
                </TableRow>
            ))}
        </TableBody>
    )
}

export default ContactTableBody