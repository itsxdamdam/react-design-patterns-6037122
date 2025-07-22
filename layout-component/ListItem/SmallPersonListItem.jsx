export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
    </>
  );
};
