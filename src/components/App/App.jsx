import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/Routes";
import Sidebar from "../Sidebar/Sidebar";
import { getCategories } from "../../features/categories/categories.Slice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  // const categories = useSelector((state) => state.categories.list);
  useEffect(() => {
    dispatch(getCategories());
    // return () => {};
  }, [dispatch]);
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
