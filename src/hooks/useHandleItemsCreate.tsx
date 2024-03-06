import { ItemsCreateEvent } from '@mirohq/websdk-types';
import { handleLinkItemsCreate } from '../utils/miro';
import { useEffect } from 'react';

const handler = (event: ItemsCreateEvent) => {
  handleLinkItemsCreate(event);
};

export const useHandleItemsCreate = () => {
  useEffect(() => {
    window.miro.board.ui.on('items:create', handler);

    return () => miro.board.ui.off('items:create', handler);
  }, []);
};
