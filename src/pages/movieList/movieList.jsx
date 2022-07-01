import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./movieList.css";

import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function MovieList() {
  const [rows, setResult] = React.useState([]);

  //set columns for datagrid table
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "year", headerName: "Year", width: 180 },
    { field: "genre", headerName: "Genre", width: 300 },
    //for button column
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/movie/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  //to get data from node.js
  useEffect(() => {
    axios.get("http://202.183.167.111:4206/moviesList").then((response) => {
      setResult(response.data.data);
    });
  }, []);

  //to send delete data to node.js
  const handleDelete = (id) => {
    setResult(rows.filter((item) => item.id !== id));
    axios
      .delete("http://202.183.167.111:4206/moviesList", {
        data: {
          movieID: id,
        },
      })
      .then((response) => {
        //if deleted alert the user
        alert("Content has been Deleted");
      });
  };

  return (
    <div className="main">
      <div className="firstRow">
        <div className="firstBox">
          <h2>Contents</h2>
          <h3>Total contents : {rows.length}</h3>
          <Link to="/newMovie">
            <button id="insert">Insert</button>
          </Link>
        </div>
      </div>
      <div className="table" style={{ height: "60%" }}>
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
