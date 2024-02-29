import React, { useState ,useEffect} from 'react';
import ListArticle from './components/ListArticle';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import ListeProduits from './redux.jsx/ListeProduits';
import {useDispatch} from 'react-redux'
import { addItem } from './redux.jsx/Action';
import AjouterProduct from './redux.jsx/AjouterProduct';
import Menu from './redux.jsx/Menu';
import UpdateProduct from './redux.jsx/UpdateProduct';

const App = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://localhost:3001/items');
              if (!response.ok) {
                  throw new Error('Failed to fetch items');
              }
              const responseData = await response.json();
              setData(responseData);
          } catch (error) {
              console.error('Error fetching items:', error);
          }
      };

      fetchData();
  }, []);
useEffect(()=>{
  dispatch(addItem(data))
},[data])
  return (
    <BrowserRouter>
    <Menu />
    <Routes>

      <Route path='/listeArtcle' element={<ListArticle />}  />
      <Route path='/' element ={<ListeProduits />} />
      <Route path='/update/:id' element ={ <UpdateProduct />}/>
      <Route path='/ajouter' element ={<AjouterProduct />} />




    </Routes>
    
    </BrowserRouter>
)
};

export default App;
