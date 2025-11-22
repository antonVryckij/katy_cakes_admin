import { BaseDataGridToolbar } from '../../../shared/BaseDataGrid';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const TableToolbar = () => {
  const { t } = useTranslation();

  return (
    <BaseDataGridToolbar>
      <Button
        sx={{ textTransform: 'none' }}
        size={'small'}
        variant="contained"
        disableElevation
        endIcon={<AddIcon />}
      >
        {t('addCustomer')}
      </Button>
    </BaseDataGridToolbar>
  );
};

export default TableToolbar;
