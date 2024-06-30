import { useFormContext } from 'react-hook-form';
import { InputField } from '../../designSystem/inputField/InputField';
import { Button } from '../../designSystem/button/Button';
import { AdjustableFields } from '../../adjustableFields/AdjustableFields';

export function CreateRecipeForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="mb-4">
        <span>Recipe Title:</span>
        <InputField
          name="recipeTitle"
          register={register}
          placeholder="Enter the name of your recipe"
          errorMessage={errors?.recipeTitle?.message}
        />
      </div>
      <div className="mb-4">
        <span>Description:</span>
        <InputField
          name="recipeDescription"
          register={register}
          placeholder="Introduce your recipe"
          errorMessage={errors?.recipeDescription?.message}
        />
      </div>
      <div className="mb-4">
        <span>Ingredietns:</span>
        <AdjustableFields>
          <InputField
            name="recipeIngredietns"
            register={register}
            placeholder="Add ingredients"
            errorMessage={errors?.recipeIngredietns?.message}
          />
        </AdjustableFields>
      </div>
      <div className="mb-4">
        <span>Instractions:</span>
        <AdjustableFields>
          <InputField
            name="recipeInstractions"
            register={register}
            placeholder="Write instructions"
            errorMessage={errors?.recipeInstractions?.message}
          />
        </AdjustableFields>
      </div>
      <div className="mb-4">
        <span>Servings:</span>
        <InputField
          name="recipeServings"
          register={register}
          placeholder="#"
          errorMessage={errors?.recipeServings?.message}
        />
      </div>
      <div className="mb-4">
        <span>Cooking Time:</span>
        <div className="row">
          <div className="col-6">
            <InputField
              name="recipeHours"
              register={register}
              placeholder="Hours 0"
              errorMessage={errors?.recipeHours?.message}
            />
          </div>
          <div className="col-6">
            <InputField
              name="recipeMinutes"
              register={register}
              placeholder="Minutes 0"
              errorMessage={errors?.recipeMinutes?.message}
            />
          </div>
        </div>
      </div>
    </>
  );
}
