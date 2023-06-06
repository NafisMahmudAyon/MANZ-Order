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
      <div className="w-[80%] sm:w-[90%] my-14 sm:my-8 border sm:border-none py-10 sm:py-2 max-h-[80%]">
        <div className=" flex flex-col items-center">
          <img src="/4x/lg.png" alt="" className="cover w-32 mb-10" />
        </div>
        <div className=" bg-yellow-300 w-[100%] h-8 flex justify-end sm:justify-center ">
          <h1 className="uppercase h-8 text-2xl  text-black bg-white font-bold text-right px-8  inline-block mr-8 sm:mr-0">
            Invoice
          </h1>
        </div>
        <div className="px-20 mt-6 sm:px-3 md:px-0  text-slate-200">
          <div className="flex sm:flex-col  justify-between items-start">
            <div>
              <h3 className=" text-xl font-bold">Invoice to:</h3>
              <h4 className=" text-lg py-2 font-semibold">{details.customerName}</h4>
              <address className="w-3/4 flex gap-2 sm:w-full py-2 font-medium">
                <span>🏠: </span> <span>{details.address}</span>
              </address>
              <p className="font-medium flex gap-2 sm:w-full ">
                <span>📞: </span> {details.phone}
              </p>
            </div>
            <div className="flex w-[180px] sm:w-full  flex-col">
              <div className="flex justify-between sm:justify-start items-center pt-4">
                <div className=" text-lg font-semibold sm:pr-3">Invoice:</div>
                <div className="font-medium">{details.invoiceNo}</div>
              </div>
              <div className="flex justify-between sm:justify-start items-center ">
                <div className=" text-lg font-semibold sm:pr-3">Date:</div>
                <div className="font-medium">{details.orderDate}</div>
              </div>
              <div className="  py-1 mt-6 text-black text-xl font-semibold ">
                <div className="px-6 py-2 rounded-lg bg-yellow-400 text-center">
                  Track Your Order
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-10">
            <div className="w-[90%]">
              <ProductList id={id} />
            </div>
          </div>
          {/* after product details  */}
        </div>
        <div className="w-full px-20 sm:px-0 flex sm:flex-col-reverse justify-between items-start text-white pt-6">
          {/* <div className="w-[80%]"> */}
          <div className="">
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
          <div className="w-[40%] text- flex flex-col sm:w-full justify-center">
            <div className="flex items-center sm:gap-2 justify-between sm:justify-start px-4">
              <div className="pr-20 font-medium sm:pr-0">Sub Total:</div>
              <div className="">{details.subTotal}</div>
            </div>
            <div className="flex items-center sm:gap-2 justify-between sm:justify-start px-4">
              <div className="pr-20  font-medium sm:pr-0">Tax:</div>
              <div className="">{details.tax}</div>
            </div>

            <div className="flex items-center bg-yellow-400 py-1 mt-6 text-black text-xl font-semibold justify-between px-4">
              <div className="">Total:</div>
              <div className="">{details.total}</div>
            </div>
            {/* <div className="flex items-center  py-1 mt-6 text-black text-xl font-semibold justify-center">
              <div className="px-6 py-2 rounded-lg bg-yellow-400 text-center">
                Track Your Order
              </div>
            </div> */}
            {/* <div className="flex items-center bg-yellow-400 py-1 mt-6 text-black text-lg pr-36 justify-end">
              <div className="">Expected Delivery on 05/05/2023 </div>
            </div> */}
          </div>
          {/* </div> */}
        </div>
        <div className="w-full text-white border-t border-yellow-400 mt-20">
          <div className="flex sm:flex-col py-4 pl-36 sm:pl-8 md:pl-10">
            <div className="px-2">017X-XXXXXXX</div>
            <div className="px-2 text-yellow-400 font-semibold sm:hidden">
              |
            </div>
            <div className="px-2">Dhaka, Bangladesh</div>
            <div className="px-2 text-yellow-400 font-semibold sm:hidden">
              |
            </div>
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
