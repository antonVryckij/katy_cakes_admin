import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button, { type ButtonProps } from '@mui/material/Button';
import type { ReactNode } from 'react';
import Typography from '@mui/material/Typography';

interface PageSectionProps {
  title: string;
  ActionButtonProps?: ButtonProps;
  children?: ReactNode;
}

const PageSection = ({ title, children, ActionButtonProps }: PageSectionProps) => {
  return (
    <Stack pt={8}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography component="h2" variant="h6">
          {title}
        </Typography>

        {ActionButtonProps ? (
          <Button variant="contained" sx={{ textTransform: 'none' }} {...ActionButtonProps} />
        ) : null}
      </Box>

      {children}
    </Stack>
  );
};

export default PageSection;
