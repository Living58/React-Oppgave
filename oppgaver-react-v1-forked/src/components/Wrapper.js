import Title from './Title';

const Wrapper = ({ children }) => {
  return (
    <>
      <section className="flex">{children}</section>
    </>
  );
};

export default Wrapper;
