/*
import { Params } from '../api/type/common';
import { HttpEndpoint, HttpMethod } from '../api/type/http';
import { useFetch } from './useFetch';

export function useApi<ResponseType>(
  requestOption: {
    method: HttpMethod;
    endpoint: HttpEndpoint;
    params?: Params;
  },
  dependencies?: any,
) {
  const { endpoint, params } = requestOption;

  const { response, loading, error } = useFetch<ResponseType>(
    api,
    method,
    dependencies,
    params,
  );

  return { response, loading, error };
}

*/
