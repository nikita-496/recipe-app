import { useFormContext } from 'react-hook-form';
import { InputField } from '../../designSystem/inputField/InputField';
import { Icon } from '../../designSystem/icon/Icon';
import { Button } from '../../designSystem/button/Button';

import styles from './SignUpForm.module.css';

export function SignUpForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className={`${styles['signup-form-group']} mb-4`}>
        <InputField
          name="fullname"
          placeholder="Full Name"
          register={register}
          variant="outlined"
          errorMessage={errors?.fullname?.message}
          icon={
            <Icon
              icon="User"
              className={`${styles['signup-form-input-icon']}`}
            />
          }
          className={`${styles['signup-form-input']}`}
        />
      </div>
      <div className={`${styles['signup-form-group']} mb-4`}>
        <InputField
          name="email"
          placeholder="Email"
          register={register}
          variant="outlined"
          errorMessage={errors?.email?.message}
          icon={
            <Icon
              icon="Mail"
              className={`${styles['signup-form-input-icon']}`}
            />
          }
          className={`${styles['signup-form-input']}`}
        />
      </div>
      <div className={`${styles['signup-form-group']} mb-4`}>
        <InputField
          name="password"
          placeholder="Password"
          register={register}
          variant="outlined"
          errorMessage={errors?.password?.message}
          icon={
            <Icon
              icon="Password"
              className={`${styles['signup-form-input-icon']}`}
            />
          }
          className={`${styles['signup-form-input']}`}
        />
      </div>
      <Button className={`${styles['signup-form-button']} text-size-base`}>
        Signup
      </Button>
      <p>Or login with</p>
    </>
  );
}
