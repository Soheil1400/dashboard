import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {theme} from "../../theme/theme";
import {useEffect, useState} from "react";
import ContactProfileHead from "../../components/contact/contactProfile/contactProfileHead";
import ContactProfileInput from "../../components/contact/contactProfile/contactProfileInput";
import AlertMessage from "../../components/alert/alert";

const ContactProfile = ({name}) => {
    const [edit, setEdit] = useState(true)
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false);
    const [contact, setContact] = useState({
        id:'',
        fName: '',
        lName: '',
        image: '',
        email: '',
        type: '',
        age: '',
        country: '',
        favorite: false
    })
    const contacts = useSelector(state => state.contact.items)
    useEffect(() => {
        if (name !== 'new'){
            setContact(contacts.filter(c => c.fName === name)[0])
        }else{
            setEdit(false)
        }
    }, [])
    return (
        <Grid container spacing={2} bgcolor={theme.palette.secondary.light} p={2}>
            <ContactProfileHead contact={contact}/>
            <ContactProfileInput edit={edit} setEdit={setEdit} contact={contact} setContact={setContact} setMessage={setMessage} setOpen={setOpen}/>
            <AlertMessage open={open} setOpen={setOpen} message={message}/>
        </Grid>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {contactProfile: 'name'}}
        ],
        fallback: 'blocking'
    };
}

export async function getStaticProps({params}) {
    const name = params.contactProfile
    return {
        props: {
            name
        },
    }
}

export default ContactProfile