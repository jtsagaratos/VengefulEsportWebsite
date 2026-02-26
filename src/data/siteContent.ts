import colinImage from "../../images/logos/colin_image.png";
import WizardImage from "../../images/logos/wiz_image.jpg";
import FJImage from "../../images/logos/Flying_Jenn.png";
import aaptImage from "../../images/logos/aapt_image.png";
import affeckImage from "../../images/logos/affeck_image.png";

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
    image: WizardImage,
    achievements: ["Ended season 6 as rank 88", "Has reached MRC top 16, top 8, and top 6"],
  },
  {
    name: "Collin",
    role: "Vanguard",
    bio: "Unwavering Frontline",
    badges: ["Unbreakable", "Unyielding"],
    image: colinImage,
    achievements: ["Achieved top 10 with Emma and Groot", "Has reached MRC top 6 in season 4 and 5"],
  },
  {
    name: "Wada124",
    role: "Duelist",
    bio: "Steadfast Pressure",
    badges: ["Ruthless", "Surgical"],
    image: "/VNGFLogo_1.png",
    achievements: ["Finishes every season OAA", "Peaked rank 1 on leaderboard in season 4.5"],
  },
  {
    name: "Leader",
    role: "Duelist",
    bio: "Calculated Aggression",
    badges: ["Aggressive", "Lethal"],
    image: "/VNGFLogo_1.png",
    achievements: ["Reached top 20 in Hela Phoenix, and Psylocke", "Reached MRC top 16 in season 3"],
  },
  {
    name: "Affekting",
    role: "Strategist",
    bio: "Calm Underfire",
    badges: ["Reliable", "Strategic"],
    image: affeckImage,
    achievements: ["Season 2.5 Top 10 Loki/Invis/Luna", "Won MRC Season 1"],
  },
  {
    name: "Death.",
    role: "Strategist",
    bio: "Tempo Control",
    badges: ["Composed", "Consistent"],
    image: "/VNGFLogo_1.png",
    achievements: ["Peaked Rank 1 with multiple Strategist", "Has reached MRC top 8 and top 3"],
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
