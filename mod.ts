import { bufferToHex, hexToBuffer } from "https://deno.land/x/hextools/mod.ts";
import * as djwt from "https://deno.land/x/djwt@v2.8/mod.ts";

export default { generateHex, sign, verify };

async function sign (hex, payload) {
  const key = await hexToKey(hex);
  const jwt = await djwt.create({ alg: "HS512", typ: "JWT" }, payload, key);
  return jwt
}

async function verify (jwt, hex) {
  const key = await hexToKey(hex);
  const payload = await djwt.verify(jwt, key); 
  return payload;
}

async function hexToKey(hex) {

  const key = await crypto.subtle.importKey(
      "raw", // raw format of the key - should be Uint8Array
      hexToBuffer(hex),
      { // algorithm details
          name: "HMAC",
          hash: {name: "SHA-512"}
      },
      true, // export = false
      ["sign", "verify"] // what this key can do
  )

  return key;

}


async function keyToHex (key) {
  const exported = await crypto.subtle.exportKey('raw', key);
  const exportedKeyBuffer = new Uint8Array(exported);
  return bufferToHex(exportedKeyBuffer);

}

async function generateHex () {
  const key = await generateKey();
  const hex = await keyToHex(key);
  return hex
}

async function generateKey() {
  const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"],
  );

  return key;
}