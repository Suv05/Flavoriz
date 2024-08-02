import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
