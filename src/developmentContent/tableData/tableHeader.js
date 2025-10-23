import { RenderStatusCell, RenderTextCell, RenderImageCell } from "@/components/organisms/ResponsiveTable/CommonCells";

export const tableHeader = [
  {
    title: "Client Name",
    key: "clientName",
    style: {
      width: "18%",
      minWidth: "140px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
  },
  {
    title: "Email",
    key: "email",
    style: {
      width: "22%",
      minWidth: "180px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Therapist",
    key: "therapist",
    style: {
      width: "16%",
      minWidth: "110px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "14%",
      minWidth: "90px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Category",
    key: "category",
    style: {
      width: "14%",
      minWidth: "110px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Status",
    key: "status",
    style: {
      width: "10%",
      minWidth: "90px",
    },
    renderValue: (cellValue) => <RenderStatusCell cellValue={cellValue} />,
  },
  {
    title: "Actions",
    key: "actions",
    style: {
      width: "12%",
      minWidth: "100px",
    },
  },
];

// Appointment Table Header
export const appointmentTableHeader = [
  {
    title: "Client Name",
    key: "clientName",
    style: {
      width: "18%",
      minWidth: "140px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
  },
  {
    title: "Email",
    key: "email",
    style: {
      width: "20%",
      minWidth: "160px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Therapist",
    key: "therapist",
    style: {
      width: "16%",
      minWidth: "120px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Category",
    key: "category",
    style: {
      width: "18%",
      minWidth: "140px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Location",
    key: "location",
    style: {
      width: "14%",
      minWidth: "110px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "12%",
      minWidth: "100px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Status",
    key: "status",
    style: {
      width: "10%",
      minWidth: "90px",
    },
    renderValue: (cellValue) => <RenderStatusCell cellValue={cellValue} />,
  },
  {
    title: "Actions",
    key: "actions",
    style: {
      width: "12%",
      minWidth: "100px",
    },
  },
];

// Category Table Header
export const categoryTableHeader = [
  {
    title: "Category Name",
    key: "categoryName",
    style: {
      width: "40%",
      minWidth: "200px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "30%",
      minWidth: "150px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Status",
    key: "status",
    style: {
      width: "20%",
      minWidth: "120px",
    },
    renderValue: (cellValue) => <RenderStatusCell cellValue={cellValue} />,
  },
  {
    title: "Actions",
    key: "actions",
    style: {
      width: "10%",
      minWidth: "80px",
    },
  },
];

// Requested Table Header
export const requestedTableHeader = [
  {
    title: "Category Name",
    key: "categoryName",
    style: {
      width: "30%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
  },
  {
    title: "Therapist Name",
    key: "therapistName",
    style: {
      width: "25%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Actions",
    key: "actions",
    style: {
      width: "30%",
    },
  },
];

// User Registration Table Header (simplified for the image)
export const userRegistrationTableHeader = [
  {
    title: "Client Name",
    key: "clientName",
    style: {
      width: "30%",
      minWidth: "150px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
  },
  {
    title: "Email",
    key: "email",
    style: {
      width: "40%",
      minWidth: "200px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "20%",
      minWidth: "120px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Actions",
    key: "actions",
    style: {
      width: "10%",
      minWidth: "80px",
    },
  },
];

// Therapist Table Header
export const therapistTableHeader = [
  {
    title: "Therapist Name",
    key: "therapistName",
    style: {
      width: "18%",
      minWidth: "140px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
  },
  {
    title: "Email",
    key: "email",
    style: {
      width: "18%",
      minWidth: "160px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Location",
    key: "location",
    style: {
      width: "16%",
      minWidth: "120px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Phone Number",
    key: "phoneNumber",
    style: {
      width: "14%",
      minWidth: "110px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Language",
    key: "language",
    style: {
      width: "10%",
      minWidth: "90px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "12%",
      minWidth: "100px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Status",
    key: "status",
    style: {
      width: "10%",
      minWidth: "90px",
    },
    renderValue: (cellValue) => <RenderStatusCell cellValue={cellValue} />,
  },
  {
    title: "Actions",
    key: "actions",
    style: {
      width: "12%",
      minWidth: "100px",
    },
  },
];

// Billing Table Header
export const billingTableHeader = [
  {
    title: "Client Name",
    key: "clientName",
    style: {
      width: "25%",
      minWidth: "150px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
  },
  {
    title: "Email",
    key: "email",
    style: {
      width: "35%",
      minWidth: "200px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "20%",
      minWidth: "120px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
  {
    title: "Amount",
    key: "amount",
    style: {
      width: "20%",
      minWidth: "100px",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
  },
];


// FAQ Table Header
export const faqTableHeader = [
  {
    title: "Question",
    key: "question",
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
    style: {
      width: "35%",
    },
  },
  {
    title: "Answer",
    key: "answer",
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
      style: {
        width: "35%",
    },
  },
  {
    title: "Status",
    key: "status",
    renderValue: (cellValue) => <RenderStatusCell cellValue={cellValue} />,
    style: {
      width: "20%",
    },
  },

  {
    title: "Actions",
    key: "actions",
    style: {
      width: "10%",
    },
  },
];

// Blog Table Header
export const blogTableHeader = [
  {
    title: "Blog Image",
    key: "photo",
    renderValue: (cellValue) => (
      <RenderImageCell cellValue={cellValue} />
    ),
    style: {
      width: "10%",
    },
  },
  {
    title: "Blog Title",
    key: "blogTitle",
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} bold />
    ),
    style: {
      width: "20%",
    },
  },
 
  {
    title: "Blog Content",
    key: "blogContent",
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
    style: {
      width: "30%",
    },
  },
  {
    title: "Category",
    key: "category",
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue} />
    ),
    style: {
      width: "20%",
    },
  },
  {
    title: "Status",  
    key: "status",
    renderValue: (cellValue) => <RenderStatusCell cellValue={cellValue} />,
    style: {
      width: "15%",
    },
  },
  {
    title: "Actions",
    key: "actions",
    style: {
      width: "5%",
    },
  },
];