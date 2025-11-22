import PageSection from '../../layout/PageSection';
import { useTranslation } from 'react-i18next';
import BaseDataGrid from '../../shared/BaseDataGrid';
import AddIcon from '@mui/icons-material/Add';

const TableSection = () => {
  const { t } = useTranslation();

  return (
    <PageSection
      title={t('customers')}
      ActionButtonProps={{ children: t('addCustomer'), endIcon: <AddIcon /> }}
    >
      <BaseDataGrid rows={[]} columns={[]} />
    </PageSection>
  );
};

export default TableSection;
