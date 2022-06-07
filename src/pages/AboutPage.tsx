import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Information page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias
        dicta, ea perspiciatis quibusdam earum magni quod dolorem repellendus
        aut eum beatae ducimus, temporibus animi voluptatum hic! Sed, ratione
        animi?
      </p>
      <button className="btn" onClick={() => navigate('/')}>
        Return to todos
      </button>
    </>
  );
};

export default AboutPage;
