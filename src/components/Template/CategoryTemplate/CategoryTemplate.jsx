"use client";
import React, { useState } from "react";
import classes from "./CategoryTemplate.module.css";
import { Container } from "react-bootstrap";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import { categoryFilter } from "@/developmentContent/enums/enums";

const CategoryTemplate = () => {
    const [SelectedData, setSelectedData] = useState(categoryFilter[0]);
  return (
    <>
      <Container>
        <ShadowWrapper>
          <TopHeader title="Category" />
          <TableHeader 
            filterData={categoryFilter}
            SelectedData={SelectedData}
            setSelectedData={setSelectedData}
            rightSide={false}
          />
        </ShadowWrapper>
      </Container>
    </>
  );
};

export default CategoryTemplate;
