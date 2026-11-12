import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const LAST_UPDATED = "29 June 2026";

const SECTIONS = {
  en: [
    {
      id: "s1", title: "1. Introduction",
      body: `This Privacy Policy explains how personal data is collected, used, disclosed, stored, and protected in connection with the DIVE application and related services (the "Service"). DIVE is a business super-application providing point-of-sale ("POS"), inventory management, and AI-assisted business analytics to store owners and micro, small, and medium enterprises ("Merchants"). The Service is operated by Fitly Tjong Mamuaya, trading as Potesia, a sole founder currently operating in a personal capacity ("we", "us", "our", or "Potesia"). By creating an account or using the Service, you acknowledge that you have read and understood this Policy. If you do not agree, please do not use the Service.`,
    },
    {
      id: "s2", title: "2. Scope",
      body: `This Policy applies to personal data processed through the DIVE mobile and web applications and supporting infrastructure. It does not apply to third-party services, websites, or applications that may be linked to or integrated with DIVE, which are governed by their own privacy policies.`,
    },
    {
      id: "s3", title: "3. Definitions",
      body: `Personal Data / Personal Information: any information relating to an identified or identifiable natural person. Data Controller: the party that determines the purposes and means of processing personal data. Data Processor: the party that processes personal data on behalf of, and under the instructions of, a Controller. Merchant: a store owner or business that registers for and uses the Service. End-Customer: a customer of a Merchant, whose data a Merchant may enter into the Service. Processing: any operation performed on personal data (collection, recording, storage, use, disclosure, erasure, etc.). Sub-processor: a third party engaged by us to process personal data in connection with the Service.`,
    },
    {
      id: "s4", title: "4. Our Roles: Controller and Processor",
      body: `DIVE involves two distinct categories of personal data, and our legal role differs for each.\n\n(a) Merchant account and business data — we act as Data Controller. For the personal data of the Merchant and its authorised staff (for example, account email, profile details, staff names) and the Merchant's own business profile, we determine the purposes and means of processing and act as the Data Controller.\n\n(b) End-Customer data entered by the Merchant — we act as Data Processor. Where a Merchant records information about its own End-Customers (for example, customer names, phone numbers, loyalty points, and outstanding credit/debt balances), the Merchant is the Data Controller of that data and we act solely as a Data Processor that stores and processes such data on the Merchant's behalf and on its instructions.\n\nMerchant responsibilities. Each Merchant is solely responsible for: (i) having a lawful basis and, where required, obtaining valid consent from its End-Customers for the collection and processing of their personal data within DIVE; (ii) providing its End-Customers with any required privacy notices; and (iii) responding to its End-Customers' requests to exercise their rights. We make available tools (such as data export and deletion) to assist Merchants in meeting these obligations. We do not independently contact a Merchant's End-Customers and do not use End-Customer data for our own purposes except as described in Section 13 (Anonymised Research) and as necessary to provide the Service.`,
    },
    {
      id: "s5", title: "5. Personal Data We Process",
      body: `Merchant account data (we are Controller): owner's email address (used for passwordless one-time-password (OTP) login via our authentication sub-processor); display name; and profile picture.\n\nStaff data: employee/staff names; and six-digit staff login PINs (used to identify the active staff member at the point of sale).\n\nBusiness profile (we are Controller): store name and business category; full business address; store GPS coordinates; and WhatsApp/contact number.\n\nTransactional and environmental metrics: detailed sales logs, item prices, item costs, payment methods, and timestamps; precise GPS location, local weather, and temperature captured at the moment of a transaction, where location services are enabled, used to provide environmental-to-sales correlation analytics.\n\nEnd-Customer data (we are Processor; the Merchant is Controller): End-Customer names and phone numbers; loyalty points; and outstanding credit/debt (store-credit) records.\n\nDevice, log, and usage data: device and app information, log data, and usage analytics generated through normal operation of the Service, used for security, troubleshooting, and improving the Service.\n\nSubscription and billing data: subscription tier, voucher usage, payment status, and billing history, processed via Google Play Billing.`,
    },
    {
      id: "s6", title: "6. How We Collect Personal Data",
      body: `We collect personal data: (a) directly from you when you register, configure your store, add staff, or enter records; (b) automatically from your device during use (e.g., GPS, weather/temperature at transaction time, device and log data); and (c) from our sub-processors that facilitate authentication, hosting, and distribution.`,
    },
    {
      id: "s7", title: "7. Purposes of Processing and Lawful Bases",
      body: `We process personal data for the following purposes:\n\n• Create and administer accounts and authenticate users via OTP — performance of a contract.\n• Provide POS, inventory, staff management, and customer-record features — performance of a contract.\n• Provide AI analytics (forecasting, SWOT) and environmental-sales correlation — performance of a contract; legitimate interests.\n• Capture transaction GPS/weather/temperature where enabled — consent (device permission) / legitimate interests.\n• Process subscription payments and manage tiers/vouchers — performance of a contract.\n• Maintain security and prevent fraud and abuse — legitimate interests / legal obligation.\n• Provide support and communicate service notices — performance of a contract; legitimate interests.\n• Comply with legal obligations — legal obligation.\n• Develop and train AI models and conduct anonymised statistical and academic research (Section 13) — consent / legitimate interests (data is anonymised and aggregated).\n\nWe process personal data consistently with applicable data-protection laws, including principles of lawful and transparent processing, purpose limitation, data minimisation, and accountability.`,
    },
    {
      id: "s8", title: "8. Location Data — Your Control",
      body: `The capture of transaction-based GPS location (together with associated weather and temperature) is optional. It is used only to enrich your analytics. You may disable location access at any time through your device's operating-system settings, or decline the location permission when prompted. Disabling location does not prevent you from using the core POS, inventory, and customer-record features; only the environmental-correlation analytics will be unavailable or reduced.`,
    },
    {
      id: "s9", title: "9. Sub-Processors and Disclosure to Third Parties",
      body: `We use trusted third parties to operate the Service. Personal data may be processed by:\n\n• Supabase — cloud infrastructure providing PostgreSQL database, authentication, and cloud storage, on which Service data is securely synchronised and stored.\n• Google Play / Google LLC — for application distribution and in-app subscription billing via Google Play Billing.\n\nThese sub-processors are engaged to process personal data only for the purposes described in this Policy. A current list of sub-processors is available on request.\n\nWe do not sell personal data to any party. We disclose personal data only: (a) to sub-processors as described above; (b) where required by law, court order, or a lawful request by a competent authority; (c) to protect our rights, safety, or property, or those of others; or (d) in connection with a business transfer, subject to this Policy.`,
    },
    {
      id: "s10", title: "10. International Operation and Data Transfers",
      body: `DIVE is a multinational service operated for Merchants in multiple countries. Personal data may be stored and processed on infrastructure located outside your country of residence (including the regions operated by our cloud sub-processor). Where personal data is transferred across borders, we take steps intended to ensure an adequate level of protection consistent with applicable law, including contractual safeguards with our sub-processors. By using the Service, you acknowledge that your data may be transferred to and processed in such locations.`,
    },
    {
      id: "s11", title: "11. Data Retention",
      body: `We retain personal data for as long as necessary to provide the Service, to comply with our legal obligations, resolve disputes, and enforce our agreements. Retention periods may vary by subscription tier, and older records may be archived in accordance with the applicable tier's data-retention settings. When you delete your account (see Section 12), associated data is deleted as described, subject to limited retention where required by law or for legitimate backup, security, or dispute-resolution purposes.`,
    },
    {
      id: "s12", title: "12. Your Rights",
      body: `Subject to applicable law, you may have the following rights in respect of personal data for which we are the Controller:\n\n• Access — request a copy of the personal data we hold about you.\n• Rectification/Correction — request correction of inaccurate or incomplete data.\n• Erasure — request deletion of your data (DIVE provides an in-app, irreversible account-deletion flow that removes associated data, subject to lawful retention exceptions).\n• Data portability — DIVE provides a data-export feature allowing you to obtain your data in a portable, machine-readable format.\n• Objection / restriction — object to or request restriction of certain processing.\n• Withdraw consent — where processing is based on consent (such as location), withdraw it at any time without affecting prior lawful processing.\n• Lodge a complaint — with the competent data-protection authority in your jurisdiction.\n\nTo exercise rights for which we are the Controller, contact us through the in-app support channel. If your request concerns data that a Merchant entered about you as an End-Customer, please contact the relevant Merchant, who is the Controller of that data; we will assist the Merchant as its Processor.`,
    },
    {
      id: "s13", title: "13. Permission for Anonymised Research and AI Development",
      body: `Grant of permission. By creating an account and using the Service, you grant us permission to use your store's transaction data as research data to develop, train, evaluate, and improve our artificial-intelligence models and the Service, and to conduct statistical, scientific, and academic research, including in connection with the operator's doctoral (PhD) dissertation and related scholarly work and publications.\n\nAnonymisation. When used for these purposes, your data is anonymised and aggregated. In particular, your store name and other identifying details are removed so that your store cannot be identified, and the data is not used in a way that identifies any individual Merchant or End-Customer. We will not publish raw personal data or any information that could reasonably identify your store, you, or an End-Customer.\n\nScope. This permission covers only anonymised and aggregated use as described above. It does not permit us to disclose your identifiable data to third parties for their own purposes, and it does not affect your rights set out in Section 12.`,
    },
    {
      id: "s14", title: "14. Security",
      body: `We implement technical and organisational measures intended to protect personal data, including:\n\n• Encryption of data in transit using TLS.\n• Encryption of data at rest as provided by our cloud infrastructure sub-processor.\n• Access controls and row-level security (RLS) restricting data access to the appropriate account.\n• Authentication controls including OTP-based passwordless login.\n\nNo method of transmission or storage is completely secure, and while we strive to protect your data, we cannot guarantee absolute security.`,
    },
    {
      id: "s15", title: "15. Children's Privacy",
      body: `The Service is intended for businesses and is not directed to children. We do not knowingly collect personal data from children under the applicable age of digital consent in their jurisdiction. If you believe a child's data has been provided to us, please contact us so we can take appropriate action.`,
    },
    {
      id: "s16", title: "16. Changes to This Policy",
      body: `We may update this Policy from time to time. Material changes will be notified through the Service or by other reasonable means, and the "Last updated" date will be revised. Your continued use of the Service after changes take effect constitutes acceptance of the updated Policy.`,
    },
    {
      id: "s17", title: "17. Contact Us",
      body: `For privacy questions or to exercise your rights, contact:\n\nFitly Tjong Mamuaya (Potesia)\nEmail: potesiasupport@gmail.com\nAddress: Manado, North Sulawesi, Indonesia\n\nYou may also use the in-app support channel.`,
    },
    {
      id: "s18", title: "18. Google Play Data Safety Disclosure",
      body: `The following summarises how DIVE's data practices map to the Google Play Data Safety section:\n\nData collected and shared:\n• Personal info: Name, email address — collected, used for account management (required).\n• Financial info: Purchase history — collected, used for subscription management (required).\n• Location: Precise location — collected, used for transaction analytics (optional, user-controlled).\n• App activity: App interactions, in-app search history — collected, used for analytics and AI improvement (required for core functionality).\n• Device or other IDs: Device identifiers — collected, used for security and troubleshooting (required).\n\nData not collected: Contacts, messages, photos/videos (other than product images uploaded by the user), health/fitness, audio files, files/docs, web browsing, calendar.\n\nData sharing: Data is shared with service providers (Supabase for hosting, payment processor for subscriptions, Google Play for distribution). Data is not sold to third parties.\n\nSecurity practices: Data is encrypted in transit (TLS) and at rest. Users can request data deletion via the in-app account-deletion feature. Users can download their data via the data-export feature.\n\nThis table is a summary. The full Policy above governs. The stable URL for this Policy is: https://potesia.com/privacy/dive`,
    },
  ],

  id: [
    {
      id: "s1", title: "1. Pendahuluan",
      body: `Kebijakan Privasi ini menjelaskan bagaimana data pribadi dikumpulkan, digunakan, diungkapkan, disimpan, dan dilindungi sehubungan dengan aplikasi DIVE dan layanan terkait ("Layanan"). DIVE adalah aplikasi bisnis super yang menyediakan kasir ("POS"), manajemen inventori, dan analitik bisnis berbantuan AI kepada pemilik toko dan usaha mikro, kecil, dan menengah ("Merchant"). Layanan ini dioperasikan oleh Fitly Tjong Mamuaya, beroperasi sebagai Potesia, seorang pendiri tunggal yang saat ini beroperasi dalam kapasitas pribadi ("kami", "kita", atau "Potesia"). Dengan membuat akun atau menggunakan Layanan, Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan ini. Jika Anda tidak setuju, mohon jangan gunakan Layanan.`,
    },
    {
      id: "s2", title: "2. Ruang Lingkup",
      body: `Kebijakan ini berlaku untuk data pribadi yang diproses melalui aplikasi mobile dan web DIVE serta infrastruktur pendukungnya. Kebijakan ini tidak berlaku untuk layanan, situs web, atau aplikasi pihak ketiga yang mungkin terhubung atau terintegrasi dengan DIVE, yang diatur oleh kebijakan privasi mereka sendiri.`,
    },
    {
      id: "s3", title: "3. Definisi",
      body: `Data Pribadi / Informasi Pribadi: informasi apa pun yang berkaitan dengan orang perseorangan yang teridentifikasi atau dapat diidentifikasi. Pengendali Data: pihak yang menentukan tujuan dan cara pemrosesan data pribadi. Pemroses Data: pihak yang memproses data pribadi atas nama dan di bawah instruksi Pengendali. Merchant: pemilik toko atau bisnis yang mendaftar dan menggunakan Layanan. Pelanggan Akhir: pelanggan Merchant, yang datanya dapat dimasukkan oleh Merchant ke dalam Layanan. Pemrosesan: operasi apa pun yang dilakukan pada data pribadi (pengumpulan, pencatatan, penyimpanan, penggunaan, pengungkapan, penghapusan, dll.). Sub-pemroses: pihak ketiga yang kami libatkan untuk memproses data pribadi sehubungan dengan Layanan.`,
    },
    {
      id: "s4", title: "4. Peran Kami: Pengendali dan Pemroses",
      body: `DIVE melibatkan dua kategori data pribadi yang berbeda, dan peran hukum kami berbeda untuk masing-masing.\n\n(a) Data akun dan bisnis Merchant — kami bertindak sebagai Pengendali Data. Untuk data pribadi Merchant dan staf yang berwenang (misalnya, email akun, detail profil, nama staf) dan profil bisnis Merchant sendiri, kami menentukan tujuan dan cara pemrosesan dan bertindak sebagai Pengendali Data.\n\n(b) Data Pelanggan Akhir yang dimasukkan oleh Merchant — kami bertindak sebagai Pemroses Data. Di mana Merchant mencatat informasi tentang Pelanggan Akhirnya sendiri (misalnya, nama pelanggan, nomor telepon, poin loyalitas, dan saldo kredit/utang toko), Merchant adalah Pengendali Data dari data tersebut dan kami bertindak semata-mata sebagai Pemroses Data yang menyimpan dan memproses data tersebut atas nama Merchant dan sesuai instruksinya.\n\nTanggung jawab Merchant. Setiap Merchant sepenuhnya bertanggung jawab untuk: (i) memiliki dasar hukum dan, jika diperlukan, mendapatkan persetujuan yang sah dari Pelanggan Akhirnya untuk pengumpulan dan pemrosesan data pribadi mereka dalam DIVE; (ii) memberikan pemberitahuan privasi yang diperlukan kepada Pelanggan Akhirnya; dan (iii) menanggapi permintaan Pelanggan Akhirnya untuk menggunakan hak-hak mereka.`,
    },
    {
      id: "s5", title: "5. Data Pribadi yang Kami Proses",
      body: `Data akun Merchant (kami adalah Pengendali): alamat email pemilik (digunakan untuk login tanpa kata sandi melalui OTP); nama tampilan; dan foto profil.\n\nData staf: nama karyawan/staf; dan PIN login staf enam digit.\n\nProfil bisnis (kami adalah Pengendali): nama toko dan kategori bisnis; alamat bisnis lengkap; koordinat GPS toko; dan nomor WhatsApp/kontak.\n\nMetrik transaksi dan lingkungan: log penjualan terperinci, harga item, biaya item, metode pembayaran, dan cap waktu; lokasi GPS yang tepat, cuaca lokal, dan suhu yang diambil pada saat transaksi, di mana layanan lokasi diaktifkan.\n\nData Pelanggan Akhir (kami adalah Pemroses; Merchant adalah Pengendali): nama dan nomor telepon Pelanggan Akhir; poin loyalitas; dan catatan kredit/utang toko.\n\nData perangkat, log, dan penggunaan: informasi perangkat dan aplikasi, data log, dan analitik penggunaan.\n\nData langganan dan penagihan: tingkat langganan, penggunaan voucher, status pembayaran, dan riwayat penagihan.`,
    },
    {
      id: "s6", title: "6. Cara Kami Mengumpulkan Data Pribadi",
      body: `Kami mengumpulkan data pribadi: (a) langsung dari Anda saat Anda mendaftar, mengkonfigurasi toko Anda, menambahkan staf, atau memasukkan catatan; (b) secara otomatis dari perangkat Anda selama penggunaan (misalnya, GPS, cuaca/suhu pada saat transaksi, perangkat dan data log); dan (c) dari sub-pemroses kami yang memfasilitasi autentikasi, hosting, dan distribusi.`,
    },
    {
      id: "s7", title: "7. Tujuan Pemrosesan dan Dasar Hukum",
      body: `Kami memproses data pribadi untuk tujuan berikut:\n\n• Membuat dan mengelola akun serta mengautentikasi pengguna melalui OTP — pelaksanaan kontrak.\n• Menyediakan fitur POS, inventori, manajemen staf, dan catatan pelanggan — pelaksanaan kontrak.\n• Menyediakan analitik AI (perkiraan, SWOT) dan korelasi lingkungan-penjualan — pelaksanaan kontrak; kepentingan sah.\n• Menangkap GPS/cuaca/suhu transaksi jika diaktifkan — persetujuan (izin perangkat) / kepentingan sah.\n• Memproses pembayaran langganan dan mengelola tingkatan/voucher — pelaksanaan kontrak.\n• Menjaga keamanan dan mencegah penipuan serta penyalahgunaan — kepentingan sah / kewajiban hukum.\n• Memberikan dukungan dan mengkomunikasikan pemberitahuan layanan — pelaksanaan kontrak; kepentingan sah.\n• Mematuhi kewajiban hukum — kewajiban hukum.\n• Mengembangkan dan melatih model AI serta melakukan penelitian statistik dan akademis yang dianonimkan (Bagian 13) — persetujuan / kepentingan sah.`,
    },
    {
      id: "s8", title: "8. Data Lokasi — Kendali Anda",
      body: `Penangkapan lokasi GPS berbasis transaksi (beserta cuaca dan suhu yang terkait) bersifat opsional. Ini hanya digunakan untuk memperkaya analitik Anda. Anda dapat menonaktifkan akses lokasi kapan saja melalui pengaturan sistem operasi perangkat Anda, atau menolak izin lokasi saat diminta. Menonaktifkan lokasi tidak menghalangi Anda menggunakan fitur inti POS, inventori, dan catatan pelanggan; hanya analitik korelasi lingkungan yang tidak akan tersedia atau berkurang.`,
    },
    {
      id: "s9", title: "9. Sub-Pemroses dan Pengungkapan kepada Pihak Ketiga",
      body: `Kami menggunakan pihak ketiga tepercaya untuk mengoperasikan Layanan. Data pribadi dapat diproses oleh:\n\n• Supabase — infrastruktur cloud yang menyediakan database PostgreSQL, autentikasi, dan penyimpanan cloud.\n• Google Play / Google LLC — untuk distribusi aplikasi dan penagihan langganan dalam aplikasi melalui Google Play Billing.\n\nKami tidak menjual data pribadi kepada siapa pun. Kami mengungkapkan data pribadi hanya: (a) kepada sub-pemroses sebagaimana dijelaskan di atas; (b) jika diwajibkan oleh hukum, perintah pengadilan, atau permintaan sah dari otoritas yang berwenang; (c) untuk melindungi hak, keselamatan, atau properti kami, atau orang lain; atau (d) sehubungan dengan pengalihan bisnis, tunduk pada Kebijakan ini.`,
    },
    {
      id: "s10", title: "10. Operasi Internasional dan Transfer Data",
      body: `DIVE adalah layanan multinasional yang dioperasikan untuk Merchant di berbagai negara. Data pribadi dapat disimpan dan diproses pada infrastruktur yang berlokasi di luar negara tempat tinggal Anda. Di mana data pribadi ditransfer lintas batas, kami mengambil langkah-langkah untuk memastikan tingkat perlindungan yang memadai yang konsisten dengan hukum yang berlaku, termasuk perlindungan kontraktual dengan sub-pemroses kami. Dengan menggunakan Layanan, Anda mengakui bahwa data Anda dapat ditransfer ke dan diproses di lokasi tersebut.`,
    },
    {
      id: "s11", title: "11. Retensi Data",
      body: `Kami menyimpan data pribadi selama yang diperlukan untuk menyediakan Layanan, mematuhi kewajiban hukum kami, menyelesaikan perselisihan, dan menegakkan perjanjian kami. Periode retensi dapat bervariasi berdasarkan tingkat langganan. Saat Anda menghapus akun Anda (lihat Bagian 12), data terkait dihapus sebagaimana dijelaskan, dengan ketentuan retensi terbatas jika diwajibkan oleh hukum atau untuk tujuan pencadangan, keamanan, atau penyelesaian sengketa yang sah.`,
    },
    {
      id: "s12", title: "12. Hak-Hak Anda",
      body: `Tunduk pada hukum yang berlaku, Anda mungkin memiliki hak-hak berikut sehubungan dengan data pribadi yang kami kendalikan:\n\n• Akses — meminta salinan data pribadi yang kami simpan tentang Anda.\n• Rektifikasi/Koreksi — meminta koreksi data yang tidak akurat atau tidak lengkap.\n• Penghapusan — meminta penghapusan data Anda (DIVE menyediakan alur penghapusan akun dalam aplikasi yang tidak dapat dibatalkan).\n• Portabilitas data — DIVE menyediakan fitur ekspor data yang memungkinkan Anda mendapatkan data dalam format yang dapat dibawa dan dapat dibaca mesin.\n• Keberatan / pembatasan — keberatan terhadap atau meminta pembatasan pemrosesan tertentu.\n• Menarik persetujuan — di mana pemrosesan didasarkan pada persetujuan (seperti lokasi), tarik kapan saja tanpa mempengaruhi pemrosesan sah sebelumnya.\n• Mengajukan keluhan — kepada otoritas perlindungan data yang berwenang di yurisdiksi Anda.\n\nUntuk menggunakan hak yang kami kendalikan, hubungi kami melalui saluran dukungan dalam aplikasi.`,
    },
    {
      id: "s13", title: "13. Izin untuk Penelitian yang Dianonimkan dan Pengembangan AI",
      body: `Pemberian izin. Dengan membuat akun dan menggunakan Layanan, Anda memberi kami izin untuk menggunakan data transaksi toko Anda sebagai data penelitian untuk mengembangkan, melatih, mengevaluasi, dan meningkatkan model kecerdasan buatan kami dan Layanan, dan untuk melakukan penelitian statistik, ilmiah, dan akademis, termasuk sehubungan dengan disertasi doktoral (PhD) operator dan karya ilmiah serta publikasi terkait.\n\nAnonimisasi. Saat digunakan untuk tujuan ini, data Anda dianonimkan dan diagregasi. Secara khusus, nama toko Anda dan detail pengenal lainnya dihapus sehingga toko Anda tidak dapat diidentifikasi.\n\nRuang lingkup. Izin ini hanya mencakup penggunaan yang dianonimkan dan diagregasi sebagaimana dijelaskan di atas. Ini tidak mengizinkan kami mengungkapkan data yang dapat diidentifikasi kepada pihak ketiga untuk tujuan mereka sendiri.`,
    },
    {
      id: "s14", title: "14. Keamanan",
      body: `Kami menerapkan langkah-langkah teknis dan organisasi yang dimaksudkan untuk melindungi data pribadi, termasuk:\n\n• Enkripsi data dalam perjalanan menggunakan TLS.\n• Enkripsi data saat istirahat sebagaimana disediakan oleh sub-pemroses infrastruktur cloud kami.\n• Kontrol akses dan keamanan tingkat baris (RLS) yang membatasi akses data ke akun yang sesuai.\n• Kontrol autentikasi termasuk login tanpa kata sandi berbasis OTP.\n\nTidak ada metode transmisi atau penyimpanan yang sepenuhnya aman, dan meskipun kami berusaha melindungi data Anda, kami tidak dapat menjamin keamanan mutlak.`,
    },
    {
      id: "s15", title: "15. Privasi Anak",
      body: `Layanan ini ditujukan untuk bisnis dan tidak diarahkan kepada anak-anak. Kami tidak secara sengaja mengumpulkan data pribadi dari anak-anak di bawah usia persetujuan digital yang berlaku di yurisdiksi mereka. Jika Anda percaya data seorang anak telah diberikan kepada kami, harap hubungi kami agar kami dapat mengambil tindakan yang tepat.`,
    },
    {
      id: "s16", title: "16. Perubahan pada Kebijakan Ini",
      body: `Kami dapat memperbarui Kebijakan ini dari waktu ke waktu. Perubahan material akan diberitahukan melalui Layanan atau dengan cara wajar lainnya, dan tanggal "Terakhir diperbarui" akan direvisi. Kelanjutan penggunaan Layanan setelah perubahan berlaku merupakan penerimaan atas Kebijakan yang diperbarui.`,
    },
    {
      id: "s17", title: "17. Hubungi Kami",
      body: `Untuk pertanyaan privasi atau untuk menggunakan hak Anda, hubungi:\n\nFitly Tjong Mamuaya (Potesia)\nEmail: potesiasupport@gmail.com\nAlamat: Manado, Sulawesi Utara, Indonesia\n\nAnda juga dapat menggunakan saluran dukungan dalam aplikasi.`,
    },
    {
      id: "s18", title: "18. Pengungkapan Keamanan Data Google Play",
      body: `Berikut ini merangkum cara praktik data DIVE dipetakan ke bagian Keamanan Data Google Play:\n\nData yang dikumpulkan dan dibagikan:\n• Info pribadi: Nama, alamat email — dikumpulkan, digunakan untuk manajemen akun (wajib).\n• Info keuangan: Riwayat pembelian — dikumpulkan, digunakan untuk manajemen langganan (wajib).\n• Lokasi: Lokasi tepat — dikumpulkan, digunakan untuk analitik transaksi (opsional, dikontrol pengguna).\n• Aktivitas aplikasi: Interaksi aplikasi — dikumpulkan, digunakan untuk analitik dan peningkatan AI (wajib untuk fungsi inti).\n• ID perangkat atau lainnya: Pengidentifikasi perangkat — dikumpulkan, digunakan untuk keamanan dan pemecahan masalah (wajib).\n\nData tidak dikumpulkan: Kontak, pesan, foto/video (selain gambar produk yang diunggah pengguna), kesehatan/kebugaran, file audio.\n\nPembagian data: Data dibagikan dengan penyedia layanan (Supabase untuk hosting, payment gateway untuk langganan, Google Play untuk distribusi). Data tidak dijual kepada pihak ketiga.\n\nPraktik keamanan: Data dienkripsi dalam perjalanan (TLS) dan saat istirahat. Pengguna dapat meminta penghapusan data melalui fitur penghapusan akun dalam aplikasi. Pengguna dapat mengunduh data mereka melalui fitur ekspor data.\n\nURL yang stabil untuk Kebijakan ini adalah: https://potesia.com/privacy/dive`,
    },
  ],
};

export default function PrivacyDive() {
  const { lang, t } = useLanguage();
  const lc = t.legal;
  const sections = SECTIONS[lang];

  useEffect(() => { document.title = "DIVE Privacy Policy — Potesia"; }, []);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Disclaimer */}
      <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm leading-relaxed text-amber-800">
        ⚠️ {lc.disclaimer}
      </div>

      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">DIVE · Potesia</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
        {lang === "en" ? "DIVE Privacy Policy" : "Kebijakan Privasi DIVE"}
      </h1>
      <p className="mt-3 text-sm text-zinc-500">{lc.lastUpdated}: {LAST_UPDATED}</p>
      <p className="mt-1 text-sm text-zinc-400">
        {lang === "en"
          ? "Stable URL for Google Play Console: "
          : "URL stabil untuk Google Play Console: "}
        <span className="font-mono text-zinc-600">https://potesia.com/privacy/dive</span>
      </p>

      {/* Table of Contents */}
      <nav className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">{lc.toc}</p>
        <ol className="space-y-1.5 text-sm text-zinc-600">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-lime-600 transition-colors">{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sections */}
      <div className="mt-12 space-y-12">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900">{s.title}</h2>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-600">
              {s.body.split("\n\n").map((para, i) => (
                <p key={i} className={para.startsWith("•") ? "pl-4" : ""}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-zinc-200 pt-8 text-center">
        <Link to="/privacy" className="text-sm text-zinc-500 hover:text-lime-600 transition-colors">
          ← {lang === "en" ? "Company-wide Privacy Policy" : "Kebijakan Privasi Perusahaan"}
        </Link>
        <span className="mx-4 text-zinc-300">·</span>
        <Link to="/terms" className="text-sm text-zinc-500 hover:text-lime-600 transition-colors">
          {lang === "en" ? "Terms of Service" : "Syarat Layanan"} →
        </Link>
      </div>
    </div>
  );
}
