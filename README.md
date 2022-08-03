# Read me

## Install openssl: [Following this](https://github.com/openssl/openssl)  

## Generate certificate ssl:  
### 1. follow this:  

```openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365```

You can also add ```-nodes``` (short for "no DES") if you don't want to protect your private key with a passphrase. Otherwise it will prompt you for "at least a 4 character" password.

The ```days``` parameter (365) you can replace with any number to affect the expiration date. It will then prompt you for things like "Country Name", but you can just hit Enter and accept the defaults.

Add ```-subj '/CN=localhost'``` to suppress questions about the contents of the certificate (replace localhost with your desired domain).

Self-signed certificates are not validated with any third party unless you import them to the browsers previously. If you need more security, you should use a certificate signed by a certificate authority (CA)

### 2. or follow one in this:  
* Generate Private Key and Certificate using RSA 256 encryption (4096-bit key)
```openssl req -x509 -newkey rsa:4096 -keyout privatekey.pem -out certificate.pem -days 365```  
**Alternatively, setting the "-newkey" parameter to "rsa:2048" will generate a 2048-bit key.** 

* Generate PKCS#12 (P12) file for cert; combines both key and certificate together  
```openssl pkcs12 -export -inkey privatekey.pem -in certificate.pem -out cert.pfx```  

* Generate SHA256 Fingerprint for Certificate and export to a file
```openssl x509 -noout -fingerprint -sha256 -inform pem -in certificate.pem >> fingerprint.txt``` 

* Generate SHA1 Fingerprint for Certificate and export to a file
```openssl x509 -noout -fingerprint -sha1 -inform pem -in certificate.pem >> fingerprint.txt```  

**FYI, it's best practice to use SHA256 instead of SHA1 for better security, but this shows how to do it if you REALLY need to.**

## Run project:
### 1. settup: 
* replace two file 'key.pem.example' and 'cert.pem.example' with file certificate you creating by openssl
* rename config.env.example to config.env, fill information need
  * MONGO_URI: your mongodb uri
  * PASSWORD_CERT: passphrase when you create cert if need (using to decrypt cert.pem)
* dependency install:
  * server: from root folder: ```npm i```
  * client: from root folder: ```cd client; npm i```
* run project:
  * run both: ```npm run dev```
  * or run single:
    1. server: from root folder: ```npm run server```
    1. client: from root folder: ```cd client; npm start```
