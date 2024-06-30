//import { CreateRecipeForm } from '../../designSystem/form/createRecipeForm/CreateRecipeForm';
import { createRecipeSchema } from '../../../types/schema';
import { FormHeader } from '../../formHeader/FormHeader';
import { Form } from '../../forms/Form';

export function CreateRecipe() {
  return (
    <div className="container">
      <Form schema={createRecipeSchema}>
        <FormHeader title="Create new recipe" />
        <Form.CreateRecipe></Form.CreateRecipe>
      </Form>
      {/*<form>
        <FormHeader title="Create new recipe" />
        <div className="pt-3 pt-md-5 pb-4 mb-2">
           <CreateRecipeForm /> 
        </div>
      </form>*/}
    </div>
  );
}
