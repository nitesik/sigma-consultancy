export type SiteConfig = typeof siteConfig.getHeaderLinks;



export const siteConfig = {
  getHeaderLinks: () => {
    const items = [
      {
          en: "Services",
          cn: '服务',
          href: "/services"
        },
        {
          en: "Industries",
          cn: '行业',
          href: "/industries"
        },
        {
          en: "Partners",
          cn: '伙伴',
          href: "/partners"
        },
        {
          en: "Resources",
          cn: '资源',
          href: "/resources"
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