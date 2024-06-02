import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import Link from 'next/link';
export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6   bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Say Hello
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our contact
              </h3>
              <dl className="mt-6 grid grid-cols-1 invert gap-8 text-sm sm:grid-cols-2">
  {[
    ['E-mail us', 'mailto:contact@ersas.co', 'contact@ersas.co'],
    ['Call us', 'tel:+19723718483', '+1 972 371 8483'],
  ].map(([label, href, display]) => (
    <div key={href}>
      <dt className="font-semibold text-neutral-950">{label}</dt>
      <dd>
        <Link href={href} className="text-neutral-600 hover:text-neutral-950">
          {display}
        </Link>
      </dd>
    </div>
  ))}
</dl>

            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
