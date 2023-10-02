export type SiteConfig = typeof siteConfig.getHeaderLinks;



export const siteConfig = {
  getHeaderLinks: () => {
    const items = [
      {
          en: "Home",
          cn: '服务',
          href: "/"
        },
        {
          en: "Visa Registration",
          cn: '行业',
          href: "/visa"
        },
        {
          en: "Maid Service",
          cn: '伙伴',
          href: "/maid"
        },
        {
          en: "About",
          cn: '关于',
          href: "/about"
        },
        {
          en: "Contact",
          cn: '接触',
          href: "/contact"
      },
    ]

    return items;
  }
}