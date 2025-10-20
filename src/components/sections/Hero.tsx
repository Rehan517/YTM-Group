import React from 'react';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import { TickIcon, HeroPNG } from '@/assets';
import { Link } from 'react-router-dom';

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({
    className = '',
}) => {
    const features = [
        // "Same-day pre-approval guidance",
        // "Access to 50+ lenders & products",
        "Tailored plans for your goals",
        // "Fast, stress-free process",
        "Advice you can trust"
    ];


    return (
        <section
            className={cn(
                "relative bg-white py-6 sm:py-12 lg:py-16",
                className
            )}
        >
            <Container size="2xl" className="relative z-10">
                {/* Main Hero Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-start lg:items-center">

                    {/* Left Column - Content */}
                    <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                        {/* Top Tag - Hidden on mobile */}
                        <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 tracking-wide shadow-sm border border-gray-100">
                            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                            Trusted financial & legal experts
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-heading text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                            {/* Everything you need, under one roof */}
                            One Team, End-to-End Advice
                        </h1>

                        {/* Description */}
                        <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                            One trusted team for all your financial needs. We listen, tailor, and work hard to get you a better outcome.
                        </p>

                        {/* Feature List - Hidden on small screens */}
                        <div className="space-y-3 sm:space-y-4 hidden sm:block">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                                        <img
                                            src={TickIcon}
                                            alt="Tick"
                                            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                                        />
                                    </div>
                                    <span className="font-body text-gray-700 text-sm sm:text-base lg:text-lg">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button - Hidden on mobile, shown on desktop */}
                        <div className="hidden lg:flex justify-start">
                            <Link to="/contact">
                            <button className="font-body inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary-800 hover:bg-primary-900 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Book Free Consultation
                                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            </Link>
                            
                        </div>

                    </div>

                    {/* Right Column - Hero Image */}
                    <div className="relative">
                        <img
                            src={HeroPNG}
                            alt="YTM Group - Financial Planning Services"
                            className="w-full h-auto object-contain max-w-xl mx-auto"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* CTA Button - Mobile only (below image) */}
                <div className="lg:hidden flex justify-start">
                    <button className="font-body inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-primary-800 hover:bg-primary-900 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Book Free Consultation
                        <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default Hero; 
