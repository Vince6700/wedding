import Layout from "./components/layout";
import Helmet from "./components/helmet";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import Router from "./router/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
