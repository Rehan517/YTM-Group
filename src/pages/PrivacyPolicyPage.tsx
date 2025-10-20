import React from 'react';
import Container from '@/components/layout/Container';
import { SEOHead } from '@/components';
import { getSEOData, generateBreadcrumbs } from '@/config/seo.config';

const PrivacyPolicyPage: React.FC = () => {
  // Get SEO data for privacy policy page
  const seoData = getSEOData('privacy-policy');
  const breadcrumbs = generateBreadcrumbs('/privacy-policy');

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

      {/* Privacy Policy Content */}
      <section className="py-8 sm:py-12 lg:py-20">
        <Container size="xl">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <h1 className="font-heading text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800 mb-4 sm:mb-6">
              Privacy Policy
            </h1>
            <p className="font-body text-sm sm:text-base text-neutral-500">
              This Privacy Policy was last updated on 30 June 2022.
            </p>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto">
            
            {/* Opening Statement */}
            <section className="mb-8 sm:mb-12">
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                In this Privacy Policy, the expressions we, us and our includes us and our aggregator Australian Finance Group Ltd ABN 11 066 385 822 ('AFG') Australian Credit Licence 389087 and its subsidiaries.
              </p>
            </section>

            {/* Our commitment to protect your privacy */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Our commitment to protect your privacy
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We understand how important it is to protect your personal information. This document sets out our privacy policy commitment in respect of personal information we hold about you and what we do with that information. It also includes our policy on the handling of credit reports and other credit information.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  During your relationship with us, we may tell you more about how we handle your personal information in application forms or terms and conditions, for example. You should read these documents carefully.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We recognise that any personal information we collect about you will only be used for the purposes we have collected it or as allowed by law. It is important to us that you are confident that any personal information we hold about you will be treated in a way that ensures protection of your personal information.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Our commitment in respect of personal information is to abide by the Australian Privacy Principles for the protection of personal information, as set out in the Privacy Act 1988 (Privacy Act), the Privacy (Credit Reporting) Code 2014 (Credit Reporting Code) and any other relevant laws.
                </p>
              </div>
            </section>

            {/* Personal information */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Personal information
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  When we refer to personal information we mean information from which your identity is reasonably apparent. This information may include information or an opinion about you.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The kinds of personal information we may collect about you include your name, date of birth, address, email address, phone number, account details, occupation, transaction history and any other information we made need to identify you.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If you are applying for finance we may also collect the ages and number of your dependants and cohabitants, the length of time at your current address, your employment details and proof of earnings and expenses, and your Tax File Number or tax residency status.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  When you visit our websites or use our mobile apps, we collect your location information, IP address, mobile device and network information and any third party sites you access. For more information on how we do this, see the heading 'Cookies' below.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The personal information we collect, hold and use may include Credit-related information.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  <strong>Credit-related information means:</strong>
                </p>
                <ul className="space-y-2 font-body text-sm sm:text-base text-neutral-600 ml-4">
                  <li>• Credit information is personal information or an opinion about you that has a bearing on credit that has been provided to you or that you have applied for. This includes information about your identify; the type, terms and maximum amount of credit provided to you, including when the credit was provided and when it was repaid; repayment history information, default information (including overdue payments); payment information; new arrangement information; financial hardship arrangement information including whether you have made a financial hardship arrangement with us; details of any serious credit infringements; court proceedings information; personal insolvency information and publicly available information; and</li>
                  <li>• Credit eligibility information, which is credit reporting information supplied to us by a credit reporting body, and any information that we derive from it.</li>
                </ul>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We use your Credit-related information to assess your eligibility to be provided with finance. Usually, Credit-related information is exchanged between credit and finance providers and credit reporting bodies.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If you want to make purchases from or through us we will also collect your payment information. We will also collect this information if we need to make payments to you. If you apply for employment with us we will collect information about your work history and ask your referees about you.
                </p>
              </div>
            </section>

            {/* Why we collect your personal information */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Why we collect your personal information
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We collect and receive personal information about you (including Credit-related information) in order to conduct our business including for the purposes of assessing your application for finance and managing that finance establishing your identity, contacting you, managing our risk, and to comply with our legal obligations. We may also collect your personal information for the purposes of direct marketing and managing our relationship with you. Improvements in technology also enable organisations like ours to collect and use information to get a more integrated view of our customers. From time to time we may offer you other products and services.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If you apply to become a finance broker with us or apply for employment with us, we will collect information about you to assist us to decide whether to appoint you and to thereafter manage relationship your relationship with us, including to offer other services and products to you.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We collect payment information in order to process your payments.
                </p>
              </div>
            </section>

            {/* How do we collect your personal information? */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                How do we collect your personal information?
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                Where reasonable and practicable we will collect your personal information directly from you. We may also collect information about that is publicly available, such as from public registers or social media, or made available by third parties. We may also collect your personal information from credit reporting bodies, finance brokers, employers and other people such as accountants, lawyers and referees.
              </p>
            </section>

            {/* Do we disclose your personal information? */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Do we disclose your personal information?
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We may disclose your personal information:
                </p>
                <ul className="space-y-2 font-body text-sm sm:text-base text-neutral-600 ml-4">
                  <li>• to existing or prospective funders or other intermediaries in relation to your finance requirements;</li>
                  <li>• to other guarantors, borrower and other security providers (if more than one);</li>
                  <li>• to borrowers or prospective borrowers, including in relation to any credit you guarantee or propose to guarantee;</li>
                  <li>• to other organisations that are involved in managing or administering your finance such as valuers, surveyors, third party suppliers, printing and postal services, call centres, lenders mortgage insurers, trade insurers, recovery firms, debt collectors, lawyers and credit reporting bodies;</li>
                  <li>• to our agents, contractors or external service providers to outsource certain functions, for example, statement production, debt recovery and information technology support;</li>
                  <li>• to businesses we have a relationship with that may want to market products to you;</li>
                  <li>• to companies that provide information and infrastructure systems to us;</li>
                  <li>• to anybody who represents you, such as finance brokers, lawyers, guardians, persons holding power of attorney and accountants;</li>
                  <li>• to anyone, where you have provided us consent;</li>
                  <li>• to our auditors, insurers, re-insurers and health care providers;</li>
                  <li>• to claims related providers, such as assessors and investigators who help us with claims;</li>
                  <li>• where we are required to do so by law, such as under the Anti-Money Laundering and Counter Terrorism Financing Act 2006 or in accordance with a subpoena or summons issued by a court;</li>
                  <li>• to organisations involved in our funding arrangements such as trustees, warehouse funders, investors, rating agencies, agents, auditors or advisers, or any entity that has an interest in our business or your finance; or</li>
                  <li>• to your current or previous employer, referees or identity verification services.</li>
                </ul>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Prior to disclosing any of your personal information to another person or organisation, we will take all reasonable steps to satisfy ourselves that:
                </p>
                <ul className="space-y-2 font-body text-sm sm:text-base text-neutral-600 ml-4">
                  <li>• the person or organisation has a commitment to protecting your personal information at least equal to our commitment, or</li>
                  <li>• you have consented to us making the disclosure.</li>
                </ul>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We use cloud storage to store personal information that we hold. The cloud storage and the IT servers may be located outside Australia.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We may disclose your personal information to overseas entities that provide support functions to us (including in USA, Canada, Malaysia, India, Ireland, the United Kingdom and the Philippines). You may obtain more information about these entities by contacting us.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  New technologies and data analytic software allows us to combine information we have about you and our other customers, with data sources, such as third party websites or the Australian Bureau of Statistics. We are able to analyse this data to learn more about you and other customers, and how to improve our products and service we provide to you. We may use this combined data to help other businesses better understand their customers, however we will not provide any personal information about you unless we are legally required to.
                </p>
              </div>
            </section>

            {/* Credit-related information */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Credit-related information
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We exchange Credit-related information for the purposes of assessing your application for finance and managing that finance. If you propose to be a guarantor, one of our checks may involve obtaining a credit report about you.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The credit-related information we hold about you may be held by us in electronic form on our secure servers and may also be held in paper form. We use cloud storage to store personal information and this credit-related information that we hold. The cloud storage and the IT servers may be located outside Australia.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  When we obtain credit eligibility information from a credit reporting body about you, we may also seek publicly available information and information about any serious credit infringement that you may have committed.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We may disclose your credit-related information to overseas entities that provide support functions to us (including in USA, Canada, Malaysia, India, Ireland, the United Kingdom and the Philippines). You may obtain more information about these entities by contacting us. If we disclose your credit-related information to entities that are located overseas, we ensure that appropriate data handling and security arrangements are in place.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The credit reporting bodes we use are Equifax Pty Ltd, Experian Australia Credit Services Pty Ltd and Illion Australia Pty Ltd. You can download a copy of their privacy policies at: equifax.com.au; experian.com.au; or illion.com.au.
                </p>
              </div>
            </section>

            {/* Notifiable matters */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Notifiable matters
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The law requires us to advise you of 'notifiable matters' in relation to how we may use your Credit-related information. You may request to have these notifiable matters (and this privacy policy) provided to you in an alternative form.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We exchange your Credit-related information with credit reporting bodies. We use the Credit-related information that we exchange with the credit reporting body to confirm your identity, assess your creditworthiness, assess your application for finance and manage your finance.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The credit reporting body may provide the information that we report about you to other credit providers to assist them to assess your credit worthiness. We may also obtain information that other credit providers have provided to the credit reporting body to use in our assessments of your credit-worthiness.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The information we may exchange with credit reporting bodies includes your identification details, what type of loans you have, how much you have borrowed, whether or not you have met your loan payment obligations and if you have committed a serious credit infringement (such as fraud).
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If you fail to meet your payment obligations in relation to any finance that we have provided or arranged or you have committed a serious credit infringement then we may disclose this information to a credit reporting body.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  You have the right to request access to the Credit-related information that we hold about you and make a request for us to correct that Credit-related information if needed. Please see the heading 'Access and correction to your personal and credit information' below.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Sometimes your Credit-related information will be used by credit reporting bodies for the purposes of 'pre-screening' credit offers on the request of other credit providers. You can contact the credit reporting body at any time to request that your Credit-related information is not used in this way.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  You may contact the credit reporting body to advise them that you believe that you may have been a victim of fraud. For a period of 21 days after the credit reporting body receives your notification the credit reporting body must not use or disclose that Credit-related information. You can contact any of the following credit reporting bodies for more information:
                </p>
                <ul className="space-y-2 font-body text-sm sm:text-base text-neutral-600 ml-4">
                  <li>• equifax.com.au,</li>
                  <li>• illion.com.au, or</li>
                  <li>• experian.com.au.</li>
                </ul>
              </div>
            </section>

            {/* Notifiable Data Breaches */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Notifiable Data Breaches
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The Privacy Act includes a Notifiable Data Breaches ('NDB') scheme which requires us to notify you and the Office of the Australian Information Commissioner ('OAIC') of certain data breaches and recommend steps you can take to limit the impacts of a breach (for example, a password change).
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The NDB scheme requires us to notify about a data breach that is likely to result in serious harm to affected individuals. There are exceptions where notification is not required. For example, where we have already taken appropriate remedial action that removes the risk of serious harm to any individuals.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If we believe there has been a data breach that impacts your personal information and creates a likely risk of serious harm, we will notify you and the OAIC as soon as practicable and keep in close contact with you about the nature of the breach, the steps we are taking and what you can do to reduce the impacts to your privacy. If you believe that any personal information we hold about you has been impacted by a data breach, you can contact us.
                </p>
              </div>
            </section>

            {/* Direct marketing */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Direct marketing
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  From time to time we may use your personal information to provide you with current information about finance offers you may find of interest, changes to our organisation, or new products or services being offered by us or any company with whom we are associated.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If you do not wish to receive marketing information, you may at any time decline to receive such information by emailing us. If the direct marketing is by email you may also use the unsubscribe function. We will not charge you for giving effect to your request and will take all reasonable steps to meet your request within a reasonable timeframe.
                </p>
              </div>
            </section>

            {/* Updating your personal information */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Updating your personal information
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  It is important to us that the personal information we hold about you, such as current home address, email address and phone number, is accurate and up to date. During the course of our relationship with you we may ask you to inform us if any of your personal information has changed.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If you wish to make any changes to your personal information, you may contact us. We will generally rely on you to ensure the information we hold about you is accurate and complete.
                </p>
              </div>
            </section>

            {/* Access and correction to your personal and credit information */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Access and correction to your personal and credit information
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We will provide you with access to the personal and Credit-related information we hold about you. You may request access to any of the personal information and Credit-related information we hold about you at any time.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We may charge a fee for our costs of retrieving and supplying the information to you.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Depending on the type of request that you make, we may respond to your request immediately. Otherwise, we usually respond to you within 30 days of receiving your request. We may need to contact other entities to properly investigate your request.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  There may be situations where we are not required to provide you with access to your personal information or Credit-related information, for example, if the information is commercially sensitive or relates to existing or anticipated legal proceedings, or if your request is vexatious.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  An explanation will be provided to you if we deny you access to the personal information or Credit-related information we hold about you.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If any of the personal information or Credit-related information we hold about you is incorrect, inaccurate or out of date you may request that we correct the information. If appropriate we will correct the personal or Credit-related information. Otherwise, we will provide an initial response to you within seven days of receiving your request. Where reasonable, and after our investigation, we will provide you with details about whether we have corrected your personal or credit-related information within 30 days.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We may need to consult with other entities as part of our investigation.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If we refuse to correct personal or Credit-related information we will provide you with our reasons for not correcting the information.
                </p>
              </div>
            </section>

            {/* Using government identifiers */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Using government identifiers
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                When we collect government identifiers, such as your tax file number, we do not use or disclose this information other than as required by law. We will never use a government identifier to identify you.
              </p>
            </section>

            {/* Business without identifying you */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Business without identifying you
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                In most circumstances it will be necessary for us to identify you in order to successfully do business with you, however, where it is lawful and practicable to do so, we will offer you the opportunity of doing business with us without providing us with personal information, for example, if you make general inquiries about interest rates or current promotional offers.
              </p>
            </section>

            {/* Sensitive information */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Sensitive information
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                We will only collect sensitive information about you with your consent. Sensitive information is personal information that includes information relating to your racial or ethnic origin, political persuasion, memberships in trade or professional associations or trade unions, sexual preferences, criminal record, or health or biometrics (for example, your fingerprints).
              </p>
            </section>

            {/* How safe and secure is your personal information that we hold? */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                How safe and secure is your personal information that we hold?
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                We will take reasonable steps to protect your personal information by storing it in a secure environment. We may store your personal information in paper and electronic form. We will also take reasonable steps to protect any personal information from misuse, loss and unauthorised access, modification or disclosure.
              </p>
            </section>

            {/* Complaints */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Complaints
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If you are dissatisfied with how we have dealt with your personal information or Credit-related information, or you have a complaint about our compliance with the Privacy Act and the Credit Reporting Code, you may contact us. We will acknowledge your complaint within seven days. We aim to provide you with a decision on your complaint within 30 days. We will let you know if we will take longer than 30 days and the relevant extension of time we will require to complete the complaints process.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  If you are dissatisfied with our response after you have been through the internal complaints process, you may make a complaint to our External Dispute Resolution Scheme, the Australian Financial Complaints Authority (AFCA) which can be contacted by phone on 1800 931 678, by email at info@afca.org.au, or in writing to GPO Box 3, Melbourne VIC 3001; or the OAIC which can be contacted on either www.oaic.gov.au or 1300 363 992.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Cookies
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  The information that we collect from you when you interact with us online depends on the tasks you complete on this website. When you visit and browse through the website, we collect general information that is not capable of identifying you for statistical and maintenance purposes that enables us to continually evaluate the performance of this website. This general information includes the number of users visiting this website and the number of pages viewed as well as the path taken through this website.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  This information is used to generate aggregated, anonymous information about how you and other users use this website and its features. For instance, we collect information about which pages on this website you visit most often, if you open or read the communications we send, which advertisements you view or interact with on this website or other websites on which our advertisements appear, and if you receive any error messages. The information collected may be used to improve users' online experience generally, to collate statistics, or customise your online experience by showing you content we think you will like. We do not collect information that identifies you personally; however, if you have a registration account with us, the information collected by us using the cookies may be associated with your registration account.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We also may allow third-party advertisers to place their cookies on your device through their advertisements on this website. The information these third-party cookies collect is used to determine which third-party advertisements to display on this website, how often to display them, and in which locations of this websites the third-party advertisements perform best. These third-party cookies do not collect information that identifies you personally.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Any information, which is not capable of identifying you, is collected through code embedded in the webpages of this website. You cannot disable the code on these pages.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Other information, such as browser type, is included in a 'cookie' that is sent to your computer when you are completing certain tasks on this website. A cookie contains bits of information that enables our servers (i.e. the computers that house this website) to identify and interact efficiently with your computer. Cookies are designed to provide a better, more customised website experience, and to make it easier for you to use this website.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  You can configure your browser to either accept all cookies, reject all cookies or to notify you when a cookie is being sent to your computer. The 'help function' on your browser will provide you with details on how to change your browser configurations. You will need to accept cookies in order to use some functionality on this website. If you do not wish to receive any cookies you may set your browser to refuse them. However, your use of our website may be affected.
                </p>
              </div>
            </section>

            {/* Further information */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Further information
              </h2>
              
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                You may request further information about the way we manage your personal or credit information by contacting us.
              </p>
            </section>

            {/* Change in our privacy policy */}
            <section className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Change in our privacy policy
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We are constantly reviewing all of our policies and attempt to keep up to date with market expectations. Technology is constantly changing, as is the law and market place practices.
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                  As a consequence, we may change this privacy policy from time to time or as the need arises. You may request this privacy policy in an alternative form.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8 sm:mb-12">
              <div className="bg-neutral-50 rounded-lg p-6 sm:p-8">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
                  Contact Us
                </h2>
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

export default PrivacyPolicyPage;
