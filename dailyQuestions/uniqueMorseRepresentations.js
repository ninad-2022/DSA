
const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

const uniqueMorseRepresentations = (words) => {
  return new Set(
    words.map((word) =>
      word
        .split("")
        .map((letter) => alphabet[letter])
        .join("")
    )
  );
};

const words1 = ["gin", "zen", "gig", "msg"];
const a = uniqueMorseRepresentations(words1);
console.log(' a : ',  a );
