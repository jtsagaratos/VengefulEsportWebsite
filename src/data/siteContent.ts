import colinImage from "../../images/logos/colin_logo.jpg";
import WizardImage from "../../images/logos/wiz_logo.jpg";
import wadaImage from "../../images/logos/wada_logo.jpg";
import leaderImage from "../../images/logos/leader_logo.jpg";
import deathImage from "../../images/logos/death_logo.jpg";
import affeckImage from "../../images/logos/affekting_logo.jpg";
import steadyImage from "../../images/logos/steady_logo.jpg";
import magiImage from "../../images/logos/magi_logo.jpg";
import FJImage from "../../images/logos/Flying_Jenn.png";
import aaptImage from "../../images/logos/aapt_image.png";
import icelineHostingImage from "../../images/logos/icelinehosting_cover.jpg";


export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Roster", href: "/roster" },
  { label: "Merch", href: "/merch" },
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
    image: wadaImage,
    imageZoom: 1.2,
    achievements: ["Won the Jay3 Community Clash Tournament", "Peaked rank 1 on leaderboard in season 4.5"],
  },
  {
    name: "Leader",
    role: "Duelist",
    bio: "Calculated Aggression",
    badges: ["Aggressive", "Lethal"],
    image: leaderImage,
    achievements: ["Reached top 20 in Hela Phoenix, and Psylocke", "Reached MRC top 16 in season 3"],
  },
    {
    name: "SteadyFPS",
    role: "Duelist (sub)",
    bio: "Sharp Execution",
    badges: ["Unstoppable", "Impactful"],
    image: steadyImage,
    achievements: ["TBD"],
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
    image: deathImage,
    achievements: ["Peaked Rank 1 with multiple Strategist", "Has reached MRC top 8 and top 3"],
  },
    {
    name: "Magidolaon",
    role: "Strategist (sub)",
    bio: "Defensive Mastery",
    badges: ["Poised", "Visionary"],
    image: magiImage,
    achievements: ["Placed MRC top 65", "Peaked 15th on Marvels Rivals Leaderboard"],
  },
];

export const merch = [
  { label: "Vengeful Pro Jersey", price: "$79", status: "Coming soon" },
  { label: "Stealth Hoodie", price: "$99", status: "Coming soon" },
  { label: "Icon Cap", price: "$39", status: "Coming soon" },
];

export const instagramFallbackPosts = [
  {
    id: "vngf-fallback-1",
    caption: "Scrim nights hit differently when the whole roster locks in.",
    permalink: "https://www.instagram.com/p/C7VNGF001/",
    mediaUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
    timestamp: "2026-02-24T18:00:00Z",
  },
  {
    id: "vngf-fallback-2",
    caption: "Coach Affekting leading the tactical whiteboard before qualifiers.",
    permalink: "https://www.instagram.com/p/C7VNGF002/",
    mediaUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1600&q=80",
    timestamp: "2026-02-20T03:30:00Z",
  },
  {
    id: "vngf-fallback-3",
    caption: "Content drop day—behind-the-scenes from our latest bootcamp.",
    permalink: "https://www.instagram.com/p/C7VNGF003/",
    mediaUrl: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80",
    timestamp: "2026-02-16T19:15:00Z",
  },
  {
    id: "vngf-fallback-4",
    caption: "Matchday fits ready. Which jersey are you rocking?",
    permalink: "https://www.instagram.com/p/C7VNGF004/",
    mediaUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
    timestamp: "2026-02-10T17:45:00Z",
  },
];

export const sponsors = [
  {
    name: "Iceline Hosting",
    logo: icelineHostingImage,
  },
  {
    name: "Your logo could be here!",
  },
];

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
    {
    name: "Hellfired",
    platform: "Twitch",
    url: "https://www.twitch.tv/hellfiredd1",
    channel: "Hellfired",
    isLive: false,
    logo: "/VNGFLogo_1.png",
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
