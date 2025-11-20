import TableSection from './TableSection';
import PageLayout from '../../layout/PageLayout';
import PageHeader from '../../layout/PageHeader/PageHeader';
import PageContent from '../../layout/PageContent';

const CustomersPage = () => {
  return (
    <PageLayout>
      <PageHeader />
      <PageContent>
        <TableSection />
      </PageContent>
    </PageLayout>
  );
};

export default CustomersPage;
