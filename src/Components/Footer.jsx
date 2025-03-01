import React from 'react';
import logo from "./../assets/LLoGGO.png";

function Footer() {
  return (
    <>
    <div className="p-6  bg-blue-500   dark:bg-gray-800 text-gray-100 dark:text-gray-300 md:max-w-full md:px-5">
      <div className="flex flex-col md:flex-row justify-between gap-6 ">
        {/* Logo Section */}
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company">
            <img src={logo} className="h-18 p-1 -mt-2 -ml-2 w-auto" alt="Company Logo" />
          </a>
        </div>
        
        {/* Footer Sections */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">

          {/* Useful Links */}
          <FooterSection title="Useful Links">
            {['Home','About Us',  'Our Products', 'EMI Calculator'].map((link) => (
              <FooterLink key={link} text={link} href="/" />
            ))}
          </FooterSection>

          {/* Contacts */}
          <FooterSection title="Contacts">
            <ContactInfo label="Phone:" value="+91 98998 82204" link="tel:+91 98998 82204" />
            <ContactInfo label="Email:" value="Yeshaenterprise2022@gmail.com" link="mailto:Yeshaenterprise2022@gmail.com" />
            <ContactInfo label="Address:" value="E 37 sector 3 Noida UP" link="https://maps.app.goo.gl/eEvP73qWoaFSBEW87" />
          </FooterSection>

          {/* Social */}
          <FooterSection title="Social">
            <SocialIcons />
            <p className="mt text-sm text-gray-200">Follow our social media for updates</p>

          </FooterSection>
        </div>
      </div>

      
    </div>
    </>

  );
}

const FooterSection = ({ title, children }) => (
  <div className="space-y-2 text-sm">
    <p className="text-base font-bold tracking-wide text-white dark:text-gray-200">{title}</p>
    <ul className="space-y-1">{children}</ul>
  </div>
);

const FooterLink = ({ text, href }) => (
  <li>
    <a href={href} className="hover:text-gray-300 dark:hover:text-gray-500">{text}</a>
  </li>
);

const ContactInfo = ({ label, value, link }) => (
  <div className="flex gap-0.5">
    <p className="mr-1 text-gray-50">{label}</p>
    <a href={link} className="transition-colors duration-300 text-gray-300 ">{value}</a>
  </div>
);

const SocialIcons = () => (
  <div className="flex items-center mt-1 space-x-3">
    {['facebook', 'instagram', 'linkedin'].map((platform) => (
      <a key={platform} href="/" className="text-gray-300 transition-colors duration-300 hover:text-gray-200">
        <SocialIcon platform={platform} />
      </a>
    ))}
  </div>
);

const SocialIcon = ({ platform }) => {
  const icons = {
    facebook:
      "M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h11v-9h-3v-4h3V8.4c0-3.1,1.9-4.8,4.7-4.8c1.3,0,2.5,0.1,2.8,0.1v3.2l-1.9,0c-1.5,0-1.8,0.7-1.8,1.8V11h4.4l-1,4h-3.4v9H22c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z",
    instagram:
      "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.7.7.7.4 1.3.9 1.7 1.7.4.7.6 1.5.7 2.7.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.7 2.7-.4.7-.9 1.3-1.7 1.7-.7.4-1.5.6-2.7.7-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.7-.7-.7-.4-1.3-.9-1.7-1.7-.4-.7-.6-1.5-.7-2.7-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .7-2.7.4-.7.9-1.3 1.7-1.7.7-.4 1.5-.6 2.7-.7 1.3-.1 1.7-.1 4.9-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.5-1.1 1.1-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.5.8 1.1 1.1.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.5 1.1-1.1.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.5-.8-1.1-1.1-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 4.2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.8a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zm6.8-2.4a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z",
    linkedin:
      "M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2zM8.3 18.1H5.2V9.3h3.1v8.8zM6.75 8c-.98 0-1.77-.8-1.77-1.77s.79-1.77 1.77-1.77S8.52 5.25 8.52 6.23C8.52 7.2 7.73 8 6.75 8zm11.35 10.1h-3.1v-4.8c0-1.1-.02-2.5-1.53-2.5s-1.76 1.2-1.76 2.4v4.9H9.6V9.3h2.97v1.2h.04c.41-.78 1.41-1.6 2.91-1.6 3.11 0 3.69 2 3.69 4.5v4.8z",
  };
  return <svg viewBox="0 0 24 24" fill="currentColor" className="h-8"><path d={icons[platform]} /></svg>;
};


export default Footer;
