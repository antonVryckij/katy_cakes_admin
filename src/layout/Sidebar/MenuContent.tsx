import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { useLocation, useNavigate } from 'react-router';
import ListItemButton from '@mui/material/ListItemButton';
import { navList } from './navList';

export default function MenuContent() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack sx={{ flexGrow: 1, p: 1 }}>
      <List dense>
        {navList.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={location?.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
