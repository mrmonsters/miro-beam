import { ItemsCreateEvent } from '@mirohq/websdk-types';
import { handleLinkItemsCreate } from '../utils/miro';
import { useEffect } from 'react';

export const useHandleItemsCreate = () => {
  useEffect(() => {
    window.miro.board.ui.on('items:create', (event: ItemsCreateEvent) => {
      handleLinkItemsCreate(event);
    });
  }, []);
};
