import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import Layout from "../containers/layout";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial:{
        opacity:0
        
      },
      pageAnimate:{
        opacity:1
      }
    }}>
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </motion.div>
  );
}

export default MyApp;
