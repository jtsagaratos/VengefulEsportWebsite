import { instagramFallbackPosts } from "@/data/siteContent";

export type InstagramPost = {
  id: string;
  caption: string;
  permalink: string;
  mediaUrl: string;
  mediaType: string;
  timestamp: string;
};

type InstagramApiNode = {
  id: string;
  caption?: string;
  permalink?: string;
  media_url?: string;
  media_type?: string;
  thumbnail_url?: string;
  timestamp?: string;
};

type InstagramApiResponse = {
  data?: InstagramApiNode[];
};

const instagramFields =
  process.env.INSTAGRAM_FIELDS ?? "id,caption,permalink,media_url,thumbnail_url,media_type,timestamp";
const instagramApiUrl = process.env.INSTAGRAM_API_URL ?? "https://graph.instagram.com/me/media";

const normalizeTimestamp = (value?: string) => {
  if (!value) {
    return new Date().toISOString();
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
};

const formatFallback = () =>
  instagramFallbackPosts.map((post) => ({
    ...post,
    mediaType: "IMAGE",
    timestamp: normalizeTimestamp(post.timestamp),
  }));

async function fetchInstagramFeed(limit: number): Promise<InstagramPost[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) {
    return [];
  }

  try {
    const url = new URL(instagramApiUrl);
    url.searchParams.set("fields", instagramFields);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("access_token", accessToken);

    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) {
      console.error("Failed to fetch Instagram posts", response.status, response.statusText);
      return [];
    }

    const payload = (await response.json()) as InstagramApiResponse;
    return (payload.data ?? [])
      .map((node) => {
        const mediaUrl =
          node.media_type === "VIDEO" ? node.thumbnail_url ?? "" : node.media_url ?? node.thumbnail_url ?? "";
        if (!mediaUrl || !node.permalink) {
          return null;
        }
        return {
          id: node.id,
          caption: node.caption ?? "",
          permalink: node.permalink,
          mediaUrl,
          mediaType: node.media_type ?? "IMAGE",
          timestamp: normalizeTimestamp(node.timestamp),
        } satisfies InstagramPost;
      })
      .filter((post): post is InstagramPost => Boolean(post));
  } catch (error) {
    console.error("Unable to load Instagram posts", error);
    return [];
  }
}

export async function getInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  const instagramPosts = await fetchInstagramFeed(limit);
  if (instagramPosts.length) {
    return instagramPosts.slice(0, limit);
  }
  return formatFallback().slice(0, limit);
}
