import { RenderTextCell, RenderDateCell } from "@/components/organisms/ResponsiveTable/CommonCells";

export const cmsTableHeader = [
    {
      title: "S.No.",
      key: "sNo",
      style: { width: "25%" },
    },
    {
      title: "Page Name",
      key: "pageName",
      style: { width: "25%" },
      renderValue: (item) => <RenderTextCell cellValue={item} />,
    },
    {
      title: "Created On",
      key: "createdOn",
      style: { width: "25%" },
      renderValue: (item) => <RenderDateCell cellValue={item} />,
    },

    {
      title: "",
      key: "action",
      style: { width: "25%" },
    },
  ];

  export const cmsBodyData = [
    {
      pageName: "Home",
      createdOn: "2021-01-01",
    },
    {
      pageName: "About",
      createdOn: "2021-01-01",
    },
    {
      pageName: "Contact",
      createdOn: "2021-01-01",
    },
    {
      pageName: "Privacy Policy",
      createdOn: "2021-01-01",
    },
    {
      pageName: "Terms of Service",
      createdOn: "2021-01-01",
    },
    {
      pageName: "FAQ",
      createdOn: "2021-01-01",
    },
    {
      pageName: "Blog",
      createdOn: "2021-01-01",
    },
    {
      pageName: "Contact",
      createdOn: "2021-01-01",
    },
  ];