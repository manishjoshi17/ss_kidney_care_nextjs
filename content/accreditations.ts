export interface Accreditation {
  name: string;
  short: string;
  year: number;
  body?: string;
}

export const ACCREDITATIONS: Accreditation[] = [
  { name: "National Accreditation Board for Hospitals", short: "NABH", year: 2018, body: "Quality Council of India" },
  { name: "ISO 9001:2015 Quality Management", short: "ISO 9001", year: 2019 },
  { name: "NABL Lab Accreditation", short: "NABL", year: 2020, body: "Quality Council of India" },
  { name: "Indian Society of Nephrology — recognised dialysis centre", short: "ISN", year: 2021 },
];
