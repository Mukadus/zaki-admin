"use client";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import { registerUserFilter } from "@/developmentContent/enums/enums";
import { tableHeader } from "@/developmentContent/tableData/tableHeader";
import { tableBodyData } from "@/developmentContent/tableData/tableBody";
import { dashboardPopoverOptions } from "@/developmentContent/popoverOptions";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./UserRegistrationTemplate.module.css";
import PopOver from "@/components/molecules/PopOver";

const UserRegistrationTemplate = () => {
  const [SelectedData, setSelectedData] = useState(registerUserFilter[0]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({ therapists: tableBodyData });
  const [loading, setLoading] = useState("");

  const onClickPopover = (label, rowItem) => {
    console.log(label, rowItem);
  };

  const getStatusClass = (status) => {
    return status === "Completed" ? classes.completedStatus : classes.upcomingStatus;
  };

  // Debug logging
  console.log("Table data:", data?.therapists);
  console.log("Table data length:", data?.therapists?.length);
  console.log("Table header:", tableHeader);
  console.log("First row data:", data?.therapists?.[0]);

  return (
    <div>
      <Container>
        <TopHeader title="User Registration" backButton={false} />
        <ShadowWrapper>
          <TableHeader
            onSearch={setSearch}
            search={search}
            filterData={registerUserFilter}
            SelectedData={SelectedData}
            setSelectedData={setSelectedData}
          />
          <ResponsiveTable
            data={data?.therapists}
            tableHeader={tableHeader}
            hasPagination={false}
            loading={loading === "get-data"}
            renderItem={({ item, key, rowIndex, renderValue }) => {
              const rowItem = data?.therapists[rowIndex];
              
              // Debug logging for each cell
              console.log(`Cell ${key}:`, item, "Row data:", rowItem);
              
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
    </div>
  );
};

export default UserRegistrationTemplate;
