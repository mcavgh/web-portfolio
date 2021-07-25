import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Switch, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import "./App.css";
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import i18next from 'i18next';
import AcademicProjectsPage from "./components/Pages/AcademicProjectsPage/AcademicProjectsPage";
import NavBar from "./components/NavBar";
import FrontPage from "./components/Pages/FrontPage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import Footer from "./components/Footer";
import theme from "./theme/theme";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        global:global_en,
      },
      es: {
        global:global_es,
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
const website = (
  <div>
    <NavBar />
    <FrontPage />
    <AboutPage />
    <ProjectsPage />
    <ContactPage />
    <Footer />
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <I18nextProvider i18n={i18next}>
          <Switch>
            <Route path="/" render={() => website} />
          </Switch>
        </I18nextProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
