import Content from "./components/Content"
import Content2 from "./components/Content2"
import Footer from "./components/Footer"
import Header from "./components/Header"


const App = () => {
  return (
    <div>
      <Header title="Basics--Functional Components"/><hr/> 
      {/* prop example */}
      {/* prop drilling means passing your data from parent to child through props(destructuring), you can also pass it to grandparent to child.*/}
      <Content/><hr/>
      <Content2/><hr/>
      <Footer/><hr/>
    </div>
  )
}

export default App