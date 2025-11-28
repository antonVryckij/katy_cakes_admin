import Stack, { type StackProps } from '@mui/material/Stack';

const BaseFormContainer = ({ children, ...restProps }: StackProps) => {
  return (
    <Stack sx={{ minWidth: '400px' }} pt={1} spacing={2} {...restProps}>
      {children}
    </Stack>
  );
};

export default BaseFormContainer;
