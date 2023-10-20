export type SiteConfig = typeof siteConfig.getHeaderLinks;

export const siteConfig = {
  getHeaderLinks: () => {
    const items = [
      {
        en: "Home",
        cn: "家",
        ne: "घर",
        href: "/",
      },
      {
        en: "Consultancy Services",
        cn: "咨询服务",
        ne: "परामर्श सेवा",
        href: "/consultancy",
      },
      {
        en: "Maid Registration",
        cn: "女佣登记",
        ne: "दासी दर्ता",
        href: "/maid",
      },
      {
        en: "About",
        cn: "关于",
        ne: "बारे",
        href: "/about",
      },
      {
        en: "Contact",
        cn: "接触",
        ne: "सम्पर्क गर्नुहोस्",
        href: "/contact",
      },
    ];

    return items;
  },
};
