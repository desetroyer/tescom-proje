import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function KalitePolitikasi() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Kalite Politikası</h1>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-2">ISO 14001 - Çevre Politikası</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Elektrik, su ve yakıt gibi doğal kaynakları tüketimini azaltmak için en ekonomik şekilde kullanmak,</li>
            <li>Faaliyetlerimiz sırasında oluşan katı atıklarımızla ilgili azaltıcı önlemler alıp, tekrar kullanım veya geri kazanım imkanlarını uygulamaya almak,</li>
            <li>Çevre ile ilgili ulusal kanun ve yönetmeliklere uymak,</li>
            <li>Faaliyet ve Hizmet ile ilgili süreçlerde çevresel boyutları/etkileri dikkate alarak kirliliği, kaynağında önlenmeye çalışmak,</li>
            <li>Faaliyetlerimiz sırasında meydana gelebilecek herhangi bir çevresel kaza veya acil durumda, çevresel zararları en az düzeye indirecek tedbirler planlanıp uygulamak,</li>
            <li>Çevre konusunda başarıya ulaşmak için tüm çalışanlarımızı bilinçlendirmek ve bireysel sorumluluk kazandırmak için eğitimlere tabi tutmak,</li>
            <li>Yapılan çevresel iyileştirmeler ile çevremizdeki kuruluşlara örnek olmak,</li>
            <li>Çevresel performansımızı sürekli iyileştirmek.</li>
          </ul>
        </section>
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">ISO 9001 - Kalite Politikası</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Müşterilerimizi memnun etmek, istenilen ürünü, hizmeti eksiksiz olarak, uygun fiyatta ve zamanında vermek başka bir deyimle istenilen kalitede karşılayabilmek asıl amacımızdır.</li>
            <li>Çalışanlarımız, yan sanayimiz, tedarikçilerimiz ve müşterilerimiz şirketimizin ayrılmaz birer parçasıdır.</li>
            <li>Çalışanlarımızın eğitim ve refah seviyesini yükseltmek, kalite felsefesini çalışma ve sosyal hayatlarının ayrılmaz birer parçası haline getirmek için gerekli eğitim ve bilgilendirme çalışmalarını düzenlemek ve sürekli iyileştirmek asıl gayemiz içerisinde yer almaktadır.</li>
            <li>Gelişen teknoloji ile paralel ilerleyerek, kalitemizi, müşteri memnuniyetimizi ve rekabetçiliğimizi en üst seviyeye çıkarmak hedefimizdir.</li>
            <li>Şirketimizde ISO 9001'i referans standart olarak seçilmiş olup Kalite Yönetim Sistemimiz bu standarda uygun olarak kurulmuştur.</li>
            <li>Bütün bu çalışmalarımızı yaparken çevreye, doğaya zarar vermeden, hukuk kuralları çerçevesinde çalışarak daha ileriye gitmeyi amaçlıyoruz.</li>
          </ul>
        </section>
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">ISO 45001 – ISG Politikası</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>ISG konusunda yasal ve diğer şartların gerekliliklerini yerine getirerek, sürekli iyileştirme için standartların da üzerine çıkarak üst seviyede bir performans sergilemek,</li>
            <li>İş kazaları ve meslek hastalıklarına neden olabilecek tehlikeleri tespit ederek önlemeyi, azaltmayı ve ortadan kaldırmayı sağlamak,</li>
            <li>Ürün ve hizmet oluşturma şartlarında meydana gelen risk ve fırsatları belirlemek ve sürdürülebilir ISG bilincini en üst düzeye çekmek,</li>
            <li>ISG konusunda başarıya ulaşmak için tüm çalışanlarımızı bilinçlendirmek ve bireysel sorumluluk kazandırmak için eğitimlere tabi tutarak ISG kurallarının ortak sorumluluk olarak benimsenmesini sağlamak,</li>
            <li>İlgili tarafların ihtiyaç ve beklentilerini analiz ederek tüm çalışanların uygulama ve gelişimine katkı sağladığı, güçlü bir ISG kültürü oluşturmak,</li>
            <li>ISG hedefleri doğrultusunda, üst yönetimin liderliği ve çalışanların katılımı ile yönetim sistemi performansının sürekliliğini sağlamak,</li>
            <li>ISG konusunda yapılan iyileştirmeler ile çevremizdeki kuruluşlara örnek olmak.</li>
          </ul>
        </section>
        <div className="text-right text-xs text-gray-500 mt-4">
          <div><b>Yayınlanma Tarihi :</b> 23.02.2023</div>
          <div><b>Revizyon No :</b> 03</div>
        </div>
      </div>
    </div>
  );
} 