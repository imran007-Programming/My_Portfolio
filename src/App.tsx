
import './App.css'
import CommonLayout from './Components/CommonLayout'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Education from './Pages/Education'
import Herosection from './Pages/Herosection'
import Myprojects from './Pages/Myprojects'
import Skills from './Pages/Skills'

function App() {


  return (
    <CommonLayout>
      <Herosection/>
      <About/>
      <Skills/>
      <Myprojects/>
      <Blogs/>
      <Education/>
      <Contact/>
    </CommonLayout>
  )
}

export default App
