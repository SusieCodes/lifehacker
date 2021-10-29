import React, { useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";

export const Upload = () => {
  const [imageSelected, setImageSelected] = useState();

  const uploadImage = () => {
    // console.log("files[0] is: ", files[0]);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "wp84lxqy");

    Axios.post(
      "http://api.cloudinary.com/v1_1/dllowdq2w/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="upload-image-text">Image: </div>
      <div className="upload-wrapper">
        <input
          type="file"
          className="upload-input"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        />
        <button className="upload-btn" onClick={uploadImage}>
          Upload
        </button>
      </div>
    </>
  );
};
