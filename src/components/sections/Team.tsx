'use client';

import { teamMembers } from '@/lib/data';
import { teamSection } from '@/lib/content';
import SectionHeading from '../ui/SectionHeading';
import TeamCard from '../ui/TeamCard';
import StaggerChildren from '../animations/StaggerChildren';
import FadeInUp from '../animations/FadeInUp';

export default function Team() {
  const acquisitions = teamMembers.filter((m) => m.division === 'Acquisitions');
  const assetManagement = teamMembers.filter((m) => m.division === 'Asset Management');
  const propertyManagers = teamMembers.filter((m) => m.division === 'Property Managers');

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="section-container">
        <FadeInUp className="mb-16">
          <SectionHeading label={teamSection.label} title={teamSection.title} centered />
        </FadeInUp>

        {/* Acquisitions */}
        <div className="mb-14">
          <FadeInUp>
            <h3 className="text-center text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase mb-8">
              {teamSection.divisions.acquisitions}
            </h3>
          </FadeInUp>
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {acquisitions.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </StaggerChildren>
        </div>

        {/* Asset Management */}
        <div className="mb-14">
          <FadeInUp>
            <h3 className="text-center text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase mb-8">
              {teamSection.divisions.assetManagement}
            </h3>
          </FadeInUp>
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {assetManagement.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </StaggerChildren>
        </div>

        {/* Property Managers */}
        <div>
          <FadeInUp>
            <h3 className="text-center text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase mb-8">
              {teamSection.divisions.propertyManagers}
            </h3>
          </FadeInUp>
          <StaggerChildren
            className={`grid gap-6 mx-auto ${
              propertyManagers.length === 1 ? 'max-w-sm' : 'md:grid-cols-2 max-w-3xl'
            }`}
          >
            {propertyManagers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
