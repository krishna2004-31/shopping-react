import { Provider } from "react-redux";
import { store, persistor } from "./Shopping/store";
import Shop from "./main1";
import AddCart from "./AddCart";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { CountProvider } from "./Shopping/context";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/AddCart",
    element: <AddCart />,
  }
])

function App() {
  return(<>
  <Provider store={store}>
  <CountProvider>
    <RouterProvider router={router} />
    </CountProvider>
  </Provider>
  </>)
}




export default App;