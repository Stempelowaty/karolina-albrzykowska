import { cn } from '@/app/utils'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="w-full bg-foreground text-background font-lexend flex flex-col items-center pt-5">
      <div className="flex flex-col items-center bg-background text-foreground w-36 h-24 justify-center rounded-xl">
        <h2 className="uppercase text-xs">Karolina</h2>
        <h2 className="uppercase text-xs">Albrzykowska</h2>
      </div>
      <nav className="flex flex-row items-center gap-16 px-16 py-5 w-full justify-end">
        <Link aria-label="home" href={'/'}>
          <p
            className={cn(
              'rounded-lg p-2 uppercase transition duration-300 group'
            )}
          >
            Strona
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
          </p>
        </Link>
      </nav>
    </div>
  )
}
