import Stack from '@mui/material/Stack';
import type { ReactNode } from 'react';

interface PageContentProps {
  children?: ReactNode;
}

const PageContent = ({ children }: PageContentProps) => {
  return <Stack sx={{ width: '100%', maxWidth: { sm: '100%' } }}>{children}</Stack>;
};

export default PageContent;
