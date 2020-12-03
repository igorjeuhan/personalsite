import './index.css';
import foto from '../../assets/eu.jpg';

const Profile = () => {
  return (
    <>
      <img
        className="foto-perfil"
        src={foto}
        alt="Foto de perfil Igor Jeuhan."
      />
      <h1>Igor Jeuhan</h1>
      <h2>Programador Web.</h2>
    </>
  );
};

export default Profile;
