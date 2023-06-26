const supportedLngs = ["pt", "en"];

export const ni18nConfig = {
  fallbackLng: supportedLngs[0],
  supportedLngs,
  ns: ["translation"],
  react: {
    useSuspense: false,
  },
};
