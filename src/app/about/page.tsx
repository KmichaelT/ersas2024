import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/Developer_1.jpg'
import imageBenjaminRussel from '@/images/team/Developer_2.jpg'
import imageBlakeReid from '@/images/team/Front-end_developer.jpg'
import imageChelseaHagon from '@/images/team/Graphic designer.png'
import imageDriesVincent from '@/images/team/Project manager.jpg'
import imageEmmaDorsey from '@/images/team/UI_designer.jpg'
import imageMike from '@/images/team/mike.png'
import imageLeul from '@/images/team/leul.png'
import imageMiki from '@/images/team/miki.png'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 bg-cyan-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Culture"
        title="Balancing Creativity with Quality of Life"
        invert
      >
        <p>
          At Ersas, we are a team of passionate individuals driven by shared core values and a commitment to excellence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team is dedicated and committed, staying with us through every challenge and success, reflecting our strong bond and unified vision.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We foster an environment of trust and flexibility, valuing the quality of work and creativity over rigid schedules.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            Understanding and empathy are at the heart of our culture, ensuring a supportive environment where every team member thrives.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Michael Bekele',
        role: 'CEO & Lead Designer',
        image: { src: imageMike },
      },
      {
        name: 'Mikias Teshome',
        role: 'CTO & Lead Developer',
        image: { src: imageMiki },
      },
      {
        name: 'Dries Vincent',
        role: 'COO & Marketing Lead',
        image: { src: imageLeul },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Alemu Dagne',
        role: 'Lead Developer',
        image: { src: imageChelseaHagon },
      },{
        name: 'Abebe Mengistu',
        role: 'Project Manager',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Hana Bekele',
        role: 'Creative Director',
        image: { src: imageDriesVincent },
      },
      {
        name: 'Selam Fikru',
        role: 'Junior Designer',
        image: { src: imageBlakeReid },
      },
      
      {
        name: 'Yared Gebremariam',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Kebede Tadesse',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-cyan-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our Strength is Collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Ersas was founded by a group of talented youth who recognized the need for high-quality, cost-effective design and development solutions for small and medium-sized enterprises. From the outset, we have been dedicated to delivering exceptional value by focusing on our clients&apos; unique needs.
          </p>
          <p>
            At Ersas, we consider ourselves more than just colleagues; we are a family. Our collaborative culture ensures that every team member is supported and empowered to bring their best to work. We believe in balancing professional dedication with personal well-being, ensuring our team remains passionate and driven.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5+" label="Years in Business" />
          <StatListItem value="20+" label="Creative Projects Completed" />
          <StatListItem value="15+" label="Happy Clients" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the Blog"
        intro="Our team of experienced designers and developers is focused on transforming your ideas into impactful solutions. From conducting Brand Sprints to UX Design, we are dedicated to driving success for your business."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}

