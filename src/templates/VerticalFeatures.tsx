import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Services"
    id="services"
    descriptionComponent={() => (
      <>
        {'Get help with '}
        {[
          'networking',
          'collaborations',
          'legal contracts',
          'social media strategy',
          'project management',
        ].map((phrase, i) => (
          <>
            <span key={i} className="text-primary-500 font-bold">
              {phrase}
            </span>
            {', '}
          </>
        ))}
        {'and more.'}
      </>
    )}
  >
    <VerticalFeatureRow
      title="Networking and Collaborations"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Legal Contracts and Agreements"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Social Media"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Project Management"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
