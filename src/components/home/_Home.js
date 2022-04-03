import { useState, useRef, useEffect } from "react";
import Ticker from "./Ticker";
import axios from "axios";

const Home = () => {
  const [submitting, setSubmitting] = useState(false);
  const promoText = [
    "forever free",
    "no wallet needed",
    "easy",
  ]
  const [loadingDots, setLoadingDots] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((loadingDots) => (loadingDots + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const inputEl = useRef(null);

  const submitEmail = async () => {
    setSubmitting(true);
    const email = normalizeEmail(inputEl.current.value);
    if (!emailValid(email)) {
      alert("🚧 Ooops, this email is invalid. Please try again.");
      setSubmitting(false);
    }

    const response = await axios.get(`https://us-central1-shillcoin.cloudfunctions.net/wagmiAddWaitlist?token=H85biDGkSrm3kzi&email=${email}`);
    if (response.data.status === "ok") {
      setSubmitting(false);
      inputEl.current.value = "";
      alert(`🙏 Awesome, you are on the Waitlist! (email: ${email})`);
    }
  }

  const normalizeEmail = (email) => {
    return email.toLowerCase().trim();
  }

  const emailValid = (email) => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regEx.test(String(email).toLowerCase());
  }

  const submitForm = (event) => {
    event.preventDefault();
    submitEmail();
  }

  return (
    <div className="home-container">
      <h1 className="main-title">Create Beautiful <br />NFT Banners</h1>
      <p className="description">
        <span>Wagmibanners helps you</span>
        <strong> auto-generate </strong>
        <span>beautiful banners to showcase your </span>
        <a className="link-to-opensea remove-all-link-styling" href="https://opensea.io/collection/deadfellaz" rel="noreferer" target="_blank"><strong>Deadfellaz</strong></a>
        <span> and </span>
        <a className="link-to-opensea remove-all-link-styling" href="https://opensea.io/collection/deadfrenz-collection" rel="noreferer" target="_blank"><strong>Deadfrenz</strong></a>
         <span> NFTs on twitter.</span>
      </p>
      <Ticker tickerContent={"ticker1"}/>
      <Ticker tickerContent={"ticker2"}/>
      <h2>Coming Soon</h2>
      <p className="small">Join the waitlist to get early access</p>
      <form onSubmit={submitForm} className="form-container flex justify-center align-center">
        <input ref={inputEl} placeholder="Email"/>
        <button onClick={submitForm}>
          { submitting ? (
            <>Loading{"...".slice(0, loadingDots)}</>
          ) : (
            <>Join Waitlist</>
          )}
        </button>
      </form>
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
