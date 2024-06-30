import { profileSchema } from '../../../types/schema';
import { AccountManage } from '../../accountManage/AccountManage';
//import { AccountForm } from '../../designSystem/form/accauntForm/AccountForm';
//import { ProfileForm } from '../../designSystem/form/profileForm/ProfileForm';
import { FormHeader } from '../../formHeader/FormHeader';
import { Form } from '../../forms/Form';
import { Subscribe } from '../../subscribe/Subscribe';

import styles from './Profile.module.css';

export function Profile() {
  return (
    <div className="container">
      <Form schema={profileSchema}>
        <FormHeader title="Profile" />
        {/*<ProfileForm />
        <div className="mt-3 mt-md-5 pt-2 pt-md-4 pb-1">
          <AccountForm />
        </div>*/}
        <Form.Profile />
        <div className="mt-3 mt-md-5 mb-3">
          <Subscribe />
        </div>
        <hr className={`${styles['divider']} my-4 my-md-5`} />
      </Form>
      <AccountManage />
    </div>
  );
}
