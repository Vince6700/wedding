import Layout from "./components/layout";
import Helmet from "./components/helmet";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import Title from "./components/title";
import EnterYourMail from "./components/enterYourMail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet />
      <Layout>
        <Title />
        <EnterYourMail />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
