Work Plan Front End

(Work Code) DK-EC-01 (DTO Kemenkes - Exchange Currency - 01)
(Tags) Test Online 
(Work) Case Study Frontend DTO Kemenkes

Questions:
Why use (fill with something) ?
    Untuk user yang ingin menghitung mata uang asing. 

What problem do we need to solve?
    Masalah user yang ingin menghitung mata uang dari USD ke beberapa mata uang lain. 

Facts
    - UI :
        Homepage berisi list card
    - API :
        https://api.exchangeratesapi.io/latest?base=USD 
    - Input teks yang menentukan jumlah input mata uang dari mata uang dasar, USD :
        Value default awal adalah 10.00.
        Mata uang awal mungkin di-hardcode ke USD.
    - Daftar dengan nilai berikut :
        Mata uang target -- beserta detailnya
        Jumlah konversi yang dihitung.
        Jumlah yang dihitung harus berubah setiap kali jumlah input berubah.
        Nilai tukar saat ini.
        Tombol (-) untuk menghapus mata uang target
    - Opsi untuk menambahkan lebih banyak mata uang ke daftar :
        Setelah mengklik, pengguna dapat memasukkan kode mata uang mereka sendiri melalui menu dropdown dan mengirimkan
        Daftar mata uang yang harus didukung adalah sebagai berikut :
        USD CAD IDR GBP CHF SGD INR MYR JPY KRW

Context
    Studi Kasus: Aplikasi Foreign Exchange Currency

Constraints
    Convert mata uang
    Card yang berisi info mata uang lain
    Docker for deployment 6 hours

Related Problems
    https://www.youtube.com/watch?v=XN5elYWiSuw&t=673s

What we don't know yet from the related problems?
    Convert mata uang di react 
    Update state card yang berisi info mata uang lain di react 
    Docker for deployment 6 hours 
