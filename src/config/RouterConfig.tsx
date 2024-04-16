import ProductListingPage from "../ui/page/ProductListingPage";
import {createBrowserRouter} from "react-router-dom";
import ProductDetailPage from "../ui/page/ProductDetailPage/ProductDetailPage.tsx";
import ErrorPage from "../ui/page/errorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListingPage/>,
        errorElement:<ErrorPage/>
    },
    {
        // path: "/product/:productId/:userId",
        path: "/public/product/:pid",
        element: <ProductDetailPage/>
    },
    // {
    //     path: "/shoppingcart",
    //     element: <ShoppingCart/>
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage/>
    // },
    // {
    //     path: "/checkout/:transactionId",
    //     element: <Checkout/>
    // },
    // {
    //     path: "/thankyou",
    //     element: <ThankYou/>
    // }
    {
        path:"/error",
        element:<ErrorPage/>
    }
])