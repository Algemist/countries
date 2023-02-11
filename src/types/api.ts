import { Axios } from 'axios';
import * as API from '../config/apiConfig';

export type Extra = {
    client: Axios,
    api: typeof API,
};
