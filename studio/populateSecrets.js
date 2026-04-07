import 'dotenv/config';

import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2026-04-06' });

client.createOrReplace({
  // The `.` in this _id will ensure the document is private
  // even in a public dataset!
  _id: 'generaltranslation.secrets',
  _type: 'generaltranslationSettings',
  secret: process.env.GT_API_KEY,
  project: process.env.GT_PROJECT_ID,
});