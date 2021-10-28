export const Upload = () => {
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
