import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ContactBand, metadata } from '@/components/chambers/site';
import { PRACTICE_AREAS, getPracticeArea } from '@/lib/practice-areas';

export const Route = createFileRoute('/practice-areas/$slug')({
  loader: ({ params }) => {
    const practiceArea = getPracticeArea(params.slug);
    if (!practiceArea) throw notFound();
    return practiceArea;
  },
  head: ({ loaderData }) =>
    metadata(loaderData.title, loaderData.description),
  notFoundComponent: PracticeAreaNotFound,
  errorComponent: PracticeAreaError,
  component: PracticeAreaPage,
});

function PracticeAreaPage() {
  const practiceArea = Route.useLoaderData();
  const Icon = practiceArea.icon;

  return (
    <main>
      <section className="bg-secondary border-b border-border">
        <div className="site-width py-16 md:py-20">
          <Link to="/practice-areas" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> All practice areas
          </Link>
          <p className="eyebrow text-muted-foreground mt-8 mb-5">Litigation practice · Kochi, Kerala</p>
          <div className="flex items-start gap-5">
            <Icon className="size-7 text-gold mt-2 shrink-0" />
            <div>
              <h1 className="page-heading max-w-3xl">{practiceArea.title}</h1>
              <p className="text-sm text-muted-foreground leading-7 max-w-2xl mt-6">{practiceArea.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="site-width section-space grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20">
        <div>
          <p className="eyebrow text-muted-foreground mb-4">The practice</p>
          <h2 className="section-title">Considered preparation.</h2>
          <p className="text-sm text-muted-foreground leading-7 mt-6">{practiceArea.overview}</p>
        </div>
        <div className="border-t border-gold pt-6">
          <p className="eyebrow text-muted-foreground mb-5">In scope</p>
          <ul className="space-y-4 text-sm">
            {practiceArea.scope.map((item) => (
              <li key={item} className="border-b border-border pb-4">{item}</li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground leading-6 mt-7">
            The availability of representation is subject to a conflict check, review of the matter and an express engagement with the chambers. No outcome is assured.
          </p>
        </div>
      </section>
      <div className="site-width pb-12">
        <Link to="/practice-areas" className="rule-link">View all practice areas <ArrowUpRight className="size-4" /></Link>
      </div>
      <ContactBand />
    </main>
  );
}

function PracticeAreaNotFound() {
  return (
    <main className="site-width section-space">
      <p className="eyebrow text-muted-foreground mb-4">Practice areas</p>
      <h1 className="section-title">Practice area not found</h1>
      <p className="text-sm text-muted-foreground leading-7 mt-4">There is no practice area at this address.</p>
      <Link to="/practice-areas" className="rule-link mt-7">Return to all practice areas <ArrowUpRight className="size-4" /></Link>
    </main>
  );
}

function PracticeAreaError() {
  return (
    <main className="site-width section-space">
      <p className="eyebrow text-muted-foreground mb-4">Practice areas</p>
      <h1 className="section-title">This page could not be displayed.</h1>
      <Link to="/practice-areas" className="rule-link mt-7">Return to all practice areas <ArrowUpRight className="size-4" /></Link>
    </main>
  );
}

export const practiceAreaSlugs = PRACTICE_AREAS.map((area) => area.slug);