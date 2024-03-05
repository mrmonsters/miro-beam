import {Miro} from '@mirohq/miro-api';
import {cookies} from 'next/headers';
import {State} from '@mirohq/miro-api/dist/storage';

const tokensCookie = 'miro_tokens';

export default function initMiroAPI() {
  const cookieInstance = cookies();

  const getCookieValue = (key: string = tokensCookie) => {
    const cookie = cookieInstance.get(key);

    // Load state (tokens) from a cookie if it's set
    return cookie ? (JSON.parse(cookie.value) as State) : undefined;
  };

  // setup a Miro instance that loads tokens from cookies
  return {
    miro: new Miro({
      storage: {
        get: () => {
          return new Promise(resolve => resolve(getCookieValue()));
        },
        set: (_, state) => {
          cookieInstance.set(tokensCookie, JSON.stringify(state), {
            path: '/',
            httpOnly: true,
            sameSite: 'none',
            secure: true,
          });
        },
      },
    }),
    // User id might be undefined if the user is not logged in yet, we will know it after the redirect happened
    userId: getCookieValue()?.userId || '',
  };
}
