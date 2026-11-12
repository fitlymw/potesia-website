import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const LAST_UPDATED = "29 June 2026";

const SECTIONS = {
  en: [
    {
      id: "s1", title: "1. Who We Are",
      body: `Potesia is an independent software and media studio founded and operated by Fitly Tjong Mamuaya, based in Manado, North Sulawesi, Indonesia ("Potesia", "we", "us", "our"). We design, engineer, and ship digital products across four fields: business technology, digital publishing, legal access, and independent news. This Privacy Policy explains how Potesia collects, uses, discloses, and protects personal information across our websites, corporate communications, and activities as a company — not limited to any single product.`,
    },
    {
      id: "s2", title: "2. Scope of This Policy",
      body: `This Policy covers personal information processed by Potesia in connection with:\n\n• Visitors to potesia.com and our other corporate web properties.\n• People who contact us through our website, email, or social channels.\n• Business partners, collaborators, and people who enquire about working with us.\n• Job applicants.\n\nProduct-specific privacy policies govern data processed within our products. For DIVE, see our DIVE Privacy Policy at https://potesia.com/privacy/dive. This Policy does not apply to third-party services linked from our site.`,
    },
    {
      id: "s3", title: "3. Information We Collect",
      body: `Contact and enquiry data. When you contact us (for example, via the website contact form, email, or social channels), we collect your name, email address, and the content of your message. We use this to respond to you and for related business follow-up.\n\nWebsite usage data. We may collect standard web analytics data (such as page views, referring URLs, browser type, and general location derived from IP address) to understand how our site is used and to improve it. This data is aggregated and does not identify you individually.\n\nBusiness and partner data. If you enter into a business relationship or collaboration with us, we process contact and contractual information necessary to manage that relationship.\n\nJob applicant data. If you apply for a role with Potesia, we process the personal information you provide in your application (name, contact details, CV, portfolio) to evaluate your suitability and communicate with you about the role.`,
    },
    {
      id: "s4", title: "4. How We Use Your Information",
      body: `We use personal information to:\n\n• Respond to your enquiries and communicate with you.\n• Manage business relationships, partnerships, and collaborations.\n• Improve our website and understand how people engage with our content.\n• Evaluate job applications and communicate with candidates.\n• Comply with our legal obligations and protect our rights.\n\nWe do not sell your personal information. We do not use it for unsolicited marketing beyond direct replies to your own enquiry.`,
    },
    {
      id: "s5", title: "5. Legal Bases for Processing",
      body: `Where applicable law requires a lawful basis, we rely on:\n\n• Legitimate interests — responding to enquiries, managing business relationships, and improving our website.\n• Performance of a contract or pre-contractual steps — business partnerships and job applications.\n• Legal obligation — where required by applicable law.\n• Consent — where we ask for it explicitly (you may withdraw consent at any time without affecting prior lawful processing).`,
    },
    {
      id: "s6", title: "6. Disclosure to Third Parties",
      body: `We do not sell your personal information. We may share it with:\n\n• Service providers who help us operate our website and communications infrastructure (such as hosting, email delivery, and analytics), under appropriate contractual safeguards.\n• Professional advisers (lawyers, accountants) where necessary, under confidentiality obligations.\n• Competent authorities where required by law or legal process.\n• A successor entity in connection with a business transfer, subject to this Policy.\n\nWhere such transfers cross international borders, we take steps to ensure an adequate level of protection consistent with applicable law.`,
    },
    {
      id: "s7", title: "7. Cookies and Tracking",
      body: `Our website may use cookies or similar technologies to remember your preferences and to collect analytics data. We aim to use only what is strictly necessary for the site to function and for us to understand aggregate traffic. We do not serve targeted advertising cookies. You can manage cookie settings through your browser. Depending on your location, we may present a cookie consent notice.`,
    },
    {
      id: "s8", title: "8. Data Retention",
      body: `We retain personal information only for as long as necessary for the purpose for which it was collected, to comply with legal obligations, resolve disputes, and enforce agreements. Enquiry and contact data is typically retained for a reasonable period to allow follow-up and record-keeping. You may request deletion at any time (see Section 9).`,
    },
    {
      id: "s9", title: "9. Your Rights",
      body: `Subject to applicable law, you may have rights to:\n\n• Access — request a copy of personal information we hold about you.\n• Rectification — request correction of inaccurate data.\n• Erasure — request deletion of your data.\n• Objection or restriction — object to or request restriction of certain processing.\n• Data portability — request your data in a portable format.\n• Withdraw consent — where processing is based on consent, withdraw it at any time.\n• Lodge a complaint — with the competent data-protection authority in your jurisdiction.\n\nTo exercise these rights, contact us at the address in Section 11.`,
    },
    {
      id: "s10", title: "10. Security",
      body: `We take reasonable technical and organisational precautions to protect personal information against loss, misuse, or unauthorised access. No method of transmission over the internet or electronic storage is completely secure. Please use secure, private connections when contacting us.`,
    },
    {
      id: "s11", title: "11. Contact",
      body: `For privacy questions, requests to exercise your rights, or general enquiries about this Policy:\n\nFitly Tjong Mamuaya (Potesia)\nEmail: potesiasupport@gmail.com\nAddress: Manado, North Sulawesi, Indonesia\n\nYou may also use the contact form at https://potesia.com/contact.`,
    },
    {
      id: "s12", title: "12. Changes to This Policy",
      body: `We may update this Policy from time to time. Material changes will be noted on this page with a revised "Last updated" date. We encourage you to review this Policy periodically.`,
    },
    {
      id: "s13", title: "13. Product-Specific Policies",
      body: `Our individual products maintain their own privacy policies. For DIVE, the full DIVE Privacy Policy (including Google Play Data Safety information) is available at https://potesia.com/privacy/dive. Additional product policies will be published as those products launch.`,
    },
  ],

  id: [
    {
      id: "s1", title: "1. Siapa Kami",
      body: `Potesia adalah studio perangkat lunak dan media independen yang didirikan dan dioperasikan oleh Fitly Tjong Mamuaya, berkantor di Manado, Sulawesi Utara, Indonesia ("Potesia", "kami", "kita"). Kami mendesain, membangun, dan meluncurkan produk digital di empat bidang: teknologi bisnis, penerbitan digital, akses hukum, dan berita independen. Kebijakan Privasi ini menjelaskan bagaimana Potesia mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi di seluruh situs web, komunikasi perusahaan, dan aktivitas kami sebagai perusahaan — tidak terbatas pada produk tertentu.`,
    },
    {
      id: "s2", title: "2. Ruang Lingkup Kebijakan Ini",
      body: `Kebijakan ini mencakup informasi pribadi yang diproses oleh Potesia sehubungan dengan:\n\n• Pengunjung ke potesia.com dan properti web perusahaan kami lainnya.\n• Orang yang menghubungi kami melalui situs web, email, atau saluran sosial kami.\n• Mitra bisnis, kolaborator, dan orang yang menanyakan tentang bekerja sama dengan kami.\n• Pelamar kerja.\n\nKebijakan privasi khusus produk mengatur data yang diproses dalam produk kami. Untuk DIVE, lihat Kebijakan Privasi DIVE kami di https://potesia.com/privacy/dive.`,
    },
    {
      id: "s3", title: "3. Informasi yang Kami Kumpulkan",
      body: `Data kontak dan pertanyaan. Saat Anda menghubungi kami (misalnya, melalui formulir kontak situs web, email, atau saluran sosial), kami mengumpulkan nama, alamat email, dan konten pesan Anda.\n\nData penggunaan situs web. Kami dapat mengumpulkan data analitik web standar (seperti tampilan halaman, URL perujuk, jenis browser, dan lokasi umum yang berasal dari alamat IP) untuk memahami bagaimana situs kami digunakan. Data ini diagregasi dan tidak mengidentifikasi Anda secara individual.\n\nData bisnis dan mitra. Jika Anda menjalin hubungan bisnis atau kolaborasi dengan kami, kami memproses informasi kontak dan kontrak yang diperlukan untuk mengelola hubungan tersebut.\n\nData pelamar kerja. Jika Anda melamar posisi di Potesia, kami memproses informasi pribadi yang Anda berikan dalam lamaran Anda untuk mengevaluasi kesesuaian Anda.`,
    },
    {
      id: "s4", title: "4. Cara Kami Menggunakan Informasi Anda",
      body: `Kami menggunakan informasi pribadi untuk:\n\n• Menanggapi pertanyaan Anda dan berkomunikasi dengan Anda.\n• Mengelola hubungan bisnis, kemitraan, dan kolaborasi.\n• Meningkatkan situs web kami dan memahami bagaimana orang terlibat dengan konten kami.\n• Mengevaluasi lamaran kerja dan berkomunikasi dengan kandidat.\n• Mematuhi kewajiban hukum kami dan melindungi hak kami.\n\nKami tidak menjual informasi pribadi Anda.`,
    },
    {
      id: "s5", title: "5. Dasar Hukum Pemrosesan",
      body: `Di mana hukum yang berlaku mengharuskan dasar hukum, kami mengandalkan:\n\n• Kepentingan sah — menanggapi pertanyaan, mengelola hubungan bisnis, dan meningkatkan situs web kami.\n• Pelaksanaan kontrak atau langkah pra-kontrak — kemitraan bisnis dan lamaran kerja.\n• Kewajiban hukum — di mana diwajibkan oleh hukum yang berlaku.\n• Persetujuan — di mana kami memintanya secara eksplisit.`,
    },
    {
      id: "s6", title: "6. Pengungkapan kepada Pihak Ketiga",
      body: `Kami tidak menjual informasi pribadi Anda. Kami dapat membagikannya dengan:\n\n• Penyedia layanan yang membantu kami mengoperasikan situs web dan infrastruktur komunikasi kami, di bawah perlindungan kontrak yang sesuai.\n• Penasihat profesional (pengacara, akuntan) jika diperlukan, di bawah kewajiban kerahasiaan.\n• Otoritas yang berwenang jika diwajibkan oleh hukum atau proses hukum.\n• Entitas penerus sehubungan dengan pengalihan bisnis, tunduk pada Kebijakan ini.`,
    },
    {
      id: "s7", title: "7. Cookie dan Pelacakan",
      body: `Situs web kami dapat menggunakan cookie atau teknologi serupa untuk mengingat preferensi Anda dan mengumpulkan data analitik. Kami bertujuan hanya menggunakan apa yang benar-benar diperlukan untuk fungsi situs dan bagi kami untuk memahami lalu lintas agregat. Kami tidak menyajikan cookie iklan bertarget. Anda dapat mengelola pengaturan cookie melalui browser Anda.`,
    },
    {
      id: "s8", title: "8. Retensi Data",
      body: `Kami menyimpan informasi pribadi hanya selama yang diperlukan untuk tujuan pengumpulannya, untuk mematuhi kewajiban hukum, menyelesaikan perselisihan, dan menegakkan perjanjian. Anda dapat meminta penghapusan kapan saja (lihat Bagian 9).`,
    },
    {
      id: "s9", title: "9. Hak-Hak Anda",
      body: `Tunduk pada hukum yang berlaku, Anda mungkin memiliki hak untuk:\n\n• Akses — meminta salinan informasi pribadi yang kami simpan tentang Anda.\n• Rektifikasi — meminta koreksi data yang tidak akurat.\n• Penghapusan — meminta penghapusan data Anda.\n• Keberatan atau pembatasan — keberatan terhadap atau meminta pembatasan pemrosesan tertentu.\n• Portabilitas data — meminta data Anda dalam format yang dapat dibawa.\n• Menarik persetujuan — di mana pemrosesan didasarkan pada persetujuan, tarik kapan saja.\n• Mengajukan keluhan — kepada otoritas perlindungan data yang berwenang di yurisdiksi Anda.\n\nUntuk menggunakan hak-hak ini, hubungi kami di alamat di Bagian 11.`,
    },
    {
      id: "s10", title: "10. Keamanan",
      body: `Kami mengambil tindakan pencegahan teknis dan organisasi yang wajar untuk melindungi informasi pribadi terhadap kehilangan, penyalahgunaan, atau akses yang tidak sah. Tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang sepenuhnya aman.`,
    },
    {
      id: "s11", title: "11. Kontak",
      body: `Untuk pertanyaan privasi, permintaan untuk menggunakan hak Anda, atau pertanyaan umum tentang Kebijakan ini:\n\nFitly Tjong Mamuaya (Potesia)\nEmail: potesiasupport@gmail.com\nAlamat: Manado, Sulawesi Utara, Indonesia\n\nAnda juga dapat menggunakan formulir kontak di https://potesia.com/contact.`,
    },
    {
      id: "s12", title: "12. Perubahan pada Kebijakan Ini",
      body: `Kami dapat memperbarui Kebijakan ini dari waktu ke waktu. Perubahan material akan dicatat di halaman ini dengan tanggal "Terakhir diperbarui" yang direvisi. Kami mendorong Anda untuk meninjau Kebijakan ini secara berkala.`,
    },
    {
      id: "s13", title: "13. Kebijakan Khusus Produk",
      body: `Produk individual kami memiliki kebijakan privasi mereka sendiri. Untuk DIVE, Kebijakan Privasi DIVE lengkap (termasuk informasi Keamanan Data Google Play) tersedia di https://potesia.com/privacy/dive. Kebijakan produk tambahan akan diterbitkan saat produk-produk tersebut diluncurkan.`,
    },
  ],
};

export default function Privacy() {
  const { lang, t } = useLanguage();
  const lc = t.legal;
  const sections = SECTIONS[lang];

  useEffect(() => { document.title = "Privacy Policy — Potesia"; }, []);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Disclaimer */}
      <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm leading-relaxed text-amber-800">
        ⚠️ {lc.disclaimer}
      </div>

      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">Potesia</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
        {lang === "en" ? "Privacy Policy" : "Kebijakan Privasi"}
      </h1>
      <p className="mt-3 text-sm text-zinc-500">{lc.lastUpdated}: {LAST_UPDATED}</p>

      {/* Product-specific links */}
      <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm text-zinc-600">
        {lang === "en"
          ? "Looking for a product-specific policy? "
          : "Mencari kebijakan khusus produk? "}
        <Link to="/privacy/dive" className="font-semibold text-lime-600 hover:underline">
          DIVE Privacy Policy →
        </Link>
      </div>

      {/* Table of Contents */}
      <nav className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-5">
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
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-zinc-200 pt-8 text-center">
        <Link to="/privacy/dive" className="text-sm text-zinc-500 hover:text-lime-600 transition-colors">
          DIVE Privacy Policy →
        </Link>
        <span className="mx-4 text-zinc-300">·</span>
        <Link to="/terms" className="text-sm text-zinc-500 hover:text-lime-600 transition-colors">
          {lang === "en" ? "Terms of Service" : "Syarat Layanan"} →
        </Link>
      </div>
    </div>
  );
}
