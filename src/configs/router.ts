import { createBrowserRouter } from 'react-router';
import App from '../App';
import StatisticPage from '../components/pages/statistic';
import CustomersPage from '../components/pages/customers';
import { ROUTE } from '../constants/route';

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    Component: App,
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
