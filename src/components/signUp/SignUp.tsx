import { signUpSchema } from '../../types/schema';
import { Form } from '../forms/Form';

export function SignUp() {
  return (
    <Form schema={signUpSchema}>
      <Form.SignUp />
    </Form>
  );
}
