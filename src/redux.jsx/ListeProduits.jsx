import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { deleteItem } from './Action';
import { Link } from 'react-router-dom';

export default function ListeProduits() {
  const products = useSelector(state => state.items);
  const dispatch=useDispatch()

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.Id}</td>
              <td>{product.Name}</td>
              <td>{product.Category}</td>
              <td>{product.Price}</td>
              
              <td>
                <Link to={`/update/${product.Id}`}>
                <button >UpdateProduct</button>

                </Link>
                <button onClick={()=>{
                    dispatch(deleteItem(product.Id))
                }}>DeleteProduct</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
