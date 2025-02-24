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
    details: "portfolio-details.html?data=qc",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The system is used by the quality control department of PT Kosmetika Global Indonesia in the process of validating the arrival of raw materials and packaging. This system also helps the process of printing material qr code labels and monitoring the expiration date of raw materials.",
  },
  {
    title: "IoT Monitoring",
    key: "iot",
    filter: "filter-mobile",
    image: "assets/img/portfolio/iot.png",
    details: "portfolio-details.html?data=iot",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;IoT monitoring application is an application used for the process of monitoring temperature and machine control. This application is used by the engineering and production team to report if there is a problem with the production machine so that it can be handled immediately.",
  },
  {
    title: "Warehouse Delivery Order",
    key: "wdo",
    filter: "filter-mobile",
    image: "assets/img/portfolio/wdo.png",
    details: "portfolio-details.html?data=wdo",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;Warehouse Delivery Order (WDO) application is an application used by the production and warehouse teams for the process of handing over finished products from the production room to the warehouse and the delivery process from the warehouse to the customer. ",
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
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;E-SKL is used to manage student SKL (graduation certificate) data at SMKS PGRI Pakisaji Malang Regency. The system will calculate student grades from grade 1 to graduation then display the student's final grade and print the SKL document. This application is web-based so that it can be accessed by students to print SKL documents anywhere when needed.",
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
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;This application is used to manage data on computer laboratory usage at Universitas PGRI Kanjuruhan Malang. Users can see the laboratory usage schedule and apply for a laboratory loan then the admin will approve the request.",
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
    description: `&nbsp;&nbsp;&nbsp;&nbsp;The "milih siswa" application is used for the classification process of students based on the prediction of the timeliness of their graduation based on the web. This application uses the k-means clustering method with several predetermined criteria. By using this application, lecturers can see percentage predictions and a list of students who graduate on time and graduate not on time.`,
  },
  {
    title: "Landak District Website",
    key: "landak",
    filter: "filter-web",
    image: "assets/img/portfolio/landak.png",
    details: "portfolio-details.html?data=landak",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;landing page website that is used for the promotion of tourist attractions in Landak district. information presented such as tourist data, facilities at tourist attractions, routes and detailed descriptions of tourist attractions. tourist attractions managers can register new tourist attractions on the website by filling out the tourist registration form that has been provided on the website and then will be approved by the administrator.",
  },
  {
    title: "M-Komplain",
    key: "komplain",
    filter: "filter-mobile",
    image: "assets/img/portfolio/komplain.png",
    details: "portfolio-details.html?data=komplain",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;This application is used to help the process of reporting complaints and monitoring the repair of infrastructure facilities between the equipment unit and other units at Kanjuruhan University Malang. This application is divided into 2 platforms, namely android and website. The website platform is used for the mastering process, and resetting user passwords while the android platform is used for the complaint reporting process, viewing the report list, monitoring repairs and changing system passwords. There are several access rights contained in the application, namely administrator, head of unit, head of equipment, unit staff, and equipment technicians.",
  },
  {
    title: "E-RAPORT",
    key: "raport",
    filter: "filter-web",
    image: "assets/img/portfolio/raport.png",
    details: "portfolio-details.html?data=raport",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;E-Raport is a website-based application that is used to manage student score data to print school report cards. With this application, the process of processing student value data becomes easier and reduces the risk of data loss. Student guardians can also monitor student grades easily because the website-based system is easily accessible from home.",
  },
  {
    title: "APBD Management System",
    key: "apbd",
    filter: "filter-web",
    image: "assets/img/portfolio/apbd.png",
    details: "portfolio-details.html?data=apbd",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;APBD management system is a web-based system used for the process of monitoring the use of APBD funds in Glanggang village. With this system, the village head can see data on the use of APBD funds according to their financial category on the graph in the system. The process of printing usage report documents by employees can also be done easily on the system with complete data.",
  },
  {
    title: "Pondo District Website",
    key: "pondo",
    filter: "filter-web",
    image: "assets/img/portfolio/pondo.png",
    details: "portfolio-details.html?data=pondo",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The landing page website is used to display information about Pondo Village. Information displayed on the website such as organizational structure, vision and mission and village history. The system also helps residents to apply for village letters and village head signatures. Village officials can print village letters on the system and do not need to make letters manually because the letter data has been integrated with citizen data.",
  },
  {
    title: "PUPUS",
    key: "pupus",
    filter: "filter-web",
    image: "assets/img/portfolio/pupus.png",
    details: "portfolio-details.html?data=pupus",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;PUPUS is an application used for the selection process of campus boys and girls at PGRI Kanjuruhan University Malang. The selection stages are set by the admin including assessment weights, quiz questions and judges. Candidates will take part in the selection process and will be assessed by the jury at each stage until the final score of each candidate is obtained.",
  },
  {
    title: "AL-KAFFAAH website",
    key: "kaffah",
    filter: "filter-web",
    image: "assets/img/portfolio/kaffah.png",
    details: "portfolio-details.html?data=kaffah",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;Landing page website that is used to introduce SMK AL-KAFFAAH. information presented such as school profiles, news, school facilities, tuition fees and other information. The process of registering new students can be done directly by filling out the registration form provided on the website. Administrators can manage website data such as school information and registration data on the administrator page.",
  },
  {
    title: "Decision Support System for PIP Scholarship Recipients",
    key: "beasiswa",
    filter: "filter-web",
    image: "assets/img/portfolio/beasiswa.png",
    details: "portfolio-details.html?data=beasiswa",
    description:
      "&nbsp;&nbsp;&nbsp;&nbsp;The system used for the decision-making process of PIP scholarship recipients at SMP Negeri 1 Trawas. By using a decision support system, the decision-making process can be done easily. Students upload the required documents according to the criteria then the admin verifies the data. The system will calculate the student's final score and display a list of students who are eligible to receive PIP scholarships.",
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
