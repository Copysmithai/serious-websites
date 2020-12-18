# serious websites

using Artificial Intelligence to generate serious websites for serious Business People

## prereqs

make sure you have yarn, and node version 12.18.0 or higher

`yarn install` in `webserver` and `client`

to run the webserver, you'll need `firebase-skey.json` in `webserver` (a firebase authorization key), as well as a `.env.openai` that looks something like this:

```
API_KEY=sk-XXXXXXXX
```

(this needs to be a gpt3 key)

## running it

to run just the client on its own, run `yarn start:dev` in `client`. this runs a client on `localhost:8081`

to run the client against the webserver, first change `WEBSERVER_URL` in `client/src/api/ServerAPI.ts` to `http://localhost:3000`. then build the client by running `yarn build` in `client`. then go to `webserver` and run `yarn start:dev`. now you can access the webpage at `localhost:3000`. note that if you ever want to make a client change and reload you'll have to run `yarn build` again.
