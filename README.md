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
  -> npm init <br>
    -> description : mocha chai Reqres example <br>
    -> test command : mocha <br>
  -> npm --version (Cek versi npm terinstal) <br>
  -> npm install mocha <br>
  -> npm install chai <br>
  -> npm install supertest <br>
  -> npm install --save-dev @babel/core <br>

Buat file assert.js untuk pemanggilan dengan tujuan untuk mereturn suatu assert yang diinginkan

Buat di akar, folder dengan path test\api untuk tempat file script yang akan dilakukan testing

Cara run test di terminal : (pilih salah satu)
-> npm run test (Syarat : Sudah terisi di file package.json bagian scripts bagian "test" : mocha path/to/file.js)
-> npm run test path/to/file.js (Syarat : Sudah terisi di file package.json bagian scripts bagian "test" : mocha)
Note : Kalau 2 kata, misalnya "test post" : mocha path/to/file.js maka cara runnya -> npm run 'test post'

Buat file env.js untuk mereturn baseUrl yang dapat dipanggil oleh file script testing di test\api untuk memudahkan

Reporting in mochawesome 
-> install di terminal : npm install mochawesome
Cara run
-> npx mocha --spec path/to/ChaiAssert.js --reporter mochawesome
-> Nanti muncul folder mochawesome-report dan buka folder tersebut
-> Open di browser file mochawesome.html
-> Nanti muncul reporting testing dalam bentuk html

Buat folder data dan file baru di dalamnya userData.js yang berguna untuk pemanggilan data ke file script testing test\api
