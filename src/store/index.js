import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  i1:{
      name:" GRIMSBU กริมส์บู",
      price:"1290",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/grimsbu-bed-frame-grey__0750212_pe747234_s5.jpg?f=s"
  },
  i2:{
      name:"TARVA ทาร์ฟวา",
      price:"3490",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/tarva-bed-frame-pine-luroey__0861223_pe555571_s5.jpg?f=s"
  },
  i3:{
      name:"SONGESAND ซองเงซันด์",
      price:"8990",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__0734692_pe739587_s5.jpg?f=s"
  },
  i4:{
      name:"HEMNES เฮมเนส",
      price:"18970",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/hemnes-day-bed-w-3-drawers-2-mattresses-white-malfors-firm__0857890_pe632055_s5.jpg?f=s"
  },
  i5:{
      name:"MALM มาล์ม",
      price:"8490",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/malm-bed-frame-high-w-2-storage-boxes-black-brown-luroey__0948921_pe799385_s5.jpg?f=s"
  },
  i6:{
      name:"SAGSTUA ซ้ากสตัว",
      price:"5990",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/sagstua-bed-frame-black-luroey__0861949_pe713122_s5.jpg?f=s"
  },
  i7:{
      name:"UTÅKER อูทัวเคร์",
      price:"11970",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/utaker-stackable-bed-with-2-mattresses-pine-malfors-medium-firm__0738845_pe741606_s5.jpg?f=s"
  },
  i8:{
      name:"SLÄKT สเลค",
      price:"9490",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/slaekt-bed-frame-with-underbed-and-storage-white__0876348_pe642444_s5.jpg?f=s"
  },
  i9:{
      name:"KURA คูร่า",
      price:"6590",
      amount:0,
      image:"https://www.ikea.com/th/th/images/products/kura-reversible-bed-white-pine__0920000_pe786796_s5.jpg?f=s"
  },
  i10:{
    name:"SLÄKT สเลค",
    price:"1366",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/slaekt-bed-frame-w-storage-seat-modules-white-grey__0876340_pe643273_s5.jpg?f=s"
  },
  i11:{
    name:"SLÄKT สเลค",
    price:"11990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/slaekt-bed-frame-w-storage-slatted-bedbase-white__0737507_pe726512_s5.jpg?f=s"
  },
  i12:{
    name:"HEMNES เฮมเนส",
    price:"7990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/hemnes-bed-frame-black-brown-luroey__0861234_pe660121_s5.jpg?f=s"
  },
  i13:{
    name:"NORDLI นูร์ดลี",
    price:"22990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/nordli-bed-frame-w-storage-and-headboard-white__0595989_pe677857_s5.jpg?f=s"
  },
  i14:{
    name:"BRIMNES บริมเนส",
    price:"9990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/brimnes-bed-frame-with-storage-white-luroey__0966529_ph175105_s5.jpg?f=s"
  },
  i15:{
    name:"MALM มาล์ม",
    price:"16990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/malm-ottoman-bed-black-brown__0738021_pe663672_s5.jpg?f=s"
  },
  i16:{
    name:"HAUGA เฮากา",
    price:"7990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/hauga-upholstered-bed-2-storage-boxes-vissle-grey__0916115_pe784978_s5.jpg?f=s"
  },
  i17:{
    name:"NESTTUN เนสท์ตุน",
    price:"5290",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/nesttun-bed-frame-white-luroey__0734551_pe739500_s5.jpg?f=s"
  },
  i18:{
    name:"TUFJORD ทุฟยูร์ด",
    price:"19990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=s"
  },
  i19:{
    name:"LEIRVIK เลียร์วีค",
    price:"5990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/leirvik-bed-frame-white-luroey__0862008_pe660117_s5.jpg?f=s"
  },
  i20:{
    name:"SLATTUM สลอททุม",
    price:"6990",
    amount:0,
    image:"https://www.ikea.com/th/th/images/products/slattum-upholstered-bed-frame-knisa-light-grey__0726694_pe735408_s5.jpg?f=s"
  },
  sum: 0 ,
  say: function (message) {
    alert(message)
  }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})