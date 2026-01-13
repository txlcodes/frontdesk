
import React from 'react';
import { CallLog } from './types';

export const MOCK_CALL_LOGS: CallLog[] = [
  {
    id: '1',
    customerName: 'Alice Johnson',
    duration: '2:45',
    summary: 'Booked a root canal for next Tuesday at 2 PM. Verified insurance.',
    sentiment: 'positive',
    timestamp: '2024-05-20 14:30',
    type: 'appointment'
  },
  {
    id: '2',
    customerName: 'Robert Smith',
    duration: '1:12',
    summary: 'Asked about parking validation. Informed him of the garage structure.',
    sentiment: 'neutral',
    timestamp: '2024-05-20 15:15',
    type: 'inquiry'
  },
  {
    id: '3',
    customerName: 'Sarah Williams',
    duration: '4:20',
    summary: 'Complained about delayed appointment. Calmed her down and offered a discount.',
    sentiment: 'negative',
    timestamp: '2024-05-20 16:00',
    type: 'transfer'
  }
];

export const SYSTEM_INSTRUCTIONS = `
You are "FrontDesk AI", a professional and highly efficient voice receptionist for a business.
Your goal is to help callers by answering their questions, taking messages, or scheduling appointments.
- Keep responses concise and natural for voice conversation.
- If the user wants to book, ask for their name and preferred time.
- If you don't know an answer, offer to take a message for the manager.
- Always be polite and professional.
`;

export const FEATURES = [
  {
    title: '24/7 Availability',
    description: 'Never miss a call again. Your AI receptionist works round the clock, weekends, and holidays.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: 'Smart Scheduling',
    description: 'Integrates with your calendar to book, reschedule, or cancel appointments automatically.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  },
  {
    title: 'Human-Like Voice',
    description: 'Powered by the latest Gemini Live technology for natural, low-latency conversations.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
  }
];
