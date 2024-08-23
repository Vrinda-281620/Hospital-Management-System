import React from 'react';

import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import Intro from '../components/Intro';

const Home = () => {
  return (
    <>
    <Intro title={"Welcome to OPD | Trusted Healthcare Provider"} imageUrl={"/hero.png"}/>
    <Biography imageUrl={"/about.png"} />
    <Departments />
    <MessageForm />
  </>
  )
}

export default Home
