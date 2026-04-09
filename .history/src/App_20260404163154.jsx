import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Loader from './components/Loader';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects3D';
import Experience from './components/Experience';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },6000);
  },[]);

  if (loading){
    return <Loader/>
  }

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Experience/>
    </>
  )
}

export default App
