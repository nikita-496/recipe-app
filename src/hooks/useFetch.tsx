import { useEffect, useState } from 'react';
import { Api } from '../api/api';
import { baseApiClients } from '../api/clients';
import { RequestOption } from './types/fetch';

export function useFetch<ResponseType>(
  requestOption: RequestOption = {
    method: 'get',
    endpoint: 'users',
  },
  dependencies: any = [],
) {
  const [response, setResponse] = useState<ResponseType>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { endpoint, method, params } = requestOption;

  const api = new Api(baseApiClients, `/${endpoint}`);

  const fetchData = async () => {
    let response: ResponseType;
    try {
      /*if (typeof params?.id === 'object') {
        await Promise.all(
          params.id.map(async (param): Promise<ResponseType> => {
            response = (await api.get(param)) as ResponseType;
            return response;
          }),
        );
      } else {
        response = (await api.get(
          params.id,
          params.queryParams,
        )) as ResponseType;
        console.log(`useFetch`, endpoint, response);
      }*/
      if (typeof params?.id === 'object') return;
      response = (await api.get(
        params?.id,
        params?.queryParams,
      )) as ResponseType;

      setResponse(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    response,
    loading,
    error,
  };
}
