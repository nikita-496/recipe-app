/*import axios from 'axios';
import { baseApiClients } from '../clients';
import { EntityApi } from '../type/apiMethods';

async function getPopularCategories<ResponseType>(): Promise<ResponseType[]> {
  try {
    const response = await baseApiClients.get<ResponseType[]>(
      '/popular-categories',
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Error fetching categories', error.response.data);
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

export const popularCategories: EntityApi = {
  get: getPopularCategories,
};
*/

