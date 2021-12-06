import * as React from 'react';
import { Box, FormControl, InputLabel, List } from '@material-ui/core';

export default function CustomBox() {
  return (
    <Box id='box' sx={{
        minWidth: 120,
        maxWidth: 200,
        visibility: 'visible',
        border: '3px solid',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderColor: '#FFDC61',
        fontFamily: 'SCDream5',
        p: 1,
        m: 5,
        display: 'inline-block',
    }}>
      <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">synonym-list</InputLabel>
                    <List
                        labelId="demo-simple-select-label"
                    >
                    </List>
                </FormControl>
    </Box>
  );
}