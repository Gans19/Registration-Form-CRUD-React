import React from 'react'

const HandleDelete = (tableData,setTableData,index) => {

    const handleDelete = (index) => {
        const filterData = tableData.filter((item, i) => i !== index);
        setTableData(filterData);
      };

  return (
    <div>
      
    </div>
  )
}

export default HandleDelete
