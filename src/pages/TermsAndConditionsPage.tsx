import React from 'react';
import Container from '@/components/layout/Container';
import { SEOHead } from '@/components';
import { getSEOData, generateBreadcrumbs } from '@/config/seo.config';

const TermsAndConditionsPage: React.FC = () => {
  // Get SEO data for terms and conditions page
  const seoData = getSEOData('terms-and-conditions');
  const breadcrumbs = generateBreadcrumbs('/terms-and-conditions');

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
        ogType={seoData.ogType}
        twitterCard={seoData.twitterCard}
        structuredData={breadcrumbs}
      />

      {/* Terms and Conditions Content */}
      <section className="py-8 sm:py-12 lg:py-20">
        <Container size="xl">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <h1 className="font-heading text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800 mb-4 sm:mb-6">
              Website Terms and Conditions of Use
            </h1>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto">
            
            {/* Opening Statement */}
            <section className="mb-8 sm:mb-12">
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                In these Terms and Conditions of Use, the expressions we, us and our includes Australian Finance Group Ltd ABN 11 066 385 822 (AFG) Australian Credit Licence 389087 and any related entity.
              </p>
            </section>

            {/* Terms and Conditions of Use */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Terms and Conditions of Use
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  By accessing, viewing or otherwise using any of our websites, you acknowledge and agree to be subject to these Terms and Conditions of Use, our Privacy Policy and any other notices, disclaimers or terms and conditions contained on our websites, as amended or modified from time to time (together the Terms and Conditions of Use). If you do not accept our Terms and Conditions of Use you are not authorised to use our websites.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  These are our current Terms and Conditions of Use and they replace any others which have appeared previously on any of our websites. We may at any time vary these Terms and Conditions of Use by publishing the new version on our websites. By accessing any of our websites you are deemed to accept the current Terms and Conditions of Use displayed. We reserve any and all rights not expressly granted in these Terms and Conditions of Use.
                </p>
              </div>
            </section>

            {/* Calculators */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Calculators
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                Any calculators or information provided on our websites are provided for your convenience only and do not constitute either credit or financial advice. Information on our websites has been prepared without consideration of your particular circumstances and should be viewed as generic information only and not as indicating that you should follow a particular course of action.
              </p>
            </section>

            {/* Internet security risks */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Internet security risks
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                There may be security risks in sending information via the Internet. You should assess these potential risks when deciding whether to use our online services.
              </p>
            </section>

            {/* Links to other websites */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Links to other websites
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Our websites may contain links to other websites operated by third parties. We do not endorse or approve of the operators of any third party websites, or the information, graphics and material featured on third party websites. To the extent permitted by law, we accept no responsibility or liability and give no warranty in any way in respect of third party websites or the goods and services offered to you on any third party websites.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We may receive payments from operators or owners of third party websites in relation to goods or services supplied to you by them as a result of you linking to their website from ours.
                </p>
              </div>
            </section>

            {/* Use by persons outside of Australia */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Use by persons outside of Australia
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Our websites are provided for use by Australian residents only, and the products and services described in them are not directed at anyone in any country other than Australia. If you are not one of our customers and are accessing our websites from outside Australia, you must not submit or attempt to submit any online application or request. Online applications and requests for products initiated outside of Australia will not be accepted from anyone who is not an existing customer.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The information contained in our websites has been prepared in accordance with the laws applicable to the Commonwealth of Australia.
                </p>
              </div>
            </section>

            {/* Third party software */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Third party software
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Unless we tell you otherwise, any software you download from a third party website is their product and not ours. We point that out because some products may be subject to a licence agreement between you and them.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  To the extent permitted by law, we accept no responsibility or liability in respect of such third party products, provide no warranty, and give no endorsement in respect of such products or any party connected with them. We do, however, welcome your feedback or suggestions concerning them.
                </p>
              </div>
            </section>

            {/* No warranty or guarantee */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                No warranty or guarantee
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  While we have tried hard to make sure there are no mistakes in any of the information on our websites, we do not warrant that we have verified the information and we do not warrant the accuracy, adequacy or completeness of it or that the information is suitable for your intended use. Further, all information is subject to change without notice.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We recommend that you seek independent advice before acting upon any of the information on our websites.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We do not guarantee that our websites are free from viruses, or that access to our sites will be uninterrupted.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  You acknowledge and agree that your use of our websites is at your own risk. You must ensure that that the process which you use for accessing our websites does not expose you to the risk of viruses or other forms of interference which may damage your own computer system.
                </p>
              </div>
            </section>

            {/* Limitation of liability */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Limitation of liability
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Subject to any responsibilities which are implied by law and cannot be excluded, neither we, nor any of our employees, agents or officers are liable to you for any losses, damages, liabilities, claims or expenses (including but not limited to legal costs and defence or settlement costs) whether direct or indirect, whatsoever arising out of or referable to information on our websites or your use of our websites or any modification, suspension or discontinuance of our websites – whether in contract, tort including negligence, statute or otherwise.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Our liability for a breach of a condition or warranty implied by law or otherwise, and which cannot be excluded, is limited to the extent possible, at our option, to:
                </p>
                <ul className="space-y-2 font-body text-sm sm:text-base text-neutral-600 ml-4">
                  <li>• the resupply of the goods or services;</li>
                  <li>• the repair of the goods or services</li>
                  <li>• the payment of the cost of having the goods or services supplied again or repaired.</li>
                </ul>
              </div>
            </section>

            {/* Copyright and trademarks */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Copyright and trademarks
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The material on our websites is protected by copyright. Other than for the purposes and subject to the conditions prescribed under the Copyright Act 1968 (Cth), no part of it may in any form or by any means (electronic, mechanical, micro-copying, photocopying, recording, or otherwise) be reproduced, uploaded to a third party, linked to, framed, stored in a retrieval system or transmitted without our prior written permission.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  You also must not in any form or by any means commercialise any information, products or services obtained from our websites without our prior written permission. Our websites include registered trade marks owned by us (or our licensors). You must not use any of our trademarks in any way without our prior written consent.
                </p>
              </div>
            </section>

            {/* Linking to our websites */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Linking to our websites
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                You must not link to any of our websites without our prior written permission.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8 sm:mb-12">
              <div className="bg-neutral-50 rounded-lg p-6 sm:p-8">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                  Contact Us
                </h2>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                
                <div className="space-y-2 font-body text-sm sm:text-base text-neutral-600">
                  <p><strong>YTM Group</strong></p>
                  <p>Email: info@ytmgroup.com.au</p>
                  <p>Phone: (03) 7046 9786</p>
                  <p>Address: 1 Princess St, Kew VIC 3101, Australia</p>
                </div>
              </div>
            </section>

          </div>
        </Container>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;
