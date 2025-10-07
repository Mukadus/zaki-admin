import { RenderStatusCell, RenderTextCell } from "@/components/organisms/ResponsiveTable/CommonCells";

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