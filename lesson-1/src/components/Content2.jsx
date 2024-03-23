import { useState } from "react";

const Content2 = () => {
  // https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
  // refer for better understanding on how to use array of objects with state hooks

   const [items, setItems] = useState([
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
      included: false,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
      included: false,
    },
    {
      color: "red",
      type: "cabrio",
      registration: new Date("2016-05-02"),
      capacity: 2,
      included: false,
    },
  ]);

  const handleCheck = (item) => {
    // create a new array of objects to update then use useState hook
    let updatedItems = items.map((myObj) => {
      if (myObj === item) {
        myObj.included = !myObj.included;
        return myObj;
      } else {
        return myObj;
      }
    });
    setItems(updatedItems);
  };

  const handleDelete = (item) => {
    let updatedItems = items.filter((myObj) => myObj !== item);
    setItems(updatedItems);
  };

  const handleSubmit = (newItem) => {
    const newDate = new Date(newItem.registration);
    const updatedItems = [...items, { ...newItem, registration: newDate }];
    setItems(updatedItems);
  };

  let newItem = {
    color: null,
    type: null,
    registration: null,
    capacity: null,
    included: false,
  };

  return (
    <main>
      <h1>Listings and Keys</h1>
      <h3>Car Info Book</h3>
      <ul>
        {items.map(
          (
            item // remember to use parenthesis instead of curly brackets, it doesnt render the xml.
          ) => (
            <ul
              className="item"
              key={item.registration.getTime()}
              style={{
                border: "solid 2px royalblue",
                display: "flex",
                direction: "row",
                marginTop: "10px",
                gap: "15px",
                height: "40px",
                width: "40%",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item)} // have to create an anonymous fn, because normally writing fn will take it as normal xml element.
                checked={item.included} // takes the boolean value
              />
              <br />
              <label
                style={
                  item.included ? { textDecoration: "line-through" } : null
                } // remember it for todo lists
              >
                <strong>{item.type}</strong>
              </label>
              <br />
              <p>
                <strong>color: </strong>
                {item.color}
              </p>
              <p>
                <strong>capacity: </strong>
                {item.capacity}
              </p>
              {/* cant use registration because its a unique key --> check <ul> */}
              <button
                onClick={() => {
                  handleDelete(item);
                }}>
                Delete
              </button>
            </ul>
          )
        )}
      </ul>
      {/* ----------new part---update------------------ */}
      <form
        style={{
          border: "solid 2px royalblue",
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          gap: "15px",
          height: "40%",
          width: "40%",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <label htmlFor="addItems">AddItems:</label>
        <input
          id="addItems"
          autoFocus
          type="text"
          placeholder="Car Type"
          required
          onChange={(e) => {
            newItem.type = e.target.value;
          }}
        />
        <input
          id="addColor"
          autoFocus
          type="text"
          placeholder="Car Color"
          required
          onChange={(e) => {
            newItem.color = e.target.value;
          }}
        />
        <input
          id="addCapacity"
          autoFocus
          type="text"
          placeholder="Car Capacity"
          required
          onChange={(e) => {
            newItem.capacity = e.target.value;
          }}
        />
        <input
          id="addDate"
          autoFocus
          type="text"
          placeholder="yyyy-mm-dd"
          required
          onChange={(e) => {
            newItem.registration = e.target.value;
          }}
        />
        <button
          type="button" // don't use SUBMIT HERE , ONCLICK DONT WORK ON SUBMIT TYPE
          onClick={() => {
            handleSubmit(newItem);
          }}>
          Add
        </button>
      </form>
    </main>
  );
};

export default Content2;
