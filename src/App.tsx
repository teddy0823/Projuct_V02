import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
// import ProductListingPage from "./ui/page/ProductListingPage";
import {RouterProvider} from "react-router-dom";
import {router} from "./config/RouterConfig.tsx";
import SearchAppBar from "./ui/component/SearchAppBar.tsx";
// import NavList from "./ui/component/NavList.tsx";

function App() {


  return (
    <>


      {/*<ProductListingPage/>*/}
        <RouterProvider router={router}/>


    </>
  )
}

export default App
