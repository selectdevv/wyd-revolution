import Image from 'next/image';

interface CardNoticiaProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardTutorial: React.FC<CardNoticiaProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card-noticia">
      <div className="image-container">
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={1920}
          height={400}
          className="image"
        />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <style jsx>{`
        .card-noticia {
          width: 100%;
          max-width: 100%;
        }
        .image-container {
          width: 100%;
        }
        .content {
          padding: 16px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          margin: 8px 0;
        }
        .description {
          font-size: 16px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default CardTutorial;