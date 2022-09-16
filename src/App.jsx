import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductsContext } from "./context/products_context";
import { Footer, Navbar, Sidebar } from "./layouts";
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Contact,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages/index";

function App() {
  const { isSidebarOpen } = useProductsContext();

  // Hide scrollbar if sidebar is open
  if (isSidebarOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          draggablePercent={80}
          pauseOnHover={false}
          transition={Slide}
          hideProgressBar
          closeOnClick
        />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
