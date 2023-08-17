import {
  ClientResponse,
  CustomerSignInResult,
} from '@commercetools/platform-sdk';

export interface ISliceUser {
  status: string | null;
  message: string | null | unknown;
  id: string | null;
}

export interface CharacterSuccessResponse {
  results: ClientResponse<CustomerSignInResult>;
}

export interface CharacterFailedResponse {
  error: string;
}