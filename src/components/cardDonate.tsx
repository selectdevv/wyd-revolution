import Image from 'next/image';
import { useState } from 'react';

type CardDonateProps = {
  img: string;
  qrcode: string;
  pix: string;
  pacoteName: string;
  valor: string;
  donate: string;
  total: string;
  bonus?: string;
  bonus2?: string;
  bonus3?: string;
  bonus4?: string;
};

const CardDonate = ({ img, qrcode, pacoteName, valor, donate, total, bonus, bonus2, bonus3, bonus4, pix }: CardDonateProps) => {
  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePixClick = () => {
    navigator.clipboard.writeText(pix).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    });
  };

  return (
    <div
      className="bg-black/50 p-4 rounded-lg transition-transform transform hover:scale-105 max-w-md"
    >
      <div className="w-[400px] h-[300px] mb-30 hover:cursor-pointer">
        <Image
          src={clicked ? qrcode : img}
          alt="Donate Image"
          layout="responsive"
          width={400}
          height={300}
          className="object-cover"
          onClick={() => setClicked(!clicked)}
        />
      </div>
      <h1 className='text-3xl text-center'>{pacoteName}</h1>
      <h3 className='text-2xl text-center mb-4'>R$ {valor},00</h3>
      <p className='text-xl'>DONATE: {donate}</p>
      <p className='text-xl'>TOTAL: {total}</p>
      {clicked ? (
        <div onClick={handlePixClick} className="cursor-pointer">
          <p className='text-xl mb-4 mt-4 break-words'>{pix}</p>
          {copied && <p className='text-green-500'>Pix copiado com sucesso!</p>}
        </div>
      ) : (
        <p className='text-xl mb-4 mt-4'></p>
      )}
      <p className='text-xl'>{bonus}</p>
      <p className='text-xl'>{bonus2}</p>
      <p className='text-xl'>{bonus3}</p>
      <p className='text-xl'>{bonus4}</p>
    </div>
  );
};

export default CardDonate;