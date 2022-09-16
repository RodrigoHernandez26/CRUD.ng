export const environment = {
  production: true,
  apiKey: process.env["API_KEY"],
  authDomain: process.env["AUTH_DOMAIN"],
  projectId: process.env['PROJECT_ID'],
  storageBucket: process.env['STORAGE_BUCKET'],
  apmessagingSenderIdiKey: process.env['AP_MESSAGING_SENDER_ID_KEY'],
  appId: process.env['APP_ID'],
  measurementId: process.env['MEASUREMENT_ID'],
};
