import BaseFormFooter from '../../../shared/BaseForm/BaseFormFooter';
import TextField from '@mui/material/TextField';
import BaseFormContainer from '../../../shared/BaseForm';
import { useForm } from '@tanstack/react-form';
import { useTranslation } from 'react-i18next';

interface CustomerFormContainerProps {
  onCancel: () => void;
}

const CustomerFormContainer = ({ onCancel }: CustomerFormContainerProps) => {
  const { t } = useTranslation();

  const form = useForm({
    defaultValues: { fullName: '' },
    onSubmit: (props) => {
      console.log('onSubmit', props);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <BaseFormContainer>
        <form.Field
          name={'fullName'}
          children={(fieldApi) => (
            <TextField
              value={fieldApi.state.value}
              onChange={(e) => fieldApi.handleChange(e.target.value)}
              label={t('fullName')}
              variant="outlined"
            />
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <BaseFormFooter isSubmitting={isSubmitting} canSubmit={canSubmit} onCancel={onCancel} />
          )}
        />
      </BaseFormContainer>
    </form>
  );
};

export default CustomerFormContainer;
