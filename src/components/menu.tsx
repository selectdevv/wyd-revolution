import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Menu: React.FC = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    setSelectedItem(router.asPath);
  }, [router.asPath]);

  const handleClick = (path: string) => {
    setSelectedItem(path);
  };

  return (
    <nav className="w-full">
      <ul className="flex flex-row justify-around w-full">
        <li
          className={`p-2 text-2xl rounded transition duration-300 ease-in-out hover:bg-gray-700 ${selectedItem === '/' ? 'bg-gray-700 text-white' : ''
            }`}
        >
          <Link href="/" onClick={() => handleClick('/')}>
            Home
          </Link>
        </li>
        <li
          className={`p-2 text-2xl rounded transition duration-300 ease-in-out hover:bg-gray-700 ${selectedItem === '/tutorials' ? 'bg-gray-700 text-white' : ''
            }`}
        >
          <Link href="/tutorials" onClick={() => handleClick('/tutorials')}>
            Tutoriais
          </Link>
        </li>
        <li
          className={`p-2 text-2xl rounded transition duration-300 ease-in-out hover:bg-gray-700 ${selectedItem === '/download' ? 'bg-gray-700 text-white' : ''
            }`}
        >
          <Link href="/download" onClick={() => handleClick('/download')}>
            Download
          </Link>
        </li>
        <li
          className={`p-2 text-2xl rounded transition duration-300 ease-in-out hover:bg-gray-700 ${selectedItem === '/cadastro' ? 'bg-gray-700 text-white' : ''
            }`}
        >
          <Link href="/cadastro" onClick={() => handleClick('/cadastro')}>
            Cadastro
          </Link>
        </li>
        <li
          className={`p-2 text-2xl rounded transition duration-300 ease-in-out hover:bg-gray-700 ${selectedItem === '/donate' ? 'bg-gray-700 text-white' : ''
            }`}
        >
          <Link href="/donate" onClick={() => handleClick('/donate')}>
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;