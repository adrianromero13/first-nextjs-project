// pages/_app.js
import Layout from "../components/layout/Layout";
// import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
