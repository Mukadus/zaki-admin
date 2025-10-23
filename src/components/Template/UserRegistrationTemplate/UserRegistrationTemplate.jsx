"use client";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import { registerUserFilter, userRegistrationEnum } from "@/developmentContent/enums/enums";
import { userRegistrationTableHeader, therapistTableHeader } from "@/developmentContent/tableData/tableHeader";
import { tableBodyData, therapistData } from "@/developmentContent/tableData/tableBody";
import {  userRegistrationPopoverOptions } from "@/developmentContent/popoverOptions";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAxios from "@/interceptor/axios-functions";
import { Container } from "react-bootstrap";
import classes from "./UserRegistrationTemplate.module.css";
import useDebounce from "@/resources/hooks/useDebounce";
import PopOver from "@/components/molecules/PopOver";

const UserRegistrationTemplate = () => {
  const [SelectedData, setSelectedData] = useState(registerUserFilter[0]);
  const {Get} = useAxios();
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(userRegistrationEnum[0]);
  const [data, setData] = useState({ 
    users: tableBodyData,
    therapists: therapistData 
  });
  const [loading, setLoading] = useState("");
  const [page,setPage] = useState(1);
  const [totalRecords,setTotalRecords] = useState(0);
  const debouncedSearch = useDebounce(search, 500);
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


  const getData = async (_selectedData,_page)=>{
    setLoading('loading');
    const query = {
      page:_page || page ,
      role:_selectedData?.value,
      ...(debouncedSearch && {search:debouncedSearch}),
      status:selectedOption?.value,
    };
    const queryString = new URLSearchParams(query).toString();
    const { response } = await Get({ route: `/user-registration?${queryString}` });
    if (response) {
      setTotalRecords(response?.totalRecords);
      // setData(response?.data);
    }
    setLoading("");
  };

  useEffect(()=>{
    if(SelectedData){
      // // getData(SelectedData,1);
      // setPage(1);
      // setTotalRecords(0);
      // setSearch('')
    }
  },[SelectedData,debouncedSearch,selectedOption])



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
            setSelectedData={setSelectedData}
            options={userRegistrationEnum}
            selectedOption={selectedOption}
            setSelectedOption={(e)=>{setSelectedOption(e[0])}}
          />
          <ResponsiveTable
            data={currentData}
            tableHeader={currentTableHeader}
            hasPagination={true}
            currentPage={page}
            onPageChange={(page)=>{setPage(page);getData(SelectedData,page);}}
            totalRecords={totalRecords}
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
