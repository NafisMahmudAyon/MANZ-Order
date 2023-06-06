import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderList from "./Components/orderList";
import Invoice from "./Components/Invoice";

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <div className=" flex flex-col items-center bg-gray-700 pt-10">
          <img src="/4x/lg.png" alt="" className="cover w-48 mb-10" />
        </div>
      </nav> */}

      <Routes>
        <Route index element={<OrderList />} />
        <Route path="order/:id/" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
