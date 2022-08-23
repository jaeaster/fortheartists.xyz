import { Section } from '../layout/Section';

type IAboutProps = {};

const About = (_props: IAboutProps) => (
  <Section title="About" id="about">
    <p className="mt-6 text-xl leading-9">
      For The Artists is born out of the Founder’s ongoing passion for helping
      emerging artists and art students. In the 21st century, contemporary
      artists are given the task to do more than just to create art; where other
      aspects of art business like contracts, logistics, social media, and
      networking become more pressing concerns.
    </p>
    <p className="mt-6 text-xl leading-9">
      For The Artists is here to offer expertise in these issues and more, while
      the artists can concentrate on their creative processes without such
      worries.
    </p>
    <p className="mt-6 text-xl leading-9">
      The Founder has international experience in the art industry as a patron
      and collector, holding law diplomas from top universities in the world and
      a master’s degree in art business with distinction.
    </p>
  </Section>
);

export { About };
