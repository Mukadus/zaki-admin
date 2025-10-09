import React from 'react';
import classes from "./FilterButton.module.css"
import Filter from '../Filter/Filter';

const FilterButton = ({filterData = [],SelectedData,setSelectedData}) => {
  return (
    <div className={classes?.filterButton}>
        {
            filterData?.map((item)=>{
                return <Filter item={item} SelectedData={SelectedData} setSelectedData={setSelectedData} />
            })
        }
    </div>
  )
}

export default FilterButton