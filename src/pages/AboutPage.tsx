import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@/components/layout/Container';
import {
  TeamGrid,
  OrganizationStructuredData,
  LocalBusinessStructuredData,
  PersonStructuredData,
  WebPageStructuredData,
  ReviewsSection,
  StrategyCTA
} from '@/components';
import { sampleTeamMembers } from '@/data';
import { 
  AboutPageImage,
  IntegrityIcon,
  ExcellenceIcon,
  EfficiencyIcon,
  PartnershipIcon,
  ExpertiseIcon,
  ResultsIcon
} from '@/assets';

const AboutPage: React.FC = () => {
  // Breadcrumb data for structured markup
  const breadcrumbs = [
    { name: 'Home', url: 'https://ytmgroup.com.au' },
    { name: 'About Us', url: 'https://ytmgroup.com.au/about' }
  ];

  return (
    <>
      {/* SEO and Structured Data */}
      <Helmet>
        <title>About Us - YTM Group | Financial Services Australia</title>
        <meta
          name="description"
          content="Learn about YTM Group's story, our experienced team, and our commitment to providing exceptional financial, legal, and business services across Australia."
        />
        <meta name="keywords" content="about YTM Group, financial services team, company story, mission, values, Australia" />
        <link rel="canonical" href="https://ytmgroup.com.au/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About YTM Group - Professional Financial Services Team" />
        <meta property="og:description" content="Meet our experienced team of financial advisors, mortgage brokers, and business consultants helping Australian families build generational wealth." />
        <meta property="og:url" content="https://ytmgroup.com.au/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ytmgroup.com.au/images/ytm-team.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About YTM Group - Professional Financial Services Team" />
        <meta name="twitter:description" content="Meet our experienced team helping Australian families build generational wealth." />
        <meta name="twitter:image" content="https://ytmgroup.com.au/images/ytm-team.jpg" />
      </Helmet>

      {/* Structured Data */}
      <WebPageStructuredData
        name="About YTM Group"
        description="Learn about YTM Group's story, our experienced team, and our commitment to providing exceptional financial, legal, and business services across Australia."
        url="https://ytmgroup.com.au/about"
        breadcrumbs={breadcrumbs}
      />

      <OrganizationStructuredData
        socialMedia={[
          'https://www.linkedin.com/company/ytm-group',
          'https://www.facebook.com/ytmgroup'
        ]}
      />

      <LocalBusinessStructuredData
        name="YTM Group"
        description="Professional financial services, legal advice, and business consulting for Australian families and businesses."
        address={{
          streetAddress: "1 Princess St",
          addressLocality: "Kew",
          addressRegion: "VIC",
          postalCode: "3101",
          addressCountry: "AU"
        }}
        telephone="+61-3-7046-9786"
        email="info@ytmgroup.com.au"
        url="https://ytmgroup.com.au"
        openingHours={["Mo-Fr 08:00-18:00"]}
        serviceArea={["Australia", "Victoria", "Melbourne", "Sydney"]}
      />

      {/* Person schema for each team member */}
      {sampleTeamMembers.filter(member => member.isActive).map(member => (
        <PersonStructuredData
          key={member.id}
          person={member}
          organizationName="YTM Group"
        />
      ))}



      {/* Company Story Section */}
      <section id="story" className="py-16 lg:py-5">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-neutral-800 mb-6">
          About YTM Group
              </h1>
              <div className="space-y-6 text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed">
                <p>
                  At YTM Group, we specialise in crafting personalised financial solutions tailored to your unique needs.
                </p>
                <p>
                  As a team of Mortgage advisers, financial planners, and lawyers, we empower individuals and families to build wealth, allowing them to focus on what brings happiness.
                </p>
                <p>
                  Whether you're buying your first home, refinancing, planning for retirement, or seeking business solutions, our accredited planners and advisers offer trusted, practical guidance in mortgages, financial planning, legal services, and business advisory.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              {/* About page 3D image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={AboutPageImage}
                  alt="YTM Group - About Us 3D Illustration"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="py-10 lg:py-20 bg-neutral-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-6xl font-bold text-neutral-800 mb-16">
              Our Mission & Values
            </h2>
            {/* <p className="text-lg text-neutral-600 leading-relaxed">
              We're driven by a simple mission: to empower our clients with the knowledge,
              tools, and strategies they need to build lasting wealth and secure their financial future.
            </p> */}
          </div>

          {/* 3D Plaque */}
          <div className="my-12 sm:my-16 lg:my-20 px-4 sm:px-0">
            {(() => {
              const mission = `To be the leading provider of integrated financial and legal services in Australia, empowering clients to achieve their financial goals with trusted expertise.`;

              return (
                <div
                  className="group relative mx-auto [perspective:1200px] sm:[perspective:1600px] max-w-4xl"
                  style={{
                    // Responsive depth/offset controls
                    // @ts-ignore
                    "--edge-x": "8px",
                    // @ts-ignore
                    "--edge-y": "10px",
                    // @ts-ignore
                    "--edge-x-sm": "12px",
                    // @ts-ignore
                    "--edge-y-sm": "15px",
                    // @ts-ignore
                    "--edge-x-lg": "14px",
                    // @ts-ignore
                    "--edge-y-lg": "18px",
                  }}
                >
                  {/* Floating quote disc - Corner positioning */}
                  <div className="pointer-events-none absolute -top-6 -left-6 sm:-top-7 sm:-left-7 lg:-top-8 lg:-left-8 z-20 h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 origin-bottom-left [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:-rotate-6">
                    <div className="relative h-full w-full rounded-full bg-white shadow-[0_8px_25px_-6px_rgba(0,0,0,0.2)] sm:shadow-[0_10px_30px_-6px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
                      {/* face */}
                      <div className="absolute inset-0 grid place-items-center rounded-full bg-gradient-to-br from-primary-700 to-primary-700 text-white">
                        <span className="text-lg sm:text-xl lg:text-2xl font-black">""</span>
                      </div>
                      {/* depth */}
                      <div className="absolute inset-0 -z-10 translate-x-1.5 translate-y-2 sm:translate-x-2 sm:translate-y-3 rounded-full bg-gradient-to-br from-primary-700 to-primary-700" />
                    </div>
                  </div>

                  {/* plaque wrapper with slight tilt on hover */}
                  <figure className="relative origin-center [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:rotate-y-[-2deg] sm:group-hover:rotate-y-[-4deg] group-hover:rotate-x-[1deg] sm:group-hover:rotate-x-[2deg]">
                    {/* top face */}
                    <blockquote className="relative z-10 rounded-2xl sm:rounded-3xl bg-white/95 p-6 sm:p-8 lg:p-12 shadow-[0_15px_45px_-15px_rgba(2,44,65,0.25)] sm:shadow-[0_20px_60px_-20px_rgba(2,44,65,0.35)] ring-1 ring-black/5">
                      {/* subtle inner highlight */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/60 to-transparent" />

                      <p className="relative text-balance text-center text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-800">
                        {mission}
                      </p>
                    </blockquote>

                    {/* extruded edge (acts like the side face) - Responsive */}
                    <div 
                      className="absolute inset-0 -z-10 rounded-2xl sm:rounded-[1.6rem] bg-gradient-to-br from-primary-400 to-primary-700 shadow-[0_20px_40px_-15px_rgba(59,197,243,0.4)] sm:shadow-[0_30px_60px_-20px_rgba(59,197,243,0.5)]"
                      style={{
                        transform: 'translateX(var(--edge-x)) translateY(var(--edge-y))',
                        // @ts-ignore
                        '--edge-x': '8px',
                        // @ts-ignore
                        '--edge-y': '10px',
                      }}
                    />

                    {/* base plinth shadow */}
                    <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 left-1/2 -z-20 h-4 sm:h-6 lg:h-8 w-[60%] sm:w-[70%] -translate-x-1/2 rounded-full bg-black/8 sm:bg-black/10 blur-lg sm:blur-xl" />
                  </figure>
                </div>
              );
            })()}
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-20">
            {[
              {
                title: "Integrity",
                description: "We operate with complete transparency and honesty, always putting our clients' interests first.",
                shortDescription: "Complete transparency and honesty in all we do.",
                icon: IntegrityIcon
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in everything we do, continuously improving our services.",
                shortDescription: "Highest standards with continuous improvement.",
                icon: ExcellenceIcon
              },
              {
                title: "Efficiency",
                description: "We respect your time with streamlined workflows, proactive updates, and swift turnarounds.",
                shortDescription: "Streamlined processes and swift turnarounds.",
                icon: EfficiencyIcon
              },
              {
                title: "Partnership",
                description: "We build long-term relationships with our clients, growing alongside their success.",
                shortDescription: "Long-term relationships built for success.",
                icon: PartnershipIcon
              },
              {
                title: "Expertise",
                description: "Our team brings decades of combined experience across all areas of financial services.",
                shortDescription: "Decades of financial services experience.",
                icon: ExpertiseIcon
              },
              {
                title: "Results",
                description: "We're committed to delivering measurable outcomes that make a real difference.",
                shortDescription: "Measurable outcomes that matter.",
                icon: ResultsIcon
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 sm:mb-4">
                  <img 
                    src={value.icon} 
                    alt={`${value.title} icon`}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  <span className="sm:hidden">{value.shortDescription}</span>
                  <span className="hidden sm:block">{value.description}</span>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 lg:py-20">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-6xl font-bold text-neutral-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our experienced professionals are dedicated to helping you achieve your financial goals
              with personalised service and expert guidance.
            </p>
          </div>

          <TeamGrid
            teamMembers={sampleTeamMembers}
            columns={{ mobile: 2, tablet: 2, desktop: 3 }}
            showModal={true}
          />
        </Container>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Strategy CTA Section */}
      <StrategyCTA />
    </>
  );
};

export default AboutPage; 
