import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 756,
    owner: "Rock Connect",
    ownerLongName: "Rock Connect Ltd.",
    pairedWith: {
      endFreq: 786,
      startFreq: 776,
      type: "fddUp",
    },
    startFreq: 746,
    type: "fddDown",
  },
  {
    endFreq: 758,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 788,
      startFreq: 786,
      type: "fddUp",
    },
    startFreq: 756,
    type: "fddDown",
  },
  {
    details: ["Spectrum earmarked for a Public Safety Network."],
    endFreq: 768,
    owner: "MONS",
    ownerLongName: "Ministry of National Security",
    pairedWith: {
      endFreq: 798,
      startFreq: 788,
      type: "fddUp",
    },
    startFreq: 758,
    type: "fddDown",
  },
  {
    endFreq: 776,
    owner: "Unallocated",
    pairedWith: {
      endFreq: 806,
      startFreq: 798,
      type: "fddUp",
    },
    startFreq: 768,
    type: "fddDown",
  },
];

export default data;
