import { Inter } from 'next/font/google'
import CalcImc from './calcImc/CalcImc';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <CalcImc/>
    </div>
  )
}
