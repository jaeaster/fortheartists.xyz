import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Disclaimer = () => (
  <Section id="disclaimer">
    <CTABanner
      title="Disclaimer"
      description="
        While the Founder is currently employed by a commercial gallery, For The
        Artists is not affiliated with any gallery or business and is a personal
        project created by the Founder without seeking any profit or benefit
        from the artists or third parties."
    />
  </Section>
);

export { Disclaimer };
