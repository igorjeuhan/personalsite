import './index.css';

const FlexColumn = ({ children }) => {
  return (
    <>
      <section className="flex-column">{children}</section>
    </>
  );
};

export default FlexColumn;
