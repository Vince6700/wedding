import Layout from "./components/layout";
import Helmet from "./components/helmet";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import Title from "./components/title";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet />
      <Layout>
        <Title />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
