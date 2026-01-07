import { createBrowserRouter } from 'react-router';
import StatisticPage from '../components/pages/statistic';
import CustomersPage from '../components/pages/customers';
import { ROUTE } from '../constants/route';
import Dashboard from '../components/layout/Dashboard';

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: StatisticPage,
      },
      {
        path: ROUTE.CUSTOMERS,
        Component: CustomersPage,
      },
    ],
  },
]);
