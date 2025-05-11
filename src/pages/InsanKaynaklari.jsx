import React, { useState } from 'react';

export default function InsanKaynaklari() {
  const [active, setActive] = useState('ik');
  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-8 mb-16">
      <aside className="w-full md:w-1/3 border-r md:pr-6 mb-6 md:mb-0">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">İnsan Kaynakları</h2>
        <nav className="flex flex-col gap-2">
          <button onClick={() => setActive('ik')} className={`py-2 px-2 rounded text-left transition font-medium ${active === 'ik' ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-700' : 'hover:bg-blue-50 text-blue-700'}`}>İK Politikamız</button>
          <button onClick={() => setActive('genel')} className={`py-2 px-2 rounded text-left transition font-medium ${active === 'genel' ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-700' : 'hover:bg-blue-50 text-blue-700'}`}>Genel Başvuru Formu</button>
          <button onClick={() => setActive('staj')} className={`py-2 px-2 rounded text-left transition font-medium ${active === 'staj' ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-700' : 'hover:bg-blue-50 text-blue-700'}`}>Staj Başvuru Formu</button>
        </nav>
      </aside>
      <main className="flex-1 px-2 md:px-8">
        {active === 'ik' && (
          <div>
            <h1 className="text-2xl font-bold text-blue-800 mb-6">İK Politikamız</h1>
            <section className="bg-white rounded-lg shadow p-6">
              <p>Tescom insan kaynakları politikası, adil, şeffaf ve söz hakkı tanıyan, çalışanların potansiyellerini ortaya koyma fırsatları bulduğu, her bir çalışanın değer yaratarak Tescom'un geleceğine katkı sağladığı ve değer gördüğü, yüksek performanslı, gelişim odaklı, her alanda güçlü ve etkili bir liderlik sergileyen, tek Tescom ruhunu yansıtan bir şirket kültürü ve bağlılığı yüksek, mutlu, verimli, başarılı ve sağlıklı bir işgücü oluşturmayı hedefler.</p>
              <p className="mt-4">Bu hedef doğrultusunda en değerli yetenekleri cezbetmek, geliştirmek ve muhafaza etmek için 3 ana başlıkta global insan kaynakları trendlerine uygun, adil, şeffaf ve birbiriyle entegre olmuş uygulamalar benimser ve geliştirir.</p>
              <p className="mt-4">Bu sayede tercih edilen işveren olma ve en iyi iş yeri olma yolunda hızlı adımlarla ilerlemeyi amaçlar. Tescom'da insan kaynakları; tüm birimlerle stratejik iş ortağı yaklaşımıyla çalışan, şirket ve çalışan ihtiyaçlarını sürekli analiz eden, değer yaratan ve değişen şartlara hızla adaptasyon sağlayan bir yönetim anlayışını benimser.</p>
            </section>
          </div>
        )}
        {active === 'genel' && (
          <div>
            <h1 className="text-2xl font-bold text-blue-800 mb-6">Genel Başvuru Formu</h1>
            <form className="space-y-4 max-w-xl">
              <input type="text" name="ad" placeholder="Ad Soyad" required className="w-full p-2 border rounded" />
              <input type="email" name="email" placeholder="E-posta" required className="w-full p-2 border rounded" />
              <input type="file" name="dosya" required className="w-full p-2 border rounded" />
              <label className="block">
                <input type="checkbox" name="kvkk" required className="mr-2" />
                KVKK Aydınlatma Metnini okudum, kabul ediyorum.
              </label>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Gönder</button>
            </form>
          </div>
        )}
        {active === 'staj' && (
          <div>
            <h1 className="text-2xl font-bold text-blue-800 mb-6">Staj Başvuru Formu</h1>
            <form className="space-y-4 max-w-xl">
              <input type="text" name="ad" placeholder="Ad Soyad" required className="w-full p-2 border rounded" />
              <input type="text" name="okul" placeholder="Okul" required className="w-full p-2 border rounded" />
              <input type="text" name="bolum" placeholder="Bölüm" required className="w-full p-2 border rounded" />
              <input type="file" name="dosya" required className="w-full p-2 border rounded" />
              <label className="block">
                <input type="checkbox" name="kvkk" required className="mr-2" />
                KVKK Aydınlatma Metnini okudum, kabul ediyorum.
              </label>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Gönder</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
} 