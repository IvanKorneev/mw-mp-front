import PublicRoutes from "./routes/PublicRoutes";
import {AppStyles, Footer} from "./App.styled";
import {Suspense} from "react";
import Header from "./features/Header";


const App = () => {
  return (
    <>
      <AppStyles/>
      <Header/>
      <Suspense fallback={'Loading...'}>
        <PublicRoutes/>
      </Suspense>
      <Footer>
        <div>MW</div>
      </Footer>
    </>

  );
}
export default App;
