import { generateHex, sign, verify } from './mod.ts';

Deno.env.set("HEX_KEY", await generateHex());

const HEX_KEY = Deno.env.get("HEX_KEY");


const jwt = await sign(HEX_KEY, {"username": "samandarco"});
const payload = await verify(jwt, HEX_KEY);

console.log(HEX_KEY)

