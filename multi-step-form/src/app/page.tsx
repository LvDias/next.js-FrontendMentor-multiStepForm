import { Ubuntu } from '@next/font/google'

import ComponentBack from './components/back'
import ComponentFront from './components/front'

const ubuntu = Ubuntu({
  weight: [
    '400',
    '500',
    '700',
  ],
  subsets: ['latin'],
})

export default function Home() {

  return (
    
    <main className={`
      ${ubuntu.className} 
      w-screen h-screen
      flex items-start justify-center 
      `
    }>

      <ComponentBack />
      <ComponentFront />

    </main>

  )

}
