import Image from 'next/image'
import CardForm from './components/CardForm/CardForm'
import CardContainer from './components/Card/CardContainer'
import { Padding } from '@mui/icons-material'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <CardForm/>
      </div>
      <br></br>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <CardContainer/>
      </div>
    </main>
  )
}
