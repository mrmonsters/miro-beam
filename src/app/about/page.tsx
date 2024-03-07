'use client';

import styled from '@emotion/styled';
import AppCard from '../../components/AppCard';

const { NEXT_PUBLIC_LINK_GITHUB = '#', NEXT_PUBLIC_LINK_INSTALL = '#' } = process.env;

const Footer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Page = () => {
  return (
    <div className="grid">
      <div className="cs3 ce10">
        <div className="cs1 ce12 centered">
          <h1>Miro Beam</h1>
        </div>
        <div className="cs1 ce12 centered">
          <p className="p-large">
            A simple tool to automatically create embedded content on Miro board from the pasted link. Current supported
            content:
          </p>
        </div>
        <div className="cs1 ce12 grid centered">
          <div className="cs1 ce12">
            <AppCard title="Instagram post" tags={<span className="tag icon icon-thumbs-up">Like</span>} />
          </div>
          <div className="cs1 ce12">
            <AppCard title="Reddit post" tags={<span className="tag icon icon-arrows-up">Upvote</span>} />
          </div>
        </div>
        <hr />
        <Footer className="cs1 ce12">
          <span>
            <a href={NEXT_PUBLIC_LINK_GITHUB} className="link link-primary" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </span>
          <span>
            <a
              href={NEXT_PUBLIC_LINK_INSTALL}
              className="button button-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Install
            </a>
          </span>
        </Footer>
      </div>
    </div>
  );
};

export default Page;
