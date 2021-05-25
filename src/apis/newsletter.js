import httpClient from './httpClient';

export const newsletterSignup = async (email) => {
  let resp;
  try {  
    await httpClient.post('/public/newsletter/email', {
      email,
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
  return resp;
};