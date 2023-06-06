import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function OrderList() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);

  function getOrder() {
    axios
      .get("https://manz-orders-server.onrender.com/dashboard")
      .then(function (response) {
        console.log(response.data);
        setDetails(response.data);
      });
  }
  return (
    <>
      <div className="min-w-[100vw] sm:w-[100vw] min-h-[100vh] flex flex-col bg-gray-700 items-center">
        <div className="mx-auto pt-10">
          <img
            src="/4x/lg.png"
            alt=""
            className="cover w-48 sm:w-32 md:w-36  mb-10"
          />
        </div>
        <div className="w-[90%]  flex justify-center py-3 ">
          <div className="overflow-x-auto">
            <table className="w-full bg-black table-auto block text-sm mx-auto text-left text-gray-500 ">
              <thead className="text-xs  uppercase  bg-gray-900 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order No.
                  </th>
                  <th colSpan="2" scope="col" className="px-6 py-3">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Expected Delivery
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Details</span>
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {Array.isArray(details)
                  ? details.map((detail) => {
                      return (
                        <tr className="bg-white border-b h-5" key={detail.id}>
                          <td className="">
                            <Link
                              to={`order/${detail.id}/`}
                              style={{ marginRight: "10px" }}
                              className="hover:text-yellow-400 px-6 py-4 font-medium whitespace-nowrap "
                            >
                              {detail.orderNo}
                            </Link>
                          </td>
                          <td colSpan="2" className="px-6 py-4">
                            {detail.customerName}
                          </td>
                          <td className="px-6 py-4">{detail.orderDate}</td>
                          <td className="px-6 py-4">{detail.expectedDate} </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded-md uppercase text-red-500 font-bold bg-red-300 block">
                              {detail.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded-md uppercase text-emerald-700 font-bold bg-emerald-300">
                              {detail.payment}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-gray-600 hover:text-gray-900 font-bold">
                            <Link
                              to={`order/${detail.id}/`}
                              style={{ marginRight: "10px" }}
                              className="px-6 py-4 text-right text-gray-600 hover:text-yellow-400 font-bold"
                            >
                              Details
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  : null}
                {/* <tr className="bg-white border-b h-5">
                  <th className="px-6 py-4 font-medium whitespace-nowrap ">
                    #TS-1000
                  </th>
                  <td colSpan="2" className="px-6 py-4">
                    Customer Name
                  </td>
                  <td className="px-6 py-4">01/01/2023</td>
                  <td className="px-6 py-4">05/01/2023</td>
                  <td className="px-6 py-4">
                    <span className="p-1 rounded-md uppercase text-red-500 font-bold bg-red-300">
                      Processing
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="p-1 rounded-md uppercase text-emerald-500 font-bold bg-emerald-300">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Details
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b h-5">
                  <th className="px-6 py-4 font-medium whitespace-nowrap ">
                    #TS-1000
                  </th>
                  <td colSpan="2" className="px-6 py-4">
                    Customer Name
                  </td>
                  <td className="px-6 py-4">01/01/2023</td>
                  <td className="px-6 py-4">05/01/2023</td>
                  <td className="px-6 py-4">
                    <span className="p-1 rounded-md uppercase text-red-500 font-bold bg-red-300">
                      Processing
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="p-1 rounded-md uppercase text-emerald-500 font-bold bg-emerald-300">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Details
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b h-5">
                  <th className="px-6 py-4 font-medium whitespace-nowrap ">
                    #TS-1000
                  </th>
                  <td colSpan="2" className="px-6 py-4">
                    Customer Name
                  </td>
                  <td className="px-6 py-4">01/01/2023</td>
                  <td className="px-6 py-4">05/01/2023</td>
                  <td className="px-6 py-4">
                    <span className="p-1 rounded-md uppercase text-red-500 font-bold bg-red-300">
                      Processing
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="p-1 rounded-md uppercase text-emerald-500 font-bold bg-emerald-300">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Details
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
