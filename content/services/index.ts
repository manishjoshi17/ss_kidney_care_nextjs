import type { Service } from "@/modules/services/core/types";
import { akiTreatment } from "./aki-treatment";
import { ckdManagement } from "./ckd-management";
import { criticalCareNephrology } from "./critical-care-nephrology";
import { diabeticKidneyDisease } from "./diabetic-kidney-disease";
import { dialysisCatheterPlacement } from "./dialysis-catheter-placement";
import { glomerulonephritis } from "./glomerulonephritis";
import { hemodialysis } from "./hemodialysis";
import { hypertensionRelatedKidneyCare } from "./hypertension-related-kidney-care";
import { kidneyBiopsy } from "./kidney-biopsy";
import { kidneyStones } from "./kidney-stones";
import { kidneyTransplantation } from "./kidney-transplantation";
import { permanentCatheterInsertion } from "./permanent-catheter-insertion";
import { preventiveKidneyHealth } from "./preventive-kidney-health";

// Order matches the brochure's specialty list, ending with Preventive Kidney Health
// (the one v1 service kept outside the strict 12 — see PLAN.md §1 service-catalogue decision).
export const SERVICES: Service[] = [
  ckdManagement,
  diabeticKidneyDisease,
  akiTreatment,
  glomerulonephritis,
  hypertensionRelatedKidneyCare,
  kidneyBiopsy,
  hemodialysis,
  permanentCatheterInsertion,
  dialysisCatheterPlacement,
  kidneyStones,
  kidneyTransplantation,
  criticalCareNephrology,
  preventiveKidneyHealth,
];
