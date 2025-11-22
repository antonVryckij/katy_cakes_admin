import * as React from 'react';
import { dividerClasses } from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { paperClasses } from '@mui/material/Paper';
import { listClasses } from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuButton from '../../shared/MenuButton';
import Logo from '../../../../public/img/avatar-girl-2.svg?react';
import { useTranslation } from 'react-i18next';

const UserAccountMenu = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <MenuButton aria-label="Open menu" onClick={handleClick} sx={{ borderColor: 'transparent' }}>
        <Logo style={{ width: '48px', height: '48px' }} />
      </MenuButton>

      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px',
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px',
          },
        }}
      >
        <MuiMenuItem sx={{ m: '2px 0' }} onClick={handleClose}>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('logout')}</ListItemText>
        </MuiMenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default UserAccountMenu;
