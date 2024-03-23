

const Header = ({title}) => { //you could also use props.title instead of destructuring

    const headerStyle = {
        backgroundColor: "royalblue",
        color: "whitesmoke",
    }
   // Inline style takes object as its argument

    const handleClick = () => {
       console.log("you clicked it 1")
    }

    const handleClick2 = () => {
       console.log("you clicked it 2")
    }

    const handleClick3 = (e) => {
       console.log(e.target.append(" -- Hey you actually clicked me, how dare you!!"))
    }

  return (
    <header style={headerStyle}>
        <h1>{title}</h1> 
        {/* props example */}
        <p>This is my para component</p>
        <button onClick={handleClick}>Click Me1</button>
        {/* don't use oprators inside onClick fn, it will exceute onclick fn immediately */}
        <button onDoubleClick={handleClick2}>Click Me2</button>
        <button onClick={(e) =>{handleClick3(e)}}>Click Me3</button>
        {/* in the above case, you have to use () in fn otherwise its not going to work. You can even pass param in this way if you want to */}
    </header>
  )
}

Header.defaultProps ={         // you can have lists of default props
   title : "Default Title"
}

export default Header