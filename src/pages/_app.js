import "../styles/styles.scss";

import Mainlayout from "../components/layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  );
}

export default MyApp;
