import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

export default function Cozumler() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Breadcrumb />
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Çözümlerimiz</h1>
      <p className="text-center text-gray-600 mb-10">Tescom olarak birçok sektöre özel kesintisiz güç çözümleri sunuyoruz.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <Link 
          to="/cozumler/endustriyel" 
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer no-underline"
          onClick={(e) => {
            console.log('Endüstriyel linkine tıklandı');
            // Sayfanın yenilenmesini engelle
            e.preventDefault();
            // Manuel olarak yönlendir
            window.location.href = '/cozumler/endustriyel';
          }}
        >
          <div className="text-pink-500 text-3xl mb-2">🏭</div>
          <div className="font-bold text-lg mb-1 text-gray-900">Endüstriyel</div>
          <p className="text-gray-600 text-center mb-2">Endüstriyel kontrol uygulamaları için güvenilir UPS çözümleri.</p>
        </Link>
        <Link 
          to="/cozumler/medikal" 
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer no-underline"
          onClick={(e) => {
            console.log('Medikal linkine tıklandı');
            e.preventDefault();
            window.location.href = '/cozumler/medikal';
          }}
        >
          <div className="text-blue-400 text-3xl mb-2">💉</div>
          <div className="font-bold text-lg mb-1 text-gray-900">Medikal</div>
          <p className="text-gray-600 text-center mb-2">Hastane ve tıp tesisleri için kesintisiz enerji.</p>
        </Link>
        <Link 
          to="/cozumler/veri-merkezi-it" 
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer no-underline"
          onClick={(e) => {
            console.log('Veri Merkezi linkine tıklandı');
            e.preventDefault();
            window.location.href = '/cozumler/veri-merkezi-it';
          }}
        >
          <div className="text-green-400 text-3xl mb-2">💻</div>
          <div className="font-bold text-lg mb-1 text-gray-900">Veri Merkezi & IT</div>
          <p className="text-gray-600 text-center mb-2">Veri merkezleri ve sunucu altyapıları için ölçeklenebilir çözümler.</p>
        </Link>
        <Link 
          to="/cozumler/ev-ofis" 
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer no-underline"
          onClick={(e) => {
            console.log('Ev & Ofis linkine tıklandı');
            e.preventDefault();
            window.location.href = '/cozumler/ev-ofis';
          }}
        >
          <div className="text-yellow-400 text-3xl mb-2">🏠</div>
          <div className="font-bold text-lg mb-1 text-gray-900">Ev & Ofis</div>
          <p className="text-gray-600 text-center mb-2">Ev ve küçük ofisler için pratik UPS çözümleri.</p>
        </Link>
        <Link 
          to="/cozumler/ulasim" 
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer no-underline"
          onClick={(e) => {
            console.log('Ulaşım linkine tıklandı');
            e.preventDefault();
            window.location.href = '/cozumler/ulasim';
          }}
        >
          <div className="text-blue-700 text-3xl mb-2">🚆</div>
          <div className="font-bold text-lg mb-1 text-gray-900">Ulaşım</div>
          <p className="text-gray-600 text-center mb-2">Tüm çevre koşullarında yüksek verimlilik ile çalışabilen ürünler.</p>
        </Link>
        <Link 
          to="/cozumler/kompleksler" 
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer no-underline"
          onClick={(e) => {
            console.log('Kompleksler linkine tıklandı');
            e.preventDefault();
            window.location.href = '/cozumler/kompleksler';
          }}
        >
          <div className="text-gray-700 text-3xl mb-2">🏢</div>
          <div className="font-bold text-lg mb-1 text-gray-900">Kompleksler</div>
          <p className="text-gray-600 text-center mb-2">AVM, zincir market ve perakende sektörü için çözümler.</p>
        </Link>
      </div>
    </div>
  );
}