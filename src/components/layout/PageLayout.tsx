import Stack, { type StackProps } from '@mui/material/Stack';
import PageHeader from './PageHeader';

const PageLayout = ({ children, ...props }: StackProps) => {
  return (
    <Stack p={3} {...props}>
      <PageHeader />
      {children}
    </Stack>
  );
};

export default PageLayout;
