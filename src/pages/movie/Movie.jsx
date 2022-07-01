import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Movie() {
  //to redirect to other pages
  let history = useHistory();

  const idInput = useRef(null);
  const nameInput = useRef(null);
  const yearInput = useRef(null);
  const imageInput = useRef(null);
  const genreInput = useRef(null);
  const typeInput = useRef(null);
  const watchInput = useRef(null);
  const linkInput = useRef(null);

  const [rows, setResult] = React.useState([]);

  //to get data from node.js
  useEffect(() => {
    var url = "http://202.183.167.111:4206/movieslist/";
    const location = window.location.pathname.split("/").pop();
    url += location;
    axios.get(url).then((response) => {
      setResult(response.data.data);
    });
  }, []);

  //for updating data
  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      //if any box is blank ,alert
      nameInput.current.value === "" ||
      yearInput.current.value === "" ||
      imageInput.current.value === "" ||
      genreInput.current.value === "" ||
      typeInput.current.value === "" ||
      watchInput.current.value === "" ||
      linkInput.current.value === ""
    ) {
      alert("Please Enter All The Box");
    } else {
      //otherwise call put to nodejs
      axios
        .put("http://202.183.167.111:4206/movieslist", {
          movies_info: {
            id: parseInt(idInput.current.value),
            name: nameInput.current.value,
            year: yearInput.current.value,
            image: imageInput.current.value,
            genre: genreInput.current.value,
            type: typeInput.current.value,
            watch: parseInt(watchInput.current.value),
            link: linkInput.current.value,
          },
        })
        .then((response) => {
          //after finished alert to tell user
          alert(response.data.message);
        });
    }
  };
  //for delete data
  const handleDelete = (e) => {
    e.preventDefault();
    //call delete to nodejs
    axios
      .delete("http://202.183.167.111:4206/moviesList", {
        data: {
          movieID: parseInt(idInput.current.value),
        },
      })
      .then((response) => {
        //redirected back to movies page
        history.push("/movies");
      });
  };

  return (
    <div className="main">
      <div className="userTitleContainer">
        <h1 className="userTitle">{rows.name}</h1>
        <div>
          <Link to="/newMovie">
            <button className="userAddButton">Create</button>
          </Link>
          <button className="userAddButton" id="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="userUpdate">
        <div className="title">
          <span className="userUpdateTitle">Information</span>
          <Link to="/movies">
            <KeyboardBackspaceIcon />
          </Link>
        </div>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>ID</label>
              <input
                type="text"
                placeholder={rows.id}
                value={rows.id}
                className="userUpdateInput"
                id="idInputBox"
                disabled
                ref={idInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Name</label>
              <input
                type="text"
                placeholder={rows.name}
                className="userUpdateInput"
                ref={nameInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Year</label>
              <input
                type="text"
                placeholder={rows.year}
                className="userUpdateInput"
                ref={yearInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Images</label>
              <input
                type="text"
                placeholder={rows.image}
                className="userUpdateInput"
                ref={imageInput}
              />
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateItem">
              <label>Genre</label>
              <input
                type="text"
                placeholder={rows.genre}
                className="userUpdateInput"
                ref={genreInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Link</label>
              <input
                type="text"
                placeholder={rows.link}
                className="userUpdateInput"
                ref={linkInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Type</label>
              <input
                type="text"
                placeholder={rows.type}
                className="userUpdateInput"
                ref={typeInput}
              />
            </div>
            <div className="userUpdateItem radio">
              <label>Watch</label>
              <input
                type="text"
                placeholder={rows.watch}
                className="userUpdateInput"
                ref={watchInput}
              />
            </div>
            <button className="userUpdateButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
