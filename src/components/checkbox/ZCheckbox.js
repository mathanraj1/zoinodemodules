import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Colors from '../../utils/constants/Colors';
import {makeStyles} from '@mui/styles'
import Constants from '../../utils/constants/ConstantCss';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: "0.1875rem",
    width: "1rem",
    height: "1rem",
    boxShadow:
      theme.palette.mode === 'dark'
        ? ` 0 0 1px ${Colors.fadedBlackPearl}`
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: theme.palette.mode === 'dark' ? `${Colors.Cello}` : `${Colors.aliceBlue}`,
      backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? `${Colors.darkBlue}` : `${Colors.fadedBlue}`,
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? `${Colors.fadedCello}` : `${Colors.fadedpattensBlue}`,
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: Colors.primary,
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: Constants.display.block,
      width: "1rem",
      height: "1rem",
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: Colors.primary,
    },
  });

export default function CheckboxLabels(props) {
    const classes= useStyles();
    return (
    
        <div>
            <FormControlLabel
               sx={{mx:0}}
                control={
                    <Checkbox                               
                    sx={{
                        '&:hover': { bgcolor: 'transparent' },
                    }}
                  
                    disableRipple
                    color="default"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                    inputProps={{ 'aria-label': 'Checkbox demo' }}
                    {...props}       
                />
            }
            />
        </div>

    );
}

const useStyles = makeStyles(({ 
    formCheck:{
        marginLeft:0
      }
  }));

