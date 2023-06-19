# Reqres 

Javascript API Automation <br>

Belajar test api secara automate menggunakan javascript <br>
Test dilakukan dengan menggunakan dokumentasi api Reqres.in <br>
dan dikerjakan dengan mengikuti panduan dari myskill. <br>

Tahap awal <br>
-> Buat repository baru di github <br>
-> Lakukan clone di vs code <br>
-> Buka foldernya <br>
-> Buka terminal dan run command berikut : (sebelum run command di terminal pastikan telah berada di path direktori folder repository) <br>
  &emsp; -> npm init <br>
    &emsp; &emsp; -> description : mocha chai Reqres example <br>
    &emsp; &emsp; -> test command : mocha <br>
  &emsp; -> npm --version (Cek versi npm terinstal) <br>
  &emsp; -> npm install mocha <br>
  &emsp; -> npm install chai <br>
  &emsp; -> npm install supertest <br>
  &emsp; -> npm install --save-dev @babel/core <br>

Buat file assert.js untuk pemanggilan dengan tujuan untuk mereturn suatu assert yang diinginkan <br>

Buat di akar, folder dengan path test\api untuk tempat file script yang akan dilakukan testing <br>

Cara run test di terminal : (pilih salah satu) <br>
-> npm run test (Syarat : Sudah terisi di file package.json bagian scripts bagian "test" : mocha path/to/file.js) <br>
-> npm run test path/to/file.js (Syarat : Sudah terisi di file package.json bagian scripts bagian "test" : mocha) <br>
Note : Kalau 2 kata, misalnya "test post" : mocha path/to/file.js maka cara runnya -> npm run 'test post' <br>

Buat file env.js untuk mereturn baseUrl yang dapat dipanggil oleh file script testing di test\api untuk memudahkan <br>

Reporting in mochawesome <br>
-> install di terminal : npm install mochawesome <br>
Cara run <br>
-> npx mocha --spec path/to/ChaiAssert.js --reporter mochawesome <br>
-> Nanti muncul folder mochawesome-report dan buka folder tersebut <br>
-> Open di browser file mochawesome.html <br>
-> Nanti muncul reporting testing dalam bentuk html <br>

Buat folder data dan file baru di dalamnya userData.js yang berguna untuk pemanggilan data ke file script testing test\api
