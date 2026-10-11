export type Partner = {
  id: string;
  name: string;
  title: string;
  description: string;
  specialisations: readonly string[];
  /** File name inside src/assets/partners/, e.g. "jane-doe.jpg". Omit to show the placeholder. */
  photo?: string;
};

// To add or edit a partner, change this list (and drop the photo into src/assets/partners/).
// The chambers page renders three partners per row and wraps automatically.
export const PARTNERS: readonly Partner[] = [
  {
    id: 'partner-1',
    name: 'Partner 1',
    title: 'Title to be confirmed',
    description: 'Profile and areas of specialisation will be added after verification by the chambers.',
    specialisations: [],
  },
  {
    id: 'partner-2',
    name: 'Partner 2',
    title: 'Title to be confirmed',
    description: 'Profile and areas of specialisation will be added after verification by the chambers.',
    specialisations: [],
  },
  {
    id: 'partner-3',
    name: 'Partner 3',
    title: 'Title to be confirmed',
    description: 'Profile and areas of specialisation will be added after verification by the chambers.',
    specialisations: [],
  },
];

const photos = import.meta.glob<string>('/src/assets/partners/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function getPartnerPhoto(photo?: string) {
  return photo ? photos[`/src/assets/partners/${photo}`] : undefined;
}
