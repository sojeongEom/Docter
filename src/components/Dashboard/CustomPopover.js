import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function CustomPopover() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            variant="outlined"
            sx={{
              float: 'right',
              display: 'inline',
              boxShadow: 1,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              borderColor: '#FFDC61',
              fontFamily: 'SCDream5',
              color: '#55A2F7',

            }} {...bindTrigger(popupState)}>
            Explanation
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}

          >
            <Typography
              sx={{
                p: 2,
                fontSize: '14px',
              }}>기능 사용법</Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: '12px',
              }}>1) 텍스트 선택 드래그 (글자 더블클릭)  ▶ 유의어 추천</Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: '12px',
              }}>2) ctrl + space 키보드 입력 ▶ 다음 단어 추천</Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: '12px',
              }}>3) ctrl + shift + space 키보드 입력 ▶ 맞춤법 검사</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}