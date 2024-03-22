import { useState } from "react"

const Content2 = () => {
    // https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
    // refer for better understanding on how to use array of objects with state hooks

  const [items, setItems] = useState([
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
      included : false
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
      included : false
    },
    {
      color: "red",
      type: "cabrio",
      registration: new Date("2016-05-02"),
      capacity: 2,
      included : false
    },
  ])

const handleCheck = (item)=> {
    // create a new array of objects to update then use useState hook
    let updatedItems = items.map((myObj)=>{
        if (myObj === item){
            myObj.included = !myObj.included
            return myObj
        } else {
            return myObj
        }
    })
    setItems(updatedItems)
}

const handleDelete = (item) => {
    // let updatedItems = items.map((myObj)=>{myObj !== item})
    // setItems(updatedItems)
    // some kind of error thats why commented it out
} 

  return (
     <main>
        <h1>Listings and Keys</h1>
        <h3>Car Info Book</h3>
        <ul>
            {items.map((item) =>( // remember to use parenthesis instead of curly brackets, it doesnt render the xml.
                <li className="item" key={item.registration}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item)} // have to create an anonymous fn, because normally writing fn will take it as normal xml element.
                        checked={item.included} // takes the boolean value
                    />
                    <label
                        style={item.included ? {textDecoration: "line-through"} : null} // remember it for todo lists
                    >
                    {item.type}
                    </label>
                    <button onClick={() => {handleDelete(item)}}>Delete</button>
                </li>
            ))}
        </ul>
     </main>
  )
}

export default Content2
