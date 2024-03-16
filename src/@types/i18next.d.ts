import "i18next";
// import all namespaces (for the default language, only)
import en from "../i18n/locales/en.json";
import ko from "../i18n/locales/ko.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "ns";
    resources: {
      ns: typeof en;
    };
  }
}
