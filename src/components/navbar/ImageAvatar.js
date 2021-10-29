import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import susie from "../../images/susie.svg";

export const ImageAvatar = (obj) => {
  console.log("obj.user is: ", obj.user);
  console.log("obj.user.name is: ", obj.user.name);
  console.log("obj.user.image is: ", obj.user.image);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt={obj?.user.name}
        // src={obj?.user.image}
        src={susie}
        sx={{ width: 60, height: 60, border: 2, borderColor: "lightgray" }}
      />
    </Stack>
  );
};
