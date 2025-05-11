import React, { useState } from 'react';

export default function StajBasvuru() {
  const [form, setForm] = useState({ ad: '', okul: '', bolum: '', dosya: null, kvkk: false });

  const handleChange = e => {
    const { name, value, type, checked, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value),
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Staj başvurunuz alınmıştır.");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Staj Başvuru Formu</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input type="text" name="ad" placeholder="Ad Soyad" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="okul" placeholder="Okul" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="bolum" placeholder="Bölüm" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="file" name="dosya" onChange={handleChange} required className="w-full p-2 border rounded" />
        <label className="block">
          <input type="checkbox" name="kvkk" onChange={handleChange} required className="mr-2" />
          KVKK Aydınlatma Metnini okudum, kabul ediyorum.
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Gönder</button>
      </form>
    </div>
  );
}
