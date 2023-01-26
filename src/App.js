import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import {CreateContainer, Header, MainContainer,StoresContainer,DealsContainer,AboutContainer} from "./components"
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useStateValue } from './context/StateProvider';
import { actionType } from "./context/reducer";
import { Footer } from "./components/Footer";
import Mcdo from "./components/Mcdo";
import Joby from "./components/Joby";
import Bk from "./components/Bk";

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
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/stores" element={<StoresContainer />} />
          <Route path="/menu/Mcdo" element={<Mcdo />} />
          <Route path="/menu/Joby" element={<Joby />} />
          <Route path="/menu/Bk" element={<Bk />} />
          <Route path="/deals" element={<DealsContainer />} />
          <Route path="/About" element={<AboutContainer />} />
          </Routes>   
      </main>
    </div>
    <Footer />
    </AnimatePresence>
  )
}

export default App