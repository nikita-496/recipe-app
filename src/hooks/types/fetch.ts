import { HttpMethod, HttpEndpoint } from '../../api/type/http';
import { Params } from '../../api/type/common';

 export type RequestOption = {
    endpoint: HttpEndpoint;   
    method?: HttpMethod;
    params?: Params;
}