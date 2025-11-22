import { Toolbar, type ToolbarProps } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface BaseDataGridToolbarProps extends ToolbarProps {
  title?: string;
}

const BaseDataGridToolbar = ({ title, children, ...props }: BaseDataGridToolbarProps) => {
  return (
    <Toolbar {...props}>
      {title ? <Typography fontWeight="medium">Toolbar</Typography> : null}

      <Box marginLeft="auto">{children}</Box>
    </Toolbar>
  );
};

export default BaseDataGridToolbar;
