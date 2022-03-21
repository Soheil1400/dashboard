import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import NumbersRoundedIcon from "@mui/icons-material/NumbersRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";

export const profileInput = [
    {
        title:'fName',
        label:'First Name',
        icon:<BadgeOutlinedIcon/>
    },
    {
        title:'lName',
        label:'Last Name',
        icon:<BadgeOutlinedIcon/>
    },
    {
        title:'type',
        label:'Type',
        icon:<AccessibilityNewRoundedIcon/>
    },
    {
        title:'age',
        label:'Age',
        icon:<NumbersRoundedIcon/>
    },
    {
        title:'email',
        label:'Email',
        icon:<MailOutlineRoundedIcon/>
    },
    {
        title:'country',
        label:'Country',
        icon:<PublicRoundedIcon/>
    }
]
