import { Embed, ItemsCreateEvent } from '@mirohq/websdk-types';
import { REGEX_DOMAINS } from './constants';

const isInstagramLink = (url: string): boolean => REGEX_DOMAINS.INSTAGRAM.test(url);

const isRedditLink = (url: string): boolean => REGEX_DOMAINS.REDDIT.test(url);

const insertInstagramEmbed = async (url: string): Promise<Embed> => {
  const sanitisedUrl = url.split('?')[0].replace(/\/$/, '');

  return miro.board.createEmbed({
    url: `${sanitisedUrl}/embed`,
  });
};

const insertRedditEmbed = async (url: string): Promise<Embed> => {
  const sanitisedUrl = url.split('?')[0].replace(/\/$/, '');

  return miro.board.createEmbed({
    url: `${sanitisedUrl.replace(/(.*)?reddit\.com/, 'https://embed.reddit.com')}`,
  });
};

const insertEmbed = async (url: string): Promise<Embed> => {
  if (isInstagramLink(url)) {
    return insertInstagramEmbed(url);
  } else if (isRedditLink(url)) {
    return insertRedditEmbed(url);
  } else {
    throw new Error(`Failed to insert embedded content for ${url}`);
  }
};

export const handleLinkItemsCreate = async (event: ItemsCreateEvent): Promise<void> => {
  const { items = [] } = event;

  if (items.length <= 0) {
    return;
  }

  items.forEach(async (e) => {
    if (e.type !== 'text') {
      return;
    }

    try {
      const widget = await insertEmbed(e.content);

      await miro.board.viewport.zoomTo(widget);
      await miro.board.remove(e);
    } catch (error) {
      console.error(error);
    }
  });
};
