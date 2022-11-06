
const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
 app.use(bodyParser.json()) // penggunaan body-parser untuk ekstrak data request dari body 
 app.use(bodyParser.urlencoded({extended: true})) // penggunaan cors agar end point dapat diakses oleh cross platform 
 app.use(cors())

 // endpoint "/test" dengan method GET 
 app.get("/test", (req,res) => { 
    // req merupakan variabel yang berisi data request 
    // res merupakan variabel yang berisi data response dari end-point // membuat objek yang berisi data yang akan dijadikan response 
    let response = { message: "Ini end-point pertama ku",
    method: req.method, code: res.statusCode } 
    // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response) })
    // menjalankan server pada port 8000 
    app.listen(8003, () => { console.log("Server run on port 8001"); })

    // endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
 // :name dan :age → diberikan titik dua didepan menunjukkan "name"dan "age"
// bersifat dinamis yang dapat diganti nilai nya saat melakukan request
// menampung data yang dikirimkan
let name = req.params.name // mengambil nilai pada parameter name
let age = req.params.age // mengambil nilai pada parameter age
// membuat objek yang berisi data yang akan dijadikan response
// response berisi data nama dan umur sesuai dengan nilai parameter
let response = {
nama: name,
umur: age
}
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    panjang: panjang,
    lebar: lebar,
    luas: luas,
    keliling: keliling
    };
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
   })
   
   app.post('/balok', (req, res) => {
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body
    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * (panjang*lebar + panjang*tinggi + tinggi*lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi : tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
        };
        res.json(response)
   });
   app.post('/kubus', (req, res) => {
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body
    let volume = sisi * sisi * sisi
    let luas_permukaan = 6 * sisi * sisi
    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan:luas_permukaan
    };
    res.json(response)
});

app.post('/tabung', (req, res) => {
    let jarijari = Number(req.body.jarijari) // mengambil nilai sisi dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai sisi dari body
    if (jarijari % 7 == 0){
    let volume = 22/7 * jarijari*jarijari * tinggi
    let luas_permukaan = 2 * 22/7 * jarijari * (jarijari+tinggi)
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan:luas_permukaan
    };
    res.json(response)
}
let volume = 3.14 * jarijari*jarijari * tinggi
    let luas_permukaan = 2 * 3.14 * jarijari * (jarijari+tinggi)
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan:luas_permukaan
    };
    res.json(response)

});
      
app.post('/kerucut', (req, res) => {
    let jarijari = Number(req.body.jarijari) // mengambil nilai sisi dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai sisi dari body
    let sisimiring= Number(req.body.sisimiring) // mengambil nilai sisi dari body
    if (jarijari % 7 == 0){
    let volume = 22/7 * jarijari**2 * tinggi /3
    let luas_permukaan = 22/7 * jarijari * (jarijari+sisimiring) 
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        sisimiring: sisimiring,
        volume: volume,
        luas_permukaan:luas_permukaan
    };
    res.json(response)
}
let volume = 3.14 * jarijari*jarijari * tinggi /3
    let luas_permukaan =  3.14 * jarijari * (jarijari+sisimiring) 
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        sisimiring: sisimiring,
        volume: volume,
        luas_permukaan:luas_permukaan
    };
    res.json(response)

});

app.get("/biner/:angka", (req,res) => {
 
    let angka = req.params.angka 
    let decimal = parseInt(angka,2).toString(10)
    let octal = parseInt(angka,2).toString(8)
    let hexa = parseInt(angka,2).toString(16)
   
    let response = {
    angka: angka,
    decimal: decimal,
    octal: octal,
    hexa: hexa
  
    };
 
    res.json(response)
    });

    app.get("/octal/:angka", (req,res) => {
 
        let angka = req.params.angka 
        let decimal = parseInt(angka,8).toString(10)
        let biner = parseInt(angka,8).toString(2)
        let hexa = parseInt(angka,8).toString(16)
       
        let response = {
        angka: angka,
        decimal: decimal,
        biner: biner,
        hexa: hexa
      
        };
     
        res.json(response)
        });

        app.get("/hexa/:angka", (req,res) => {
 
            let angka = req.params.angka 
            let decimal = parseInt(angka,16).toString(10)
            let biner = parseInt(angka,16).toString(2)
            let octal = parseInt(angka,16).toString(8)
           
            let response = {
            angka: angka,
            decimal: decimal,
            biner: biner,
            octal: octal
          
            };
         
            res.json(response)
            });

            app.get("/decimal/:angka", (req,res) => {
 
                let angka = req.params.angka 
                let hexa = parseInt(angka,10).toString(16)
                let biner = parseInt(angka,10).toString(2)
                let octal = parseInt(angka,10).toString(8)
               
                let response = {
                angka: angka,
                hexa: hexa,
                biner: biner,
                octal: octal
              
                };
             
                res.json(response)
                });
    

app.get("/temp/:celcius", (req,res) => {
 
   let celcius = req.params.celcius    
   let reamur = 4/5 * celcius
   let kelvin = 5/5 *  celcius + 273
   let farenheit = (9/5) * celcius + 32
  
   let response = {
   celcius: celcius,
   reamur: reamur,
   kelvin: kelvin,
   farenheit:farenheit
   };

   res.json(response)
   });

   app.get("/suhureamur/:reamur", (req,res) => {
 
    let reamur = req.params.reamur 
    let celcius = 5/4 * reamur
    let kelvin = (5/4) *  reamur + 273
    let farenheit = (9/4) * reamur + 32
   
    let response = {
    reamur: reamur,
    celcius: celcius,
    farenheit:farenheit,
    kelvin: kelvin
  
    };
 
    res.json(response)
    });

   app.get("/suhufarenheit/:farenheit", (req,res) => {
 
    let farenheit = req.params.farenheit    
    let reamur = 4/9 * (farenheit-32)
    let kelvin = 5/9 *  (farenheit-32) + 273
    let celcius = 5/9 *  (farenheit-32)
   
    let response = {
    celcius: celcius,
    reamur: reamur,
    kelvin: kelvin,
    farenheit:farenheit
    };
 
    res.json(response)
    });

    app.get("/suhukelvin/:kelvin", (req,res) => {
 
        let kelvin = req.params.kelvin   
        let reamur = 4/5 *(kelvin-273)
        let farenheit = 9/5 *(kelvin-273) + 32
        let celcius =  kelvin-273
       
        let response = {
        kelvin: kelvin,
        celcius: celcius,
        reamur: reamur,
        farenheit:farenheit
        };
     
        res.json(response)
        }); 


        app.post('/bmi', (req, res) => {
            let berat = Number(req.body.berat) // mengamil nilai lebar dari body
            let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body
            let bmi = berat/ (tinggi)**2
            let status=''
            if (bmi < 18.5){
                status="kekurangan berat badan"
            }else if(bmi>=18.5&&bmi<25.9){
                status="normal(ideal)"

            }else if(bmi>=25&&bmi<29.9){
                status="kelebihan berat badan"

            }else if(bmi>=30.0){
                status="kegemukan(obesitas)"

            }
           
        
            let response = {

                berat: berat,
                tinggi : tinggi,
                bmi : bmi,
                status:status
            
            
                };
                res.json(response)
           });



           app.post('/ganjilgenap', (req, res) => {
            let angka = Number(req.body.angka) // mengamil nilai lebar dari body
          let kategori=''
       
            if (angka % 2 ==1){
                kategori="ganjil"
            }else if(angka % 2 ==0){
                kategori="genap"

            }
           
        
            let response = {

                angka: angka,
                kategori:kategori
            
            
                };
                res.json(response)
           });


