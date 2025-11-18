import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CustomersDataGrid from './CustomersDataGrid';

const TableSection = () => {
  return (
    <>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12 }}>
          <CustomersDataGrid />
        </Grid>
      </Grid>
    </>
  );
};

export default TableSection;
