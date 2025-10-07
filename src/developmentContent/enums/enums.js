import { CiUser } from "react-icons/ci";

export const registerUserFilter = [
    {
        label:"User",
        value:"user",
        icon:<CiUser size={20} />
    },
    {
        label:"Therapist",
        value:"therapist",
        icon:<CiUser size={20} />
    },
]

export const appointmentFilter = [
    {
        label:"All",
        value:"all",
    },
    {
        label:"Upcoming",
        value:"upcoming",
    },
    {
        label:"Completed",
        value:"completed",
    }
]

export const categoryFilter = [
    {
        label:"All",
        value:"all",
    },
    {
        label:"Requested",
        value:"requested",
    }
]
