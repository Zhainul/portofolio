const data = [
  {
    title: "Purchasing System",
    key: "purchasing",
    filter: "filter-web",
    image: "assets/img/portfolio/purchasing.png",
    details: "portfolio-details.html?data=purchasing",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The system used by the purchasing department of PT Kosmetika Global Indonesia in processing Purchase Order (PO) data for raw materials, packaging materials, and technical goods. This system is based on a website that can be accessed anytime and anywhere by the purchasing team. With this system, the purchasing team can easily create PO documents, print PO documents, and monitor the arrival of materials at the warehouse.",
  },
  {
    title: "Warehouse Management System",
    key: "wms",
    filter: "filter-web",
    image: "assets/img/portfolio/wms.png",
    details: "portfolio-details.html?data=wms",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The system used by the warehouse department of PT Kosmetika Global Indonesia in the inventory management process. This system is web-based so that it is easily accessible by the warehouse team. This system can help users in the inventory management process in the warehouse starting from the process of receiving material arrivals, the process of mutating materials between departments and plants and finding the location of material placement on warehouse shelves.",
  },
  {
    title: "Marketing System",
    key: "marketing",
    filter: "filter-web",
    image: "assets/img/portfolio/npd.png",
    details: "portfolio-details.html?data=marketing",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The system is used by the marketing department of PT Kosmetika Global Indonesia in managing customer data such as brand, packaging, sample requests to product delivery. This system also helps the process of monitoring and tracking product manufacturing from the initial sample request to the product delivery process to the customer.",
  },
  {
    title: "Quality Control System",
    key: "marketing",
    filter: "filter-web",
    image: "assets/img/portfolio/npd.png",
    details: "portfolio-details.html?data=marketing",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The system is used by the quality control department of PT Kosmetika Global Indonesia in the process of validating the arrival of raw materials and packaging. This system also helps the process of printing material qr code labels and monitoring the expiration date of raw materials.",
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
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The church management system is a system used for the process of managing congregational data and making church letters. congregants who already have a username and password can log in and fill in the letter form that has been provided, namely the submission of children, marriage and baptism if needed. This system is web-based so that it can be accessed anytime and anywhere by users.",
  },
  {
    title: "Coffee Production Management System",
    key: "coffe",
    filter: "filter-web",
    image: "assets/img/portfolio/produksi kopi.png",
    details: "portfolio-details.html?data=coffe",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;Coffee production information system is a website-based system used in managing coffee production data starting from employee data, coffee farmer registration process, coffee production stages to the process of sending processed coffee. Users can print coffee production reports on the report menu provided in the system.",
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
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The system is used to manage tuition payment data at SMPN 2 Wagir. This system is web-based so that it can be accessed by the school and student guardians. With the whatsapp gateway, student guardians will get automatic whatsapp messages from the system when there are bills and tuition payment transactions made by students at school.",
  },
  {
    title: "Decision Support System With SMART methods",
    key: "pkh",
    filter: "filter-web",
    image: "assets/img/portfolio/pkh.png",
    details: "portfolio-details.html?data=pkh",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The system used for the decision-making process for PKH beneficiaries in Pandanrejo Village, Wagir District using the SMART method calculation. By using a decision support system, users only enter data on beneficiary participants with predetermined criteria then the system will automatically calculate and determine participants who are eligible and not eligible to receive PKH assistance complete with details of the final value of the calculation results.",
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
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The inventory management system is used to help manage inventory data starting from item data, stock data, supplier data, maintenance of goods, repair of goods to data on incoming and outgoing goods at the village office. With this system, users can monitor easily because the website-based system can be accessed anytime and anywhere.",
  },
  {
    title: "Decision Support System With K-means methods",
    key: "milih-siswa",
    filter: "filter-web",
    image: "assets/img/portfolio/milih-siswa.png",
    details: "portfolio-details.html?data=milih-siswa",
    description: `The "milih siswa" application is used for the classification process of students based on the prediction of the timeliness of their graduation based on the web. This application uses the k-means clustering method with several predetermined criteria. By using this application, lecturers can see percentage predictions and a list of students who graduate on time and graduate not on time.`,
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
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;Aplikasi M-Komplain adalah aplikasi yang digunakan untuk membantu proses pelaporan komplain dan monitoring perbaikan sarana prasarana antara unit perlengkapan dengan unit yang lain di Universitas Kanjuruhan Malang. Aplikasi ini terbagi menjadi 2 platform yaitu android dan website. Untuk platform website digunakan untuk proses mastering, dan reset password pengguna sedangkan untuk platform android digunakan untuk proses pelaporan komplain, melihat daftar laporan, monitoring perbaikan dan ubah password sistem. Terdapat beberapa hak akses yang terdapat pada aplikasi yaitu administrator, kepala unit, kepala bagian perlengkapan, staff unit, dan teknisi perlengkapan.",
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
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;A system that is used to help the project tracking process at PT Urban Spatial Indonesia. This system can help starting from the process of creating projects, selecting project leaders, assigning expertise to project teams to tracking and monitoring the progress of project work.",
  },
  {
    title: "SIMDES",
    key: "simdes",
    filter: "filter-web",
    image: "assets/img/portfolio/simdes.png",
    details: "portfolio-details.html?data=simdes",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The SIMDES application is used for the letter-making service of the Kebonagung village office, Malang City based on the web. There are several features in the system such as population and migrant counters, population data management, printing required letters and others.",
  },
];

function filterData(key, filter = "") {
  return data.filter((item) => !filter || item[key] === filter);
}
