
export interface CallLog {
  id: string;
  customerName: string;
  duration: string;
  summary: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  timestamp: string;
  type: 'appointment' | 'inquiry' | 'transfer';
}

export interface BusinessConfig {
  name: string;
  industry: string;
  tone: 'professional' | 'friendly' | 'enthusiastic';
  voice: 'Zephyr' | 'Puck' | 'Charon' | 'Kore' | 'Fenrir';
  instructions: string;
}

export enum Page {
  LANDING = 'landing',
  DASHBOARD = 'dashboard'
}
