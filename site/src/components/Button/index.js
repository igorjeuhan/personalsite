import './index.css';

const Button = ({ icon, link, classe }) => {
  return (
    <>
      <a href={link} target="_blank">
        <button className={classe}>
          <img className="icone" src={icon} alt="Botão" />
        </button>
      </a>
    </>
  );
};

export default Button;
