import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/homepage'


export default function Home() {
  return (
    <main className='min-h-screen'>
      <HomePage />
    </main>
  )
}
