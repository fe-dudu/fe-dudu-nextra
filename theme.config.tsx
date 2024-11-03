import Image from 'next/image'
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'nextra/hooks'

const config: DocsThemeConfig = {
  logo: function () {
    return <Image src="/logo.png" width={40} height={40} alt="dudu logo" />
  },
  project: {
    link: 'https://github.com/fe-dudu/blog',
  },
  docsRepositoryBase: 'https://github.com/fe-dudu/blog',
  head: function () {
    const config = useConfig()
    const { asPath } = useRouter()
    const url = `https://www.fe-dudu.com${asPath}`
    const title = config.title !== 'Index' ? `${config.title} - FE dudu` : 'FE dudu'
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta property="og:title" content={title || 'FE dudu'} />
        <meta property="og:url" content={url} />
        <link rel="icon" href="/favicon.ico" type="image/ico" />
      </>
    )
  },
  footer: {
    content: 'Copyright ⓒ FE-dudu. All rights reserved.',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  darkMode: true,
}

export default config
