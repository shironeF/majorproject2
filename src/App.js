import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import  Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import DealsContainer from "./components/DealsContainer";
import MenuContainer from "./components/MenuContainer";
import AboutContainer from "./components/AboutContainer";
import CreateContainer from "./components/CreateContainer";
=======

import {CreateContainer, Header, MainContainer,StoresContainer,DealsContainer,AboutContainer} from "./components"
import { getAllFoodItems } from './utils/firbaseFunctions';
import { useStateValue } from './context/StateProvider';
import { actionType } from "./context/reducer";



>>>>>>> 0b613b99345fd097ec3724d6763b98e51b575386
const App = () => {
  const [{foodItems}, dispatch ] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems() .then((data) => {dispatch({
      type: actionType.SET_FOOD_ITEMS,
      foodItems: data,
    });
  });
};
  useEffect(() => { fetchData(); }, []);
  return (

    <AnimatePresence mode='wait'>
    <div className="w-screen h-auto flex flex-col">
      <Header />

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />

          <Route path="/menu" element={<MenuContainer />} />

          <Route path="/deals" element={<DealsContainer />} />
          <Route path="/About" element={<AboutContainer />} />
          </Routes>   
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App;