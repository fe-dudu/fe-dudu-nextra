'use client';

import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';

export function GiscusComments() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    show && (
      <Giscus
        repo="fe-dudu/fe-dudu-nextra"
        repoId="R_kgDONJtyFA"
        category="General"
        categoryId="DIC_kwDONJtyFM4CmyuX"
        mapping="pathname"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark_dimmed"
        lang="ko"
        loading="lazy"
      />
    )
  );
}
