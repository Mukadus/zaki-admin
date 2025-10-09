"use client";
import React, { useState } from "react";
import classes from "./WalletTemplate.module.css";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import { Col, Container, Row } from "react-bootstrap";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import { walletFilter } from "@/developmentContent/enums/enums";
import { billingTableHeader } from "@/developmentContent/tableData/tableHeader";
import { billingData } from "@/developmentContent/tableData/tableBody";
import PackageCard from "@/components/molecules/PackageCard/PackageCard";

const WalletTemplate = () => {
  const [SelectedData, setSelectedData] = useState(walletFilter[0]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");
  
  return (
    <div className={classes?.walletTemplate}>
      <Container>
        <TopHeader title="Wallet" backButton={false} />
        <ShadowWrapper>
          <TableHeader
            onSearch={setSearch}
            search={search}
            filterData={walletFilter}
            SelectedData={SelectedData}
            setSelectedData={setSelectedData}
            rightSide={false}
          />
          {SelectedData?.value === "package" ? (
            <Row>
              <Col md={6} lg={5}>
                <PackageCard />
              </Col>
            </Row>
          ) : SelectedData?.value === "billing" ? (
            <ResponsiveTable
              data={billingData}
              tableHeader={billingTableHeader}
              hasPagination={false}
              loading={loading === "get-data"}
              renderItem={({ item, key, rowIndex, renderValue }) => {
                if (renderValue) {
                  return renderValue(item);
                }
                return item || "";
              }}
            />
          ) : null}
        </ShadowWrapper>
      </Container>
    </div>
  );
};

export default WalletTemplate;
