import Link from 'next/link';
import { Metadata } from 'next';

import { Border } from '@/components/Border';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Offices } from '@/components/Offices';
import { PageIntro } from '@/components/PageIntro';
import { SocialMedia } from '@/components/SocialMedia';
import ContactForm from '@/components/ContactForm';

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-cyan-950">
        Our Contacts
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer calling or emailing us? please use the adresses below. you might also want to right them bown just in case.
      </p>

      {/* <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" /> */}

      <Border className="mt-4 pt-4">
        {/* <h2 className="font-display text-base font-semibold text-cyan-950">
          Email us
        </h2> */}
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['E-mail us', 'contact@ersas.co'],
            ['Call us', '+1 972 371 8483'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-cyan-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-cyan-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-cyan-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
};

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
}
