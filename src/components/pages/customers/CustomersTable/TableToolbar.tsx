import { BaseDataGridToolbar } from '../../../shared/BaseDataGrid';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import BaseDialog from '../../../shared/BaseDialog';
import { useState } from 'react';
import CustomerFormContainer from '../CustomerForm';

const TableToolbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <BaseDataGridToolbar>
      <Button
        variant="contained"
        disableElevation
        endIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        {t('addCustomer')}
      </Button>
      <BaseDialog
        open={open}
        onClose={handleClose}
        DialogTitleProps={{ children: t('createCustomer') }}
      >
        <CustomerFormContainer onCancel={handleClose} />
      </BaseDialog>
    </BaseDataGridToolbar>
  );
};

export default TableToolbar;
