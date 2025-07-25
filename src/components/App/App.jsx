import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/Routes";
import Sidebar from "../Sidebar/Sidebar";
import { getCategories } from "../../features/categories/categories.Slice";
import { useEffect } from "react";
import classes from "../../styles/App.module.css";

const App = () => {
  const dispatch = useDispatch();
  // const categories = useSelector((state) => state.categories.list);
  useEffect(() => {
    dispatch(getCategories());
    // return () => {};
  }, [dispatch]);
  return (
    <div className={classes.app}>
      <Header />

      <div className={classes.container}>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
