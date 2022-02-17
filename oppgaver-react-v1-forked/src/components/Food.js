const Food = ({ food }) => {
  return (
    <>
      <ul>
        {food.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </>
  );
};

export default Food;
