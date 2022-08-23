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
      description="Building meaningful connections in the art industry is crucial for artists and often results in successful collaborations. As part of its complimentary advisory services, For The Artists organizes introductions to best contacts for each artist according to their needs."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Legal Contracts and Agreements"
      description="Law is an integral part of the art industry that can often sound scary for artists. With a solid international background in intellectual property and art law, For The Artists is happy to review consignments, sales contracts, agency agreements or any other legal document while advising on issues like import/export taxes."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Social Media"
      description="In 2020, 87 percent of art buyers surveyed have claimed to use Instagram to find new artists, whereas 48 percent of respondents stated the same in 2016. The number keeps growing in 2022. For The Artists offers to oversee the social media accounts, especially Instagram pages for artists to generate sales and maintain a consistent social portfolio."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Project Management"
      description="For The Artists offers help to manage exhibitions or projects where deadlines, logistics, finances, or communications can become overwhelming at the beginning of an artist’s career. Being highly experienced in project management, For The Artists will advise and assist you every step of the way."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
