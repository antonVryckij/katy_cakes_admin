import Box from '@mui/material/Box';
import TableSection from './TableSection';
import WidgetsSection from './WidgetsSection';
import PageLayout from '../../layout/PageLayout';
import PageHeader from './PageHeader';

const UsersPage = () => {
  return (
    <PageLayout>
      <PageHeader />
      <Box sx={{ width: '100%', maxWidth: { sm: '100%' } }}>
        <WidgetsSection />
        <TableSection />
      </Box>
    </PageLayout>
  );
};

export default UsersPage;
