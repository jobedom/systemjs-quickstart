System.config({
   baseURL: "/src",
   defaultJSExtensions: true,
   transpiler: "typescript",
   paths: {
      "github:*": "../jspm_packages/github/*",
      "npm:*": "../jspm_packages/npm/*"
   },

   packages: {
      "./src": {
         "defaultExtension": "ts"
      }
   },

   map: {
      "bluebird": "npm:bluebird@3.5.0",
      "lodash": "npm:lodash@4.17.4",
      "moment": "npm:moment@2.18.1",
      "mousetrap": "npm:mousetrap@1.6.1",
      "superagent": "npm:superagent@3.5.2",
      "ts": "npm:typescript@2.3.2",
      "ts-runtime": "npm:babel-runtime@5.8.38",
      "typescript": "npm:typescript@2.3.2",
      "github:jspm/nodelibs-assert@0.1.0": {
         "assert": "npm:assert@1.4.1"
      },
      "github:jspm/nodelibs-buffer@0.1.1": {
         "buffer": "npm:buffer@5.0.6"
      },
      "github:jspm/nodelibs-constants@0.1.0": {
         "constants-browserify": "npm:constants-browserify@0.0.1"
      },
      "github:jspm/nodelibs-crypto@0.1.0": {
         "crypto-browserify": "npm:crypto-browserify@3.11.0"
      },
      "github:jspm/nodelibs-events@0.1.1": {
         "events": "npm:events@1.0.2"
      },
      "github:jspm/nodelibs-http@1.7.1": {
         "Base64": "npm:Base64@0.2.1",
         "events": "github:jspm/nodelibs-events@0.1.1",
         "inherits": "npm:inherits@2.0.1",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "url": "github:jspm/nodelibs-url@0.1.0",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "github:jspm/nodelibs-https@0.1.0": {
         "https-browserify": "npm:https-browserify@0.0.0"
      },
      "github:jspm/nodelibs-net@0.1.2": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "http": "github:jspm/nodelibs-http@1.7.1",
         "net": "github:jspm/nodelibs-net@0.1.2",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "timers": "github:jspm/nodelibs-timers@0.1.0",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "github:jspm/nodelibs-os@0.1.0": {
         "os-browserify": "npm:os-browserify@0.1.2"
      },
      "github:jspm/nodelibs-path@0.1.0": {
         "path-browserify": "npm:path-browserify@0.0.0"
      },
      "github:jspm/nodelibs-process@0.1.2": {
         "process": "npm:process@0.11.10"
      },
      "github:jspm/nodelibs-querystring@0.1.0": {
         "querystring": "npm:querystring@0.2.0"
      },
      "github:jspm/nodelibs-stream@0.1.0": {
         "stream-browserify": "npm:stream-browserify@1.0.0"
      },
      "github:jspm/nodelibs-string_decoder@0.1.0": {
         "string_decoder": "npm:string_decoder@0.10.31"
      },
      "github:jspm/nodelibs-timers@0.1.0": {
         "timers-browserify": "npm:timers-browserify@1.4.2"
      },
      "github:jspm/nodelibs-url@0.1.0": {
         "url": "npm:url@0.10.3"
      },
      "github:jspm/nodelibs-util@0.1.0": {
         "util": "npm:util@0.10.3"
      },
      "github:jspm/nodelibs-vm@0.1.0": {
         "vm-browserify": "npm:vm-browserify@0.0.4"
      },
      "github:jspm/nodelibs-zlib@0.1.0": {
         "browserify-zlib": "npm:browserify-zlib@0.1.4"
      },
      "npm:asn1.js@4.9.1": {
         "bn.js": "npm:bn.js@4.11.6",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "inherits": "npm:inherits@2.0.1",
         "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
         "vm": "github:jspm/nodelibs-vm@0.1.0"
      },
      "npm:assert@1.4.1": {
         "assert": "github:jspm/nodelibs-assert@0.1.0",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "util": "npm:util@0.10.3"
      },
      "npm:asynckit@0.4.0": {
         "assert": "github:jspm/nodelibs-assert@0.1.0",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:babel-runtime@5.8.38": {
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:bluebird@3.5.0": {
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:bn.js@4.11.6": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1"
      },
      "npm:browserify-aes@1.0.6": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "buffer-xor": "npm:buffer-xor@1.0.3",
         "cipher-base": "npm:cipher-base@1.0.3",
         "create-hash": "npm:create-hash@1.1.2",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "inherits": "npm:inherits@2.0.1",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:browserify-cipher@1.0.0": {
         "browserify-aes": "npm:browserify-aes@1.0.6",
         "browserify-des": "npm:browserify-des@1.0.0",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      },
      "npm:browserify-des@1.0.0": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "cipher-base": "npm:cipher-base@1.0.3",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "des.js": "npm:des.js@1.0.0",
         "inherits": "npm:inherits@2.0.1"
      },
      "npm:browserify-rsa@4.0.1": {
         "bn.js": "npm:bn.js@4.11.6",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "constants": "github:jspm/nodelibs-constants@0.1.0",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "randombytes": "npm:randombytes@2.0.3"
      },
      "npm:browserify-sign@4.0.4": {
         "bn.js": "npm:bn.js@4.11.6",
         "browserify-rsa": "npm:browserify-rsa@4.0.1",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "create-hash": "npm:create-hash@1.1.2",
         "create-hmac": "npm:create-hmac@1.1.4",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "elliptic": "npm:elliptic@6.4.0",
         "inherits": "npm:inherits@2.0.1",
         "parse-asn1": "npm:parse-asn1@5.1.0",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:browserify-zlib@0.1.4": {
         "assert": "github:jspm/nodelibs-assert@0.1.0",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "pako": "npm:pako@0.2.9",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "readable-stream": "npm:readable-stream@2.2.9",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:buffer-shims@1.0.0": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1"
      },
      "npm:buffer-xor@1.0.3": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:buffer@5.0.6": {
         "base64-js": "npm:base64-js@1.2.0",
         "ieee754": "npm:ieee754@1.1.8"
      },
      "npm:cipher-base@1.0.3": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "inherits": "npm:inherits@2.0.1",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
      },
      "npm:combined-stream@1.0.5": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "delayed-stream": "npm:delayed-stream@1.0.0",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:constants-browserify@0.0.1": {
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:core-util-is@1.0.2": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1"
      },
      "npm:create-ecdh@4.0.0": {
         "bn.js": "npm:bn.js@4.11.6",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "elliptic": "npm:elliptic@6.4.0"
      },
      "npm:create-hash@1.1.2": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "cipher-base": "npm:cipher-base@1.0.3",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "inherits": "npm:inherits@2.0.1",
         "ripemd160": "npm:ripemd160@1.0.1",
         "sha.js": "npm:sha.js@2.4.8"
      },
      "npm:create-hmac@1.1.4": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "create-hash": "npm:create-hash@1.1.2",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "inherits": "npm:inherits@2.0.1",
         "stream": "github:jspm/nodelibs-stream@0.1.0"
      },
      "npm:crypto-browserify@3.11.0": {
         "browserify-cipher": "npm:browserify-cipher@1.0.0",
         "browserify-sign": "npm:browserify-sign@4.0.4",
         "create-ecdh": "npm:create-ecdh@4.0.0",
         "create-hash": "npm:create-hash@1.1.2",
         "create-hmac": "npm:create-hmac@1.1.4",
         "diffie-hellman": "npm:diffie-hellman@5.0.2",
         "inherits": "npm:inherits@2.0.1",
         "pbkdf2": "npm:pbkdf2@3.0.9",
         "public-encrypt": "npm:public-encrypt@4.0.0",
         "randombytes": "npm:randombytes@2.0.3"
      },
      "npm:debug@2.6.6": {
         "ms": "npm:ms@0.7.3"
      },
      "npm:delayed-stream@1.0.0": {
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:des.js@1.0.0": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "inherits": "npm:inherits@2.0.1",
         "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      },
      "npm:diffie-hellman@5.0.2": {
         "bn.js": "npm:bn.js@4.11.6",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "miller-rabin": "npm:miller-rabin@4.0.0",
         "randombytes": "npm:randombytes@2.0.3",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:elliptic@6.4.0": {
         "bn.js": "npm:bn.js@4.11.6",
         "brorand": "npm:brorand@1.1.0",
         "hash.js": "npm:hash.js@1.0.3",
         "hmac-drbg": "npm:hmac-drbg@1.0.1",
         "inherits": "npm:inherits@2.0.1",
         "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
         "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:evp_bytestokey@1.0.0": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "create-hash": "npm:create-hash@1.1.2",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0"
      },
      "npm:form-data@2.1.4": {
         "asynckit": "npm:asynckit@0.4.0",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "combined-stream": "npm:combined-stream@1.0.5",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "http": "github:jspm/nodelibs-http@1.7.1",
         "https": "github:jspm/nodelibs-https@0.1.0",
         "mime-types": "npm:mime-types@2.1.15",
         "path": "github:jspm/nodelibs-path@0.1.0",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "url": "github:jspm/nodelibs-url@0.1.0",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:formidable@1.1.1": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "events": "github:jspm/nodelibs-events@0.1.1",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "os": "github:jspm/nodelibs-os@0.1.0",
         "path": "github:jspm/nodelibs-path@0.1.0",
         "querystring": "github:jspm/nodelibs-querystring@0.1.0",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:hash.js@1.0.3": {
         "inherits": "npm:inherits@2.0.1"
      },
      "npm:hmac-drbg@1.0.1": {
         "hash.js": "npm:hash.js@1.0.3",
         "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
         "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:https-browserify@0.0.0": {
         "http": "github:jspm/nodelibs-http@1.7.1"
      },
      "npm:inherits@2.0.1": {
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:miller-rabin@4.0.0": {
         "bn.js": "npm:bn.js@4.11.6",
         "brorand": "npm:brorand@1.1.0"
      },
      "npm:mime-db@1.27.0": {
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:mime-types@2.1.15": {
         "mime-db": "npm:mime-db@1.27.0",
         "path": "github:jspm/nodelibs-path@0.1.0"
      },
      "npm:mime@1.3.4": {
         "assert": "github:jspm/nodelibs-assert@0.1.0",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "path": "github:jspm/nodelibs-path@0.1.0",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:mousetrap@1.6.1": {
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:os-browserify@0.1.2": {
         "os": "github:jspm/nodelibs-os@0.1.0"
      },
      "npm:pako@0.2.9": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:parse-asn1@5.1.0": {
         "asn1.js": "npm:asn1.js@4.9.1",
         "browserify-aes": "npm:browserify-aes@1.0.6",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "create-hash": "npm:create-hash@1.1.2",
         "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
         "pbkdf2": "npm:pbkdf2@3.0.9",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      },
      "npm:path-browserify@0.0.0": {
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:pbkdf2@3.0.9": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "create-hmac": "npm:create-hmac@1.1.4",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:process-nextick-args@1.0.7": {
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:process@0.11.10": {
         "assert": "github:jspm/nodelibs-assert@0.1.0",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "vm": "github:jspm/nodelibs-vm@0.1.0"
      },
      "npm:public-encrypt@4.0.0": {
         "bn.js": "npm:bn.js@4.11.6",
         "browserify-rsa": "npm:browserify-rsa@4.0.1",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "create-hash": "npm:create-hash@1.1.2",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "parse-asn1": "npm:parse-asn1@5.1.0",
         "randombytes": "npm:randombytes@2.0.3"
      },
      "npm:punycode@1.3.2": {
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:randombytes@2.0.3": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:readable-stream@1.1.14": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "core-util-is": "npm:core-util-is@1.0.2",
         "events": "github:jspm/nodelibs-events@0.1.1",
         "inherits": "npm:inherits@2.0.1",
         "isarray": "npm:isarray@0.0.1",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "stream-browserify": "npm:stream-browserify@1.0.0",
         "string_decoder": "npm:string_decoder@0.10.31"
      },
      "npm:readable-stream@2.2.9": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "buffer-shims": "npm:buffer-shims@1.0.0",
         "core-util-is": "npm:core-util-is@1.0.2",
         "events": "github:jspm/nodelibs-events@0.1.1",
         "inherits": "npm:inherits@2.0.1",
         "isarray": "npm:isarray@1.0.0",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "process-nextick-args": "npm:process-nextick-args@1.0.7",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "string_decoder": "npm:string_decoder@1.0.0",
         "util-deprecate": "npm:util-deprecate@1.0.2"
      },
      "npm:ripemd160@1.0.1": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:sha.js@2.4.8": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "inherits": "npm:inherits@2.0.1",
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:source-map-support@0.4.15": {
         "assert": "github:jspm/nodelibs-assert@0.1.0",
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "child_process": "github:jspm/nodelibs-child_process@0.1.0",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "module": "github:jspm/nodelibs-module@0.1.0",
         "path": "github:jspm/nodelibs-path@0.1.0",
         "process": "github:jspm/nodelibs-process@0.1.2",
         "querystring": "github:jspm/nodelibs-querystring@0.1.0",
         "source-map": "npm:source-map@0.5.6"
      },
      "npm:source-map@0.5.6": {
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:stream-browserify@1.0.0": {
         "events": "github:jspm/nodelibs-events@0.1.1",
         "inherits": "npm:inherits@2.0.1",
         "readable-stream": "npm:readable-stream@1.1.14"
      },
      "npm:string_decoder@0.10.31": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1"
      },
      "npm:string_decoder@1.0.0": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "buffer-shims": "npm:buffer-shims@1.0.0"
      },
      "npm:superagent@3.5.2": {
         "buffer": "github:jspm/nodelibs-buffer@0.1.1",
         "component-emitter": "npm:component-emitter@1.2.1",
         "cookiejar": "npm:cookiejar@2.1.1",
         "debug": "npm:debug@2.6.6",
         "extend": "npm:extend@3.0.1",
         "form-data": "npm:form-data@2.1.4",
         "formidable": "npm:formidable@1.1.1",
         "fs": "github:jspm/nodelibs-fs@0.1.2",
         "http": "github:jspm/nodelibs-http@1.7.1",
         "https": "github:jspm/nodelibs-https@0.1.0",
         "methods": "npm:methods@1.1.2",
         "mime": "npm:mime@1.3.4",
         "qs": "npm:qs@6.4.0",
         "readable-stream": "npm:readable-stream@2.2.9",
         "stream": "github:jspm/nodelibs-stream@0.1.0",
         "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
         "systemjs-json": "github:systemjs/plugin-json@0.1.2",
         "url": "github:jspm/nodelibs-url@0.1.0",
         "util": "github:jspm/nodelibs-util@0.1.0",
         "zlib": "github:jspm/nodelibs-zlib@0.1.0"
      },
      "npm:timers-browserify@1.4.2": {
         "process": "npm:process@0.11.10"
      },
      "npm:typescript@2.3.2": {
         "crypto": "github:jspm/nodelibs-crypto@0.1.0",
         "net": "github:jspm/nodelibs-net@0.1.2",
         "os": "github:jspm/nodelibs-os@0.1.0",
         "source-map-support": "npm:source-map-support@0.4.15"
      },
      "npm:url@0.10.3": {
         "assert": "github:jspm/nodelibs-assert@0.1.0",
         "punycode": "npm:punycode@1.3.2",
         "querystring": "npm:querystring@0.2.0",
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:util-deprecate@1.0.2": {
         "util": "github:jspm/nodelibs-util@0.1.0"
      },
      "npm:util@0.10.3": {
         "inherits": "npm:inherits@2.0.1",
         "process": "github:jspm/nodelibs-process@0.1.2"
      },
      "npm:vm-browserify@0.0.4": {
         "indexof": "npm:indexof@0.0.1"
      }
   }
});
