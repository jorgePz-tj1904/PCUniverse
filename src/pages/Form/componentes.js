export const cpus = [
    {
      modelo: "Intel Core i9-11900K",
      nucleos: 8,
      hilos: 16,
      frecuenciaBase: "3.5 GHz",
      frecuenciaMaxima: "5.3 GHz",
      cache: "16 MB SmartCache",
      tdp: "125 W",
      socket: "LGA1200"
    },
    {
      modelo: "AMD Ryzen 9 5950X",
      nucleos: 16,
      hilos: 32,
      frecuenciaBase: "3.4 GHz",
      frecuenciaMaxima: "4.9 GHz",
      cache: "72 MB L3",
      tdp: "105 W",
      socket: "AM4"
    },
    {
      modelo: "Intel Core i7-11700K",
      nucleos: 8,
      hilos: 16,
      frecuenciaBase: "3.6 GHz",
      frecuenciaMaxima: "5.0 GHz",
      cache: "16 MB SmartCache",
      tdp: "125 W",
      socket: "LGA1200"
    },
  ];

export const mothers = [
    {
      modelo: "ASUS ROG Strix Z590-E Gaming",
      chipset: "Intel Z590",
      socket: "LGA1200",
      ranurasRam: 4,
      tipoRam: "DDR4",
      ranurasPCIe: 3,
      ranurasM2: 2,
    },
    {
      modelo: "GIGABYTE B550 AORUS Pro",
      chipset: "AMD B550",
      socket: "AM4",
      ranurasRam: 4,
      tipoRam: "DDR4",
      ranurasPCIe: 2,
      ranurasM2: 2,
    },
    {
      modelo: "MSI MAG B550 TOMAHAWK",
      chipset: "AMD B550",
      socket: "AM4",
      ranurasRam: 4,
      tipoRam: "DDR4",
      ranurasPCIe: 2,
      ranurasM2: 2,
    },
    {
      modelo: "ASRock B560M Steel Legend",
      chipset: "Intel B560",
      socket: "LGA1200",
      ranurasRam: 4,
      tipoRam: "DDR4",
      ranurasPCIe: 2,
      ranurasM2: 1,
    },
    {
      modelo: "GIGABYTE X570 AORUS Elite",
      chipset: "AMD X570",
      socket: "AM4",
      ranurasRam: 4,
      tipoRam: "DDR4",
      ranurasPCIe: 2,
      ranurasM2: 2,
    },
  ];

export const rams = [
    {
      modelo: "Corsair Vengeance LPX",
      capacidad: "16 GB",
      velocidad: "3200 MHz",
      tipo: "DDR4",
      latencia: "16-18-18-36",
      voltaje: "1.35 V"
    },
    {
      modelo: "G.Skill Ripjaws V",
      capacidad: "32 GB",
      velocidad: "3600 MHz",
      tipo: "DDR4",
      latencia: "18-22-22-42",
      voltaje: "1.35 V"
    },
    {
      modelo: "Crucial Ballistix",
      capacidad: "8 GB",
      velocidad: "2666 MHz",
      tipo: "DDR4",
      latencia: "16-18-18",
      voltaje: "1.2 V"
    },
    {
      modelo: "Kingston HyperX Fury",
      capacidad: "64 GB",
      velocidad: "3200 MHz",
      tipo: "DDR4",
      latencia: "18-22-22",
      voltaje: "1.35 V"
    },
    {
      modelo: "Team T-Force Vulcan",
      capacidad: "16 GB",
      velocidad: "3000 MHz",
      tipo: "DDR4",
      latencia: "16-18-18-38",
      voltaje: "1.35 V"
    }
  ];

export const graficas = [
    {
      modelo: "NVIDIA GeForce RTX 3080",
      memoria: "10 GB GDDR6X",
      busMemoria: "320 bits",
      frecuenciaBase: "1440 MHz",
      frecuenciaBoost: "1710 MHz",
      consumoEnergia: "320 W",
      tipoConector: "PCI Express 4.0",
    },
    {
      modelo: "AMD Radeon RX 6800 XT",
      memoria: "16 GB GDDR6",
      busMemoria: "256 bits",
      frecuenciaBase: "1825 MHz",
      frecuenciaBoost: "2250 MHz",
      consumoEnergia: "300 W",
      tipoConector: "PCI Express 4.0",
    },
    {
      modelo: "NVIDIA GeForce RTX 3070",
      memoria: "8 GB GDDR6",
      busMemoria: "256 bits",
      frecuenciaBase: "1500 MHz",
      frecuenciaBoost: "1725 MHz",
      consumoEnergia: "220 W",
      tipoConector: "PCI Express 4.0",
    },
    {
      modelo: "AMD Radeon RX 6700 XT",
      memoria: "12 GB GDDR6",
      busMemoria: "192 bits",
      frecuenciaBase: "2321 MHz",
      frecuenciaBoost: "2581 MHz",
      consumoEnergia: "230 W",
      tipoConector: "PCI Express 4.0",
    },
    {
      modelo: "NVIDIA GeForce RTX 3060",
      memoria: "12 GB GDDR6",
      busMemoria: "192 bits",
      frecuenciaBase: "1320 MHz",
      frecuenciaBoost: "1777 MHz",
      consumoEnergia: "170 W",
      tipoConector: "PCI Express 4.0",
    },
  ];

export const discos = [
    {
      modelo: "Samsung 980 PRO",
      capacidad: "1 TB",
      tipo: "NVMe SSD",
      velocidadLectura: "7000 MB/s",
      velocidadEscritura: "5000 MB/s",
      factorForma: "M.2 2280",
      interfaz: "PCI Express 4.0",
    },
    {
      modelo: "Seagate BarraCuda",
      capacidad: "2 TB",
      tipo: "HDD",
      velocidad: "7200 RPM",
      factorForma: "3.5 pulgadas",
      interfaz: "SATA 6 Gb/s",
    },
    {
      modelo: "Western Digital Blue",
      capacidad: "500 GB",
      tipo: "SSD",
      velocidadLectura: "560 MB/s",
      velocidadEscritura: "530 MB/s",
      factorForma: "2.5 pulgadas",
      interfaz: "SATA 6 Gb/s",
    },
    {
      modelo: "ADATA XPG SX8200 Pro",
      capacidad: "512 GB",
      tipo: "NVMe SSD",
      velocidadLectura: "3500 MB/s",
      velocidadEscritura: "3000 MB/s",
      factorForma: "M.2 2280",
      interfaz: "PCI Express 3.0",
    },
    {
      modelo: "Crucial MX500",
      capacidad: "1 TB",
      tipo: "SSD",
      velocidadLectura: "560 MB/s",
      velocidadEscritura: "510 MB/s",
      factorForma: "2.5 pulgadas",
      interfaz: "SATA 6 Gb/s",
    },
  ];

export const fuentes = [
    {
      modelo: "EVGA Supernova 850 T2",
      capacidad: "850 W",
      certificacion: "80 Plus Titanium",
      modular: true,
      eficiencia: "94%",
      ventilador: "135 mm",
    },
    {
      modelo: "Corsair RM750x",
      capacidad: "750 W",
      certificacion: "80 Plus Gold",
      modular: true,
      eficiencia: "90%",
      ventilador: "135 mm",
    },
    {
      modelo: "Seasonic Focus GX-650",
      capacidad: "650 W",
      certificacion: "80 Plus Gold",
      modular: true,
      eficiencia: "90%",
      ventilador: "120 mm",
    },
    {
      modelo: "Cooler Master MWE Gold 750 V2",
      capacidad: "750 W",
      certificacion: "80 Plus Gold",
      modular: false,
      eficiencia: "90%",
      ventilador: "120 mm",
    },
    {
      modelo: "Thermaltake Smart 700W",
      capacidad: "700 W",
      certificacion: "80 Plus",
      modular: false,
      eficiencia: "87%",
      ventilador: "120 mm",
    },
  ];
