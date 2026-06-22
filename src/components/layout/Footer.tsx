import { useState, useEffect } from 'react';
import type { FooterProps } from '../../types';

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval saat komponen dilepas untuk mencegah memory leak
    return () => clearInterval(timerId);
  }, []); // Array kosong memastikan efek ini hanya berjalan sekali saat komponen dimuat

  return (
    <footer className="bg-slate-900 text-white text-[10px] px-2 py-1 flex justify-between items-center z-20 h-6">
      <div className="truncate opacity-50">
        orbibox
      </div>
      <div className="flex items-center space-x-4 opacity-80">
        <span>{isDarkMode ? 'Gelap' : 'Cerah'}</span>
        <span>{currentTime.toLocaleTimeString('id-ID')}</span>
      </div>
    </footer>
  );
};

export default Footer;
