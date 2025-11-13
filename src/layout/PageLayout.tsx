import Stack, { type StackProps } from '@mui/material/Stack';

const PageLayout = ({ children, ...props }: StackProps) => {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: 'center',
        mx: 3,
        pb: 5,
        mt: { xs: 8, md: 0 },
      }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default PageLayout;
