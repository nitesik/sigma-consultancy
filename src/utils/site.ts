export type SiteConfig = typeof siteConfig.getHeaderLinks;



export const siteConfig = {
  getHeaderLinks: () => {
    const items = [
      {
          en: "Home",
          cn: '服务',
          ne: "",
          href: "/"
        },
        {
          en: "Consultancy Services",
          cn: '行业',
          ne: "",
          href: "/consultancy"
        },
        {
          en: "Maid Registration",
          cn: '伙伴',
          ne: "",
          href: "/maid"
        },
        {
          en: "About",
          cn: '关于',
          ne: "",
          href: "/about"
        },
        {
          en: "Contact",
          cn: '接触',
          ne: "",
          href: "/contact"
      },
    ]

    return items;
  }
}