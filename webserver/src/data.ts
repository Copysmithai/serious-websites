import express, { Request, Response } from 'express';
import * as admin from 'firebase-admin';
import { getRandomId, validateEmail } from './utils';

require('dotenv').config({
  path: '.env.openai',
});

const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.API_KEY);

type WebsiteCopy = {
  header: string;
  subheader: string;
  featureTitle1: string;
  featureDesc1: string;
  featureTitle2: string;
  featureDesc2: string;
  featureTitle3: string;
  featureDesc3: string;
  ctaSlogan: string;
};

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://clown-site-generator.firebaseio.com',
});

const db = admin.firestore();

const gptCall = async (
  prompt: string,
  maxTokens: number = 20
): Promise<string> => {
  try {
    const ret = await openai.complete({
      engine: 'davinci',
      prompt,
      maxTokens,
      temperature: 0.4,
      best_of: 1,
      n: 1,
      stream: false,
    });
    return ret.data.choices[0].text;
  } catch (e) {
    console.error(e);
    return '';
  }
};

const getWebsiteCopy = async (businessDesc: string): Promise<WebsiteCopy> => {
  console.log('getting website copy');
  // TODO: you guys fill this in!

  const prefix = `We are creating a new startup: ${businessDesc}. `;

  const headerP = gptCall(prefix + "Our company's slogan is ");
  const subheaderP = gptCall(prefix + 'At our startup, ', 40);
  const featureTitle1P = gptCall(
    prefix + "One feature of our startup's product is ",
    20
  );
  const featureTitle2P = gptCall(
    prefix + "One feature of our startup's product is ",
    20
  );
  const featureTitle3P = gptCall(
    prefix + "One feature of our startup's product is ",
    20
  );

  const [
    header,
    subheader,
    featureTitle1,
    featureTitle2,
    featureTitle3,
  ] = await Promise.all([
    headerP,
    subheaderP,
    featureTitle1P,
    featureTitle2P,
    featureTitle3P,
  ]);

  const featureDesc1 = await gptCall(
    prefix +
      `One feature of our startup's product is ${featureTitle1}. More specifically, `,
    40
  );
  const featureDesc2 = await gptCall(
    prefix +
      `One feature of our startup's product is ${featureTitle1}. More specifically, `,
    40
  );
  const featureDesc3 = await gptCall(
    prefix +
      `One feature of our startup's product is ${featureTitle1}. More specifically, `,
    40
  );
  return {
    header,
    subheader,
    featureTitle1,
    featureDesc1,
    featureTitle2,
    featureDesc2,
    featureTitle3,
    featureDesc3,
    ctaSlogan: header,
  };
};

const saveInterestedEmail = async (email: string) => {
  await db.collection('emails').doc(email).set({ email });
};

export const registerRoutes = () => {
  const app = express.Router();

  app.post('/email/interested', async (req: Request, res: Response) => {
    if (!validateEmail(req.body.email)) {
      res.send(JSON.stringify({ success: false }));
      return;
    }
    try {
      await saveInterestedEmail(req.body.email);
      res.send(JSON.stringify({ success: true }));
    } catch (e) {
      res.send(JSON.stringify({ success: false }));
    }
  });

  app.post('/generate', async (req: Request, res: Response) => {
    try {
      const copy = await getWebsiteCopy(req.body.prompt);
      const id = getRandomId();
      await db
        .collection('sites')
        .doc(id)
        .set({ websiteCopy: JSON.stringify(copy) });
      res.send(JSON.stringify({ success: true, id }));
    } catch (e) {
      res.send(JSON.stringify({ success: false }));
    }
  });

  app.get('/copy/:id', async (req: Request, res: Response) => {
    try {
      const doc = await db.collection('sites').doc(req.params.id).get();
      if (!doc.exists) {
        throw new Error('no website with this id exists');
      }
      const copy: WebsiteCopy = JSON.parse(doc.data().websiteCopy);
      res.send(copy);
    } catch (e) {
      console.error(
        `error occurred trying to get site id ${req.params.id}: ${e}`
      );
      res.send(JSON.stringify(null));
    }
  });

  return app;
};

export const configure = async () => {};
