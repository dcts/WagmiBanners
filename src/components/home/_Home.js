import Ticker from "./Ticker";

const Home = () => {
  const promoText = [
    "forever free",
    "no wallet needed",
    "easy",
  ]
  return (
    <div className="home-container">
      <h1 className="main-title">Create Beautiful <br />NFT Banners</h1>
      <p className="description">
        <span>Wagmibanners helps you </span><strong>auto-generate</strong> <span>beautiful banners to showcase your</span> <strong>Deadfellaz</strong><span>,</span> <strong>Coolcats</strong> <span>or</span> <strong>Loosers</strong> <span>NFTs on twitter.</span>
      </p>
      <Ticker tickerContent={"ticker1"}/>
      <Ticker tickerContent={"ticker2"}/>
      <h2>Coming Soon</h2>
      <p className="small">Join the waitlist to get early access</p>
      <div className="form-container flex justify-center align-center">
        <input placeholder="Email"/>
        <button>Join Waitlist</button>
      </div>
      <div className="promo-container-outer">
        <div className="promo-container">
          { promoText.map((text, indx) => {
            return (
              <div key={indx} className="promo-text-element">
                <p className="checkmark">✓</p>
                <p className="promo-text">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
