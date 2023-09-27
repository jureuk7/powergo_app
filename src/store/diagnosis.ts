//make atom
import { atom } from "recoil";

export const diagnosisAtom = atom({
  key: "diagnosisAtom",
  default: {
    '기분': {
      strength: 0,
    },
    '스트레스': {
      strength: 0,
    },
    '체력': {
      strength: 0,
    },
    '건강': {
      strength: 0,
    },
    '식사': {
      strength: 0,
    },
    memo: '',
  }
});
