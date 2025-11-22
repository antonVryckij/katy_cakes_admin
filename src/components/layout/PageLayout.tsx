import Stack, { type StackProps } from '@mui/material/Stack';

const PageLayout = ({ children, ...props }: StackProps) => {
  return (
    <Stack p={3} {...props}>
      {children}
    </Stack>
  );
};

export default PageLayout;
