import { useFormContext } from 'react-hook-form';
import { InputField } from '../../designSystem/inputField/InputField';

import styles from './ProfileForm.module.css';
import { Icon } from '../../designSystem/icon/Icon';

import facebook from '../../../assets/svg/facebook.svg';
import google from '../../../assets/svg/google.svg';

export function ProfileForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className={`${styles['profile-form-group']} mb-4`}>
        <span className="text-uppercase">Full Name</span>
        <InputField
          name="fullname"
          variant="outlined"
          placeholder="Suzan M"
          register={register}
          className={`${styles['profile-form-input']}`}
          icon={<Icon icon="User" className={`${styles['input-icon']}`} />}
          errorMessage={errors?.fullname?.message}
        ></InputField>
      </div>
      <div className={`${styles['profile-form-group']} mb-4`}>
        <span className="text-uppercase">Username</span>
        <InputField
          name="username"
          variant="outlined"
          placeholder="Miller"
          register={register}
          className={`${styles['profile-form-input']}`}
          icon={<Icon icon="AtSign" className={`${styles['input-icon']}`} />}
          errorMessage={errors?.username?.message}
        ></InputField>
      </div>
      <div className={`${styles['profile-form-group']} mb-4`}>
        <span className="text-uppercase">Email</span>
        <InputField
          name="email"
          type="email"
          variant="outlined"
          placeholder="suzan@gmail.com"
          register={register}
          className={`${styles['profile-form-input']}`}
          icon={<Icon icon="Mail" className={`${styles['input-icon']}`} />}
          errorMessage={errors?.email?.message}
        ></InputField>
      </div>
      <div className={`${styles['profile-form-group']} mb-4`}>
        <span className="text-uppercase">Password</span>
        <InputField
          name="password"
          type="password"
          variant="outlined"
          placeholder="password"
          register={register}
          className={`${styles['profile-form-input']}`}
          icon={<Icon icon="Password" className={`${styles['input-icon']}`} />}
          errorMessage={errors?.password?.message}
        ></InputField>
      </div>
      <div className="pt-3 pt-pd-5 pb-3">
        <h6 className={`${styles['profile-form-title']} mb-3 text-size-base`}>
          Connected Accounts
        </h6>
        <div className="mb-4">
          <div className="d-flex align-items-center">
            <img src={facebook} alt="Facebook" />
            <a href="" className="ml-auto link">
              Disconnect
            </a>
          </div>
          <InputField
            name="facebookAccount"
            variant="outlined"
            placeholder="Suzan Miller"
            register={register}
            errorMessage={errors?.facebookAccount?.message}
          ></InputField>
        </div>
        <div className="pb-4">
          <div className="d-flex align-items-center">
            <img src={google} alt="Google" />
            <a href="" className="ml-auto link">
              Disconnect
            </a>
          </div>
          <InputField
            name="googleAccount"
            type="email"
            variant="outlined"
            placeholder="suzan@gmail.com"
            register={register}
            errorMessage={errors?.googleAccount?.message}
          ></InputField>
        </div>
      </div>
    </>
  );
}
