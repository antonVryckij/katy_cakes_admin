import TableToolbar from './TableToolbar';
import BaseDataGrid from '../../../shared/BaseDataGrid';

const CustomersTable = () => {
  return <BaseDataGrid rows={[]} columns={[]} showToolbar slots={{ toolbar: TableToolbar }} />;
};

export default CustomersTable;
