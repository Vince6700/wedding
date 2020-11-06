import { Helmet as HelmetPack } from "react-helmet";

const Helmet = () => {
  return (
    <HelmetPack>
      <meta charSet="utf-8" />
      <title>Les Bibiches Wedding</title>
      <style>
        {"body { height: 100vh; margin: 0 } html { font-size: 62.5% }"}
      </style>
    </HelmetPack>
  );
};

export default Helmet;
