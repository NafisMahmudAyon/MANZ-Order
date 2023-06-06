import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const { id } = props;

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios.get(`https://manz-orders-server.onrender.com/products-${id}`).then(function (response) {
      setProducts(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-h-[400px] text-sm text-left text-gray-400 border-2 border-solid border-gray-300">
        <thead className="text-sm  uppercase  bg-gray-900 border-gray-900 border-2 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              SL.
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Qty.
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="">
          {Array.isArray(products)
            ? products.map((product) => {
                return (
                  <tr key={product.id} className="h-14 border-b-2 border-gray-300 ">
                    <td className="px-6 py-3">{product.id}</td>
                    <td className="px-6 py-3">
                      <img src={product.image} alt="" className="w-10" />
                    </td>
                    <td className="px-6 py-3">{product.name}</td>
                    <td className="px-6 py-3">{product.price}</td>
                    <td className="px-6 py-3">{product.quantity}</td>
                    <td className="px-6 py-3">Total</td>
                  </tr>
                );
              })
            : null}
            <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
