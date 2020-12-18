# serious websites

generate serious websites for serious Business People

## prereqs

make sure you have yarn, and node version 12.18.0 or higher

`yarn install` in `webserver` and `client`

to run the webserver, you'll need `firebase-skey.json` in `webserver` (a firebase authorization key), as well as a `.env.openai` that looks something like this:

```
API_KEY=sk-XXXXXXXX
```

## running it

to run just the client on its own, run `yarn start:dev` in `client`. this runs a client on `localhost:8081`

to run the client against the webserver, first change `WEBSERVER_URL` in `client/src/api/ServerAPI.ts` to `http://localhost:3000`. then build the client by running `yarn build` in `client`. then go to `webserver` and run `yarn start:dev`. now you can access the webpage at `localhost:3000`. note that if you ever want to make a client change and reload you'll have to run `yarn build` again.

## getting off netlify

if you want to roll your own stack (vs. relying on netlify and whatever other hosted services) i figured this might be useful as a starting point. if it's useful, the two things you'd probably want to slot in:

- do the frontend css/styling to your liking. i just dumped in some defaults from a previous project + copied in some of the cube stylesheets
- you should fill out the `getWebsiteCopy` fn in `webserver/src/data.ts` with ur own stuff. there's a garbage placeholder to demonstrate how that function fits in to everything else, so slot in ur secret sauce there.
