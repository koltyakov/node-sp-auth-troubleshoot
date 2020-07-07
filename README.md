# Node.js SharePoint Authentication troubleshooting

## Prerequisites

- Node.js 10.19 or greater (this requirements is applied `node-sp-auth` v3)

## Clone the project

```bash
git clone https://github.com/koltyakov/node-sp-auth-troubleshoot
cd node-sp-auth-troubleshoot
```

## Restore dependencies

```bash
npm install
```

## Run connection test

```bash
npm run test -- --env uat
```

On the first run, connection and credentials prompts will appear.

Provide [auth options](https://github.com/s-KaiNet/node-sp-auth#getauthurl-credentialoptions) due to the environment settings following the CLI wizard.

Connection file will be saved to `./config/private.{env}.json`.

### Success

On successful connection, `=== Success ===` console message following with authentication cookies or tokens should be printed in a console.

### Errors

On error, `=== Error ===` console message following with error stack trace appears.

Please share stack trace with a developer or admin to troubleshoot the reason of the error.
