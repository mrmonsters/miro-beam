import { useEffect } from 'react';

const handler = async () => {
  await miro.board.ui.openPanel({ url: '/onboarding' });
};

const useHandleAppIconClick = () => {
  useEffect(() => {
    miro.board.ui.on('icon:click', handler);

    return () => miro.board.ui.off('icon:click', handler);
  }, []);
};

export default useHandleAppIconClick;
