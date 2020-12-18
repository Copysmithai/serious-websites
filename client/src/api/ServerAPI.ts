const isProd = process.env.NODE_ENV === 'production';
// not sure why but these are reversed from what i thought they should be??
const WEBSERVER_URL = isProd
  ? 'https://serious-websites.club'
  : 'https://serious-websites.club';
import * as EmailValidator from 'email-validator';
import { WebsiteCopy } from '../_types/global/GlobalTypes';

export enum EmailResponse {
  Success,
  Invalid,
  ServerError,
}

export const submitInterestedEmail = async (
  email: string
): Promise<EmailResponse> => {
  if (!EmailValidator.validate(email)) {
    return EmailResponse.Invalid;
  }
  const { success } = await fetch(`${WEBSERVER_URL}/email/interested`, {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((x) => x.json());

  return success ? EmailResponse.Success : EmailResponse.ServerError;
};

export const generate = async (prompt: string): Promise<string> => {
  try {
    const { success, id } = await fetch(`${WEBSERVER_URL}/api/generate`, {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((x) => x.json());
    if (!success) throw new Error('site generation failed');
    return id;
  } catch (e) {
    console.error(`error occurred: ${e}`);
    throw new Error('site generation failed');
  }
};

export const getSiteCopy = async (id: string): Promise<WebsiteCopy> => {
  try {
    const ret: WebsiteCopy = await fetch(
      `${WEBSERVER_URL}/api/copy/${id}`
    ).then((x) => x.json());
    if (!ret) throw new Error("couldn't get site copy");
    return ret;
  } catch (e) {
    console.error(`error occurred: ${e}`);
    throw new Error("couldn't get site copy");
  }
};
