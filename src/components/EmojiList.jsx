const EmojiList = ({ emojis, copyEmojiToClipboard }) => {
  return (
    <div className="emoji-grid">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="emoji-card"
          onClick={() => copyEmojiToClipboard(emoji.character)}
        >
          <span className="emoji">{emoji.character}</span>
          <p>{emoji.name}</p>
        </div>
      ))}
    </div>
  );
};

export default EmojiList;
