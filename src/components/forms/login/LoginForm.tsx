import { useFormContext } from 'react-hook-form';
import { InputField } from '../../designSystem/inputField/InputField';
import { Icon } from '../../designSystem/icon/Icon';

import styles from './LoginForm.module.css';
import { Button } from '../../designSystem/button/Button';
import { withDialog } from '../../../hoc/withDialog';
import { WrappedComponentProps } from '../../@types/props/WrappedComponent';
import { SignUp } from '../../signUp/SignUp';

const SignUpWithDialog = withDialog(SignUpLink, 'Sign Up', true, SignUp);

function SignUpLink({ toggleDialog, forwardRef }: WrappedComponentProps) {
  return (
    <a className="link" onClick={toggleDialog}>
      Sign Up
    </a>
  );
}

export function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className={`${styles['login-form-group']} mb-4`}>
        <InputField
          name="email"
          placeholder="Email"
          register={register}
          variant="outlined"
          errorMessage={errors?.email?.message}
          icon={
            <Icon
              icon="Mail"
              className={`${styles['login-form-input-icon']}`}
            />
          }
          className={`${styles['login-form-input']}`}
        />
      </div>
      <div className={`${styles['login-form-group']} mb-4`}>
        <InputField
          name="password"
          placeholder="Password"
          register={register}
          variant="outlined"
          errorMessage={errors?.password?.message}
          icon={
            <Icon
              icon="Password"
              className={`${styles['login-form-input-icon']}`}
            />
          }
          className={`${styles['login-form-input']}`}
        />
      </div>
      <Button className={`${styles['login-form-button']} text-size-base`}>
        Login
      </Button>
      <p>Or login with</p>
      <div className="d-flex">
        <Button className={`${styles['login-form-button-social']}`}>
          Facebook
        </Button>
        <Button className={`${styles['login-form-button-social']} ml-auto`}>
          Google
        </Button>
      </div>
      <span>Don't have an account?</span>
      <SignUpWithDialog />
    </>
  );
}
