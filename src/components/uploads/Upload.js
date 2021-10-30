import React, { useState } from "react";
// import Axios from "axios";
// import { Image } from "cloudinary-react";

export const Upload = () => {
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wp84lxqy");
    setLoading(true);
    // Axios.post(
    //   "http://api.cloudinary.com/v1_1/dllowdq2w/image/upload",
    //   data
    // ).then((response) => {
    //   console.log(response);
    // });

    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/dllowdq2w/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    console.log("image is ", image);
    console.log("image type is ", typeof image);
    setLoading(false);
  };

  return (
    <>
      <div className="upload-wrapper">
        <div className="upload-image-text">Image: </div>
        <input
          type="file"
          name="file"
          className="upload-input"
          placeholder="Choose Image"
          onChange={uploadImage}
        />
      </div>
      <div className="uploaded-image-section">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="uploaded-image-wrapper">
            <img src={image} alt="" width="150" className="uploaded-image" />
          </div>
        )}
      </div>
    </>
  );
};
