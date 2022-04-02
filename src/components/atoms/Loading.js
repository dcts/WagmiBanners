const Loading = ({
  backgroundColor = "transparent",
  color = "black",
  style = "inline", // allowed: fullscreen / inline
  size = "regular",
}) => {
  return (
    <div
      style={{backgroundColor: backgroundColor}}
      className={`loading-container ${size} ${style === "inline" ? "width-auto height-auto" : ""}`}>
      <div>
        <div className="lds-ellipsis">
          <div style={{backgroundColor: color}} ></div>
          <div style={{backgroundColor: color}} ></div>
          <div style={{backgroundColor: color}} ></div>
          <div style={{backgroundColor: color}} ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
