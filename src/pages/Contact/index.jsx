import { ContactForm } from '../../hooks/contactHook';
import { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    document.title = 'Pokémon Moon | Contact us';
  }, []);

  return (
    <>
      <h3 className="p-2">Contact us</h3>
      <div className="flex flex-col md:flex-row m-auto justify-center gap-8">
        <div className="flex-initial">
          <div className="w-fit max-w-lg bg-slate-200 rounded-lg border border-red-950 p-2">
            <p className="p-1">
              Hello dear pokémon fan. We are glad that you have found your way
              to our community.
            </p>
            <p className="p-1">
              If you have encountered any problems during your time here on our
              community or wish to provide some general of feedback, we would
              appreciate it if you could fill out our contact form on this page.
              We will get back to you within 24 hours.
            </p>
            <p className="p-1">
              Until then we wish you an wonderful pokémon day!
            </p>
          </div>
        </div>
        <div className="flex-initial">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
