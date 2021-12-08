import React, { useEffect, useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LayoutWebsite from './layout/websiteLayout';
import ProductCategoryPage from './pages/website/ProductCategoryPage';
import ProductDetail from './pages/website/ProductDetail';
import { createProduct, deleteProduct, listProduct, updateProduct } from './api/productAPI';
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
import SearchProduct from './pages/website/SearchProduct';

function App() {

  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [pageList, setPageList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [models, setModels] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const onHandleRemove = (id) => {
    deleteProduct(id).then(() => {
      message.success('Remove successfully!');
      const fakeProducts = products.filter((item) => item.id !== id);
      setProducts(fakeProducts);
    })
  }
  const onCreateProduct = (product) => {
    createProduct(product).then((response) => {
      message.success('Create product successfully!');
    })
  }


  const onUpdateProduct = (item) => {
    updateProduct(item).then((response) => {
      message.success('Update Successfully!');
      return true;
    }).catch((error) => {
      message.error('Update Failed!')
      return false;
    });
  }

  const findByModelId = (id) => {
    if (id === 0) {
      setCategoryList(products);
    } else {
      const list = products.filter((item) => {
        return item.modelId === id;
      })

      setCategoryList(list);
    }
  }

  const onChangePage = (page) =>{ 
    setPage(page);
  }

  useEffect(() => {
    listProduct().then((response) => {
      const list = response.data;
      setProducts(response.data)
      setCategoryList(response.data)
    });

    getModels().then((response) => {
      setModels(response.data);
    })  
  }, []);

  useEffect(()=>{
    const list = products.filter((item, index) => {
      if(index>=((page-1)*pageSize) && index<(page*pageSize)){
        return item;
      }
    })
    setPageList(list);
  }, [page, products])



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<Navigate to="/page/1" />} />
            <Route path="page/:page" element={<HomePage products={pageList} changePage={onChangePage} length={products['length']} page={page} pageSize={pageSize}/>} />
            <Route path="category" element={<ProductCategoryPage products={categoryList} models={models} onFind={findByModelId} />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SingInPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/search/:value" element={<SearchProduct length={searchList['length']} products={products}/>} />
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
            <Route path="products/add" element={<AddProduct createProduct={onCreateProduct} models={models} />} />
            <Route path="products/:id/edit" element={<EditProduct models={models} onUpdate={onUpdateProduct} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
