import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <span className="font-extrabold text-2xl tracking-wide leading-tight">TESCOM</span>
          <span className="text-xs font-semibold tracking-widest text-blue-200 mt-0.5">KESİNTİSİZ GÜÇ KAYNAKLARI</span>
        </div>
        {/* Menü */}
        <ul className="flex gap-6 items-center font-medium">
          <li><Link to="/" className="hover:text-blue-300">Kurumsal</Link></li>
          <li><Link to="/urunler" className="hover:text-blue-300">Ürünler</Link></li>
          <li><Link to="/cozumler" className="hover:text-blue-300">Çözümler</Link></li>
          <li><Link to="/dokumanlar" className="hover:text-blue-300">Dokümanlar</Link></li>
          <li><Link to="/destek" className="hover:text-blue-300">Destek</Link></li>
          <li><Link to="/iletisim" className="hover:text-blue-300">İletişim</Link></li>
      </ul>
        {/* Sağ kısım */}
        <div className="flex items-center gap-4">
          <button className="hover:text-blue-300"><FaSearch /></button>
          <Link to="/teklif-al" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition font-semibold">Teklif Al</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;