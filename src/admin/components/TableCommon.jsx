import React from "react";
import './TableCommon.css';

const TableCommon = (props) => {

  return (
    <table className='table_common'>
     {props.tblData}
    </table>
  )
}

export default TableCommon
