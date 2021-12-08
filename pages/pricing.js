import Layout from '../components/Layout';
import OptionCards from '../components/pricing/OptionCards';
import HelpCard from '../components/pricing/HelpCard';
import Button from '@mui/material/Button';
import Image from 'next/image'

export default function Pricing() {
  return (
    <Layout>
      <main>
      <div>
        <h1>Your first five devices are always free.</h1>
        <Button>Sign up for free plan</Button>
      </div>
      <section>
        <div>
          <span>I want my plan to be billed</span>
          <Button variant="outlined">Monthly</Button>
          <Button variant="outlined">Yearly</Button>
        </div>
        <OptionCards />
        <div>A device is defined as lorem ipsum dolor sit amet consectatuer adipsicing elit.</div>
      </section>
      <section>
        <h2>Can't find a plan that works for you?</h2>
        <HelpCard />
        <Image src="/images/cartoon.png" alt="Cartoon" width={500} height={250}/>
      </section>
      </main>
      <footer>

      </footer>
    </Layout>
  );
}
