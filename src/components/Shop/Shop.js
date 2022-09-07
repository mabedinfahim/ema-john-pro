import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [pageCount,setPageCount]=useState(0);
    const [page,setPage]=useState(1)
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/products?page=${page}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [page]);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    useEffect( () =>{
        fetch("http://localhost:5000/productCount")
        .then(res=>res.json())
        .then(data=>{
            const count=data.count;
            const page=Math.ceil(count/10);
            setPageCount(page);
        })
    })

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                   products? <> {products?.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)}</> : <h1 className="text-4xl text-center">Loading...</h1>
                }
                 <div>
                    {[...Array(pageCount).keys()].map(number=><button onClick={()=>setPage(number+1)} className={page===number+1?"bg-yellow-500 border-2 px-4 mr-2 text-white":"border-2 px-4 mr-2"}>{number+1}</button>)}
                </div>
            </div>
           
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className="my-4 bg-yellow-500 px-4 py-1 rounded-md text-white">Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;