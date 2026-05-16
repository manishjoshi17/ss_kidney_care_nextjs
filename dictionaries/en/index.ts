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

export const en = {
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
} as const;

export type Dictionary = typeof en;
