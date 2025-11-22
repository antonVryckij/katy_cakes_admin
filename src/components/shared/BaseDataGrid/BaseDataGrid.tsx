import {
  DataGrid,
  type DataGridProps,
  type GridActionsColDef,
  type GridColDef,
  type GridRowsProp,
  type GridSingleSelectColDef,
  type GridValidRowModel,
} from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';

type BaseGridColDef<TData extends GridValidRowModel> =
  | (Omit<GridColDef<TData>, 'field'> & {
      field: keyof TData & string;
    })
  | GridActionsColDef<TData, any, any>
  | GridSingleSelectColDef<TData, any, any>;

type BaseDataGridProps<TData extends GridValidRowModel> = Omit<
  DataGridProps,
  'columns' | 'rows'
> & {
  columns: BaseGridColDef<TData>[];
  rows: GridRowsProp<TData>;
};

function BaseDataGrid<TData extends GridValidRowModel>(props: BaseDataGridProps<TData>) {
  const { t } = useTranslation();

  return (
    <DataGrid
      checkboxSelection
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
      {...props}
    />
  );
}

export type { BaseGridColDef, BaseDataGridProps };
export default BaseDataGrid;
