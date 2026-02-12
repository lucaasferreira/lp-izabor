export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  highlight: string;
  description: string;
  quote?: string;
}

export interface AiResponseState {
  loading: boolean;
  response: string | null;
  error: string | null;
}