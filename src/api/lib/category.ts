/*import axios from 'axios';
import { baseApiClients } from '../clients';
import { Id } from '../type/common';
import { EntityApi } from '../type/apiMethods';

async function findCategory<ResponseType>(id: Id): Promise<ResponseType> {
  try {
    const response = await baseApiClients.get<ResponseType>(
      `/categories/${id}`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching category', error.response.data);
    } else if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

export const category: EntityApi = {
  find: findCategory,
};
*/