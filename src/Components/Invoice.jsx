import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

const Invoice = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOrder();
  }, []);

  function getOrder() {
    axios
      .get(`https://manz-orders-server.onrender.com/dashboard/${id}`)
      .then(function (response) {
        setDetails(response.data);
        console.log(response.data);
      });
  }
  // function getProducts() {
  //   axios
  //     .get(`http://localhost:3000/products-${id}`)
  //     .then(function (response) {
  //       setDetails(response.data);
  //       console.log(response.data);
  //     });
  // }

  // const product = (props) => {
  //   function pdt(props) {
  //     for (let i = 0; i < props.length; i++) {
  //       return <p key={i}>{product[i]}</p>;
  //     }
  //   }

  //   return <div>{pdt()}</div>;
  // };

  return (
    <div className="w-[100%] min-h-[100vh] bg-gray-700 flex justify-center ">
      <div className="w-[75%] my-14 border py-10 max-h-[80%]">
        <div className=" flex flex-col items-center">
          <img src="/4x/lg.png" alt="" className="cover w-48 mb-10" />
        </div>
        <div className=" bg-yellow-300 w-[100%] h-8 flex justify-end ">
          <h1 className="uppercase h-8 text-2xl  text-black bg-white font-bold text-right px-8  inline-block mr-8">
            Invoice
          </h1>
        </div>
        <div className="px-12 mt-6 text-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <h3 className=" text-xl font-bold">Invoice to:</h3>
              <h4 className=" text-lg font-semibold">{details.customerName}</h4>
              <address className="w-3/4 py-2 font-medium">
                <span>🏠 : </span> {details.address}
              </address>
              <p className="font-medium">
                <span>📞 : </span> {details.phone}
              </p>
            </div>
            <div className="flex w-[180px] flex-col">
              <div className="flex justify-between pt-4">
                <div className=" text-lg font-semibold">Invoice</div>
                <div className="font-medium">{details.invoiceNo}</div>
              </div>
              <div className="flex justify-between">
                <div className=" text-lg font-semibold">Date</div>
                <div className="font-medium">{details.orderDate}</div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-10">
            <div className="w-[80%]">
              <ProductList id={id}/>
            </div>
          </div>
          {/* after product details  */}
        </div>
        <div className="w-full flex justify-between items-center text-white pt-6">
          {/* <div className="w-[80%]"> */}
          <div className="w-[60%] pl-36">
            <div className="text-lg font-semibold">Thanks for Order.</div>
            <div className="text-base">
              <p className="text-lg font-semibold">Payment Info:</p>
              <p className="">
                Method: <span>{details.payMethod}</span>
              </p>
              <p>number: {details.payPhone}</p>
              <p>Transaction ID: {details.transactionID}</p>
            </div>
          </div>
          <div className="w-[40%] text- flex flex-col justify-end">
            <div className="flex items-center pr-36 justify-end">
              <div className="pr-20">Sub Total:</div>
              <div className="">{details.subTotal}</div>
            </div>
            <div className="flex items-center pr-36 justify-end">
              <div className="pr-20">Tax:</div>
              <div className="">{details.tax}</div>
            </div>

            <div className="flex items-center bg-yellow-400 py-1 mt-6 text-black text-xl font-semibold pr-36 justify-end">
              <div className="pr-20">Total:</div>
              <div className="">{details.total}</div>
            </div>
            {/* <div className="flex items-center bg-yellow-400 py-1 mt-6 text-black text-lg pr-36 justify-end">
              <div className="">Expected Delivery on 05/05/2023 </div>
            </div> */}
          </div>
          {/* </div> */}
        </div>
        <div className="w-full text-white border-t border-yellow-400 mt-20">
          <div className="flex py-4 pl-36">
            <div className="px-2">017X-XXXXXXX</div>
            <div className="px-2 text-yellow-400 font-semibold">|</div>
            <div className="px-2">Dhaka, Bangladesh</div>
            <div className="px-2 text-yellow-400 font-semibold">|</div>
            <div className="px-2">
              <a
                href="https://www.facebook.com/manzfashionview"
                className="hover:text-yellow-500 hover:underline font-semibold"
              >
                FB Page
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
