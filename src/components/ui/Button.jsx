import { ArrowUpRight } from 'lucide-react'

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'ghost'
  icon = true,
  type = 'button',
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide transition-all duration-300 ease-editorial focus-visible:outline-brass-bright'
  const styles =
    variant === 'primary'
      ? 'bg-brass text-ink hover:bg-brass-bright'
      : 'border border-ink-line text-bone hover:border-brass hover:text-brass'

  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={`group ${base} ${styles} ${className}`} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`group ${base} ${styles} ${className}`} {...rest}>
      {content}
    </button>
  )
}
