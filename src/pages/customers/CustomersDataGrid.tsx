import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { useLoaderData } from 'react-router';
import { useTranslation } from 'react-i18next';

const columns: GridColDef[] = [
  { field: 'orderNum', headerName: 'Номер замовлення', minWidth: 200 },
  {
    field: 'status',
    headerName: 'Статус',
    flex: 1,
    minWidth: 80,
  },
  {
    field: 'client',
    headerName: 'Клієнт',
    flex: 1,
    minWidth: 80,
  },
];

export default function CustomersDataGrid() {
  const data = useLoaderData();
  const { t } = useTranslation();

  return (
    <DataGrid
      checkboxSelection
      rows={data}
      columns={columns}
      getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      localeText={{
        noRowsLabel: t('noRowsLabel'),
        paginationRowsPerPage: t('paginationRowsPerPage'),
        paginationDisplayedRows: ({ from, to, count, estimated }) => {
          if (!estimated) {
            return `${from}–${to} з ${count !== -1 ? count : `${t('moreThan')} ${to}`}`;
          }
          const estimatedLabel =
            estimated && estimated > to ? `around ${estimated}` : `${t('moreThan')} ${to}`;
          return `${from}–${to} з ${count !== -1 ? count : estimatedLabel}`;
        },
      }}
      slotProps={{
        noRowsOverlay: {},
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
          },
        },
      }}
    />
  );
}
