import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

const useEmojiSearch = (query) => {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fecthEmojis = useCallback(
    debounce((searchTerm) => {
      if (searchTerm.length < 4) {
        setEmojis([]);
        setError("");
        return;
      }
      setLoading(true);
      setError("");

      fetch(
        `https://api.api-ninjas.com/v1/emoji?name=${encodeURIComponent(
          searchTerm
        )}`,
        {
          headers: { "X-Api-Key": import.meta.env.VITE_API_KEY },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Emoji servisine ulaşılamıyor!");
          }
          return res.json();
        })
        .then((data) => {
          if (data.length === 0) {
            setError("Sonuç bulunamadı.");
          } else {
            setLoading(false);
            setEmojis(data);
          }
        })
        .catch((err) => setError(err.message));
    }, 500),
    []
  );

  useEffect(() => {
    fecthEmojis(query);
  }, [query, fecthEmojis]);

  return { emojis, loading, error };
};

export default useEmojiSearch;
