const tokenEndpoint = "https://id.twitch.tv/oauth2/token";
const streamsEndpoint = "https://api.twitch.tv/helix/streams";

const getEnv = (key: string) => process.env[key]?.trim();

export async function fetchLiveStatuses(channels: string[]): Promise<Record<string, boolean>> {
  if (!channels.length) {
    return {} as Record<string, boolean>;
  }

  const clientId = getEnv("TWITCH_CLIENT_ID");
  const clientSecret = getEnv("TWITCH_CLIENT_SECRET");

  if (!clientId || !clientSecret) {
    console.warn("Missing Twitch credentials; falling back to static stream data.");
    return {} as Record<string, boolean>;
  }

  try {
    const tokenResponse = await fetch(
      `${tokenEndpoint}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
      {
        method: "POST",
        cache: "no-store",
      },
    );

    if (!tokenResponse.ok) {
      console.error("Failed to retrieve Twitch token", tokenResponse.status, await tokenResponse.text());
      return {} as Record<string, boolean>;
    }

    const tokenJson = (await tokenResponse.json()) as { access_token?: string };
    const accessToken = tokenJson.access_token;

    if (!accessToken) {
      console.error("Twitch token response missing access_token");
      return {} as Record<string, boolean>;
    }

    const params = new URLSearchParams();
    channels.forEach((channel) => {
      params.append("user_login", channel.toLowerCase());
    });

    const streamsResponse = await fetch(`${streamsEndpoint}?${params.toString()}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Client-Id": clientId,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!streamsResponse.ok) {
      console.error("Failed to fetch Twitch streams", streamsResponse.status, await streamsResponse.text());
      return {} as Record<string, boolean>;
    }

    const streamsJson = (await streamsResponse.json()) as {
      data?: Array<{ user_login?: string; type?: string }>;
    };

    const liveStatuses: Record<string, boolean> = {};
    (streamsJson.data ?? []).forEach((stream) => {
      const login = stream.user_login?.toLowerCase();
      if (login && stream.type?.toLowerCase() === "live") {
        liveStatuses[login] = true;
      }
    });

    return liveStatuses;
  } catch (error) {
    console.error("Unexpected Twitch fetch error", error);
    return {} as Record<string, boolean>;
  }
}
