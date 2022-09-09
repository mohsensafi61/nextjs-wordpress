import Footer from "./Footer";
import Header from "./Header";
import NewHeader from "./NewHeader";

const Layout = ({children}) => {
  return ( 
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header />
        {children}
      <Footer/>
    </div>
   );
}
 
export default Layout;