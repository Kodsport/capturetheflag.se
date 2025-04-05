
export interface ContactInfo {
  email: string;
  website?: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  discord_invite_url: string;
}

export const contactInfo: ContactInfo = {
  email: "ctf-kongress@kodsport.se",
  website: "https://capturetheflag.se",
  discord_invite_url: "https://discord.gg/aG9NwuRs",
  social: {
    // github: "https://github.com/kodsport",
    // twitter: "https://twitter.com/kodsport",
    // linkedin: "https://linkedin.com/company/kodsport"
  }
};
