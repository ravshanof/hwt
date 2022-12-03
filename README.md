# hwt


Create and verify JWTs with hex-based keys


> HMAC key is composed of the bytes represented by the hex string


### Generate HexKey
Generate HMAC hex-key and save it in secure environment

```ts
import { generateHex } from 'https://deno.land/x/hwt/mod.ts';


const HEX_KEY = await generateHex();

Deno.env.set("HEX_KEY", HEX_KEY);

console.log(HEX_KEY); 

// 0160e110dd2b177c0ac7bec1244129b37be05bca8719c1ab92b28d22f13da31fbf51a402c38165c546cada57361cd9c141d1fb18dfa6400ee0339e9dc8bb4820a64fa64572f695dc87c0e4e9e1573fd4a57e220bcd6bd55db79c66b725aa0a19c15f6a79fc4dead74eaef5d6e021083a97cf293cb3bad4f7ee7b20c5c7e276cc


```


### Sign JWT

```ts
import { sign } from 'https://deno.land/x/hwt/mod.ts';

const HEX_KEY = Deno.env.get("HEX_KEY");
const payload = {"username": "samandar"};

const jwt = await sign(HEX_KEY, payload);

```


### Verify JWT

```ts
import { verify } from 'https://deno.land/x/hwt/mod.ts';

const HEX_KEY = Deno.env.get("HEX_KEY");
const payload = await verify(jwt, HEX_KEY); 

console.log(payload) // {"username": "samandar"};

```
