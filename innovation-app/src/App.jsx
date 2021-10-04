
import './App.css';
import Layout from 'layouts/Layout';
import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ventas from 'pages/Ventas';
import Productos from 'pages/Productos';
import ProductList from 'pages/ProductList';
import VentasList from 'pages/VentasList';
import Users from 'pages/Users';
import UserList from 'pages/UserList'





function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path='/ventas'>
              <Ventas />
            </Route>
            <Route path='/ventasList'>
              <VentasList />
            </Route>
            <Route path='/productos'>
              <Productos />
            </Route>
            <Route path='/productList'>
              <ProductList />
            </Route>
            <Route path='/usuarios'>
              <Users />
            </Route>
            <Route path='/usuariosList'>
              <UserList/>
            </Route>
            
            
            
          </Switch>

          
        </Layout>
      </Router>
    </div>
    
  );
}


function RenderOptions(){
  return <div>Producto</div>
}
export default App;
