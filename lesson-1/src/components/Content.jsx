import { useState } from "react"

const Content = () => {
    
    // useState hooks
    const [name, setName] = useState("realName--takeshiKovacs") // array destructuring
    const [count, setCount] = useState(0) 

    const randomNum = ()=>{
        return Math.floor(((Math.random())*10 + 1))
        // functional components example
    }

    const nameChange = ()=>{
        setName("userName--kovacs7")
    }

    const nameChange2 = ()=>{
        setName("playerMode--Active")
    }
    
    const counterHandle = ()=>{
        setCount(count+1)
        setCount(count+1) 
        // count is still 0 in the above case
    }
    
  return (
    <main>
        <button onClick={counterHandle}>Counter {count}</button>
        <br/>
        <p>{name}</p>
        <button onClick={nameChange} onDoubleClick={nameChange2}>Name Change Cick</button> 
        {/* react fast re-rendering without refreshing*/}
        <p>Returning a random number -- {randomNum()}</p>
    </main>
  )
}

export default Content