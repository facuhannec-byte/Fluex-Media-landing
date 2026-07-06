export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5493875938541"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-cream shadow-lg shadow-ink/20 transition-transform duration-300 hover:scale-110 hover:bg-accent-soft"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M3 20l1.3-3.9A7.5 7.5 0 1 1 8.5 19L3 20Z" />
        <path d="M8.7 9.6c0 3.1 2.6 5.7 5.7 5.7" />
      </svg>
    </a>
  );
}
