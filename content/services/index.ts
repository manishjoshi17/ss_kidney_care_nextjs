import type { Service } from "@/modules/services/core/types";
import { akiTreatment } from "./aki-treatment";
import { ckdManagement } from "./ckd-management";
import { hemodialysis } from "./hemodialysis";
import { hypertensionDiabetesKidney } from "./hypertension-diabetes-kidney";
import { peritonealDialysis } from "./peritoneal-dialysis";
import { plasmapheresis } from "./plasmapheresis";
import { preventiveKidneyHealth } from "./preventive-kidney-health";

export const SERVICES: Service[] = [
  ckdManagement,
  hemodialysis,
  peritonealDialysis,
  akiTreatment,
  hypertensionDiabetesKidney,
  preventiveKidneyHealth,
  plasmapheresis,
];
