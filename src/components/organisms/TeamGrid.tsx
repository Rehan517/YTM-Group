import React, { useState } from 'react';
import { TeamMember, Modal } from '@/components';
import type { TeamGridProps, TeamMember as TeamMemberType } from '@/types';

const TeamGrid: React.FC<TeamGridProps> = ({
  teamMembers,
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
  showModal = true,
  loading = false,
  className = '',
  ...props
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter only active team members
  const activeMembers = teamMembers.filter(member => member.isActive);

  const handleMemberExpand = (member: TeamMemberType) => {
    if (showModal) {
      setSelectedMember(member);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const getGridClasses = () => {
    const { mobile, tablet, desktop } = columns;
    return `grid gap-6 grid-cols-${mobile} md:grid-cols-${tablet} lg:grid-cols-${desktop}`;
  };

  if (loading) {
    return (
      <div className={`${getGridClasses()} ${className}`} {...props}>
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamMember
            key={index}
            teamMember={{} as TeamMemberType}
            loading={true}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Team Grid */}
      <div className={`${getGridClasses()} ${className}`} {...props}>
        {activeMembers.map((member, index) => (
          <TeamMember
            key={member.id}
            teamMember={member}
            variant="card"
            showCredentials={false}
            showContact={false}
            showLinkedIn={false}
            onExpand={showModal ? handleMemberExpand : undefined}
            className={`animate-fade-in-up animation-delay-${Math.min(index, 5) * 100}`}
          />
        ))}
      </div>

      {/* Empty State */}
      {activeMembers.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-neutral-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-neutral-600 mb-2">No team members found</h3>
          <p className="text-neutral-500">No team members available</p>
        </div>
      )}

      {/* Team Member Modal */}
      {showModal && selectedMember && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={`${selectedMember.name} - ${selectedMember.position}`}
          size="lg"
        >
          <TeamMember
            teamMember={selectedMember}
            variant="detailed"
            showCredentials={false}
            showContact={false}
            showFullBio={true}
            showLinkedIn={true}
            className="border-none shadow-none bg-transparent p-0"
          />
        </Modal>
      )}
    </>
  );
};

export default TeamGrid; 