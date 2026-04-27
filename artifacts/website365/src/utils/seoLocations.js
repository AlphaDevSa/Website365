import { allLocationKeywords, saProvinces } from './saLocations';

const provinceVariants = saProvinces.flatMap((p) => {
  const name = p.name.toLowerCase();
  const slugSpaced = p.slug.replace(/-/g, ' ');
  const abbr = p.abbr.toLowerCase();

  return [
    `${name} province`,
    `${slugSpaced} province`,
    `province of ${name}`,
    `province of ${slugSpaced}`,
    `za-${abbr}`,
  ];
});

export const seoLocations = Array.from(
  new Set([
    ...allLocationKeywords,
    ...provinceVariants,
    'republic of south africa',
    'rsa',
    'south african',
  ])
);
