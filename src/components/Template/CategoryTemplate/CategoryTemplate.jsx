"use client";
import React, { useState } from "react";
import classes from "./CategoryTemplate.module.css";
import { Container } from "react-bootstrap";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import PopOver from "@/components/molecules/PopOver";
import { categoryFilter } from "@/developmentContent/enums/enums";
import { categoryTableHeader } from "@/developmentContent/tableData/tableHeader";
import { categoryData } from "@/developmentContent/tableData/tableBody";
import { dashboardPopoverOptions } from "@/developmentContent/popoverOptions";
import { useRouter } from "next/navigation";

const CategoryTemplate = () => {
  const [SelectedData, setSelectedData] = useState(categoryFilter[0]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({ categories: categoryData });
  const [loading, setLoading] = useState("");
  
  const router = useRouter();

  const onClickPopover = (label, rowItem) => {
    label === "view" ? router.push(`/category/${rowItem?.id}`) : null;
  };

  const getStatusClass = (status) => {
    return status === "Active" ? classes.activeStatus : classes.inactiveStatus;
  };

  return (
    <>
      <Container>
        <TopHeader title="Category" backButton={false} />
        <ShadowWrapper>
          <TableHeader 
            onSearch={setSearch}
            search={search}
            filterData={categoryFilter}
            SelectedData={SelectedData}
            setSelectedData={setSelectedData}
          />
          <ResponsiveTable
            data={data?.categories}
            tableHeader={categoryTableHeader}
            hasPagination={false}
            loading={loading === "get-data"}
            renderItem={({ item, key, rowIndex, renderValue }) => {
              const rowItem = data?.categories[rowIndex];
              
              if (renderValue) {
                return renderValue(item, rowItem);
              }

              if (key === "status") {
                return (
                  <span className={`${classes.statusPill} ${getStatusClass(item)}`}>
                    {item}
                  </span>
                );
              }

              if (key === "actions") {
                return (
                  <div className={classes.actionButtons}>
                    <PopOver
                      popover={dashboardPopoverOptions}
                      onClick={(label) => {
                        onClickPopover(label, rowItem);
                      }}
                    />
                  </div>
                );
              }

              return item || "";
            }}
          />
        </ShadowWrapper>
        
      </Container>
    </>
  );
};

export default CategoryTemplate;
