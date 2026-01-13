<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1hKRFPDEmUKz5ysxH164yuR3B5gD4wwJD

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```env
   # Vapi Configuration (Required for voice calls)
   VITE_VAPI_PUBLIC_KEY=your_vapi_public_key_here
   VITE_VAPI_ASSISTANT_ID=your_assistant_id_here
   
   # Optional: For dynamic assistant creation
   VITE_VAPI_SERVER_KEY=your_vapi_server_key_here
   
   # Optional: Gemini API Key (for legacy integration)
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   Get your Vapi API keys from [Vapi Dashboard](https://dashboard.vapi.ai)

3. Run the app:
   ```bash
   npm run dev
   ```

## Vapi Integration

This application uses [Vapi](https://vapi.ai) for voice AI interactions. Visitors can talk directly to the AI receptionist on the website.

### Setup Steps:
1. Sign up for a Vapi account at [vapi.ai](https://vapi.ai)
2. Get your Public API Key from the dashboard
3. Create an assistant in the Vapi dashboard (or use dynamic creation with server key)
4. Add your credentials to `.env.local`
5. Configure your business settings in the Dashboard page
6. Test the voice call in the Demo section
