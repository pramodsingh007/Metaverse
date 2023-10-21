import About from '@/components/About'
import EnterMetaverse from '@/components/EnterMetaverse'
import Explore from '@/components/Explore'
import FounderInfo from '@/components/FounderInfo'
import GetStarted from '@/components/GetStarted'
import Hero from '@/components/Hero'
import Insight from '@/components/Insight'
import MapWorld from '@/components/MapWorld'
import WhatsNew from '@/components/WhatsNew'



export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Explore/>
   <GetStarted/>
   <WhatsNew/>
   <MapWorld/>
   <Insight/>
   <FounderInfo/>
   <EnterMetaverse/>
   </>
  )
}
