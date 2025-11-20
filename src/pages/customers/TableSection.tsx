import CustomersDataGrid from './CustomersDataGrid';
import PageSection from '../../layout/PageSection';
import { useTranslation } from 'react-i18next';

const TableSection = () => {
  const { t } = useTranslation();

  return (
    <PageSection title={t('customers')}>
      <CustomersDataGrid />
    </PageSection>
  );
};

export default TableSection;
