import PageLayout from '../../layout/PageLayout';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <h1>{t('home')}</h1>
    </PageLayout>
  );
};

export default HomePage;
