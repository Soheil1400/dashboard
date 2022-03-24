import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

export const MenuData = [
    {
        title:'Home',
        additional:[
            {
                title:'Dashboard',
                icon:<GridViewRoundedIcon/>,
                link:'/'
            }
        ]
    },
    {
        title:'Money Manager',
        additional:[
            {
                title:'Money Manager',
                icon:<InsertChartOutlinedRoundedIcon/>,
                link:'/moneyManager'
            },
            {
                title:'Add Money',
                icon:<AddCardOutlinedIcon/>,
                link:'/moneyManager/addMoney'
            },
        ]
    },
    {
        title:'Todos',
        additional:[
            {
                title:'TodoList',
                icon:<FactCheckOutlinedIcon/>,
                link:'/todo'
            },
        ]
    },
    {
        title:'Contacts',
        additional:[
            {
                title:'Social Contacts',
                icon:<PeopleAltOutlinedIcon/>,
                link:'/contact'
            },
            {
                title:'Add New Contacts',
                icon:<PersonAddOutlinedIcon/>,
                link:'/contact/new'
            },
        ]
    },
]