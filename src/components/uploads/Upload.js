export const Upload = () => {
  const uploadImage = (files) => {
    console.log("files[0] is: ", files[0]);
    axios;
  };

  return (
    <>
      <div>
        <input
          type="file"
          onChange={(event) => {
            uploadImage(event.target.files);
          }}
        />
      </div>
    </>
  );
};
