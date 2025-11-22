import PageLayout from '../../layout/PageLayout';
import PageHeader from '../../layout/PageHeader/PageHeader';
import PageContent from '../../layout/PageContent';
import Alert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';
import PageSection from '../../layout/PageSection';

const StatisticPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHeader />
      <PageContent>
        <PageSection title={t('statistic')}>
          <Alert severity="info">{t('inDevelopment')}</Alert>
        </PageSection>
      </PageContent>
    </PageLayout>
  );
};

export default StatisticPage;
