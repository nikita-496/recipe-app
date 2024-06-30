import { PropsWithChildren } from 'react';
import { FormProvider, useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateRecipeForm } from './createRecipe/CreaetRecipeForm';
import { RecomendationForm } from './recomendation/Recomendation';
import { ProfileForm } from './profile/ProfileForm';
import { ObjectSchema, AnyObject, Lazy } from 'yup';
import { LoginForm } from './login/LoginForm';
import { SignUpForm } from './signUp/SignUpForm';

type FormProps = {
  schema:
    | ObjectSchema<FieldValues, AnyObject, any, ''>
    | Lazy<{ [x: string]: any }, AnyObject, any>;
};

export function Form({ schema, children }: FormProps & PropsWithChildren) {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

Form.Recommendations = function FormRecommendations() {
  return <RecomendationForm />;
};
Form.CreateRecipe = function CreateRecipe() {
  return <CreateRecipeForm />;
};
Form.Profile = function Profile() {
  return <ProfileForm />;
};
Form.Login = function Login() {
  return <LoginForm />;
};
Form.SignUp = function SignUp() {
  return <SignUpForm />;
};
