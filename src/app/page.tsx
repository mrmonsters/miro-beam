'use client';

import useHandleAppIconClick from '../hooks/useHandleAppIconClick';
import useHandleItemsCreate from '../hooks/useHandleItemsCreate';

const Page = () => {
  // handles app icon clicked event
  useHandleAppIconClick();

  // handles link pasted event
  useHandleItemsCreate();

  // headless
  return null;
};

export default Page;
