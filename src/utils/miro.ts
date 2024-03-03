import { Embed, ItemsCreateEvent, Preview } from '@mirohq/websdk-types';
import { REGEX_DOMAINS } from './constants';

const isInstagramLink = (url: string): boolean => REGEX_DOMAINS.INSTAGRAM.test(url);

// eslint-disable-next-line
const isRedditLink = (url: string): boolean => REGEX_DOMAINS.REDDIT.test(url);

const insertInstagramEmbed = async (url: string): Promise<Embed> => {
  const sanitisedUrl = url.split('?')[0].replace(/\/$/, '');

  return miro.board.createEmbed({
    url: `${sanitisedUrl}/embed`,
  });
};

// eslint-disable-next-line
const insertRedditPreview = async (url: string): Promise<Preview> => {
  return miro.board.createPreview({
    url,
  });
};

const actions = [
  {
    verify: isInstagramLink,
    action: insertInstagramEmbed,
  },
];

export const handleLinkItemsCreate = async (event: ItemsCreateEvent): Promise<void> => {
  const { items = [] } = event;

  if (items.length <= 0) {
    return;
  }

  items.forEach((e) => {
    if (e.type !== 'text') {
      return;
    }

    actions.some(async ({ verify, action }) => {
      if (!verify(e.content)) {
        return false;
      }

      try {
        const widget = await action(e.content);

        await miro.board.viewport.zoomTo(widget);
        await miro.board.remove(e);
      } catch (error) {
        console.error(error);
      }

      return true;
    });
  });
};
