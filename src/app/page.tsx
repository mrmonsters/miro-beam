'use client';

import { useHandleItemsCreate } from '../hooks/useHandleItemsCreate';

const Page = () => {
  // handles link pasted event
  useHandleItemsCreate();

  // headless
  return null;
};

export default Page;
