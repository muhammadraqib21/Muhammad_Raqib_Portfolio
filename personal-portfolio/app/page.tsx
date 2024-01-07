import LandingSection from "./components/LandingSection"
import './globals.css'

export default function Page() {
  // this is where the components will live
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container container mx-auto py-4"> 
      </div>
      <LandingSection/>
    </main>
  )
}