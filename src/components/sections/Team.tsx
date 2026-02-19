'use client';

import { teamMembers } from '@/lib/data';
import SectionLabel from '../ui/SectionLabel';
import TeamCard from '../ui/TeamCard';
import StaggerChildren from '../animations/StaggerChildren';
import FadeInUp from '../animations/FadeInUp';

export default function Team() {
  const acquisitions = teamMembers.filter((m) => m.division === 'Acquisitions');
  const assetManagement = teamMembers.filter((m) => m.division === 'Asset Management');

  return (
    <section id="team" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mt-4">
            Leadership
          </h2>
        </FadeInUp>

        {/* Acquisitions */}
        <div className="mb-14">
          <FadeInUp>
            <h3 className="text-center text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase mb-8">
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
            <h3 className="text-center text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase mb-8">
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
