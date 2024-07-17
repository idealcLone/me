export const cls = (...strings: (undefined | null | string)[]) => {
  return strings.filter(Boolean).join(' ');
};
