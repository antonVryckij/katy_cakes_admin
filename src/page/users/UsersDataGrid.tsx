import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { useLoaderData } from 'react-router';

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

export default function UsersDataGrid() {
  const data = useLoaderData();

  console.log('data', data);

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
      slotProps={{
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
