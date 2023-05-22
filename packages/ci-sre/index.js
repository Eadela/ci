import { push } from './push/push.js';
import { encrypt, decrypt } from './sre/aes.js';
import { publish } from './sre/sre.js';

export const run = async (commands, options, browserOptions, account, publishOptions) => {
  await push(commands, options);

  await publish(browserOptions, account, publishOptions);
};

export { push, encrypt, decrypt, publish }
