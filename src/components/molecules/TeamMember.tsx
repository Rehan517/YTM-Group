import React, { useState } from 'react';
import { UserIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { OptimizedImage } from '@/components/ui';
import type { TeamMemberProps } from '@/types';

const TeamMember: React.FC<TeamMemberProps> = ({
  teamMember,
  variant = 'card',
  showCredentials = true,
  showContact = false,
  showFullBio = false,
  showLinkedIn = true,
  onExpand,
  onContact,
  loading = false,
  className = '',
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  const handleExpand = () => {
    if (onExpand) {
      onExpand(teamMember);
    }
  };

  const handleContact = () => {
    if (onContact) {
      onContact(teamMember);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };


  const renderPhoto = () => {
    // Determine photo size based on variant
    const photoSizeClasses = variant === 'detailed' 
      ? 'w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto' // Smaller on mobile for modal, responsive sizing
      : 'w-full aspect-square max-w-32 sm:max-w-none mx-auto sm:mx-0'; // Smaller on mobile, full width on larger screens

    if (loading) {
      return (
        <div className={`${photoSizeClasses} bg-neutral-200 rounded-xl animate-pulse`} />
      );
    }

    if (imageError || !teamMember.photoUrl) {
      return (
        <div className={`${photoSizeClasses} bg-neutral-100 rounded-xl flex items-center justify-center`}>
          <UserIcon className="w-12 h-12 text-neutral-400" />
        </div>
      );
    }

    return (
      <div className={`relative ${photoSizeClasses} overflow-hidden rounded-xl bg-neutral-100`}>
        <OptimizedImage
          src={teamMember.photoUrl}
          alt={`${teamMember.name} - ${teamMember.position}`}
          className="transition-transform duration-300 group-hover:scale-105"
          objectFit="cover"
          onError={handleImageError}
          priority={false}
          placeholder="empty"
        />
      </div>
    );
  };

  const renderCredentials = () => {
    // Credentials have been removed from the data structure
    return null;
  };

  const renderContactInfo = () => {
    if (!showContact) return null;

    return (
      <div className="flex gap-3">
        {teamMember.email && (
          <button
            onClick={handleContact}
            className="flex items-center justify-center w-8 h-8 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors"
            aria-label={`Email ${teamMember.name}`}
          >
            <EnvelopeIcon className="w-4 h-4 text-primary-600" />
          </button>
        )}
        {teamMember.phone && (
          <a
            href={`tel:${teamMember.phone}`}
            className="flex items-center justify-center w-8 h-8 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors"
            aria-label={`Call ${teamMember.name}`}
          >
            <PhoneIcon className="w-4 h-4 text-primary-600" />
          </a>
        )}
      </div>
    );
  };

  const renderSpecializations = () => {
    if (!teamMember.specializations || teamMember.specializations.length === 0) {
      return null;
    }

    const visibleSpecs = variant === 'compact' 
      ? teamMember.specializations.slice(0, 3) 
      : teamMember.specializations;

    return (
      <div className="space-y-2">
        <h4 className={variant === 'detailed' ? 'text-sm sm:text-base font-medium text-neutral-700' : 'text-sm font-medium text-neutral-700'}>Specializations</h4>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {visibleSpecs.map((spec, index) => (
            <span
              key={index}
              className={variant === 'detailed' ? 'inline-block bg-neutral-100 text-neutral-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm break-words' : 'inline-block bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs'}
            >
              {spec}
            </span>
          ))}
          {variant === 'compact' && teamMember.specializations && teamMember.specializations.length > 3 && (
            <span className="inline-block bg-neutral-100 text-neutral-600 px-2 py-1 rounded text-xs">
              +{teamMember.specializations.length - 3} more
            </span>
          )}
        </div>
      </div>
    );
  };

  const baseClasses = `
    group relative bg-white rounded-2xl shadow-sm border border-neutral-200 
    hover:shadow-lg hover:border-neutral-300 transition-all duration-300
    ${onExpand ? 'cursor-pointer' : ''}
    ${className}
  `;

  const contentClasses = variant === 'compact' ? 'p-3 sm:p-4' : variant === 'detailed' ? 'p-4 sm:p-6 lg:p-8' : 'p-4 sm:p-6';

  if (loading) {
    return (
      <div className={baseClasses} {...props}>
        <div className={contentClasses}>
          <div className="w-full aspect-square bg-neutral-200 rounded-xl animate-pulse mb-4" />
          <div className="h-6 bg-neutral-200 rounded animate-pulse mb-2" />
          <div className="h-4 bg-neutral-200 rounded animate-pulse mb-4" />
          <div className="h-16 bg-neutral-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <article
      className={baseClasses}
      onClick={onExpand ? handleExpand : undefined}
      onKeyDown={(e) => {
        if (onExpand && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleExpand();
        }
      }}
      tabIndex={onExpand ? 0 : undefined}
      role={onExpand ? 'button' : undefined}
      aria-label={onExpand ? `View details for ${teamMember.name}` : undefined}
      {...props}
    >
      <div className={contentClasses}>
        {/* Photo */}
        <div className={variant === 'detailed' ? 'mb-3 sm:mb-4 lg:mb-6' : 'mb-3 sm:mb-4'}>
          {renderPhoto()}
        </div>

        {/* Basic Info */}
        <div className={variant === 'detailed' ? 'space-y-3 sm:space-y-4' : 'space-y-2 sm:space-y-3'}>
          <div>
            <h3 className={variant === 'detailed' ? 'text-lg sm:text-xl lg:text-2xl font-bold text-neutral-800 mb-2 break-words leading-tight' : 'text-base sm:text-lg font-bold text-neutral-800 mb-1'}>
              {teamMember.name}
            </h3>
            <p className={variant === 'detailed' ? 'text-primary-600 font-medium mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl break-words leading-tight' : 'text-primary-600 font-medium mb-1 sm:mb-2 text-sm sm:text-base'}>
              {teamMember.position}
            </p>
          </div>

          {/* Bio - Hidden on mobile for card variant only */}
          <div className={variant === 'detailed' ? 'block' : 'hidden sm:block'}>
            <p className={variant === 'detailed' ? 'text-neutral-600 text-sm sm:text-base lg:text-lg leading-relaxed break-words hyphens-auto' : 'text-neutral-600 text-sm leading-relaxed'}>
              {showFullBio ? teamMember.fullBio : teamMember.shortBio}
            </p>
            {!showFullBio && onExpand && teamMember.fullBio !== teamMember.shortBio && (
              <button
                className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpand();
                }}
              >
                Read more →
              </button>
            )}
          </div>

          {/* Mobile Read More Button - Only for card variant */}
          {onExpand && variant === 'card' && (
            <div className="sm:hidden">
              <button
                className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpand();
                }}
              >
                Read more →
              </button>
            </div>
          )}

          {/* Specializations - Hidden on mobile for card variant only */}
          <div className={variant === 'detailed' ? 'block' : 'hidden sm:block'}>
            {renderSpecializations()}
          </div>

          {/* Credentials */}
          {renderCredentials()}

          {/* Contact Info */}
          <div className="flex items-center justify-between pt-2 sm:pt-4">
            {renderContactInfo()}
            {showLinkedIn && teamMember.linkedInUrl && (
              <a
                href={teamMember.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                LinkedIn →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TeamMember; 