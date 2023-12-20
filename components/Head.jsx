import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Rizky Eka Haryadi is a frontend mobile developer building mobile applications you'd love to use"
      />
      <meta
        name="keywords"
        content="rizky eka haryadi, rizky, eka haryadi, mobile developer portfolio, rizky mobile developer, rizky developer, react native, rizky eka haryadi portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Rizky Eka Haryadi's Portfolio" />
      <meta
        property="og:description"
        content="A frontend mobile developer building mobile applications that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Rizky Eka Haryadi',
};
