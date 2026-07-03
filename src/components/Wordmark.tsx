export function splitWordmarkLetters(text: string) {
  return text.split("").map((char, index) => ({
    key: `${char}-${index}`,
    char,
    isAccent: char.toLowerCase() === "x",
  }));
}

export default function Wordmark({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {splitWordmarkLetters(text).map(({ key, char, isAccent }) =>
        isAccent ? (
          <span key={key} className="text-accent">
            {char}
          </span>
        ) : (
          <span key={key}>{char}</span>
        ),
      )}
    </span>
  );
}
