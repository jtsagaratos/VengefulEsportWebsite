import colinImage from "../../images/logos/colin_image.png";
import WizardImage from "../../images/logos/wiz_image.jpg";
import FJImage from "../../images/logos/Flying_Jenn.png";
import aaptImage from "../../images/logos/aapt_image.png";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Roster", href: "/roster" },
  { label: "Merch", href: "/merch" },
  { label: "News", href: "/news" },
];

export const roster = [
  {
    name: "WizardDread",
    role: "Captain/Vanguard",
    bio: "Precision shot-caller",
    badges: ["Relentless", "Fearless"],
  },
  {
    name: "Collin",
    role: "Vanguard",
    bio: "Unwavering Frontline",
    badges: ["Unbreakable", "Unyielding"],
  },
  {
    name: "Wada124",
    role: "Duelist",
    bio: "Steadfast Pressure",
    badges: ["Ruthless", "Surgical"],
  },
  {
    name: "Leader",
    role: "Duelist",
    bio: "Calculated Aggression",
    badges: ["Aggressive", "Lethal"],
  },
  {
    name: "Affekting",
    role: "Strategist",
    bio: "Calm Underfire",
    badges: ["Reliable", "Strategic"],
  },
  {
    name: "Death.",
    role: "Strategist",
    bio: "Tempo Control",
    badges: ["Composed", "Consistent"],
  },
];

export const merch = [
  { label: "Vengeful Pro Jersey", price: "$79", status: "Coming soon" },
  { label: "Stealth Hoodie", price: "$99", status: "Coming soon" },
  { label: "Icon Cap", price: "$39", status: "Coming soon" },
];

export const news = [
  {
    title: "Vengeful punches ticket to Champions",
    date: "January 25, 2026",
    summary: "A flawless lower-bracket run locks our Worlds slot.",
  },
  {
    title: "State-of-the-art training facility revealed",
    date: "December 18, 2025",
    summary: "7000 sq. ft. performance center launches in Los Angeles.",
  },
];

export const sponsors = ["Email us for sponsorship information!", "Your logo could be here!"];

export const streams = [
  {
    name: "Collin",
    platform: "Twitch",
    url: "https://www.twitch.tv/fpscollin",
    channel: "fpscollin",
    isLive: true,
    logo: colinImage,
  },
  {
    name: "Wada124",
    platform: "Twitch",
    url: "https://www.twitch.tv/wada124",
    channel: "wada124",
    isLive: false,
    logo: "/VNGFLogo_1.png",
  },
  {
    name: "WizardDread",
    platform: "Twitch",
    url: "https://www.twitch.tv/wizarddread_",
    channel: "wizarddread_",
    isLive: false,
    logo: WizardImage,
  },
  {
    name: "FlyingJenn",
    platform: "Twitch",
    url: "https://www.twitch.tv/flyingJenn",
    channel: "flyingjenn",
    isLive: false,
    logo: FJImage,
  },
  {
    name: "aapt",
    platform: "Twitch",
    url: "https://www.twitch.tv/itzaapt",
    channel: "itzaapt",
    isLive: false,
    logo: aaptImage,
  },
];

export const scheduleEvents = [
  {
    title: "MRC Season 6",
    opponent: "C.M.B",
    date: "2026-02-28T17:00:00-08:00",
    location: "Marvel Rivals Championships",
    stage: "Double Elimination Round",
  },
  {
    title: "MRC Season 6",
    opponent: "TBD",
    date: "2026-03-01T19:30:00-08:00",
    location: "Marvel Rivals Championships",
    stage: "Double Elimination Round",
  },
  {
    title: "MRC Season 6",
    opponent: "TBD",
    date: "2026-03-07T19:30:00-08:00",
    location: "Marvel Rivals Championships",
    stage: "Double Elimination Round",
  },
    {
    title: "MRC Season 6",
    opponent: "TBD",
    date: "2026-03-14T19:30:00-08:00",
    location: "Marvel Rivals Championships",
    stage: "Best of 5",
  },
      {
    title: "MRC Season 6",
    opponent: "TBD",
    date: "2026-03-15T19:30:00-08:00",
    location: "Marvel Rivals Championships",
    stage: "Best of 5",
  },
];
