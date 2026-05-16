import { DOCTORS } from "@/content/doctors";
import type { Doctor } from "../core/types";

export function getAllDoctors(): Doctor[] {
  return DOCTORS;
}
