import { Link } from "react-router-dom";
import React, { useRef } from "react";

import axios from "axios";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function NewUser() {
  const idInput = useRef(null);
  const nameInput = useRef(null);
  const yearInput = useRef(null);
  const imageInput = useRef(null);
  const genreInput = useRef(null);
  const typeInput = useRef(null);
  const watchInput = useRef(null);
  const linkInput = useRef(null);

  //insert new movies function
  const handleInsert = (e) => {
    e.preventDefault();

    if (
      nameInput.current.value === "" ||
      yearInput.current.value === "" ||
      imageInput.current.value === "" ||
      genreInput.current.value === "" ||
      typeInput.current.value === "" ||
      watchInput.current.value === "" ||
      linkInput.current.value === ""
    ) {
      //alert any box is empty
      alert("Please Enter All The Box");
    } else {
      //otherwise call post to nodejs
      axios
        .post("http://202.183.167.111:4206/movieslist", {
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
          //alert the response
          alert(response.data.message);
        });
    }
  };

  return (
    <div className="main">
      <div className="userTitleContainer">
        <h1 className="userTitle">New Content</h1>
      </div>
      <div className="userUpdate">
        <div className="title">
          <span className="userUpdateTitle">Edit</span>
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
                placeholder="Avatar"
                className="userUpdateInput"
                ref={nameInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Year</label>
              <input
                type="text"
                placeholder="2008"
                className="userUpdateInput"
                ref={yearInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Images</label>
              <input
                type="text"
                placeholder="https://i.imgur.com/K8mgJYG.jpg"
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
                placeholder="drama crime thriller"
                className="userUpdateInput"
                ref={genreInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Link</label>
              <input
                type="text"
                placeholder="/avatar"
                className="userUpdateInput"
                ref={linkInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Type</label>
              <input
                type="text"
                placeholder="movies"
                className="userUpdateInput"
                ref={typeInput}
              />
            </div>
            <div className="userUpdateItem radio">
              <label>Watch</label>
              <input
                type="text"
                placeholder="0"
                className="userUpdateInput"
                ref={watchInput}
              />
            </div>
            <button className="userUpdateButton" onClick={handleInsert}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
