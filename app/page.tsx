import { Header } from '@/components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <Image src={'/banner.JPG'} alt={''} width={3300} height={1100} />
      <div className="font-lexend">eee cześć jestem kaurolina</div>
    </main>
  )
}
