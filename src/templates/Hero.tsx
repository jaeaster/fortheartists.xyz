import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <a>Services</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Complimentary\n'}
            {'Consultancy for\n'}
            <span className="text-primary-500">Artists</span>
          </>
        }
        description="Get help to advance your career!"
        button={
          <Link href="mailto:hello@fortheartists.xyz?subject=I Need Help With ...">
            <a>
              <Button xl>Contact</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
