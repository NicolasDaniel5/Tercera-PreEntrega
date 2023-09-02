const productos =[

    {
        id:1,
        nombre: "Tablet",
        precio: 700,
        imagen: "https://i5.walmartimages.com/asr/c9aa180e-eea5-4049-9317-1e9676a3c2c4.ccf1c8fc260314c8727df5bfbc2df523.jpeg",
        categorias: "Teconologia" 
    },
    {
        id:2,
        nombre: "Celular",
        precio: 500, 
        imagen:"https://static.nb.com.ar/i/nb_samsung-telefono-celular-galaxy-a20-black_ver_af4a0e20885a0846ac9d12214555fe37.jpeg", 
        categorias: "Tecnologia" 
    },
    {
        id:3, 
        nombre: "Heladera", 
        precio: 1000, 
        imagen:"https://minicuotas.ribeiro.com.ar/images/products/large_X/016021151000.jpg" , 
        categorias: "Electrodomesticos"
    },
    {
        id:4 , 
        nombre: "Aire acondicionado", 
        precio: 1300, 
        imagen: "https://th.bing.com/th/id/OIP.yz9iv_LRV_FNUmVuA_lW8gHaHa?pid=ImgDet&rs=1", 
        categorias: "Electrodomesticos" 
    },
    {
        id:5 , 
        nombre: "Placard" , 
        precio: 850 , 
        imagen: "https://th.bing.com/th/id/R.b9d2bb0d2715b04b4bb87dee20e961d9?rik=uFjJEP7w9u7F6g&riu=http%3a%2f%2fvella-creations-bois.fr%2fwp-content%2fuploads%2f2016%2f02%2famenagement-dinterieur-de-placard-melanier-blanc.jpg&ehk=ZcTz%2bkJnkaP7k%2f1C4x%2fk8MISwoSEbCLm4EKfmHTGU08%3d&risl=&pid=ImgRaw&r=0", 
        categorias: "Muebles" 
    },
    {
        id:6, 
        nombre: "Somier" , 
        precio: 700, 
        imagen: "https://th.bing.com/th/id/OIP.ogacDKS6BcUZga55NOzjoAHaHa?pid=ImgDet&rs=1", 
        categorias: "Muebles"
    },
    {
        id:7, 
        nombre: "notebook" , 
        precio: 700, 
        imagen: "https://www.bhphotovideo.com/images/images2500x2500/samsung_np750xbe_x01us_i7_8565u_16gb_512ssd_mx250_1494972.jpg", 
        categorias: "Tecnologia"
    },
    {
        id:8, 
        nombre: "Cajonera" , 
        precio: 700, 
        imagen: "https://th.bing.com/th/id/R.f48e32e42d0361008e222e17cfd94770?rik=Skn3Hz7c9b6kkQ&pid=ImgRaw&r=0", 
        categorias: "Muebles"
    },
    {
        id:9, 
        nombre: "Horno electrico" , 
        precio: 700, 
        imagen: "https://th.bing.com/th/id/OIP.a9MenGCrIlKf3I39-pWfVgHaHI?pid=ImgDet&rs=1", 
        categorias: "Electrodomesticos"
    }
        
]




JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos",JSON.stringify(productos));