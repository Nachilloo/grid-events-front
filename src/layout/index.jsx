import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../components/theme";
import { ThemeProvider } from "@mui/material/styles";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <section>
          <Outlet />
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Root;
