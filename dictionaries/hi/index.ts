/**
 * Hindi dictionary barrel.
 *
 * NOTE (CLAUDE.md §5): Hindi translation must be reviewed by a native
 * speaker before production launch. Files not yet translated below
 * fall back to English text but keep the canonical shape so TypeScript
 * stays happy. The launch checklist (plan §13) blocks deploy until this
 * is signed off.
 */
import about from "./about.json";
import appointment from "./appointment.json";
import careers from "./careers.json";
import common from "./common.json";
import contact from "./contact.json";
import doctors from "./doctors.json";
import emergency from "./emergency.json";
import errors from "./errors.json";
import facilities from "./facilities.json";
import footer from "./footer.json";
import gallery from "./gallery.json";
import home from "./home.json";
import insurance from "./insurance.json";
import international from "./international.json";
import legal from "./legal.json";
import meta from "./meta.json";
import nav from "./nav.json";
import resources from "./resources.json";
import services from "./services.json";
import testimonials from "./testimonials.json";

import type { Dictionary } from "../en";

export const hi: Dictionary = {
  about,
  appointment,
  careers,
  common,
  contact,
  doctors,
  emergency,
  errors,
  facilities,
  footer,
  gallery,
  home,
  insurance,
  international,
  legal,
  meta,
  nav,
  resources,
  services,
  testimonials,
};
