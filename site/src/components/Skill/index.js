import './index.css';

const Skill = ({ titulo, nomeSkill, skl, cor }) => {
  return (
    <>
      <section className="skill">
        <h3 className="titulos" id={titulo}>
          {nomeSkill}
        </h3>
        <div
          className="skill-bar"
          id={skl}
          style={{ backgroundColor: cor }}
        ></div>
      </section>
    </>
  );
};

export default Skill;
