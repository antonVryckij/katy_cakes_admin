import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import { ROUTE } from '../../constants/route';
import { translate } from '../../utils/translate';

export const navList = [
  { text: translate('home'), icon: <HomeRoundedIcon />, path: ROUTE.HOME },
  { text: translate('customers'), icon: <PeopleRoundedIcon />, path: ROUTE.CUSTOMERS },
];
