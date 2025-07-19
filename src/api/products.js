const _gadgets =[
   [{
      "id": 0,
      "type": "Ноутбук",
      "brand": "MSI",
      "model": "Modern 15 B7M",
      "price": 40000,
      "date": "10 июля 2025",
      "img": "msi.webp"
   },
   {
      "id": 1,
      "type": "Аксессуар",
      "brand": "Logitech",
      "model": "Wireless Mouse M185",
      "price": 1000,
      "date": "10 июля 2025",
      "img": "WirelessMouseM185.webp"
   }],
   [{
      "id": 2,
      "type": "Смартфон",
      "brand": "Apple",
      "model": "iPhone 15 Pro",
      "price":100000,
      "date": "11 июля 2025",
      "img": "iPhone.webp"
   },
   {
      "id": 3,
      "type": "Аксессуар",
      "brand": "Apple",
      "model": "MagSafe Charger",
      "price": 4500,
      "date": "11 июля 2025",
      "img": "MagSafeCharger.jpg"
   }],
   [{
      "id": 4,
      "type": "Наушники",
      "brand": "Marshall",
      "model": "Major IV",
      "price": 9599,
      "date": "12 июля 2025",
      "img": "marshalliv.png"
   },
   {
      "id": 5,
      "type": "Аксессуар",
      "brand": "Marshall",
      "model": "Charging Case",
      "price": 1500,
      "date": "12 июля 2025",
      "img": "ChargingCase.webp"
   }],
   [{
      "id": 6,
      "type": "Планшет",
      "brand": "Samsung",
      "model": "Galaxy Tab S7",
      "price": 50000,
      "date": "14 июля 2025",
      "img": "GalaxyTabS7.webp"
   },
   {
      "id": 7,
      "type": "Аксессуар",
      "brand": "Samsung",
      "model": "Tab Keyboard",
      "price": 8000,
      "date": "14 июля 2025",
      "img": "TabKeyboard.jpg"
   }],
   [{
      "id": 8,
      "type": "Телевизор",
      "brand": "Sony",
      "model": "Bravia X90J",
      "price": 120000,
      "date": "14 июля 2025",
      "img": "BraviaX90J.jpg"

   },
   {
      "id": 9,
      "type": "Аксессуар",
      "brand": "Sony",
      "model": "Soundbar",
      "price": 20000,
      "date": "14 июля 2025",
      "img": "Soundbar.webp"
   }],
   [{
      "id": 10,
      "type": "Наушники",
      "brand": "Sony",
      "model": "WH-1000XM4",
      "price": 25000,
      "date": "15 июля 2025",
      "img": "WH-1000XM4.webp"
   },
   {
      "id": 11,
      "type": "Аксессуар",
      "brand": "Sony",
      "model": "Carrying Case",
      "price": 2000,
      "date": "15 июля 2025",
      "img": "CarryingCase.webp"
   }]
]


export default {
   getGadgets (cb) {
    setTimeout(() => cb(_gadgets), 100)
  }
}