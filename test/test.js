const argon2 = require('argon2-wasm-pro');

let kdf_salt = Buffer.from(
    "AF8460A7D28A396C62D6C51620B87789",
    "hex"
);
let password = "123456";
let iv = Buffer.from("A695DDC35ED9F3183A09FED1E6D92083", "hex");
let privateKey = Buffer.from(
    "5E844EE4D2E26920F8B0C4B7846929057CFCE48BF40BA269B173648999630053",
    "hex"
);

let kdf_option = {
    pass: password,
    salt: kdf_salt
};
kdf_option.pass = kdf_option.pass || "123456";
kdf_option.salt =
    kdf_option.salt ||
    Buffer.from("AF8460A7D28A396C62D6C51620B87789", "hex");
kdf_option.type = kdf_option.type || argon2.argon2id;
kdf_option.time = kdf_option.time || 1;
kdf_option.mem = kdf_option.mem || 256; //256   16 * 1024  测试环境是256
kdf_option.parallelism = kdf_option.parallelism || 1;
kdf_option.hashLen = kdf_option.hashLen || 32;
console.log("create");
argon2.hash(kdf_option).then(data=>{
    console.log(data.hashHex)
});