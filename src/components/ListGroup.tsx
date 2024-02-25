function ListGroup() {
  let items = ["Delhi", "Dehradun", "Rishikesh", "Haridwar", "Banglore"];

  return (
    <>
      <h1>This Is A List...</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>End Of The List Items</h2>
    </>
  );
}

export default ListGroup;
