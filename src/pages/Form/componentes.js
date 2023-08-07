export const componentes = {
  cpus: [
    {
      id: 1,
      modelo: "Intel Core i9-11900K",
      nucleos: 8,
      hilos: 16,
      frecuenciaBase: "3.5 GHz",
      frecuenciaMaxima: "5.3 GHz",
      cache: "16 MB SmartCache",
      tdp: "125 W",
      socket: "LGA1200",
      precio: 499.99,
      categoria: 'cpu',
      img: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/BX8070811900K_800.jpg'
    },
    {
      id: 2,
      modelo: "AMD Ryzen 9 5950X",
      nucleos: 16,
      hilos: 32,
      frecuenciaBase: "3.4 GHz",
      frecuenciaMaxima: "4.9 GHz",
      cache: "72 MB L3",
      tdp: "105 W",
      socket: "AM4",
      precio: 699.99,
      categoria: 'cpu',
      img: 'https://www.tecnoxd.com.ar/thumb/000000000001448945917compragamer-Imganen-general-22303-Procesador-AMD-Ryzen-9-5950X-4.9GHz-Turbo-AM4---No-incluye-Cooler-7f7a1aa7-grn_800x800.jpg'
    },
    {
      id: 3,
      modelo: "Intel Core i7-11700K",
      nucleos: 8,
      hilos: 16,
      frecuenciaBase: "3.6 GHz",
      frecuenciaMaxima: "5.0 GHz",
      cache: "16 MB SmartCache",
      tdp: "125 W",
      socket: "LGA1200",
      precio: 399.99,
      categoria: 'cpu',
      img: 'https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000005032037214964_2.jpg'
    },
    // ... (otros componentes)
  ],
  mothers: [
    {
      id: 101,
      modelo: "ASUS ROG Strix Z590-E Gaming",
      chipset: "Intel Z590",
      socket: "LGA1200",
      ranurasRam: 4,
      tipoRam: "DDR4",
      ranurasPCIe: 3,
      ranurasM2: 2,
      precio: 299.99,
      categoria: 'mother',
      img:'https://www.digitarinformatica.com.ar/wp-content/uploads/2021/12/Placa-madre-Asus-Rog-Strix-Z590-E-Gaming-Wifi-s1200-1.jpg'
    },
    {
      id: 102,
      modelo: "GIGABYTE B550 AORUS Pro",
      chipset: "AMD B550",
      socket: "AM4",
      ranurasRam: 4,
      tipoRam: "DDR4",
      ranurasPCIe: 2,
      ranurasM2: 2,
      precio: 179.99,
      categoria: 'mother',
      img: 'https://s3-sa-east-1.amazonaws.com/saasargentina/s3sQZEADUACB9sEM5jEK/imagen'
    },
    {
      id: 103,
      modelo: "MSI MAG B550 TOMAHAWK",
      chipset: "AMD B550",
      socket: "AM4",
      ranurasRam: 4,
      tipoRam: "DDR4",
      ranurasPCIe: 2,
      ranurasM2: 2,
      precio: 199.99,
      categoria: 'mother',
      img:'https://www.venex.com.ar/products_images/1593490177_11.jpg'
    },
    // ... (otros componentes)
  ],
  rams: [
    {
      id: 201,
      modelo: "Corsair Vengeance LPX",
      capacidad: "16 GB",
      velocidad: "3200 MHz",
      tipo: "DDR4",
      latencia: "16-18-18-36",
      voltaje: "1.35 V",
      precio: 89.99,
      categoria: 'ram',
      img:'https://http2.mlstatic.com/D_NQ_NP_841009-MLA32170216547_092019-O.webp'
    },
    {
      id: 202,
      modelo: "G.Skill Ripjaws V",
      capacidad: "32 GB",
      velocidad: "3600 MHz",
      tipo: "DDR4",
      latencia: "18-22-22-42",
      voltaje: "1.35 V",
      precio: 159.99,
      categoria: 'ram',
      img:'https://d22fxaf9t8d39k.cloudfront.net/31e434b3a2f0615cc4012e85c405c2260f12af960b117d1bb45f1f479616156d55142.jpeg'
    },
    {
      id: 203,
      modelo: "Crucial Ballistix",
      capacidad: "8 GB",
      velocidad: "2666 MHz",
      tipo: "DDR4",
      latencia: "16-18-18",
      voltaje: "1.2 V",
      precio: 49.99,
      categoria: 'ram',
      img:'https://compraloencuotas.com.ar/aplicacion_agro_filedata/siga_webturismo/ecommerce_pictures/3379/degoogle.jpg'
    },
    // ... (otros componentes)
  ],
  graficas: [
    {
      id: 301,
      modelo: "NVIDIA GeForce RTX 3080",
      memoria: "10 GB GDDR6X",
      busMemoria: "320 bits",
      frecuenciaBase: "1440 MHz",
      frecuenciaBoost: "1710 MHz",
      consumoEnergia: "320 W",
      tipoConector: "PCI Express 4.0",
      precio: 999.99,
      categoria: 'grafica'
    },
    {
      id: 302,
      modelo: "AMD Radeon RX 6800 XT",
      memoria: "16 GB GDDR6",
      busMemoria: "256 bits",
      frecuenciaBase: "1825 MHz",
      frecuenciaBoost: "2250 MHz",
      consumoEnergia: "300 W",
      tipoConector: "PCI Express 4.0",
      precio: 799.99,
      categoria: 'grafica'
    },
    {
      id: 303,
      modelo: "NVIDIA GeForce RTX 3070",
      memoria: "8 GB GDDR6",
      busMemoria: "256 bits",
      frecuenciaBase: "1500 MHz",
      frecuenciaBoost: "1725 MHz",
      consumoEnergia: "220 W",
      tipoConector: "PCI Express 4.0",
      precio: 599.99,
      categoria: 'grafica'
    },
    // ... (otros componentes)
  ],
  discos: [
    {
      id: 401,
      modelo: "Samsung 980 PRO",
      capacidad: "1 TB",
      tipo: "NVMe SSD",
      velocidadLectura: "7000 MB/s",
      velocidadEscritura: "5000 MB/s",
      factorForma: "M.2 2280",
      interfaz: "PCI Express 4.0",
      precio: 199.99,
      categoria: 'disco'
    },
    {
      id: 402,
      modelo: "Seagate BarraCuda",
      capacidad: "2 TB",
      tipo: "HDD",
      velocidad: "7200 RPM",
      factorForma: "3.5 pulgadas",
      interfaz: "SATA 6 Gb/s",
      precio: 79.99,
      categoria: 'disco'
    },
    {
      id: 403,
      modelo: "Western Digital Blue",
      capacidad: "500 GB",
      tipo: "SSD",
      velocidadLectura: "560 MB/s",
      velocidadEscritura: "530 MB/s",
      factorForma: "2.5 pulgadas",
      interfaz: "SATA 6 Gb/s",
      precio: 69.99,
      categoria: 'disco'
    },
    // ... (otros componentes)
  ],
  fuentes: [
    {
      id: 501,
      modelo: "EVGA Supernova 850 T2",
      capacidad: "850 W",
      certificacion: "80 Plus Titanium",
      modular: true,
      eficiencia: "94%",
      ventilador: "135 mm",
      precio: 219.99,
      categoria: 'fuente'
    },
    {
      id: 502,
      modelo: "Corsair RM750x",
      capacidad: "750 W",
      certificacion: "80 Plus Gold",
      modular: true,
      eficiencia: "90%",
      ventilador: "135 mm",
      precio: 139.99,
      categoria: 'fuente'
    },
    {
      id: 503,
      modelo: "Seasonic Focus GX-650",
      capacidad: "650 W",
      certificacion: "80 Plus Gold",
      modular: true,
      eficiencia: "90%",
      ventilador: "120 mm",
      precio: 99.99,
      categoria: 'fuente'
    },
    // ... (otros componentes)
  ],
};
