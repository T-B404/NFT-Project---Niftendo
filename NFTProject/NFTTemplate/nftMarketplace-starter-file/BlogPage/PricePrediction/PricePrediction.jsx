import React, { useState, useEffect } from 'react';
import styles from './PricePrediction.module.css';

const PricePrediction = () => {
  const [predictionData, setPredictionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPredictionData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/prediction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || `HTTP error! status: ${response.status}`);
        }
        
        setPredictionData(data);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch prediction data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictionData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        Loading predictions...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        Error: {error}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Ethereum Price Predictions
      </h2>
      
      {predictionData && predictionData.actual && (
        <div className={styles.priceContainer}>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Current Price:</span>
            <span className={styles.priceValue}>${predictionData.actual.toFixed(2)}</span>
          </div>
          <div className={styles.priceItem}>
            <span className={styles.priceLabel}>Predicted Next Price:</span>
            <span className={styles.priceValue}>${predictionData.prediction.toFixed(2)}</span>
          </div>
        </div>
      )}
      
      <div className={styles.detailsContainer}>
        <h3 className={styles.subtitle}>
          Prediction Details
        </h3>
        <div className={styles.detailsContent}>
          <p>Timestamp: {predictionData.timestamp}</p>
          <p>Model: LSTM Neural Network</p>
        </div>
      </div>
    </div>
  );
};

export default PricePrediction;