# Reqres 

*Dokumentasi API :* Reqres.in <br>

## Prasyarat
- Instal dan konfigurasi **Node.js** dan **npm**

## Tahap Awal
- Buat **repository** baru di **github** atau **folder** baru di **lokal**
  - Lakukan **clone** dari **repository github** di *vs code*
- Buka **proyek/folder/direktori** tersebut di **vs code**
- Buka **terminal** dan **run command** berikut untuk *inisialisasi proyek* dan *instalasi library* : (pastikan telah **berada** di *path proyek/direktori/folder/repository*)
  - `npm init`
    - description : mocha chai Reqres example (*isian bebas*)
    - test command : mocha 
  - `npm --version` (*Cek versi npm terinstal*) 
  - `npm install mocha` 
  - `npm install chai` 
  - `npm install supertest` 
  - `npm install --save-dev @babel/core`
  - `npm install mochawesome` ([HTML Report dengan mochawesome](#html-report-dengan-mochawesome))

## Contoh Assert
- Buat file **assert.js** yang berisi pesan yang ingin diassert. Kemudian, **panggil** untuk mereturn assert tersebut.
- Contoh *penggunaannya* di test\api\ **welcomeTest.js**

## Struktur Folder
- Buat di **akar**, folder dengan path **test\api** sebagai tempat *file script test*
- [Referensi lainnya](https://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter)

## Cara Run Test di Terminal
- Buka file **package.json**, *konfigurasi perintah tes* di bagian `scripts`
- Metode 1
  - Contoh `"test": "mocha path/to/testScript.js"`
  - **Run :** `npm run test`
  - *Catatan :* Kalau **perintah** terdiri dari **&ge; 2 kata**
    - Contoh `"test create user": "mocha path/to/scriptFile.js"` 
    - Cara **run :** `npm run 'test create user'`
- Metode 2
  - Contoh `"test": "mocha"`
  - **Run :** `npm run test path/to/testFile.js`

## Helper 
- Di *direktori akar*, buat file **env.js** untuk mereturn **baseUrl** (*untuk memudahkan/mempersingkat code*) yang dapat dipanggil oleh file test di *test\api*. Contoh *penggunaannya* di test\api\ __postLogin.js__
- Di *direktori akar*, buat file dengan folder data\ **userData.js** untuk return *data* ke file script di *test\api*. Contoh *penggunaannya* di test\api\ __postLogin.js__
  
## HTML Report dengan mochawesome
- Pastikan [library mochawesome](#tahap-awal) sudah terinstal : `npm list` (cek library npm dari proyek saat ini di terminal)  
- Cara **run** di terminal
  - `npx mocha --spec path/to/test_script.js --reporter mochawesome`
    - *Contoh:* `npx mocha --spec test/api/chaiAssert.js --reporter mochawesome` <br>
- Di *direktori akar*, akan muncul folder **mochawesome-report** dan *buka* folder tersebut
- *Open* di browser file **mochawesome.html** maka akan muncul *reporting testing* dalam bentuk *html*
