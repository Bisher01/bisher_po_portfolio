export function GlitchText({ text }: { text: string }) {
  const upper = text.toUpperCase();
  return (
    <span className="glitch-title" data-text={upper}>
      {upper}
    </span>
  );
}
