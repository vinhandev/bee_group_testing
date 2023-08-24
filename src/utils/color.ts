function componentToHex(c: number) {
  let convertColor = c || 0;

  if (c > 255) {
    convertColor = 255;
  }
  if (c < 0) {
    convertColor = 0;
  }
  const hex = convertColor.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgb(r: number, g: number, b: number): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
