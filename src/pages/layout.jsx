import { Outlet } from "react-router-dom";
import MenuProvider from "../hooks/useMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function RootLayout() {

  // const [visitCount, setVisitCount] = useState(0);

  // useEffect(() => {
  //   setVisitCount(localStorage.getItem("visitCount") || 0);
  // }, []);
  
  return (
    <MenuProvider>
      <Header />
      <main>
        {/* CHILDREN- DIFFERENT PAGES */}
        <Outlet />
      </main>
      <Footer />
    </MenuProvider>
  );
}
