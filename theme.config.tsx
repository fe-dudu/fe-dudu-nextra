import Image from 'next/image';
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'nextra/hooks';

const config: DocsThemeConfig = {
  logo: () => <Image src="/logo.png" width={40} height={40} alt="dudu logo" />,
  project: {
    link: 'https://github.com/fe-dudu',
  },
  docsRepositoryBase: 'https://github.com/fe-dudu',
  head: () => {
    const config = useConfig();
    const { asPath } = useRouter();
    const url = `https://www.fe-dudu.com${asPath}`;
    const title = config.title !== 'Intro' ? `${config.title}` : 'FE dudu';
    return (
      <>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="fe-dudu" />
        <meta name="keywords" content="fe-dudu 개발 블로그" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta name="description" content={`${title}에 대하여`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`${title}에 대하여`} />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="fe-dudu 개발 블로그" />
      </>
    );
  },
  toc: {
    title: '목차',
    backToTop: '맨 위로',
  },
  gitTimestamp: ({ timestamp }) => <span>{timestamp.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })} 수정됨</span>,
  search: {
    placeholder: '검색어를 입력하세요.',
  },
  navbar: {
    extraContent: (
      <a href="https://www.linkedin.com/in/fe-dudu" target="_blank" rel="noopener noreferrer">
        <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" />
      </a>
    ),
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
};

export default config;
