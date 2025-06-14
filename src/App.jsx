import { BrowserRouter, Routes, Route } from "react-router-dom"
import ComparePage from "./assets/pages/ComparePage"
import DetailPage from "./assets/pages/Detailpage"
import FavouritePage from "./assets/pages/FavouritePage"
import StratagemPage from "./assets/pages/StratagemsPage"
import HomePage from "./assets/pages/Homepage"
import Welcome from "./assets/pages/Welcome"
import DefaultLayout from "./assets/layout/DefaultLayout"
import { GlobalProvider } from "./assets/context/GlobalContext"

function App() {
  return (

    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route element={<DefaultLayout />}>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/stratagemmi" element={<StratagemPage />} />
            <Route path="/stratagemmi/:id" element={<DetailPage />} />
            <Route path="/preferiti" element={<FavouritePage />} />
            <Route path="/confronta" element={<ComparePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>


  );
}

export default App
