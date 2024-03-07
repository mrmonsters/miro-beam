'use client';

import styled from '@emotion/styled';

const Container = styled.div({
  padding: 'var(--space-large)',
});

const handleOkayClick = async () => await miro.board.ui.closePanel();

const Page = () => {
  return (
    <Container className="grid centered">
      <div className="cs1 ce12">
        <p className="p-large">No configuration needed. Just start pasting them links.</p>
        <p className="p-large">
          More information&nbsp;
          <a href="/about" className="link link-primary" target="_blank" rel="noreferrer noopener">
            here
          </a>
          .
        </p>
      </div>
      <div className="cs1 ce12">
        <button className="button button-primary" onClick={handleOkayClick}>
          Okay
        </button>
      </div>
    </Container>
  );
};

export default Page;
