import { ItemsCreateEvent } from '@mirohq/websdk-types';
import { handleLinkItemsCreate } from './utils/miro';

const init = async (): Promise<void> => {
  window.miro.board.ui.on('items:create', (event: ItemsCreateEvent) => {
    handleLinkItemsCreate(event);
  });
};

init();
