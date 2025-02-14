const data = [
  {
    title: "Purchasing System",
    key: "purchasing",
    filter: "filter-web",
    image: "assets/img/portfolio/purchasing.png",
    details: "portfolio-details.html?data=purchasing",
    description: "",
  },
  {
    title: "Warehouse Management System",
    key: "wms",
    filter: "filter-web",
    image: "assets/img/portfolio/wms.png",
    details: "portfolio-details.html?data=wms",
    description: "",
  },
  {
    title: "Marketing System",
    key: "marketing",
    filter: "filter-web",
    image: "assets/img/portfolio/npd.png",
    details: "portfolio-details.html?data=marketing",
    description: "",
  },
  {
    title: "IoT Monitoring",
    key: "iot",
    filter: "filter-mobile",
    image: "assets/img/portfolio/iot.png",
    details: "portfolio-details.html?data=iot",
    description: "",
  },
  {
    title: "Warehouse Delivery Order",
    key: "wdo",
    filter: "filter-mobile",
    image: "assets/img/portfolio/wdo.png",
    details: "portfolio-details.html?data=wdo",
    description: "",
  },
  {
    title: "Church Management System",
    key: "church",
    filter: "filter-web",
    image: "assets/img/portfolio/gereja.png",
    details: "portfolio-details.html?data=church",
    description: "",
  },
  {
    title: "Coffee Production Management System",
    key: "coffe",
    filter: "filter-web",
    image: "assets/img/portfolio/produksi kopi.png",
    details: "portfolio-details.html?data=coffe",
    description: "",
  },
  {
    title: "E-SKL",
    key: "skl",
    filter: "filter-web",
    image: "assets/img/portfolio/skl.png",
    details: "portfolio-details.html?data=skl",
    description: "",
  },
  {
    title: "E-SPP",
    key: "spp",
    filter: "filter-web",
    image: "assets/img/portfolio/spp.png",
    details: "portfolio-details.html?data=spp",
    description: "",
  },
  {
    title: "Decision Support System With SMART methods",
    key: "pkh",
    filter: "filter-web",
    image: "assets/img/portfolio/pkh.png",
    details: "portfolio-details.html?data=pkh",
    description: "",
  },
  {
    title: "Computer Laboratory Management System",
    key: "pinlab",
    filter: "filter-web",
    image: "assets/img/portfolio/pinlab.png",
    details: "portfolio-details.html?data=pinlab",
    description: "",
  },
  {
    title: "Inventory Management System",
    key: "inventaris",
    filter: "filter-web",
    image: "assets/img/portfolio/inventaris.png",
    details: "portfolio-details.html?data=inventaris",
    description: "",
  },
  {
    title: "Decision Support System With K-means methods",
    key: "milih-siswa",
    filter: "filter-web",
    image: "assets/img/portfolio/milih-siswa.png",
    details: "portfolio-details.html?data=milih-siswa",
    description: "",
  },
  {
    title: "Landak District Website",
    key: "landak",
    filter: "filter-web",
    image: "assets/img/portfolio/landak.png",
    details: "portfolio-details.html?data=landak",
    description: "",
  },
  {
    title: "M-Komplain",
    key: "komplain",
    filter: "filter-mobile",
    image: "assets/img/portfolio/komplain.png",
    details: "portfolio-details.html?data=komplain",
    description: "",
  },
  {
    title: "E-RAPORT",
    key: "raport",
    filter: "filter-web",
    image: "assets/img/portfolio/raport.png",
    details: "portfolio-details.html?data=raport",
    description: "",
  },
  {
    title: "APBD Management System",
    key: "apbd",
    filter: "filter-web",
    image: "assets/img/portfolio/apbd.png",
    details: "portfolio-details.html?data=apbd",
    description: "",
  },
  {
    title: "Pondo District Website",
    key: "pondo",
    filter: "filter-web",
    image: "assets/img/portfolio/pondo.png",
    details: "portfolio-details.html?data=pondo",
    description: "",
  },
  {
    title: "PUPUS",
    key: "pupus",
    filter: "filter-web",
    image: "assets/img/portfolio/pupus.png",
    details: "portfolio-details.html?data=pupus",
    description: "",
  },
  {
    title: "AL-KAFFAAH website",
    key: "kaffah",
    filter: "filter-web",
    image: "assets/img/portfolio/kaffah.png",
    details: "portfolio-details.html?data=kaffah",
    description: "",
  },
  {
    title: "Decision Support System for PIP Scholarship Recipients",
    key: "beasiswa",
    filter: "filter-web",
    image: "assets/img/portfolio/beasiswa.png",
    details: "portfolio-details.html?data=beasiswa",
    description: "",
  },
  {
    title: "Project Tracker",
    key: "tracker",
    filter: "filter-web",
    image: "assets/img/portfolio/tracker.png",
    details: "portfolio-details.html?data=tracker",
    description: "",
  },
  {
    title: "SIMDES",
    key: "simdes",
    filter: "filter-web",
    image: "assets/img/portfolio/simdes.png",
    details: "portfolio-details.html?data=simdes",
    description: "",
  },
];

function filterData(key, filter = "") {
  let tempData = [];
  data.forEach((value, index) => {
    switch (key) {
      case "key":
        if (value.key === filter) {
          tempData.push(data[index]);
        }
        break;
      case "filter":
        if (value.filter === filter) {
          tempData.push(data[index]);
        }
        break;
      default:
        tempData = data;
    }
  });
  return tempData;
}
