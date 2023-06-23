import {appWithI18Next} from "ni18n";
import {ni18nConfig} from "./ni18n.config";

function i18n(component) {
  return appWithI18Next(component, ni18nConfig);
}

export default i18n;