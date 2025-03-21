import React from 'react';
import CardDonate from '@/components/cardDonate';
import Head from 'next/head';

const Donate: React.FC = (props) => {

  return (
    <>
      <Head>
        <title>Doações - WYD Revolution</title>
        <meta name="description" content="Doações" />
      </Head>
      <div className="flex flex-col gap-8">
        <span className='bg-black/50 p-2 text-center text-lg text-red-600'>
          OBS: Após fazer o pagamento enviar comprovante para ADM pelo Discord para validar doação e receber o bonus.
        </span>
        <div className='flex gap-8'>
          <CardDonate
            pacoteName='PACOTE I'
            valor='20'
            donate='200 + 0%'
            total='200'
            img="/images/Pacote_donate.JPG"
            qrcode='/images/pix_20.jpg'
            pix='00020126580014br.gov.bcb.pix01368e5c0cad-d48a-4160-a226-642caa1b537b520400005303986540520.005802BR5925Paulo Henrique Ribeiro Pe6009Sao Paulo62290525REC67D4C5A255F9B274173498630461D0'
          />
          <CardDonate
            pacoteName='PACOTE II'
            valor='50'
            donate='500 + 10%'
            total='550'
            bonus='02 Baú de XP'
            bonus2='01 Frango'
            img="/images/Pacote_donate.JPG"
            qrcode='/images/pix_50.jpg'
            pix='00020126580014br.gov.bcb.pix01368e5c0cad-d48a-4160-a226-642caa1b537b520400005303986540550.005802BR5925Paulo Henrique Ribeiro Pe6009Sao Paulo62290525REC67D4C5E7E72B9512143034630487FC'
          />
          <CardDonate
            pacoteName='PACOTE III'
            valor='100'
            donate='1000 + 15%'
            total='1150'
            bonus='04 Baú de XP'
            bonus2='02 Frango'
            img="/images/Pacote_donate.JPG"
            qrcode='/images/pix_100.jpg'
            pix='00020126580014br.gov.bcb.pix01368e5c0cad-d48a-4160-a226-642caa1b537b5204000053039865406100.005802BR5925Paulo Henrique Ribeiro Pe6009Sao Paulo62290525REC67D4C601874E14500484766304E218'
          />
        </div>

        <div className='flex gap-8'>
          <CardDonate
            pacoteName='PACOTE IV'
            valor='200'
            donate='2000 + 20%'
            total='2400'
            bonus='06 Baú de XP'
            bonus2='03 Frango'
            img="/images/Pacote_donate.JPG"
            qrcode='/images/pix_200.jpg'
            pix='00020126580014br.gov.bcb.pix01368e5c0cad-d48a-4160-a226-642caa1b537b5204000053039865406200.005802BR5925Paulo Henrique Ribeiro Pe6009Sao Paulo62290525REC67D4C627DD58E8938976336304A1A2'
          />
          <CardDonate
            pacoteName='PACOTE V'
            valor='500'
            donate='5000 + 25%'
            total='6250'
            bonus='08 Baú de XP'
            bonus2='04 Frango'
            bonus3='01 Traje (Personagem) PROMO'
            bonus4='01 Traje (Montaria) PROMO'
            img="/images/Pacote_donate.JPG"
            qrcode='/images/pix_500.jpg'
            pix='00020126580014br.gov.bcb.pix01368e5c0cad-d48a-4160-a226-642caa1b537b5204000053039865406500.005802BR5925Paulo Henrique Ribeiro Pe6009Sao Paulo62290525REC67D4C6735EC52357404185630486FF'
          />
          <CardDonate
            pacoteName='PACOTE GUILD'
            valor='1000'
            donate='10000 + 30%'
            total='13000'
            bonus='10 Baú de XP'
            bonus2='10 Frango'
            bonus3='02 Traje (Personagem) PROMO'
            bonus4='02 Traje (Montaria) PROMO'
            img="/images/Pacote_donate.JPG"
            qrcode='/images/pix_1000.jpg'
            pix='00020126580014br.gov.bcb.pix01368e5c0cad-d48a-4160-a226-642caa1b537b52040000530398654071000.005802BR5925Paulo Henrique Ribeiro Pe6009Sao Paulo62290525REC67D4C6A7A0D7D727303212630406AF'
          />
        </div>
      </div>
    </>
  );
};

export default Donate;