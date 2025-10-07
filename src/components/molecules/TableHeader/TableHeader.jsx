import React from "react";
import classes from "./TableHeader.module.css";
import FilterButton from "@/components/atoms/FilterButton/FilterButton";
import DropDown from "../DropDown/DropDown";
import Input from "@/components/atoms/Input/Input";
import { IoSearch } from "react-icons/io5";

const TableHeader = ({
  filterData = [],
  SelectedData,
  setSelectedData,
  onSearch,
  search,
}) => {
  return (
    <div className={classes?.tableHeader}>
      <div className={classes?.leftSide}>
        <FilterButton
          filterData={filterData}
          SelectedData={SelectedData}
          setSelectedData={setSelectedData}
        />
      </div>
      <div className={classes?.rightSide}>
        <Input
          className={classes?.searchInput}
          value={search}
          setValue={onSearch}
          inputClass={classes?.inputClass}
          type="search"
          placeholder="Search"
          rightIcon={<IoSearch size={20} color="#024757" />}
        />
        <DropDown
          containerClassName={classes?.dropdownContainer}
          options={filterData}
          onChange={setSelectedData}
        />
      </div>
    </div>
  );
};

export default TableHeader;
