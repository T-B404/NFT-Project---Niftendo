// components/BlogPage.jsx
import React from 'react';
import PricePrediction from "./PricePrediction/PricePrediction";
import NFTDataTable from "./NFTDatatable/NFTDatatable";
import styles from './BlogPage.module.css'; // Note the .module.css extension

const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogContent}>
        
        {/* Blog Introduction */}
        <header className={styles.blogHeader}>
          <h1>NFT Insights: The Ethereum Connection</h1>
          <p className={styles.blogMeta}>Posted on August 20, 2023 • 5 min read</p>
        </header>

        {/* Introduction to NFTs and Ethereum */}
        <article className={styles.blogArticle}>
          <h1>Understanding NFTs and Their Ethereum Foundation</h1>
          <p>
            Non-Fungible Tokens (NFTs) have revolutionized digital ownership and creativity, 
            and at the heart of this transformation lies the Ethereum blockchain. Unlike 
            cryptocurrencies such as Bitcoin or Ethereum itself which are fungible (each unit 
            is identical), NFTs are unique digital assets that represent ownership of specific 
            items using blockchain technology.
          </p>
          
          <div className={styles.infoBox}>
            <h3>Why Ethereum for NFTs?</h3>
            <p>
              Ethereum's smart contract functionality made it the perfect foundation for NFTs. 
              The ERC-721 standard, specifically created for non-fungible tokens, and later the 
              ERC-1155 standard for semi-fungible tokens, were both developed on the Ethereum 
              blockchain, setting the stage for the NFT explosion.
            </p>
          </div>
          
          <h3>The Technical Connection</h3>
          <p>
            Each NFT transaction on the Ethereum blockchain requires ETH to pay for gas fees—the 
            computational cost of processing transactions. This intrinsic link means NFT activity 
            directly influences Ethereum's network demand and value. As NFT trading volume increases, 
            so does the consumption of ETH for transaction fees, creating an economic relationship 
            between the NFT market and Ethereum's valuation.
          </p>
          
          <h3>Market Interdependence</h3>
          <p>
            The health of the NFT market often reflects Ethereum's performance. When ETH prices are 
            high, NFT trading can become more expensive due to higher gas fees. Conversely, when 
            Ethereum network activity from NFTs and other dApps increases, it can drive up demand 
            for ETH. Understanding this relationship is key to navigating both markets successfully.
          </p>
        </article>

        {/* Ethereum Price Prediction Section */}
        <section className={styles.blogSection}>
          <h2>Ethereum Price Forecast</h2>
          <p>Our AI model predicts future ETH prices based on historical data, network activity, and NFT market trends.</p>
          <PricePrediction />
        </section>

        {/* NFT Market Data Section */}
        <section className={styles.blogSection}>
          <h2>Live NFT Market Overview</h2>
          <p>Real-time data scraped from the top NFT marketplaces, all powered by Ethereum transactions.</p>
          <NFTDataTable />
        </section>

        {/* Closing Thoughts */}
        <article className={styles.blogArticle}>
          <h2>The Future of NFTs on Ethereum</h2>
          <p>
            With Ethereum's continued evolution toward proof-of-stake and layer-2 scaling solutions, 
            the relationship between NFTs and Ethereum is poised to deepen. Reduced gas fees and 
            improved transaction speeds will likely make NFTs more accessible, potentially driving 
            further innovation in digital ownership, gaming assets, and tokenized real-world items.
          </p>
          <p>
            As the ecosystem matures, monitoring both Ethereum's price movements and NFT market 
            trends provides valuable insights into the broader blockchain economy.
          </p>
        </article>
       
      </div>
    </div>
  );
};

export default BlogPage;