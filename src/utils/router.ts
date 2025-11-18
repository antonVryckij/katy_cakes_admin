import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomePage from '../pages/home';
import CustomersPage from '../pages/customers';
import { ROUTE } from '../constants/route';

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: ROUTE.CUSTOMERS,
        Component: CustomersPage,
      },
    ],
  },
]);
