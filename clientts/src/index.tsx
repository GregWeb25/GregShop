import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';
import BasketStore from './store/BasketStore';
import CommentsStore from './store/CommentsStore';
import SortStore from './store/SortStore';

interface IContext {
  comments: CommentsStore,
  user: UserStore,
  device: DeviceStore,
  basket: BasketStore,
  sort: SortStore,
}

export const Context = createContext({} as IContext);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Context.Provider value={{
    comments: new CommentsStore(),
    user: new UserStore(),
    device: new DeviceStore(),
    basket: new BasketStore(),
    sort: new SortStore(),
  }}>
    <App />
  </Context.Provider>,
);

