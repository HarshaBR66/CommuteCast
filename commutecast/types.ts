
export interface NewsSummary {
  id: string;
  originalTitle: string;
  summaryText: string;
  createdAt: number;
}

export enum SummaryLength {
  SHORT = 'short',
  MEDIUM = 'medium',
  LONG = 'long'
}

export enum SummaryTone {
  PROFESSIONAL = 'professional',
  CASUAL = 'casual',
  ENTHUSIASTIC = 'enthusiastic'
}
