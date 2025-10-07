"use client";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import { registerUserFilter } from "@/developmentContent/enums/enums";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

const UserRegistrationTemplate = () => {
    const [SelectedData,setSelectedData] = useState(registerUserFilter[0]);
    const [search,setSearch] = useState("");
  return (
    <div>
      <Container>
        <TopHeader title="User Registration" backButton={false} />
        <ShadowWrapper>
          <TableHeader onSearch={setSearch} search={search} filterData={registerUserFilter} SelectedData={SelectedData} setSelectedData={setSelectedData} />
        </ShadowWrapper>
      </Container>
    </div>
  );
};

export default UserRegistrationTemplate;
