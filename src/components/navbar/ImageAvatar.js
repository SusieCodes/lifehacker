import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import user from '../../images/default.png'

export const ImageAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="app user"
        src={user}
        sx={{ width: 60, height: 60, border: 2, borderColor: 'lightgray' }}
      />
    </Stack>
  )
}

export default ImageAvatar
