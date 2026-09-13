export default function BrowserMockup({ label = '[project preview]',image, className = '' }) {
  return (
    <div className={`rounded-sm border border-ink-line bg-ink-panel overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-line">
        <span className="w-2.5 h-2.5 rounded-full bg-ink-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink-line" />
      </div>
      {/* <div className="aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-ink-panel to-ink">
        <span className="font-mono text-xs tracking-widest2 uppercase text-bone-muted">{label}</span>
      </div> */}
      <div className="aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={label}
      className="w-full h-full object-cover"
      />
    </div>
    </div>
  )
}
