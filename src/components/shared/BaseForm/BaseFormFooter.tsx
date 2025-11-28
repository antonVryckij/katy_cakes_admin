import Button from '@mui/material/Button';
import Stack, { type StackProps } from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

interface BaseFormFooterProps {
  onCancel: () => void;
  isSubmitting: boolean;
  canSubmit: boolean;
  ContainerProps?: StackProps;
}

const BaseFormFooter = ({
  onCancel,
  canSubmit,
  isSubmitting,
  ContainerProps,
}: BaseFormFooterProps) => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="row"
      pt={2}
      spacing={2}
      display={'flex'}
      justifyContent="flex-end"
      {...ContainerProps}
    >
      <Button
        onClick={onCancel}
        variant={'outlined'}
        disableElevation
        color={'error'}
        disabled={isSubmitting}
      >
        {t('cancel')}
      </Button>
      <Button
        type="submit"
        variant={'contained'}
        disableElevation
        loading={isSubmitting}
        disabled={!canSubmit}
      >
        {t('save')}
      </Button>
    </Stack>
  );
};

export default BaseFormFooter;
