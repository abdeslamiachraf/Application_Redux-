import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './Action';

export default function AjouterProduct() {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            Id: id,
            Name: name,
            Category: category,
            Price: price,
            Quantity: quantity
        };
        dispatch(addItem([newProduct]));
        setId('');
        setName('');
        setCategory('');
        setPrice('');
        setQuantity('');
    };

    return (
        <div>
            <h1>Ajouter Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Id:</label>
                    <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
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
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
