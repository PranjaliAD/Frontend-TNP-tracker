import { useState } from "react";
import "./StudentList.css";
import { Table } from "./List/Table";
import { Modal } from "./List/Modal";


function StudentList() {
 
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      page: "33124",
      description: "Vaishnavi",
      status: "Placed",
    },
    {
      page: "33125",
      description: "Yash",
      status: "draft",
    },
    {
      page: "33126",
      description: "Pranjali",
      status: "Unplaced",
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

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    
    <div className="StudentList">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn1">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default StudentList;
