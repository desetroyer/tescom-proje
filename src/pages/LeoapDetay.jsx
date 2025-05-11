import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FaFilePdf, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function LeoapDetay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">LEOAP LINE INTERACTIVE UPS</h1>
          <div className="text-lg text-gray-700 mb-4">600-2000VA</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">Leoap, çok fonksiyonlu olarak kişisel bilgisayarlar için özel olarak tasarlanmıştır. Hafif yapısı ve kompakt tasarımı, sınırlı çalışma ortamlarına mükemmel şekilde uyum sağlar.</p>
            <p className="mb-2">Bu UPS serisi, giriş voltaj aralığını dengelemek için bir adet yükseltme (boost) ve bir adet düşürme (buck) AVR ile donatılmıştır. Ayrıca, dahili DC başlatma fonksiyonuna sahiptir. Bu fonksiyon, UPS'in AC güç kaynağı olmadan çalıştırılmasını sağlar.</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/leoap.png" alt="LEOAP LINE INTERACTIVE UPS" className="w-72 h-auto rounded shadow" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Simüle edilmiş sinüs dalgası çıkışlı Line Interactive UPS</li>
          <li>Mükemmel mikroişlemci kontrolü, yüksek güvenilirlik (Dahili kendi kendine teşhis teknolojisi)</li>
          <li>Voltaj stabilizasyonu için boost ve buck AVR (Bir boost ve bir buck kontrolü)</li>
          <li>AC güç normale dönerken otomatik yeniden başlatma</li>
          <li>Cold start fonksiyonu</li>
          <li>Kapalı modda şarj</li>
          <li>Hızlı akıllı akü şarj fonksiyonu</li>
          <li>LED ve LCD paneller için seçenekler</li>
          <li>Opsiyonel jeneratör uyumluluğu</li>
          <li>Opsiyonel USB/RS232 iletişim portu ve RJ11/RJ45 koruması</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <p className="text-gray-700">Ev & Ofis, Bilgisayarlar, ev ve küçük işletmenizdeki ağlar için kesintisiz ve güvenilir gücü garanti edebilirsiniz.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Ürün Kataloğu</h2>
          <a
            href="https://www.tescomakademi.com/katalog/tr/LEOAP-600-2000.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <FaFilePdf className="mr-2" />
            LEOAP LINE INTERACTIVE UPS 600-2000VA Kataloğu
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Paylaş:</span>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.tescom-ups.com/tr/urun/leoap-line-interactive-ups-147"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://www.tescom-ups.com/tr/urun/leoap-line-interactive-ups-147"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="/teklif-al"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
        >
          Teklif Al
        </a>
      </div>
    </div>
  );
} 