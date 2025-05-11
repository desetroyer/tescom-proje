import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function TescomMarkaliUrunlerArge() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Tescom Markalı Ürünler & AR-GE</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Türkiye'nin 455. AR-GE Merkezi</h2>
        <p className="text-gray-700 mb-4">
          T.C. Sanayi ve Teknoloji Bakanlığı tarafından yapılan değerlendirmeler sonucunda Türkiye'nin <b>455. Ar-Ge Merkezi</b> Belgesi, güç elektroniği ve enerji konularında yatırımlarına devam eden <b>Tescom</b>'a verilmiştir.
        </p>
        <p className="text-gray-700 mb-4">
          <b>Tescom markalı ürünler</b>, yüksek teknolojinin tüm olanaklarından yararlanılarak dinamik bir <b>AR-GE</b> ortamında üretilmektedir. Tasarımda güvenilirlik, yüksek performans, uzun ömürlülük, ekonomiklik ve günümüzün modern ihtiyaçlarını karşılayabilmek gibi ilkeler ön planda tutulmaktadır.
        </p>
        <p className="text-gray-700 mb-4">
          <b>Tescom'un AR-GE'si</b>, firmanın kurulduğu 1980 yılından bu yana şirketimizin en önemli kaynaklarından birisidir. Bu tarihten beri firma hedefimiz, teknolojik gelişmeleri yakından takip ederek, müşteri odaklı yaklaşımla çağdaş çözümleri cihazlarımıza uygulamaktır.
        </p>
        <p className="text-gray-700 mb-4">
          Çalışmalar, yeni ürünlerimizin yanı sıra piyasadaki tüm ürünlerimizin geliştirilmesi için de sürdürülmektedir. <b>Tescom Ailesi</b> olarak 40 yılı aşkın bir süredir sürekli kendimizi yenileyerek tasarım yapmakta ve ürün gamımızı bu doğrultuda geliştirmekteyiz.
        </p>
        <p className="text-gray-700 mb-4">
          Bu ilkelerle, hem <b>kaliteli</b>, hem de <b>üstün performanslı ürünler</b> üreterek ulaştığımız seviyeden gurur duymaktayız.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-50 rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-2">AR-GE Yetkinlikleri</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Türkiye'de Güç Elektroniği konusunda deneyimli AR-GE personeli</li>
            <li>Yeni ürün geliştirme ve üst düzey bilgi-donanım</li>
            <li>Güç elektroniği, mikroişlemci yazılımları, solar sistemler, veri haberleşmesi, KGK, statik transfer anahtarları gibi uygulamalarda tecrübe</li>
            <li>Her türlü standart dışı özelliğe sahip güç elektroniği ürünlerini tasarlama kapasitesi</li>
            <li>En son teknoloji ürünü test donanımı ve güncel bilişim teknolojileriyle uyumlu komponent seçimi</li>
            <li>IGBT, PWM, DSP, IPM, Mikroişlemci, SNMP, TCP/IP gibi ileri teknolojilerin uygulanması</li>
          </ul>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-2">AR-GE Felsefesi & Hedefler</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Teknolojik gelişmeleri yakından takip etmek</li>
            <li>Müşteri odaklı çağdaş çözümler geliştirmek</li>
            <li>Ürün gamını sürekli yenilemek ve geliştirmek</li>
            <li>Çevreci ve sürdürülebilir tasarım anlayışı</li>
            <li>Kalite ve üstün performans odaklılık</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-2">AR-GE'nin Katkıları</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Yüksek teknolojili, güvenilir ve uzun ömürlü ürünler</li>
          <li>Türkiye KGK sektöründe liderlik ve yenilikçilik</li>
          <li>Yurt içi ve yurt dışı projelerde tercih edilen marka</li>
          <li>Çevreye duyarlı ve sürdürülebilir çözümler</li>
        </ul>
      </div>
    </div>
  );
} 