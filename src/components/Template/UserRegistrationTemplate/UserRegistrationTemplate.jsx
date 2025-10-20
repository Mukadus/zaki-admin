"use client";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import { registerUserFilter, userRegistrationEnum } from "@/developmentContent/enums/enums";
import { userRegistrationTableHeader, therapistTableHeader } from "@/developmentContent/tableData/tableHeader";
import { tableBodyData, therapistData } from "@/developmentContent/tableData/tableBody";
import {  userRegistrationPopoverOptions } from "@/developmentContent/popoverOptions";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import classes from "./UserRegistrationTemplate.module.css";
import PopOver from "@/components/molecules/PopOver";

const UserRegistrationTemplate = () => {
  const [SelectedData, setSelectedData] = useState(registerUserFilter[0]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({ 
    users: tableBodyData,
    therapists: therapistData 
  });
  const [loading, setLoading] = useState("");
  
  const router = useRouter();


  const onClickPopover = (label, rowItem) => {
    if(SelectedData?.value === 'user'){
      router.push(`/user-registration/${rowItem?.id}`);
    }else{
      router.push(`/user-registration/${rowItem?.id}?therapist=true`);
    }
  };


  // Simple data and header selection based on tab
  const currentData = SelectedData?.value === "therapist" ? data?.therapists : data?.users;
  const currentTableHeader = SelectedData?.value === "therapist" ? therapistTableHeader : userRegistrationTableHeader;


  return (
    <div>
      <Container>
        <TopHeader title="User Registration"   backButton={false} />
        <ShadowWrapper>
          <TableHeader
            onSearch={setSearch}
            search={search}
            filterData={registerUserFilter}
            SelectedData={SelectedData}
            options={userRegistrationEnum}
            setSelectedData={setSelectedData}
          />
          <ResponsiveTable
            data={currentData}
            tableHeader={currentTableHeader}
            hasPagination={false}
            loading={loading === "get-data"}
            renderItem={({ item, key, rowIndex, renderValue }) => {
              const rowItem = currentData[rowIndex];
              
              if (renderValue) {
                return renderValue(item, rowItem);
              }

             

              if (key === "actions") {
                return (
                  <div className={classes.actionButtons}>
                    <PopOver
                      popover={userRegistrationPopoverOptions}
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
