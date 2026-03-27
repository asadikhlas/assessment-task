export interface ProgressItem {
  label: string;
  completed: number;
  total: number;
  secondaryPercent?: number;
  enabled?: boolean;
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  scheduledText: string;
  lastActivity: string;
  monitorCount?: number;
  hasGuide?: boolean;
  progress: ProgressItem[];
}