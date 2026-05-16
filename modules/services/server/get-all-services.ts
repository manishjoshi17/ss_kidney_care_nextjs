import { SERVICES } from "@/content/services";
import type { Service } from "../core/types";

export function getAllServices(): Service[] {
  return SERVICES;
}
