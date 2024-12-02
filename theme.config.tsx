import Image from 'next/image'
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'nextra/hooks'

const config: DocsThemeConfig = {
  logo: function () {
    return <Image src="/logo.png" width={40} height={40} alt="dudu logo" />
  },
  project: {
    link: 'https://github.com/fe-dudu',
  },
  docsRepositoryBase: 'https://github.com/fe-dudu',
  head: function () {
    const config = useConfig()
    const { asPath } = useRouter()
    const url = `https://www.fe-dudu.com${asPath}`
    const title = config.title !== 'Index' ? `${config.title} | FE dudu` : 'FE dudu'
    return (
      <>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="김도현" />
        <meta property="og:title" content={title || 'FE dudu'} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content="김도현" />
      </>
    )
  },
  toc: {title: '목차'},
  search: {
    placeholder: '검색어를 입력하세요.',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    content: 'Copyright ⓒ FE-dudu. All rights reserved.',
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: 'dark',
  },
  feedback: { content: <></> },
  editLink: { content: <></> },
}

export default config
