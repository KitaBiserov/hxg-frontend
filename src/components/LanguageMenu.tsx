import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from 'styled-components';
import themeGlobal from "../style/theme"
import LanguageIcon from "@mui/icons-material/Language";






export default function LanguageMenu() {
  const [activeLanguage, setActiveLanguage] = React.useState('RU')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  

  return (
    <ThemeProvider theme={themeGlobal}>
      <Button 
        color="secondary"
        variant="contained"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon color='primary'/>}
      >
        {activeLanguage}
      </Button>
      <Menu
      color="secondary"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={handleClose}><a className="a anchor header__link-black" href="http://en.huaxun.ru" >ENG</a></MenuItem>
        <MenuItem onClick={handleClose}><a className="a anchor header__link-black" href="http://huaxun.ru" >RUS</a></MenuItem>

      </Menu>
    </ThemeProvider>
  );
}


