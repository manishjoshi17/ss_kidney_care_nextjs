import {
  ArrowRight,
  ArrowUpRight,
  CaretDown,
  CaretRight,
  ChatCircle,
  CheckCircle,
  Clock,
  Compass,
  Drop,
  EnvelopeSimple,
  FacebookLogo,
  FirstAid,
  Flask,
  Heartbeat,
  House,
  Hospital,
  InstagramLogo,
  Lightning,
  LinkedinLogo,
  List as ListIcon,
  MagnifyingGlass,
  MapPin,
  Phone,
  PlusCircle,
  Question,
  Quotes,
  ShieldCheck,
  Spinner,
  Star,
  Stethoscope,
  TestTube,
  Translate,
  Warning,
  WarningCircle,
  WhatsappLogo,
  X,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentProps, ComponentType } from "react";

type PhosphorIconProps = ComponentProps<typeof ArrowRight>;

const ICONS = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "caret-down": CaretDown,
  "caret-right": CaretRight,
  "chat": ChatCircle,
  "check": CheckCircle,
  "clock": Clock,
  "compass": Compass,
  "drop": Drop,
  "email": EnvelopeSimple,
  "facebook": FacebookLogo,
  "first-aid": FirstAid,
  "flask": Flask,
  "heartbeat": Heartbeat,
  "home": House,
  "hospital": Hospital,
  "instagram": InstagramLogo,
  "lightning": Lightning,
  "linkedin": LinkedinLogo,
  "menu": ListIcon,
  "search": MagnifyingGlass,
  "map": MapPin,
  "phone": Phone,
  "plus-circle": PlusCircle,
  "question": Question,
  "quote": Quotes,
  "shield-check": ShieldCheck,
  "spinner": Spinner,
  "star": Star,
  "stethoscope": Stethoscope,
  "test-tube": TestTube,
  "translate": Translate,
  "warning": Warning,
  "alert-circle": WarningCircle,
  "whatsapp": WhatsappLogo,
  "close": X,
  "youtube": YoutubeLogo,
} satisfies Record<string, ComponentType<PhosphorIconProps>>;

export type IconName = keyof typeof ICONS;

interface IconComponentProps extends Omit<PhosphorIconProps, "ref"> {
  name: IconName;
}

export function Icon({ name, weight = "regular", size = 20, ...rest }: IconComponentProps) {
  const Component = ICONS[name];
  return <Component aria-hidden weight={weight} size={size} {...rest} />;
}
