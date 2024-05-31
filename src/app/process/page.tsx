import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our process begins with a deep dive into understanding your unique business needs and goals. We work closely with you to gather insights and identify opportunities for growth and improvement.
        </p>
        <p>
          We conduct thorough market research, competitor analysis, and stakeholder interviews to ensure we have a comprehensive understanding of your industry landscape and business environment.
        </p>
        <p>
          This phase culminates in a detailed project plan and strategy, tailored to meet your specific objectives and set the stage for success.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Market Research</TagListItem>
        <TagListItem>Competitor Analysis</TagListItem>
        <TagListItem>Stakeholder Interviews</TagListItem>
        <TagListItem>Project Planning</TagListItem>
        <TagListItem>Strategy Development</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on our findings from the Discover phase, we move into the Build phase where we bring your vision to life. Our team of experts work diligently to design and develop solutions that align with your business goals.
        </p>
        <p>
          We ensure regular communication and collaboration, keeping you updated with progress and incorporating feedback to refine the final product. Our iterative approach ensures that we stay on track and deliver high-quality results.
        </p>
        <p>
          We utilize best practices and the latest technologies to create robust and scalable solutions that meet your needs today and in the future.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of atdoor' }}
        className="mt-12"
      >
        Ersas provided regular progress updates and maintained excellent communication throughout the project, ensuring we were always in the loop and satisfied with the development.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The final phase of our process is Deliver, where we ensure the successful launch and implementation of the project. We conduct rigorous testing and quality assurance to ensure everything functions as intended.
        </p>
        <p>
          We provide comprehensive training and support to your team, ensuring a smooth transition and empowering you to manage and sustain the solution independently.
        </p>
        <p>
          Our commitment to your success doesn’t end at launch. We offer ongoing support and maintenance services to ensure the continued performance and improvement of your solution.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Rigorous testing and quality assurance to ensure the highest standards of performance and reliability.
        </ListItem>
        <ListItem title="Infrastructure">
          Deployment on reliable and scalable infrastructure tailored to your needs.
        </ListItem>
        <ListItem title="Support">
          Comprehensive training and ongoing support to ensure your team is fully equipped to manage the solution.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We are committed to staying at the forefront of industry trends and technologies, while maintaining a strong foundation of reliability and integrity. Our core values guide every decision we make, ensuring we deliver exceptional results for our clients.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We pay close attention to detail in every aspect of our work, ensuring precision and excellence in everything we deliver.
          </GridListItem>
          <GridListItem title="Efficient">
            Our processes are designed for maximum efficiency, allowing us to meet deadlines and deliver high-quality results without unnecessary delays.
          </GridListItem>
          <GridListItem title="Adaptable">
            We understand that every business has unique needs, and we are flexible and adaptable to tailor our solutions to meet those needs effectively.
          </GridListItem>
          <GridListItem title="Honest">
            Transparency and honesty are at the core of our interactions with clients. We believe in open communication and building trust through integrity.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients, providing ongoing support and partnership to help them achieve sustained success.
          </GridListItem>
          <GridListItem title="Innovative">
            We are constantly seeking new ways to innovate and improve, leveraging the latest technologies and methodologies to stay ahead of the curve.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the best value to our clients. Our process is designed to ensure thorough understanding, meticulous development, and successful delivery of every project.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
