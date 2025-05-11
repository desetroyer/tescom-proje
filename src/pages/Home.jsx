import React from 'react';
import { Link } from 'react-router-dom';

const cozumler = [
  { title: 'Endüstriyel', desc: 'Endüstriyel kontrol uygulamaları için farklı UPS çözümleri.', icon: '🏭', link: '/cozumler/endustriyel' },
  { title: 'Medikal', desc: 'Hastane ve tıp tesisleri için kesintisiz enerji.', icon: '💉', link: '/cozumler/medikal' },
  { title: 'Veri Merkezi & IT', desc: 'Sunucu altyapıları ve veri merkezleri için ölçeklenebilir çözümler.', icon: '💻', link: '/cozumler/veri-merkezi-it' },
  { title: 'Ev & Ofis', desc: 'Ev ve küçük ofisler için pratik UPS çözümleri.', icon: '🏠', link: '/cozumler/ev-ofis' },
  { title: 'Ulaşım', desc: 'Tüm çevre koşullarında yüksek verimlilik ile çalışabilen ürünler.', icon: '🚆', link: '/cozumler/ulasim' },
  { title: 'Kompleksler', desc: 'AVM, zincir market ve perakende sektörü için çözümler.', icon: '🏢', link: '/cozumler/kompleksler' },
];

const urunler = [
  { name: 'LEOAP LINE INTERACTIVE UPS', desc: '600-2000VA', tag: 'YENİ', img: '/images/leoap.png' },
  { name: 'DC GÜÇ BESLEME SİSTEMİ', desc: '6kW / 48kW - 48V', tag: 'YENİ', img: '/images/dc-guc-besleme.png' },
  { name: 'MTW150 MODULER UPS', desc: '10-150 kVA', tag: 'YENİ', img: '/images/mtw150.png' },
  { name: 'DS POWER', desc: '800kVA', tag: 'YENİ', img: '/images/dspower.png' },
  { name: 'MTW500 MODÜLER UPS', desc: '50-600 kVA', tag: 'YENİ', img: '/images/mtw500.png' },
  { name: 'MTW300 MODÜLER UPS', desc: '30-300 kVA', tag: 'YENİ', img: '/images/mtw300.png' },
];

const bloglar = [
  { title: '2025 Çözüm Ortakları Toplantımız Başarıyla Gerçekleşti', date: 'Şubat 2025' },
  { title: 'Saha Expo Fuarındaydık', date: 'Ekim 2024' },
  { title: 'Fabrika Ziyareti', date: 'Temmuz 2024' },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white shadow-md pt-10 pb-8 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">Kesintisiz Güç Kaynağı <span className="text-blue-600">Üreticisi</span> olarak,</h2>
            <p className="text-xl md:text-2xl font-semibold mb-4">40 yılı aşkın deneyime sahip ekibimiz ile, mühendislik ihtiyaçlarınızda yanınızdayız.</p>
            <Link to="/bir-bakista-tescom" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold text-lg transition">Keşfet</Link>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center justify-center">
            <div className="bg-blue-50 rounded-lg p-6 shadow w-full max-w-xs">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Tescom Markalı Ürünler</h3>
              <p className="text-gray-700 mb-2">Türkiye'nin 455. AR-GE Merkezi belgesiyle, yüksek teknolojinin tüm olanaklarından yararlanılarak dinamik bir AR-GE ortamında üretilmektedir.</p>
              <Link to="/tescom-markali-urunler-ar-ge" className="text-blue-700 hover:underline font-semibold">Detaylı Bilgi</Link>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 shadow w-full max-w-xs">
              <h3 className="text-lg font-bold text-yellow-700 mb-2">Tescom Solar Ürünler</h3>
              <p className="text-gray-700 mb-2">Solar Sulama Sistemi, Hybrid Serisi ve TSC Serisi ürünleri ile güneş enerji tesisinizin verimini en üst düzeye çıkarın.</p>
              <a href="https://www.tescom-solar.com/tr" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-semibold">Detaylı Bilgi</a>
            </div>
          </div>
        </div>
      </section>

      {/* Çözümler Bölümü */}
      <section className="container mx-auto mt-12 px-4">
        <h3 className="text-center text-blue-700 text-xl font-bold mb-2 tracking-widest">ÇÖZÜMLER</h3>
        <h2 className="text-center text-3xl font-bold mb-6">Her Ortamda <span className="text-blue-800">Kesintisiz Enerji</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cozumler.map((c, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="text-3xl mb-2">{c.icon}</div>
              <div className="font-bold text-lg mb-1">{c.title}</div>
              <p className="text-gray-600 text-center mb-2">{c.desc}</p>
              <Link to={c.link} className="text-blue-600 font-semibold hover:underline">Ürünleri Görüntüle</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="container mx-auto mt-16 px-4">
        <h2 className="text-center text-2xl font-bold text-blue-800 mb-6">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {urunler.map((u, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-sm">
              <Link to={
                i === 0 ? '/urun/leoap-line-interactive-ups' :
                i === 1 ? '/urun/dc-guc-besleme-sistemi' :
                i === 2 ? '/urun/mtw150-moduler-ups' :
                i === 3 ? '/urun/ds-power-ups' :
                i === 4 ? '/urun/mtw500-moduler-ups' :
                i === 5 ? '/urun/mtw300-moduler-ups' :
                '/urunler'
              }>
                <div className="w-full flex items-center justify-center bg-white" style={{height: '180px'}}>
                  <img
                    src={u.img}
                    alt={u.name}
                    className="max-h-40 object-contain"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-base font-semibold text-blue-800 mb-1">{u.name}</h3>
                  <p className="text-gray-600 text-xs">{u.desc}</p>
                </div>
              </Link>
              <div className="px-3 pb-3 mt-auto">
                <Link
                  to={
                    i === 0 ? '/urun/leoap-line-interactive-ups' :
                    i === 1 ? '/urun/dc-guc-besleme-sistemi' :
                    i === 2 ? '/urun/mtw150-moduler-ups' :
                    i === 3 ? '/urun/ds-power-ups' :
                    i === 4 ? '/urun/mtw500-moduler-ups' :
                    i === 5 ? '/urun/mtw300-moduler-ups' :
                    '/urunler'
                  }
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded py-1.5 transition mt-1 text-sm"
                >
                  Detaylı Bilgi Al
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hızlı Erişim Kutuları */}
      <section className="container mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="/dokumanlar" className="flex items-center bg-red-50 rounded-xl shadow p-6 gap-4 hover:shadow-lg transition">
            <div className="text-4xl bg-red-100 rounded-full p-3">📥</div>
            <div>
              <div className="font-bold text-lg text-gray-900">Tescom</div>
              <div className="text-gray-700 text-sm">Ürün Kataloğu İndir</div>
            </div>
          </a>
          <a href="/kalite-politikasi" className="flex items-center bg-blue-50 rounded-xl shadow p-6 gap-4 hover:shadow-lg transition">
            <div className="text-4xl bg-blue-100 rounded-full p-3">📋</div>
            <div>
              <div className="font-bold text-lg text-gray-900">Kalite Politikası</div>
              <div className="text-gray-700 text-sm">Kalite, Kullanıma Uygunluktur</div>
            </div>
          </a>
          <a href="/ik" className="flex items-center bg-green-50 rounded-xl shadow p-6 gap-4 hover:shadow-lg transition">
            <div className="text-4xl bg-green-100 rounded-full p-3">🧑‍💼</div>
            <div>
              <div className="font-bold text-lg text-gray-900">İnsan Kaynakları</div>
              <div className="text-gray-700 text-sm">Geleceğinizi Bizimle İnşa Edin</div>
            </div>
          </a>
          <a href="/guc-hesaplayici" className="flex items-center bg-yellow-50 rounded-xl shadow p-6 gap-4 hover:shadow-lg transition">
            <div className="text-4xl bg-yellow-100 rounded-full p-3">🔢</div>
            <div>
              <div className="font-bold text-lg text-gray-900">Tescom</div>
              <div className="text-gray-700 text-sm">Güç Hesaplayıcı</div>
            </div>
          </a>
          <a href="/musteri-yorumlari" className="flex items-center bg-purple-50 rounded-xl shadow p-6 gap-4 hover:shadow-lg transition">
            <div className="text-4xl bg-purple-100 rounded-full p-3">😊</div>
            <div>
              <div className="font-bold text-lg text-gray-900">Müşteri Yorumları</div>
              <div className="text-gray-700 text-sm">Görüşleriniz Bizim İçin Önemlidir</div>
            </div>
          </a>
          <a href="/cozum-ortagi-bul" className="flex items-center bg-cyan-50 rounded-xl shadow p-6 gap-4 hover:shadow-lg transition">
            <div className="text-4xl bg-cyan-100 rounded-full p-3">👥</div>
            <div>
              <div className="font-bold text-lg text-gray-900">Tescom</div>
              <div className="text-gray-700 text-sm">Çözüm Ortağı Bul</div>
            </div>
          </a>
        </div>
      </section>

      {/* Blog Yazıları */}
      <section className="container mx-auto mt-16 px-4">
        <h2 className="text-center text-2xl font-bold text-blue-800 mb-6">Blog Yazıları & Haberler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bloglar.map((b, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
              <div className="text-blue-600 font-bold mb-2">{b.date}</div>
              <div className="font-semibold mb-2">{b.title}</div>
              <Link to="#" className="text-blue-600 hover:underline font-semibold mt-auto">Devamını Oku</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Hızlı İletişim Formu */}
      <section className="container mx-auto mt-16 px-4 mb-16">
        <h2 className="text-center text-2xl font-bold text-blue-800 mb-6">Hızlı İletişim</h2>
        <form className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 flex flex-col gap-4">
          <input type="text" placeholder="Adınız Soyadınız" className="p-3 border rounded" required />
          <input type="email" placeholder="E-Posta Adresiniz" className="p-3 border rounded" required />
          <input type="tel" placeholder="Telefon Numaranız" className="p-3 border rounded" required />
          <textarea placeholder="Mesajınız" className="p-3 border rounded h-32" required></textarea>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" required />
            KVKK sözleşmesini okudum, kabul ediyorum.
          </label>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold">Mesajımı Gönder</button>
        </form>
      </section>
    </div>
  );
}
