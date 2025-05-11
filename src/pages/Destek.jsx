import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FaPhone, FaEnvelope, FaBookOpen } from 'react-icons/fa';

export default function Destek() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">Teknik Servis ve Destek</h1>

      {/* Müşteri Hizmetleri */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Teknik Servis Müşteri Hizmetleri</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
          <div className="flex items-center gap-2 text-gray-700"><FaPhone className="text-blue-500" /> <span>0 (850) 277 88 77</span></div>
          <div className="flex items-center gap-2 text-gray-700"><FaPhone className="text-blue-500" /> <span>0 (533) 561 49 59</span></div>
          <div className="flex items-center gap-2 text-gray-700"><FaPhone className="text-blue-500" /> <span>0 (530) 513 47 67</span></div>
        </div>
        <div className="flex items-center gap-2 text-gray-700 mb-2"><FaEnvelope className="text-blue-500" /> <span>merkezservis@tescom-ups.com</span></div>
        <div className="flex gap-4 mt-2">
          <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline font-semibold"><FaBookOpen /> Teknik Servis Kitapçığını Oku</a>
          <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline font-semibold"><FaBookOpen /> Teknik Servis Kitapçığını İndir</a>
        </div>
      </div>

      {/* Açıklama */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-700 mb-2">Müşteri İhtiyaçlarının Karşılanması</h2>
        <p className="text-gray-700 mb-2">Tescom, %100 müşteri memnuniyeti ilkesi kapsamında, ürünlerini fabrika çıkışından itibaren izleyerek, servis hizmetini yakından takip etmektedir. Müşterilerinden gelen geri bildirimleri titizlikle inceleyerek, her türlü saha desteğini zamanında vermek, iyileştirme önerilerini ve tavsiyelerini üretim ve arge ve lojistik birimlerimize iletmek, <b>Tescom Teknik Servis ve Destek</b> Biriminin en öncelikli görevleridir.</p>
        <p className="text-gray-700">Tescom, deneyimli ve dinamik servis kadrosu ile sözleşmelerle bağıtlanmak koşuluyla 7/24 saat yerinde servis hizmeti vermektedir.</p>
      </div>

      {/* Hizmetler */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-700 mb-2">Tescom Teknik Servis Hizmetleri</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Yeni cihaz kurulum ve devreye alma</li>
          <li>Satış sonrasında garanti içi servis hizmeti</li>
          <li>Garanti içinde çok uygun maliyetlerde koruyucu bakım hizmeti verilmesi</li>
          <li>Müşterilere cihaz başı eğitimi verilmesi</li>
          <li>Garanti bitiminde müşteri ihtiyacına ve yük durumuna bağlı olarak bakım sözleşmesi yapılması</li>
          <li>Akü tedariği, ek akü süresi ihtiyacı için ek akü grubu sağlanması ve devreye alınması</li>
          <li>Cihazların yer değişiminde nakliye dahil anahtar teslim hizmet verilmesi</li>
          <li>Özel servis projeleri hazırlanması</li>
          <li>Özel sözleşmeler yoluyla ulusal çapta bakım/onarım hizmetleri verilmesi</li>
        </ul>
      </div>

      {/* Bakım Sözleşmesi */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-700 mb-2">Bakım Sözleşmesi Yapılması Gerekliliği</h2>
        <p className="text-gray-700 mb-2">Kesintisiz Güç Kaynakları 7 gün / 24 saat çalışacak şekilde tasarlanmış olmalarına karşın gerekli olan dönemsel bakımların yapılması, sistemlerin doğru ve uzun ömürlü hizmet verebilmeleri için en önemli unsur olarak dikkate alınmalıdır. Size yıllarca hizmet verebilmesi için, gerekli olan bakımların zamanında, eğitimli personel ve üretici tarafından onaylanmış yedek parça ile yapılması gerekir.</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Yılda 2 kez koruyucu bakım yapılmasının, uluslararası istatistiklerde, yıllık yük kesintisi sayısını en az ¼ oranında azalttığı saptanmıştır.</li>
          <li>Müşteri isteği, cihazın bulunduğu ortam ve yük durumuna (kritik) bağlı olarak çeşitli bakım sözleşmeleri seçeneklerini müşterilerimize sunuyoruz.</li>
        </ul>
      </div>

      {/* Bakım Sözleşmesi Seçenekleri */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-700 mb-2">Yıllık Bakım Sözleşmesi Seçenekleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">1 - Yedek parça ihtiyacına göre</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Parça hariç</li>
              <li>Parça dahil akü hariç</li>
              <li>Parça ve akü dahil</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">2 - Müdahale süresine göre</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>5/9 Bakım sözleşmesi : Haftada 5 gün çalışma saatleri içinde servis</li>
              <li>5/24 Bakım Sözleşmesi : Haftada 5 gün tüm gün servis</li>
              <li>7/24 Bakım Sözleşmesi : Haftada 7 gün 24 saat servis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bakım Sözleşmesi Avantajları */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-700 mb-2">Bakım Sözleşmesi Yapan Müşterilerimizin Aldığı Hizmet Üstünlükleri</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Öncelikli yerinde servis</li>
          <li>Liste fiyatlarından özel indirimle yedek parça ve akü tedariği</li>
          <li>Ek sözleşme ile cihazların uzaktan izlenebilmesi</li>
          <li>Bakımı yapılan sistemlerin dönemsel raporlarının müşterilerle paylaşımı</li>
          <li>Ek akü grubu isteklerinde özel fiyat</li>
        </ul>
      </div>

      {/* Doğru Servis Seçimi */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-700 mb-2">Doğru Servis Seçimi</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Seçeceğiniz UPS servisi 7/24 servise hazırlıklı olmalıdır</li>
          <li>Müşteri yerinde bakım/onarım yapabilmeli</li>
          <li>Gerekli yedek parçası her an stoğunda bulunmalı</li>
          <li>Gerektiğinde arızalı cihaz yerine geçici cihaz bırakabilmeli</li>
          <li>Üretici firma tarafından yetkilendirilmiş olmalı</li>
          <li>İş sağlığı ve güvenliği eğitimi almış teknik elemanlarla servis vermelidir.</li>
        </ul>
      </div>
    </div>
  );
} 