import { Landmark, Scale, type LucideIcon } from 'lucide-react';

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  scope: readonly string[];
  icon: LucideIcon;
};

export const PRACTICE_AREAS: readonly PracticeArea[] = [
  {
    slug: 'appellate-proceedings',
    title: 'High Court appellate proceedings',
    shortTitle: 'Appellate proceedings',
    description:
      'Appellate proceedings before the High Court of Kerala, with preparation informed by the record, applicable statutory provisions and relevant judicial precedents.',
    overview:
      'The chambers handles appellate proceedings before the High Court of Kerala. Preparation includes examination of the record, applicable statutory provisions and relevant judicial precedents.',
    scope: ['Examination of the record', 'Applicable statutory provisions', 'Relevant judicial precedents'],
    icon: Landmark,
  },
  {
    slug: 'writ-petitions',
    title: 'Writ petitions & constitutional remedies',
    shortTitle: 'Writ petitions',
    description:
      'Writ petitions and constitutional remedies before the High Court of Kerala.',
    overview:
      'The chambers handles writ petitions before the High Court of Kerala. Preparation includes examination of the record, applicable statutory provisions and relevant judicial precedents.',
    scope: [
      'Writ petitions',
      'Constitutional remedies',
      'Applicable statutory provisions and relevant judicial precedents',
    ],
    icon: Landmark,
  },
  {
    slug: 'matrimonial-family-disputes',
    title: 'Matrimonial & family disputes',
    shortTitle: 'Matrimonial & family disputes',
    description: 'Matrimonial and family proceedings before local Family Courts.',
    overview:
      'The practice includes matrimonial and family proceedings before local Family Courts. Each matter is considered in the context of its facts, available records and applicable law.',
    scope: ['Matrimonial and family disputes', 'Pleadings, evidence and trial preparation'],
    icon: Scale,
  },
  {
    slug: 'maintenance-proceedings',
    title: 'Maintenance proceedings',
    shortTitle: 'Maintenance',
    description: 'Maintenance and related proceedings before local Family Courts.',
    overview:
      'The practice includes maintenance and related proceedings. Each matter is considered in the context of its facts, available records and applicable law.',
    scope: ['Maintenance and related proceedings', 'Pleadings, evidence and trial preparation'],
    icon: Scale,
  },
  {
    slug: 'custody-guardianship',
    title: 'Custody & guardianship matters',
    shortTitle: 'Custody & guardianship',
    description: 'Custody and guardianship matters before local Family Courts.',
    overview:
      'The practice includes custody and guardianship matters. Each matter is considered in the context of its facts, available records and applicable law.',
    scope: ['Custody and guardianship matters', 'Pleadings, evidence and trial preparation'],
    icon: Scale,
  },
];

export function getPracticeArea(slug: string) {
  return PRACTICE_AREAS.find((area) => area.slug === slug);
}