import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function OrderList() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);

  function getOrder() {
    axios.get("https://manz-orders-server.onrender.com/dashboard").then(function (response) {
      console.log(response.data);
      setDetails(response.data);
    });
  }
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-col bg-gray-700 justify-center items-center pt-10">
        <div className=" flex flex-col items-center">
          <img src="/4x/lg.png" alt="" className="cover w-48 mb-10" />
        </div>
        <div className="w-[90%] h-[80%]  flex justify-center py-3 ">
          <div className="overflow-x-auto">
            <table className="w-full max-h-[100%] bg-black table-auto block text-sm mx-auto text-left text-gray-500 ">
              <thead className="text-xs  uppercase  bg-gray-900 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order No.
                  </th>
                  <th colSpan="2" className="px-6 py-3">
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
                        <tr
                          className="bg-white border-b h-5"
                          key={detail.id}
                        >
                          <th className="px-6 py-4 font-medium whitespace-nowrap ">
                            {detail.orderNo}
                          </th>
                          <td colSpan="2" className="px-6 py-4">
                            {detail.customerName}
                          </td>
                          <td className="px-6 py-4">{detail.orderDate}</td>
                          <td className="px-6 py-4">{detail.expectedDate} </td>
                          <td className="px-6 py-4">
                            <span className="p-1 rounded-md uppercase text-red-500 font-bold bg-red-300">
                              {detail.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="p-1 rounded-md uppercase text-emerald-500 font-bold bg-emerald-300">
                              {detail.payment}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Link
                              to={`order/${detail.id}/`}
                              style={{ marginRight: "10px" }}
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
