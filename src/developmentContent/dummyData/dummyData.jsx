import {
  HiMiniCalendarDays,
  HiMiniCurrencyDollar,
  HiMiniUserGroup,
  HiMiniUsers,
} from "react-icons/hi2";

export const dashboardData = {
  recentTherapistData: [
    {
      _id: 1,
      fullName: "John Doe",
      description:
        "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
      slots: "11:00 - 12:00 PM",
      location: "11:00 - 12:00 PM",
      image: "/svgs/profile.svg",
      rating: 4.5,
    },
    {
      _id: 2,
      fullName: "Jane Doe",
      description:
        "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
      slots: "11:00 - 12:00 PM",
      location: "11:00 - 12:00 PM",
      image: "/svgs/profile.svg",
      rating: 4.5,
    },
    {
      _id: 3,
      fullName: "John Doe",
      description:
        "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
      slots: "11:00 - 12:00 PM",
      location: "11:00 - 12:00 PM",
      image: "/svgs/profile.svg",
      rating: 4.5,
    },
  ],
  notificationCardData: [
    {
      _id: 1,
      title: "New Therapist Registration",
      description:
        "John Smith has registered as a therapist and is awaiting profile verification. Please review and approve or reject the request.",
      time: "Today 11:50 PM",
    },
    {
      _id: 2,
      title: "New Therapist Registration",
      description:
        "John Smith has registered as a therapist and is awaiting profile verification.",
      time: "Today 11:50 PM",
    },
  ],
  dashboardTableData: [
    {
      id: 1,
      clientName: "Loretta Rippin",
      email: "Loretta.Rippin51@gmail.com",
      therapist: "Floyd Hackett",
      date: "October 30, 2017",
      category: "Therapy Specialist",
      status: "Upcoming",
    },
    {
      id: 2,
      clientName: "Everett Rodriguez",
      email: "Everett70@yahoo.com",
      therapist: "Katie Rohan",
      date: "October 30, 2017",
      category: "Therapy Specialist",
      status: "Completed",
    },
    {
      id: 3,
      clientName: "Casey Beer",
      email: "Janie_Hermann13@yahoo.com",
      therapist: "Alyssa Schulist",
      date: "October 30, 2017",
      category: "Therapy Specialist",
      status: "Upcoming",
    },
  ],
  barChartData: [1.5, 2.5, 2.0, 3.5, 1.2, 2.2, 1.0, 2.8, 1.2, 1.8, 1.2, 2.8],
};

export const UserRegisterationoDetail = {
  user:{
    image:"/app-images/userDummy.png",
    userName:"John Doe",
    userEmail:"janie_Hermann13@yahoo.com",
    contact:"(209) 555-0104",
    location:"Ondrickachester",
    language:"English",
  },
  recentTherapistData : [
    {
      _id: 1,
      name: "John Doe",
      description:
        "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
      slots: "11:00 - 12:00 PM",
      location: "11:00 - 12:00 PM",
      image: "/svgs/profile.svg",
      rating: 4.5,
    },
    {
      _id: 2,
      name: "Jane Doe",
      description:
        "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
      slots: "11:00 - 12:00 PM",
      location: "11:00 - 12:00 PM",
      image: "/svgs/profile.svg",
      rating: 4.5,
    },
    {
      _id: 3,
      name: "John Doe",
      description:
        "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
      slots: "11:00 - 12:00 PM",
      location: "11:00 - 12:00 PM",
      image: "/svgs/profile.svg",
      rating: 4.5,
    },
  ]
}

export const recentTherapistData = [
  {
    _id: 1,
    name: "John Doe",
    description:
      "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
    slots: "11:00 - 12:00 PM",
    location: "11:00 - 12:00 PM",
    image: "/svgs/profile.svg",
    rating: 4.5,
  },
  {
    _id: 2,
    name: "Jane Doe",
    description:
      "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
    slots: "11:00 - 12:00 PM",
    location: "11:00 - 12:00 PM",
    image: "/svgs/profile.svg",
    rating: 4.5,
  },
  {
    _id: 3,
    name: "John Doe",
    description:
      "As a licensed therapist with 10+ years of experience, I help families and couples build stronger relationships through open communication and trust.",
    slots: "11:00 - 12:00 PM",
    location: "11:00 - 12:00 PM",
    image: "/svgs/profile.svg",
    rating: 4.5,
  },
];

export const notificationCardData = [
  {
    _id: 1,
    title: "New Therapist Registration",
    description:
      "John Smith has registered as a therapist and is awaiting profile verification. Please review and approve or reject the request.",
    time: "Today 11:50 PM",
  },
  {
    _id: 2,
    title: "New Therapist Registration",
    description:
      "John Smith has registered as a therapist and is awaiting profile verification.",
    time: "Today 11:50 PM",
  },
];

export const analyticsData = [
  {
    title: "Total Therapists",
    value: "344",
    change: "+36%",
    icon: HiMiniUsers,
  },
  {
    title: "Total Clients",
    value: "344",
    change: "+36%",
    icon: HiMiniUserGroup,
  },
  {
    title: "Total Appointments",
    value: "344",
    change: "+36%",
    icon: HiMiniCalendarDays,
  },
  {
    title: "Revenue",
    value: "$344",
    change: "+36%",
    icon: HiMiniCurrencyDollar,
  },
];

export const signupChartData = [
  23.5, 12.5, 15.0, 22.0, 19.5, 10.5, 13.0, 19.5, 23.5, 13.0, 19.5, 13.0,
];

export const barChartData = [
  1.5, 2.5, 2.0, 3.5, 1.2, 2.2, 1.0, 2.8, 1.2, 1.8, 1.2, 2.8,
];

export const areaChartData = [
  200, 350, 250, 450, 300, 600, 400, 750, 500, 850, 600, 700, 450, 800, 550,
  900, 650, 550, 350, 250, 400, 600, 500, 750, 600, 800, 700, 650, 500, 300,
];
