export type InsuranceType = "insurer" | "tpa";

export interface InsurancePartner {
  name: string;
  type: InsuranceType;
  cashlessSupported: boolean;
}

export const INSURANCE_PARTNERS: InsurancePartner[] = [
  { name: "Star Health", type: "insurer", cashlessSupported: true },
  { name: "HDFC ERGO", type: "insurer", cashlessSupported: true },
  { name: "ICICI Lombard", type: "insurer", cashlessSupported: true },
  { name: "Niva Bupa (Max Bupa)", type: "insurer", cashlessSupported: true },
  { name: "Care Health Insurance", type: "insurer", cashlessSupported: true },
  { name: "Bajaj Allianz", type: "insurer", cashlessSupported: true },
  { name: "Aditya Birla Health", type: "insurer", cashlessSupported: false },
  { name: "MD India", type: "tpa", cashlessSupported: true },
  { name: "Paramount Health Services", type: "tpa", cashlessSupported: true },
  { name: "Health India TPA", type: "tpa", cashlessSupported: true },
  { name: "Medi Assist", type: "tpa", cashlessSupported: true },
  { name: "Vidal Health TPA", type: "tpa", cashlessSupported: true },
];
