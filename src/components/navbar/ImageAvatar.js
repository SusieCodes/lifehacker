import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import user from "../../images/susie.svg"

export const ImageAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Susie Stanley" src={user} sx={{ width: 60, height: 60, border: 2 }}/>
    </Stack>
  );
}

export default ImageAvatar;