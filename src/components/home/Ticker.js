const Ticker = ({tickerContent}) => { // "ticker1" or "ticker2"
  return (
    <div className={`ticker-container ${tickerContent}`}>
      <div className="ticker-content">
        <div className="sliding-background-container">
          <div className="sliding-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
