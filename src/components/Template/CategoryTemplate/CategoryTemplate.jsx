"use client";
import React, { useState } from "react";
import classes from "./CategoryTemplate.module.css";
import { Container } from "react-bootstrap";
import TopHeader from "@/components/atoms/TopHeader/TopHeader";
import ShadowWrapper from "@/components/atoms/ShadowWrapper/ShadowWrapper";
import TableHeader from "@/components/molecules/TableHeader/TableHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import PopOver from "@/components/molecules/PopOver";
import Button from "@/components/atoms/Button";
import AddCategoryModal from "@/components/molecules/Modal/AddCategoryModal/AddCategoryModal";
import ReasonForRejectionModal from "@/components/molecules/Modal/ReasonForRejectionModal/ReasonForRejectionModal";
import { categoryFilter } from "@/developmentContent/enums/enums";
import { categoryTableHeader, requestedTableHeader } from "@/developmentContent/tableData/tableHeader";
import { categoryData, requestedData } from "@/developmentContent/tableData/tableBody";
import { dashboardPopoverOptions } from "@/developmentContent/popoverOptions";
import { useRouter } from "next/navigation";

const CategoryTemplate = () => {
  const [SelectedData, setSelectedData] = useState(categoryFilter[0]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({ 
    categories: categoryData,
    requested: requestedData 
  });
  const [loading, setLoading] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const router = useRouter();

  const onClickPopover = (label, rowItem) => {
    label === "view" ? router.push(`/category/${rowItem?.id}`) : null;
  };

  const getStatusClass = (status) => {
    return status === "Active" ? classes.activeStatus : classes.inactiveStatus;
  };

  const handleAccept = (rowItem) => {
    console.log("Accept:", rowItem);
    // Handle accept logic here
  };

  const handleReject = (rowItem) => {
    setSelectedItem(rowItem);
    setShowRejectionModal(true);
  };

  const handleRejectionSubmit = (rejectionData) => {
    console.log("Rejecting item:", selectedItem, "with reason:", rejectionData.reason);
    // Handle rejection logic here
    setShowRejectionModal(false);
    setSelectedItem(null);
  };

  const handleAddCategory = async (formData) => {
    console.log("Adding category:", formData);
    // Handle add category logic here
    // You can add API call to save the category
    // For now, just log the data
  };

  // Simple data and header selection
  const currentData = SelectedData?.value === "requested" ? data?.requested : data?.categories;
  const currentTableHeader = SelectedData?.value === "requested" ? requestedTableHeader : categoryTableHeader;

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
            showAddButton={true}
            onAddClick={() => setShowAddModal(true)}
            addButtonLabel="Add Category"
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

              if (key === "status") {
                return (
                  <span className={`${classes.statusPill} ${getStatusClass(item)}`}>
                    {item}
                  </span>
                );
              }

              if (key === "actions") {
                if (SelectedData?.value === "requested") {
                  return (
                    <div className={classes.actionButtons}>
                      <Button 
                        variant="primary" 
                        label="Accept"
                        onClick={() => handleAccept(rowItem)}
                      />
                      <Button 
                        variant="secondary" 
                        label="Reject"
                        onClick={() => handleReject(rowItem)}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className={classes.actionButtons}>
                      <PopOver
                        popover={dashboardPopoverOptions}
                        onClick={(label) => onClickPopover(label, rowItem)}
                      />
                    </div>
                  );
                }
              }

              return item || "";
            }}
          />
        </ShadowWrapper>
        
      </Container>
      
      <AddCategoryModal
        show={showAddModal}
        setShow={setShowAddModal}
        onSubmit={handleAddCategory}
      />
      
      <ReasonForRejectionModal
        show={showRejectionModal}
        setShow={setShowRejectionModal}
        onSubmit={handleRejectionSubmit}
      />
    </>
  );
};

export default CategoryTemplate;
