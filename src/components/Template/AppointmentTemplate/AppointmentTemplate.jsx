"use client";
import React, { useState } from "react";
import classes from "./AppointmentTemplate.module.css";
import { Container } from "react-bootstrap";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import PopOver from "@/components/molecules/PopOver";
import { appointmentFilter } from "@/developmentContent/enums/enums";
import {
  appointmentTableHeader,
  appointmentData,
} from "@/developmentContent/tableData/tableHeader";
import { appointmentData as appointmentTableData } from "@/developmentContent/tableData/tableBody";
import { dashboardPopoverOptions } from "@/developmentContent/popoverOptions";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import { useRouter } from "next/navigation";

const AppointmentTemplate = () => {
  const [SelectedData, setSelectedData] = useState(appointmentFilter[0]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({ appointments: appointmentTableData });
  const [loading, setLoading] = useState("");

  const router = useRouter();

  const onClickPopover = (label, rowItem) => {
    label === "view" ? router.push(`/appointment/${rowItem?.id}`) : null;
  };

  const getStatusClass = (status) => {
    return status === "Completed"
      ? classes.completedStatus
      : classes.upcomingStatus;
  };

  return (
    <div>
      <Container>
        <TopHeader title="Appointments" backButton={false} />
        <ShadowWrapper>
          <TableHeader
            onSearch={setSearch}
            search={search}
            filterData={appointmentFilter}
            SelectedData={SelectedData}
            setSelectedData={setSelectedData}
          />
          <ResponsiveTable
            data={data?.appointments}
            tableHeader={appointmentTableHeader}
            hasPagination={false}
            loading={loading === "get-data"}
            renderItem={({ item, key, rowIndex, renderValue }) => {
              const rowItem = data?.appointments[rowIndex];

              if (renderValue) {
                return renderValue(item, rowItem);
              }

              if (key === "status") {
                return (
                  <span
                    className={`${classes.statusPill} ${getStatusClass(item)}`}
                  >
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

export default AppointmentTemplate;
