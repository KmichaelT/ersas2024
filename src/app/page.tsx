import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoLia from '@/images/clients/lia/logo-light.svg'
import logomeetingline from '@/images/clients/meetingline/logo-light.svg'
import logoadam from '@/images/clients/adam/logo-light.svg'
import logogoogoot from '@/images/clients/googoot/logo-light.svg'
import logocapital from '@/images/clients/capital/logo-light.svg'
import logorea from '@/images/clients/REA/logo-light.svg'
import logorctDark from '@/images/clients/RCT/logo-dark.svg'
import logorctLight from '@/images/clients/RCT/logo-light.svg'
import logoatdoor from '@/images/clients/atdoor/logo-light.svg'
import logobolttekLight from '@/images/clients/bolttek/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['lia', logoLia],
  ['adam', logoadam],
  ['rea', logorea],
  ['rct', logorctLight],
  ['bolttek', logobolttekLight],
  ['meetingline', logomeetingline],
  ['atdoor', logoatdoor],
  ['capital', logocapital],
]

function Clients() {
  return (
    <div className="mt-24 bg-cyan-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Our Esteemed Clients
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="h-100">
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Transforming Visions into Reality"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Ersas, we leverage cutting-edge technology and creative design to deliver bespoke solutions that drive business growth and success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-cyan-950/5 transition hover:bg-cyan-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-cyan-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-cyan-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Elevating Your Business with Tailored Digital Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our expertise lies in transforming your vision into reality through high-end design and innovative software solutions, driving growth for small to medium-sized enterprises.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Branding">
              We craft compelling brand identities that resonate with your audience, elevating your market presence and fostering brand loyalty.
            </ListItem>
            <ListItem title="Web and App Development">
              Our bespoke web and app solutions are engineered for performance, delivering seamless, intuitive digital experiences that drive engagement.
            </ListItem>
            <ListItem title="UX/UI Design">
              Focused on user-centric design, we ensure every touchpoint is intuitive, engaging, and efficient, enhancing user satisfaction and conversion rates.
            </ListItem>
            <ListItem title="E-Commerce Solutions">
              Tailored e-commerce platforms that blend top-notch design with robust functionality, optimizing your online sales and customer experience.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Ersas is a design and web agency providing high-end design, web, and software solutions to small and medium-sized businesses.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-cyan-950 [text-wrap:balance] sm:text-7xl">
            Elevating Businesses with Premier Design & Tech
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Driving small and medium enterprises forward with bespoke design and cutting-edge software solutions.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'rct', logo: logorctDark }}
      >
        The team at Ersas exceeded our expectations, delivering a seamless user experience that significantly improved our customer engagement.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
