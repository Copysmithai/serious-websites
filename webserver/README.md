# utilities webserver

This webserver exposes routes for registering players to the whitelist and collecting user-inputted emails.

Make sure you `yarn install` in both this directory as well as `../whitelist`, which is referenced by the files here.

## Setup for development

Before the webserver will work (in dev), you'll have to run `./local-deploy.sh` from the root `darkforest` folder. This compiles smart contracts (`webserver` and `whitelist` must be aware of contract ABIs) and generates `dev.autogen.env` file in `webserver` based off of the `.env.example` file in `../eth`.

## Setup for production

Before the webserver will work (in prod), you'll have to run `yarn deploy:prod` in `../eth`, and you must have a secret `.env.prod` file in `../eth`. This compiles smart contracts, deploys to Ropsten, and generates the `prod.autogen.env` file in`webserver`.

Before deploying in production, run `pm2 install typescript` to allow `pm2` to work with `ts-node`.
