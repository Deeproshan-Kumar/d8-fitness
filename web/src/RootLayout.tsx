import { Outlet } from "react-router";
import { Header, Main, Footer } from "./components/main/layout";

const RootLayout:React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default RootLayout;