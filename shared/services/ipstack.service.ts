import { fetch } from '../lib/fetch';
import { IDetails } from '../models/details/details.model';

export interface IErrorResponse {
  detail: string;
}

export const getDetails = (ip: string) =>
  fetch.get<IDetails | IErrorResponse>(`/${ip}`);
