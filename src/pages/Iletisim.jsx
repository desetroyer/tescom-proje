import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa';

const locations = [
  {
    title: 'İSTANBUL Genel Merkez',
    address: 'Dudullu Organize Sanayi Bölgesi 2.Cadde No:7 Zemin Kat Ümraniye / İSTANBUL',
    phone: '+90 (850) 277 88 77',
    fax: '+90 (216) 527 28 18',
    email: ['info[@]tescom-ups.com'],
    map: 'https://www.google.com/maps?q=Dudullu+Organize+Sanayi+B%C3%B6lgesi+2.Cadde+No:7+Zemin+Kat+%C3%9Cmraniye+%C4%B0STANBUL&output=embed',
  },
  {
    title: 'İZMİR Bölge Müdürlüğü (Fabrika ve Yurtdışı Satış)',
    address: '10009 Sokak No:1 Ulukent Sanayi Sitesi Menemen / İZMİR',
    phone: '+90 (232) 833 36 00',
    fax: '+90 (232) 833 37 87',
    email: ['info[@]tescom-ups.com', 'international[@]tescom-ups.com', 'support[@]tescom-ups.com'],
    map: 'https://www.google.com/maps?q=10009+Sokak+No:1+Ulukent+Sanayi+Sitesi+Menemen+%C4%B0ZM%C4%B0R&output=embed',
  },
  {
    title: 'ANKARA Bölge Müdürlüğü',
    address: 'İvedik OSB Melih Gökçek Bulvarı 1122. Cad. Maxivedik İş Merkezi No:20/106 Yenimahalle / ANKARA',
    phone: '+90 (312) 476 24 37',
    fax: '+90 (312) 476 24 38',
    email: ['info[@]tescom-ups.com'],
    map: 'https://www.google.com/maps?q=%C4%B0vedik+OSB+Melih+G%C3%B6k%C3%A7ek+Bulvar%C4%B1+1122.+Cad.+Maxivedik+%C4%B0%C5%9F+Merkezi+No:20/106+Yenimahalle+ANKARA&output=embed',
  },
  {
    title: 'ATİNA / YUNANİSTAN',
    address: 'Tescom Hellas S.A. 7th Volou Str. 18346, Moschato',
    phone: '0030.210.95.90.910',
    fax: '210.95.90.080',
    email: ['info[@]tescom-ups.gr', 'http://www.tescom-ups.gr/'],
    map: 'https://www.google.com/maps?q=Tescom+Hellas+S.A.+7th+Volou+Str.+18346,+Moschato&output=embed',
  },
];

const exportMarkets = [
  { name: 'Afrika Bölgesi', email: 'africa@tescom-ups.com' },
  { name: 'Asya Pasifik Bölgesi', email: 'asiapacific@tescom-ups.com' },
  { name: 'Amerika Bölgesi', email: 'americas@tescom-ups.com' },
  { name: 'Bağımsız Devletler', email: 'cis@tescom-ups.com' },
  { name: 'Avrupa Bölgesi', email: 'europe@tescom-ups.com' },
  { name: 'Orta Doğu Bölgesi', email: 'middle-east@tescom-ups.com' },
  { name: 'Nijerya', email: 'nigeria@tescom-ups.com' },
];

function Iletisim() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-4">İletişim</h1>
      <p className="mb-4 text-lg text-gray-700">TESCOM ailesi olarak müşterilerimize ihtiyaçlarını sunmak ve isteklerini karşılamak için tutkuyla çalışıyoruz.</p>
      <p className="mb-4 text-gray-700">TESCOM çalışanları sorularınız için her zaman hazırdır ve bizlere 7/24 kolayca ulaşılabilirsiniz. Aşağıdaki telefon numaralarından bizi arayabilir, e-posta gönderebilir veya iletişim formunu doldurabilirsiniz.</p>
      <p className="mb-8 text-gray-700">İsteğiniz bize iletildikten sonra, mümkün olan en kısa sürede sizinle iletişime geçeceğiz.</p>

      <div className="space-y-10 mb-10">
        {locations.map((loc, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 items-stretch bg-white rounded-lg shadow p-4">
            <div className="flex-1 flex flex-col gap-2 justify-center">
              <h2 className="text-xl font-bold text-blue-800 mb-2">{loc.title}</h2>
              <div className="flex items-center gap-2 text-gray-700"><FaMapMarkerAlt className="text-blue-500" /> <span>{loc.address}</span></div>
              <div className="flex items-center gap-2 text-gray-700"><FaPhone className="text-blue-500" /> <span>{loc.phone}</span></div>
              <div className="flex items-center gap-2 text-gray-700"><FaFax className="text-blue-500" /> <span>{loc.fax}</span></div>
              {loc.email.map((mail, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-blue-500" />
                  {mail.startsWith('http') ? (
                    <a href={mail} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{mail}</a>
                  ) : (
                    <span>{mail}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex-1 flex items-center justify-center min-h-[200px]">
              <iframe
                title={loc.title}
                src={loc.map}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '0.5rem', minWidth: '220px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">İhracat Pazarları</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {exportMarkets.map((market, i) => (
          <div key={i} className="flex items-center gap-2 border rounded-lg p-3 bg-blue-50">
            <FaGlobe className="text-blue-500" />
            <span className="font-semibold">{market.name}:</span>
            <span className="text-blue-800">{market.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Iletisim;