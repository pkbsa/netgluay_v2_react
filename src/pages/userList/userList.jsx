import React, { useEffect } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UserList() {
  const [rows, setResult] = React.useState([]);

  //set columns for datagrid table
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "email", headerName: "Email", width: 350 },
    { field: "admin", headerName: "Admin", width: 200 },
    //for button column
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

  //to get data from node.js
  useEffect(() => {
    axios.get("http://202.183.167.111:4206/userslist").then((response) => {
      setResult(response.data.data);
    });
  }, []);

  //to send delete data to node.js
  const handleDelete = (id) => {
    setResult(rows.filter((item) => item.id !== id));
    axios
      .delete("http://202.183.167.111:4206/userslist", {
        data: {
          userID: id,
        }
      })
      .then((response) => {
        //if deleted alert the user
        alert("User has been Deleted")
      });
  };

  return (
    <div className="main">
      <div className="firstRow">
        <div className="firstBox">
          <h2>Users</h2>
          <h3>Total users : {rows.length}</h3>
          <Link to="/newUser">
            <button id="insert" >Insert</button>
          </Link>
        </div>
      </div>
      <div className="table" style={{ height: "60%"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
