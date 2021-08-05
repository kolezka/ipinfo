import { fetch } from '../lib/fetch';
import { IDetails } from '../models/details/details.model';

export const getDetails = (ip: string) => fetch.get<IDetails>(`/${ip}`);
