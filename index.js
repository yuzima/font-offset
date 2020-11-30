export default function getOffset({
  ascender,
  descender,
  unitsPerEm,
  sCapHeight,
}) {
  const bodyHeight = ascender - descender;
  const overflow = bodyHeight - unitsPerEm;
  const halfOverflow = overflow / 2;
  const bottom = (-descender - halfOverflow) / unitsPerEm;
  const top = (ascender - sCapHeight - halfOverflow) / unitsPerEm;

  return {
    top,
    bottom,
  };
}
