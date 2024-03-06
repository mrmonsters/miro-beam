import { OEmbedObject } from '../types/oEmbed';
import { EmbedPlatform, URL_OEMBED } from '../utils/constants';

const getRedditOEmbedData = async (url: string): Promise<OEmbedObject> => {
  const response = await fetch(`${URL_OEMBED.REDDIT}?url=${url}`);

  if (!response.ok) {
    throw new Error('Unable to retrieve OEmbed data from Reddit');
  }

  return response.json();
};

export const getOEmbedData = (platform: string, url: string): Promise<OEmbedObject> => {
  switch (platform) {
    case EmbedPlatform.REDDIT:
      return getRedditOEmbedData(url);
    default:
      throw new Error('Unsupported platform');
  }
};
