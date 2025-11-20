import PageSection from '../../layout/PageSection';
import { useTranslation } from 'react-i18next';
import BaseDataGrid from '../../components/BaseDataGrid';

const TableSection = () => {
  const { t } = useTranslation();

  return (
    <PageSection title={t('customers')}>
      <BaseDataGrid rows={[]} columns={[]} />
    </PageSection>
  );
};

export default TableSection;
