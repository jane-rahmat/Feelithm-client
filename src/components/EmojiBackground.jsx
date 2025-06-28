export default function EmojiBackground() {
  const emojis = ["😊", "😌", "😇", "😎", "🤗", "🙂"];
  return (
    <>
      {emojis.map((e, i) => (
        <span
          key={i}
          className="animate-[float_6s_ease-in-out_infinite] text-5xl opacity-20 absolute select-none pointer-events-none"
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + (i % 3) * 30}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        >
          {e}
        </span>
      ))}
    </>
  );
}
