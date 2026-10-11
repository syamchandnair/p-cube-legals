import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { ContactBand, metadata, PageIntro } from '@/components/chambers/site';
import { PRACTICE_AREAS } from '@/lib/practice-areas';

export const Route = createFileRoute('/practice-areas')({
  head: () => metadata(
    'Practice Areas',
    'Practice areas of P Cube Legals, Kochi: matters before the High Court of Kerala, District / Subordinate Courts and Specialized & Grassroots Courts.',
  ),
  component: PracticeAreas,
});

function PracticeAreas() {
  return (
    <main>
      <PageIntro
        eyebrow="Litigation Practice"
        title="Practice Areas"
        description="Proceedings before the High Court of Kerala, District / Subordinate Courts and Specialized & Grassroots Courts."
      />
      <div className="site-width section-space">
        <div className="grid md:grid-cols-2 gap-x-14">
          {PRACTICE_AREAS.map(({ icon: Icon, slug, title, description, overview }) => (
            <Link
              key={slug}
              to="/practice-areas/$slug"
              params={{ slug }}
              className="group border-t border-gold py-8 md:py-10 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center justify-between">
                <Icon className="size-6 text-gold" />
                <ArrowUpRight className="size-4 text-primary" />
              </div>
              <h2 className="text-3xl mt-5">{title}</h2>
              <p className="text-sm text-muted-foreground leading-7 mt-4">{overview}</p>
              <span className="rule-link mt-6">View practice details</span>
              <span className="sr-only">{description}</span>
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground leading-6 mt-8">
          The availability of representation is subject to a conflict check, review of the matter and an express engagement with the chambers. No outcome is assured.
        </p>
      </div>
      <ContactBand />
    </main>
  );
}