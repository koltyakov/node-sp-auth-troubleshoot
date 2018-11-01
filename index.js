//@ts-check

const { AuthConfig } = require('node-sp-auth-config');
const { getAuth } = require('node-sp-auth');
const program = require('commander');

program
  .option('-e, --env [value]', `Environment code name, e.g. 'UAT'`, '')
  .parse(process.argv);

const { env } = program;

(async () => {

  const { siteUrl, authOptions } = await new AuthConfig({
    configPath: env
      ? `./config/private.${env.toLowerCase()}.json`
      : './config/private.json'
  }).getContext();

  console.log(`Connecting to site: ${siteUrl}\n`);
  const authResponse = await getAuth(siteUrl, authOptions);
  console.log('=== Success ===', '\n', authResponse);

})()
 .catch(error => console.log('=== Error ===', '\n', error));
