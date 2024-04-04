import { useState } from "react";
import "./StudentList.css";
import { Table } from "./List/Table";
import { Modal } from "./List/Modal";
import { Route, Router, useNavigate } from "react-router-dom";

function StudentList() {
  const navigate = useNavigate(); 
    const handleClick = () => navigate('/Vtry'); 
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    
    {
      page: "33124",
      description: <a className="studentname" onClick={handleClick}>Vaishnavi</a>,
      status: "Placed",
      
    },
    {
      page: "33125",
      description: "Yash",
      status: "Placed",
      
    },
    {
      page: "33127",
      description: "Pranjali",
      status: "Unplaced",
      
    },
    {
      page: "33128",
      description: "Priya",
      status: "Unplaced",
      
    },
    {
      page: "33129",
      description: "Shravani",
      status: "Placed",  
       },
    {
      page: "33130",
      description: "Raj",
      status: "Unplaced",
      
    },
    {
      page: "33131",
      description: "Rahul",
      status: "Unplaced",
      
    },
    {
      page: "33132",
      description: "Jyoti",
      status: "Placed",  
       },
    {
      page: "33133",
      description: "Radhika",
      status: "Unplaced",
      
    },
    {
      page: "33134",
      description: "Soun",
      status: "Placed",  
       },
    
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  

  return (
    
    <div className="StudentList">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          // onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default StudentList;
