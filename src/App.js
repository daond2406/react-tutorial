import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Song';
import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import NotFound from './features/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';
import Header from './components/Header';
import CounterFeature from './features/Counter';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
    };
    fetchProducts();
  }, []);

  const showNoti = () => {
    enqueueSnackbar('Register successfully', { variant: 'success' });
  };

  return (
    <div className="App">
      <Header />
      <Button onClick={showNoti}>Show noti</Button>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/home/:homeId" to="/homes/:homeId" exact />
        <Route path="/" component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
