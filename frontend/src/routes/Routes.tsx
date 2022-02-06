import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Layout from "components/Layout";
import Loading from "components/Loading/Loading";

// Styles
import { GlobalStyle } from "styles/Global";

// Pages
const Home = React.lazy(() => import("pages/Home/Home"));
const Projetos = React.lazy(() => import("pages/Projetos/Projetos"));
const Contato = React.lazy(() => import("pages/Contato/Contato"));
const Admin = React.lazy(() => import("pages/Admin/Admin"));

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Layout>
        <Switch>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />

          <Route
            path="/projects"
            element={
              <React.Suspense fallback={<Loading />}>
                <Projetos />
              </React.Suspense>
            }
          />

          <Route
            path="/contact"
            element={
              <React.Suspense fallback={<Loading />}>
                <Contato />
              </React.Suspense>
            }
          />

          <Route
            path="/admin"
            element={
              <React.Suspense fallback={<Loading />}>
                <Admin />
              </React.Suspense>
            }
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;