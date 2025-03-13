import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Downloads: React.FC = (props) => {
  return (
    <div className="justify-items-center w-full">
      <h1 className='text-2xl mb-6'>
        Download do jogo abaixo:
      </h1>
      <Link href="https://mega.nz/file/WyBA3CaQ#WDb4KgVFSuYMJWn8EAjFKY6yUWpcDgLLoWhP1FkO8m0" target='_blank'>
        <Image src="/images/botao_downloa.png" alt="Logo Mega" width={300} height={300} />
      </Link>
    </div>
  );
};

export default Downloads;