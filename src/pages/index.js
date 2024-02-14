import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Snowfall from 'react-snowfall';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
    <header className={clsx('hero hero--primary', styles.heroBanner)}> <div className="container">
        <img src="/img/in-toto.png" alt="in-toto Logo" className={styles.heroLogo}/>
        <p className="hero__subtitle" style={{color: 'white' }}>{siteConfig.tagline} </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="http://localhost:3000/docs/specification/in-toto-spec"
            style={{color: 'white' }}>
            Take a look at the in-toto specification here!
          </Link>
        </div>

        <div className={styles.merryChristmas}>
          <Snowfall   snowflakeCount={15}/>
          <span>Merry Christmas! 🎄 </span>
        </div>
      </div>
    </header>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the in-toto Project!`}
      description="Generate in-toto attestations anywhere in your supply chain with Witness">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
