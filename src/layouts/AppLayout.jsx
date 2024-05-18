import { Outlet, useNavigation } from "react-router-dom";
import useTheme from "../assets/hooks/useTheme";
import { useTranslation } from "react-i18next";

function AppLayout() {
  const navigation = useNavigation();
  const { theme, setAppTheme } = useTheme();
  const { t, i18n } = useTranslation();

  function switchTheme() {}

  if (navigation.state === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <header className="header">
        <div className="content-wrapper header-content">
          <div>
            <h2> {t("headline")} </h2>
          </div>
          <div>
            {theme === "light" ? (
              <button onClick={() => setAppTheme("dark")}>
                {" "}
                {t("dark_mode")}
              </button>
            ) : (
              <button onClick={() => setAppTheme("light")}>
                {t("light_mode")}
              </button>
            )}
          </div>
          <div>
            {i18n.resolvedLanguage === "en" ? (
              <button onClick={() => i18n.changeLanguage("de")}>German</button>
            ) : (
              <button onClick={() => i18n.changeLanguage("en")}>English</button>
            )}
          </div>
        </div>
      </header>
      <main>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
      <footer> 2024 Footer </footer>
    </>
  );
}

export default AppLayout;
