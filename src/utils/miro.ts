import { Embed, Item, ItemsCreateEvent } from '@mirohq/websdk-types';
import { DOMAINS } from './constants';

const isInstagramLink = (url: string): boolean => url.indexOf(DOMAINS.INSTAGRAM) >= 0;

const insertInstagramEmbed = async (url: string): Promise<Embed> => {
  const sanitisedUrl = url.split('?')[0].replace(/\/$/, '');

  return miro.board.createEmbed({
    url: `${sanitisedUrl}/embed`,
  });
};

const handleInstagramLinkItemsCreate = async (items: Item[]): Promise<void> => {
  const instagramLinkEvents = items.filter((e) => e.type === 'text' && isInstagramLink(e.content));

  if (instagramLinkEvents.length <= 0) {
    return;
  }

  instagramLinkEvents.forEach(async (link) => {
    if (link.type !== 'text') {
      return;
    }

    try {
      const embed = await insertInstagramEmbed(link.content);

      await miro.board.viewport.zoomTo(embed);
      await miro.board.remove(link);
    } catch (error) {
      console.error(error);
    }
  });
};

export const handleLinkItemsCreate = async (event: ItemsCreateEvent): Promise<void> => {
  const { items = [] } = event;

  if (items.length <= 0) {
    return;
  }

  handleInstagramLinkItemsCreate(items);
};
