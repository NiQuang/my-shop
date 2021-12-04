import React, { useEffect, useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutWebsite from './layout/websiteLayout';
import ProductCategoryPage from './pages/website/ProductCategoryPage';
import ProductDetail from './pages/website/ProductDetail';
import { createProduct, deleteProduct, listProduct } from './api/productAPI';
import HomePage from './pages/website/HomePage';
import AdminLayout from './layout/adminLayout';
import ProductsManager from './pages/admin/ProductsManager';
import AddProduct from './pages/admin/AddProduct';
import { getModels } from './api/modelAPI';
import SignUpPage from './pages/website/Signup';
import { addUser } from './api/userAPI';
import { message, Popconfirm } from 'antd';
import SingInPage from './pages/website/SignIn';
import PrivateAdmin from './components/PrivateAdmin';
import EditProduct from './pages/admin/EditProduct';
import DashBoardPage from './pages/admin/DashBoard';
  
function App() {


  const [products, setProducts] = useState([]);
  const [wantedList, setWantedList] = useState([]);
  const [models, setModels] = useState([]);
  const onHandleRemove = (id) => {
    deleteProduct(id).then(() => {
      message.success('Remove successfully!');
      const fakeProducts = products.filter((item) => item.id !== id);
      setProducts(fakeProducts);
    })
  }
  const onCreateProduct = (product) =>{
    createProduct(product).then((response) => {
      message.success('Create product successfully!');
    })
  }

  const categoryFind = (list) =>{
    console.log(list);
    setWantedList(list);
  };

  useEffect(() => {
    listProduct().then((response) => {
      setProducts(response.data)
      setWantedList(response.data)
    });

    getModels().then((response) => {
      setModels(response.data);
    })
    console.log('demo');
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<HomePage />} />
            <Route path="category" element={<ProductCategoryPage products={products} findList={wantedList} models={models} onFind={categoryFind}/>} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SingInPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
          <Route path="admin/*"
            element={
              <PrivateAdmin>
                <AdminLayout />
               </PrivateAdmin>
            }>
            <Route index element={<Navigate to="products" />} />
            <Route path="dashboard" element={<DashBoardPage />} />
            <Route path="products" element={<ProductsManager products={products} onRemove={onHandleRemove} models={models} />} />
            <Route path="products/add" element={<AddProduct createProduct={onCreateProduct} models={models}/>} />
            <Route path="products/:id/edit" element={<EditProduct models={models}/>} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
