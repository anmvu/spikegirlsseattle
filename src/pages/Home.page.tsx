import { Instagram } from '@/components/Instagram/Instagram';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Facebook } from '@/components/Facebook/Facebook';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      {/* <Instagram/> */}
      {/* <Facebook/> */}
    </>
  )
}
