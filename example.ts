import hwt from './mod.ts';

// Deno.env.set("HEX_KEY", await hwt.generateHex());

const HEX_KEY = Deno.env.get("HEX_KEY");


const jwt = await hwt.sign(HEX_KEY, {"username": "samandarco"});


const payload = await hwt.verify(jwt, HEX_KEY);

console.log(HEX_KEY)

