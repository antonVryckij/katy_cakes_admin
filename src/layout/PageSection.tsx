import Box from '@mui/material/Box';
import type { ReactNode } from 'react';
import Typography from '@mui/material/Typography';

interface PageSectionProps {
  title?: string;
  children?: ReactNode;
}

const PageSection = ({ children, title }: PageSectionProps) => {
  return (
    <Box pt={8}>
      {title ? (
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          {title}
        </Typography>
      ) : null}
      {children}
    </Box>
  );
};

export default PageSection;
