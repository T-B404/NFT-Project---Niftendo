// components/NFTDataTable.jsx
import React, { useState, useEffect } from 'react';
import styles from './NFTDatatable.module.css';

const NFTDataTable = () => {
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNFTData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/nft-data/');
        const data = await response.json();
        
        if (data.success) {
          setNftData(data.data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Failed to fetch NFT data');
      } finally {
        setLoading(false);
      }
    };

    fetchNFTData();
  }, []);

  if (loading) return <div className={styles.loading}>Loading NFT data...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.nftDataContainer}>
      <h2>NFT Market Data</h2>
      <div className={styles.tableResponsive}>
        <table className={styles.nftTable}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Image</th>
              <th>Name</th>
              <th>Volume</th>
              <th>Market Cap</th>
              <th>Floor Price</th>
              <th>Avg Price</th>
              <th>Sales</th>
              <th>Assets</th>
              <th>Owners</th>
              <th>Owners %</th>
            </tr>
          </thead>
          <tbody>
            {nftData.map((nft, index) => (
              <tr key={index}>
                <td>{nft.rank}</td>
                <td>
                  {nft.img && (
                    <img src={nft.img} alt={nft.name} className={styles.nftImage} />
                  )}
                </td>
                <td>{nft.name}</td>
                <td>{nft.volume}</td>
                <td>{nft['market-cap']}</td>
                <td>{nft['floor price']}</td>
                <td>{nft.avg_price}</td>
                <td>{nft.sales}</td>
                <td>{nft.asserts}</td>
                <td>{nft.owners}</td>
                <td>{nft.owners_percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NFTDataTable;