import type { Doctor } from "@/modules/doctors/core/types";
import { drAnanyaMishra } from "./dr-ananya-mishra";
import { drRakeshJena } from "./dr-rakesh-jena";
import { drSureshPatnaik } from "./dr-suresh-patnaik";

export const DOCTORS: Doctor[] = [drSureshPatnaik, drAnanyaMishra, drRakeshJena];
