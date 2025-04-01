import { useState } from "react";
import useEmojiSearch from "./hooks/useEmojiSearch";
import SearchBar from "./components/SearchBar";
import EmojiList from "./components/EmojiList";

const App = () => {
  const [query, setQuery] = useState("");
  const [copiedEmoji, setCopiedEmoji] = useState("");
  const { emojis, loading, error } = useEmojiSearch(query);

  const copyEmojiToClipboard = (emoji) => {
    navigator.clipboard.writeText(emoji);
    setCopiedEmoji(emoji);

    setTimeout(() => setCopiedEmoji(""), 3000);
  };

  return (
    <div className="container">
      <h1>Emoji Rehberi 🔍</h1>
      <SearchBar query={query} setQuery={setQuery} />

      {loading && <p className="text-center mt-4">Yükleniyor...</p>}
      {error && <p className="error-message">{error}</p>}
      <EmojiList emojis={emojis} copyEmojiToClipboard={copyEmojiToClipboard} />
      {copiedEmoji && (
        <div className="copied-message">✅ {copiedEmoji} kopyalandı!</div>
      )}
    </div>
  );
};

export default App;
