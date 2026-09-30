export const portfolioData = {
  personal: {
    name: "Haris Rusnanda",
    degree: "S.Kom — Informatics Graduate",
    rolesLine: "IoT Engineer · IT Support · Software Developer",
    status: "Available for new opportunities",
    location: "Indonesia",
    email: "haris.yufa@gmail.com",
    phone: "+6287739734507",
    whatsappUrl: "https://wa.me/6287739734507?text=Halo%2C%20saya%20tertarik%20dengan%20profil%20Anda%20dan%20ingin%20berdiskusi%20mengenai%20peluang%20kerja%20sama.",
    linkedin: "https://www.linkedin.com/in/haris-rusnanda-8549391a9/",
    github: "https://github.com/rissxx",
    resumeUrl: "#",
    heroIntro: "Lulusan S1 Informatika dengan ketertarikan mendalam dalam menghubungkan perangkat keras IoT, memelihara infrastruktur IT yang reliabel, serta mengembangkan aplikasi perangkat lunak yang solutif.",
    about: {
      paragraphs: [
        "Hello! I’m Haris Rusnanda, a Bachelor of Computer Science graduate with a degree in Informatics. I have a strong passion for technology engineering, ranging from embedded systems and Internet of Things (IoT), to IT infrastructure maintenance and troubleshooting, as well as software development.",
        "To me, technology is not just about writing code or assembling circuits, but about creating reliable, efficient solutions that deliver real value to users and support smooth business operations.",
        "With an end-to-end understanding of computing, I am ready to contribute as an IoT Engineer, IT Support Specialist, or Software Developer and help organizations achieve their goals through technology."
      ],
      highlights: [
        { label: "Pendidikan", value: "S1 Teknik Informatika (S.Kom)" },
        { label: "Fokus Disiplin", value: "IoT, IT Infrastructure, Software" },
        { label: "Lokasi", value: "Indonesia (Terbuka On-site / Remote)" },
        { label: "Status Kerja", value: "Siap Bergabung (Full-time / Kontrak)" }
      ]
    }
  },

  skills: [
    {
      title: "IoT & Embedded Systems",
      description: "Merancang sistem mikrokontroler, pembacaan sensor, automasi aktuator, dan integrasi data telemetri ke cloud.",
      skillsList: [
        "ESP32 & ESP8266",
        "Arduino & C/C++",
        "Sensor Interfacing (Moisture, Temp, pH, Ultrasonic)",
        "IoT Protocols (MQTT, HTTP REST, WebSockets)",
        "Actuator Control (Relay, Solenoid, Water Pump)",
        "OLED & LCD Displays",
        "Hardware Prototyping & Schematic Wiring"
      ]
    },
    {
      title: "Software Development",
      description: "Membangun aplikasi web dan mobile yang responsif, modular, serta terhubung dengan backend dan database.",
      skillsList: [
        "JavaScript (ES6+) & TypeScript",
        "React.js & Modern Frontend",
        "Flutter (Mobile App Development)",
        "Node.js & Express.js",
        "Python (Scripting & APIs)",
        "Firebase Realtime Database & Firestore",
        "PostgreSQL & MySQL",
        "Git & GitHub Workflow"
      ]
    },
    {
      title: "IT Support & Infrastructure",
      description: "Memastikan stabilitas infrastruktur komputer, keandalan jaringan kantor, serta dukungan teknis harian pengguna.",
      skillsList: [
        "Diagnosa & Troubleshooting Hardware PC/Laptop",
        "Instalasi & Konfigurasi Windows & Linux OS",
        "Konfigurasi Jaringan: TCP/IP, VLAN, Subnetting",
        "MikroTik RouterOS & Cisco Switching Dasar",
        "Setup Periferal Kantor (Printer Jaringan, CCTV, AP)",
        "Helpdesk Ticketing & SLA Management",
        "Pemeliharaan Keamanan & Backup Data"
      ]
    }
  ],

  projects: [
    {
      id: "chili-irrigation",
      title: "Automatic Chili Irrigation System",
      shortDescription: "Sistem irigasi otomatis berbasis Internet of Things untuk pertanian cabai dengan pemantauan kelembaban tanah dan kendali pompa air secara real-time.",
      category: "IoT & Mobile App",
      featured: true,
      myRole: "IoT Engineer & Mobile Developer",
      overview: "Proyek sistem irigasi pintar berbasis IoT yang dirancang untuk mengotomatiskan penyiraman tanaman cabai berdasarkan tingkat kelembaban tanah secara presisi. Sistem terintegrasi dengan aplikasi mobile Flutter dan Firebase untuk monitoring dan kontrol jarak jauh.",
      problem: "Tanaman cabai sangat sensitif terhadap kelebihan maupun kekurangan air. Penyiraman konvensional yang dilakukan secara manual sering kali tidak konsisten, memboroskan air, dan membutuhkan tenaga kerja intensif di lahan pertanian.",
      solution: "Mengembangkan solusi otomatisasi berbasis mikrokontroler ESP32 dengan sensor kelembaban tanah (Soil Moisture Sensor). Sistem secara cerdas mengaktifkan pompa air melalui modul relay saat tanah kering, menampilkan status lokal pada layar OLED, dan menyinkronkan data secara real-time ke Firebase agar dapat dipantau petani via aplikasi Flutter.",
      technologies: [
        "ESP32",
        "Firebase",
        "Flutter",
        "Soil Moisture Sensor",
        "OLED Display",
        "Relay Module",
        "Water Pump",
        "C/C++ (Arduino IDE)"
      ],
      keyFeatures: [
        "Penyiraman otomatis berbasis threshold kelembaban tanah secara presisi",
        "Monitoring kelembaban tanah dan status pompa secara live via aplikasi Flutter",
        "Opsi kontrol manual pompa air jarak jauh melalui smartphone",
        "Tampilan lokal pada layar OLED untuk indikator kelembaban tanah dan koneksi WiFi",
        "Penyimpanan riwayat pembacaan sensor ke Firebase Realtime Database"
      ],
      github: "https://github.com/harisrusnanda",
      demo: null
    },
    {
      id: "it-asset-management",
      title: "IT Asset Management & Helpdesk Portal",
      shortDescription: "Aplikasi web pengelolaan inventaris perangkat keras kantor, pelacakan siklus hidup aset, dan sistem tiket bantuan teknis karyawan.",
      category: "Software Development & IT Ops",
      featured: false,
      myRole: "Fullstack Web Developer",
      overview: "Platform web terpadu untuk mendata seluruh aset IT kantor (laptop, printer, router, switch), melacak masa garansi dan perbaikan, serta menampung tiket komplain karyawan terkait kendala perangkat.",
      problem: "Pencatatan manual perangkat IT kantor sering tidak akurat saat mutasi staf dan keluhan teknis lambat ditangani karena tidak adanya sistem tiket terpusat.",
      solution: "Membangun web portal dengan modul QR Code untuk scan cepat inventaris, sistem antrean tiket helpdesk dengan status bertingkat, dan laporan rekapitulasi berkala.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT Auth"],
      keyFeatures: [
        "Pencatatan inventaris hardware lengkap dengan riwayat servis",
        "Generasi dan pemindaian label QR Code untuk audit aset fisik",
        "Alur tiket keluhan pengguna (Open, In-Progress, Resolved) dengan estimasi waktu penanganan"
      ],
      github: "https://github.com/harisrusnanda",
      demo: null
    },
    {
      id: "office-network-vlan",
      title: "Enterprise Multi-VLAN Office Network",
      shortDescription: "Perancangan dan implementasi segmentasi jaringan LAN kantor multi-departemen untuk meningkatkan performa dan keamanan data.",
      category: "IT Support & Network Infrastructure",
      featured: false,
      myRole: "Network & IT Support Specialist",
      overview: "Perancangan arsitektur jaringan lokal kantor dengan segmentasi VLAN untuk memisahkan lalu lintas data antar divisi kerja, membatasi broadcast domain, dan mengamankan koneksi server lokal.",
      problem: "Jaringan sebelumnya tidak terisolasi sehingga broadcast traffic sering memicu penurunan kecepatan internet dan komputer umum dapat mengakses segmen server internal secara bebas.",
      solution: "Mengkonfigurasi MikroTik RouterOS dan Managed Switch dengan 4 VLAN terpisah (Management, Staff, Server, Tamu), menerapkan firewall filter rules, serta alokasi bandwidth merata (Queue Tree).",
      technologies: ["MikroTik RouterOS", "Cisco Catalyst Switch", "VLAN (802.1Q)", "Firewall Rules", "QoS Bandwidth Management"],
      keyFeatures: [
        "Isolasi lalu lintas jaringan menjadi 4 zona VLAN independen",
        "Manajemen alokasi bandwidth per divisi untuk mencegah monopoli koneksi",
        "Akses aman ke server file lokal dengan hak akses terotentikasi"
      ],
      github: null,
      demo: null
    },
    {
      id: "network-ping-monitor",
      title: "Real-Time Network Device Ping Monitor",
      shortDescription: "Aplikasi monitoring ringan untuk mendeteksi status ketersediaan dan latensi perangkat jaringan lokal (AP, printer, server) secara real-time.",
      category: "Software & IT Support",
      featured: false,
      myRole: "Developer & System Administrator",
      overview: "Alat utilitas berbasis web untuk membantu tim IT memantau status operasional puluhan perangkat jaringan dalam kantor secara terpusat tanpa membebani resource server.",
      problem: "Kegagalan perangkat jaringan seperti printer sharing atau access point sering baru diketahui setelah pengguna kantor komplain.",
      solution: "Membangun sistem polling asinkron dengan Python yang memverifikasi konektivitas ICMP/TCP secara berkala dan menampilkan status hidup/mati pada antarmuka web yang bersih.",
      technologies: ["Python", "FastAPI", "WebSockets", "React", "SQLite"],
      keyFeatures: [
        "Deteksi status online/offline perangkat jaringan dalam hitungan detik",
        "Tampilan dashboard visual yang bersih tanpa reload halaman",
        "Log riwayat gangguan jaringan untuk memudahkan troubleshooting"
      ],
      github: "https://github.com/harisrusnanda",
      demo: null
    }
  ],

  experienceAndEducation: {
    education: [
      {
        institution: "Universitas / Perguruan Tinggi",
        degree: "Sarjana Komputer (S.Kom) - Teknik Informatika",
        period: "2020 - 2024",
        description: "Menyelesaikan studi sarjana dengan pemahaman komprehensif pada Jaringan Komputer, Rekayasa Perangkat Lunak, dan Sistem IoT. Menuntaskan tugas akhir terkait otomatisasi sistem pertanian cerdas berbasis mikrokontroler dan cloud."
      }
    ],
    experience: [
      {
        role: "IT Support & System Specialist",
        company: "Pengalaman Kerja / Magang IT",
        period: "2023 - 2024",
        description: "Bertanggung jawab atas kelancaran perangkat keras dan jaringan komputer kantor, instalasi sistem operasi, penanganan kendala pengguna (helpdesk), dan pemeliharaan rutin infrastruktur IT."
      },
      {
        role: "IoT & Embedded Project Lead",
        company: "Proyek Riset & Tugas Akhir",
        period: "2023 - 2024",
        description: "Merancang arsitektur sistem irigasi otomatis, memprogram mikrokontroler ESP32, mengintegrasikan sensor tanah & aktuator pompa, serta menghubungkannya ke Firebase dan aplikasi mobile Flutter."
      },
      {
        role: "Web & Software Projects",
        company: "Proyek Mandiri & Kolaborasi",
        period: "2022 - Sekarang",
        description: "Mengembangkan aplikasi web responsif menggunakan React, Tailwind CSS, dan RESTful API untuk kebutuhan otomasi internal dan manajemen data."
      }
    ]
  }
};
