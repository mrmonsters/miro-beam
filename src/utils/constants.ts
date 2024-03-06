export enum EmbedPlatform {
  REDDIT = 'reddit',
}

export const URL_OEMBED = Object.freeze({
  REDDIT: 'https://www.reddit.com/oembed',
});

export const REGEX_DOMAINS = Object.freeze({
  INSTAGRAM: /(https?:\/\/(.+?\.)?instagram\.com(.*))/,
  REDDIT: /(https?:\/\/(.+?\.)?reddit\.com(.*))/,
});
