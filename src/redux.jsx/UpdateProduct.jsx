import React, { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addItem, modifyItem } from './Action';
import {useParams} from 'react-router-dom'
export default function UpdateProduct() {
    
    const dispatch = useDispatch();
    const [idd,setIdd]=useState()
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const {id}=useParams()
    const product=useSelector(state=>state.items)

    useEffect(()=>{
        const find=product.find((valuer)=>parseInt(valuer.Id)==parseInt(id))
        setIdd(find.Id);
        setName(find.Name);
        setCategory(find.Category);
        setPrice(find.Price);
        setQuantity(find.Quantity);
                
            },[id])

   

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            Id: idd,
            Name: name,
            Category: category,
            Price: price,
            Quantity: quantity
        };
        dispatch(modifyItem({newProduct}));
        setIdd('');
        setName('');
        setCategory('');
        setPrice('');
        setQuantity('');
    };
   
    return (
        <div>
            <h1>Modifier Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Id:</label>
                    <input type="text" id="id" value={idd} onChange={(e) => setIdd(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
}
