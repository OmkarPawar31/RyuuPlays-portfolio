export type VideoCategory = 'all' | 'minecraft-smp' | 'valorant' | 'minecraft-guides' | 'events-pvp';

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  category: VideoCategory;
  views: string;
  rawViews: number;
  duration: string;
  uploadDate: string;
  publishTimestamp: number;
  thumbnailUrl: string;
  featured?: boolean;
  retentionRate?: string;
  tags: string[];
  keyHighlight?: string;
}

export interface SocialLinkItem {
  id: string;
  platform: string;
  handle: string;
  url: string;
  followers: string;
  badge: string;
  logoImg?: string;
}

export interface ChannelStat {
  label: string;
  value: string;
  subtext: string;
}

export interface UploadSlot {
  day: string;
  timeUtc: string;
  format: string;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  partnershipType: string;
  budgetTier: string;
  projectTimeline: string;
  projectDetails: string;
}
