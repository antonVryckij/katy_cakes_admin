import PageLayout from '../../layout/PageLayout';
import PageContent from '../../layout/PageContent';
import PageSection from '../../layout/PageSection';
import { useTranslation } from 'react-i18next';
import CustomersTable from './CustomersTable';

const CustomersPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageContent>
        <PageSection title={t('customers')}>
          <CustomersTable />
        </PageSection>
      </PageContent>
    </PageLayout>
  );
};

export default CustomersPage;
