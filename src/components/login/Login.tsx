import { loginSchema } from '../../types/schema';
import { Form } from '../forms/Form';

export function Login() {
  return (
    <Form schema={loginSchema}>
      <Form.Login />
    </Form>
  );
}
