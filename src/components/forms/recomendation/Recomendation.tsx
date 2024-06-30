import { useFormContext } from 'react-hook-form';
import { InputField } from '../../designSystem/inputField/InputField';
import { Button } from '../../designSystem/button/Button';

import styles from './Recomendation.module.css';

export function RecomendationForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles['form-group']}>
      <InputField
        name="recomendation"
        register={register}
        placeholder="Email Address"
        errorMessage={errors?.recomendation?.message}
        className={`${styles['recomendation-input']}`}
      />
      <Button
        className={`${styles['recomendation-button']} text-size-m w-full text-uppercase`}
      >
        Join
      </Button>
    </div>
  );
}
