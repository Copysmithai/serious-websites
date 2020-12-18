import React from 'react';
import { Sub } from '../components/Text';
import dfstyles from '../styles/dfstyles';
import styled from 'styled-components';
import { EmailCTA } from './Email';
import { Prompt } from './Prompt';

const styles: {
  [name: string]: React.CSSProperties;
} = {
  // container stuff
  wrapper: {
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: dfstyles.colors.background,
  },
  basePage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: dfstyles.colors.text,
    fontSize: dfstyles.fontSize,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  // hall of fame
  hofTitle: {
    color: dfstyles.colors.subtext,
    display: 'inline-block',
    borderBottom: `1px solid ${dfstyles.colors.subtext}`,
    lineHeight: '1em',
  },
};

const links = {
  twitter: 'http://twitter.com/darkforest_eth',
  email: 'mailto:contact@zkga.me',
  blog: 'https://blog.zkga.me/',
  telegram: 'https://t.me/zk_forest',
  github: 'https://github.com/darkforest-eth',
};

// note: prefer styled-components when possible because semantically easier to debug
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromptWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > div {
    margin-top: 8pt;
  }
`;

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin-top: 16pt;
  }
`;

const TextLinks = styled.div`
  & a {
    &:first-child {
      margin-left 0;
    }
    margin-left: 7pt;
    &:after {
      margin-left: 7pt;
      content: '-';
      color: ${dfstyles.colors.subtext};
    }
    &:last-child:after {
      display: none;
    }

    transition: color 0.2s;
    &:hover {
      color: ${dfstyles.colors.dfblue};
    }
  }
`;

const IconLinks = styled.div`
  font-size: 18pt;

  & a {
    margin: 0 6pt;
    transition: color 0.2s;
    &: hover {
      cursor: pointer;
      &.link-twitter {
        color: ${dfstyles.colors.icons.twitter};
      }
      &.link-github {
        color: ${dfstyles.colors.icons.github};
      }
      &.link-telegram {
        color: ${dfstyles.colors.icons.telegram};
      }
      &.link-blog {
        color: ${dfstyles.colors.icons.blog};
      }
      &.link-email {
        color: ${dfstyles.colors.icons.email};
      }
    }
  }
`;

const Title = styled.div`
  font-size: ${dfstyles.fontH1};
  font-family: ${dfstyles.titleFont};
  position: relative;
`;

export default function HomePage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.basePage}>
        {/* Spacer */}
        <div></div>

        {/* Title + CTA */}
        <Header>
          <Title>
            <h1>Idea to Landing Page in One Click</h1>
          </Title>

          <p>
            <Sub>
              Create a compelling landing page for your startup idea and start
              collecting leads in seconds
            </Sub>
          </p>

          <PromptWrapper>
            <Prompt />
          </PromptWrapper>
        </Header>

        {/* Footer */}
        <Footer>
          {/* Email CTA */}
          <EmailWrapper>
            <EmailCTA />
          </EmailWrapper>
          <TextLinks>
            <a href={links.email}>email</a>
            <a href={links.blog}>blog</a>
          </TextLinks>
          <IconLinks>
            <a className={'link-twitter'} href={links.twitter}>
              <span className={'icon-twitter'}></span>
            </a>
            <a className={'link-telegram'} href={links.telegram}>
              <span className={'icon-telegram'}></span>
            </a>
            <a className={'link-github'} href={links.github}>
              <span className={'icon-github'}></span>
            </a>
          </IconLinks>
        </Footer>
      </div>
    </div>
  );
}
