'use client';

import { teamMembers } from '@/lib/data';
import SectionHeading from '../ui/SectionHeading';
import TeamCard from '../ui/TeamCard';
import StaggerChildren from '../animations/StaggerChildren';
import FadeInUp from '../animations/FadeInUp';

export default function Team() {
  const acquisitions = teamMembers.filter((m) => m.division === 'Acquisitions');
  const assetManagement = teamMembers.filter((m) => m.division === 'Asset Management');

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="section-container">
        <FadeInUp className="mb-16">
          <SectionHeading label="Our Team" title="Leadership" centered />
        </FadeInUp>

        {/* Acquisitions */}
        <div className="mb-14">
          <FadeInUp>
            <h3 className="text-center text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase mb-8">
              Acquisitions
            </h3>
          </FadeInUp>
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {acquisitions.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </StaggerChildren>
        </div>

        {/* Asset Management */}
        <div>
          <FadeInUp>
            <h3 className="text-center text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase mb-8">
              Asset Management
            </h3>
          </FadeInUp>
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {assetManagement.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
