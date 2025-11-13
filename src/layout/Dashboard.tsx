import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
