import { Provider } from 'react-redux';
import './App.css';

import store from "./utils/store";
import Body from './components/Body';
import Head from './components/Head';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ErrorPage from './components/ErrorPage';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage/>,
      },
  ],
},
]);




function App() {
  return (
    <Provider store={store}>
   <div> 
   <Head/>
   <RouterProvider router={appRouter}/>
  

    </div>
    </Provider>

  );
}

export default App;
