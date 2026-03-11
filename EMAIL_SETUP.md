# Email Configuration Guide

This guide explains how to set up the email functionality for the Hayyat contact form.

## Overview

The contact form uses [Resend](https://resend.com/) to send emails. Resend is a reliable email API service that works seamlessly with Cloudflare Workers.

## Setup Instructions

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com/)
2. Sign up for a free account
3. The free tier includes:
   - 100 emails per day
   - 3,000 emails per month
   - No credit card required

### 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Hayyat Production")
5. Copy the API key (you won't be able to see it again!)

### 3. Configure Local Development

1. Update the `.dev.vars` file in the project root:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

2. The `.dev.vars` file is already in `.gitignore` to keep your API key secure

### 4. Configure Production (Cloudflare Workers)

For production deployment, you need to set the environment variable in Cloudflare:

#### Option A: Using Wrangler CLI

```bash
wrangler secret put RESEND_API_KEY
```

When prompted, paste your Resend API key.

#### Option B: Using Cloudflare Dashboard

1. Go to your Cloudflare dashboard
2. Navigate to **Workers & Pages**
3. Select your **hayyat-ai** worker
4. Go to **Settings** → **Variables**
5. Under **Environment Variables**, click **Add variable**
6. Name: `RESEND_API_KEY`
7. Value: Your Resend API key
8. Click **Encrypt** (recommended)
9. Click **Save**

### 5. Verify Domain (Optional but Recommended)

By default, Resend uses `onboarding@resend.dev` as the sender email. To use your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `hayyat.ai`)
4. Follow the DNS configuration instructions
5. Once verified, update `src/worker/routes/contact.ts`:
   ```typescript
   from: 'Hayyat Contact <contact@hayyat.ai>',
   ```

## Testing

### Local Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:5173/contact`
3. Fill out and submit the contact form
4. Check the console for any errors
5. Check your email at `info@hayyat.ai` for the contact form submission

### Production Testing

After deploying:
1. Visit your production URL + `/contact`
2. Submit a test form
3. Verify the email is received at `info@hayyat.ai`

## How It Works

1. **Frontend**: User fills out the contact form at `/contact`
2. **API Call**: Form submits to `/api/contact` endpoint
3. **Backend**: Hono route in `src/worker/routes/contact.ts` receives the data
4. **Email Service**: Resend API sends the email to `info@hayyat.ai`
5. **Response**: Success or error message is shown to the user

## Email Format

The email sent will include:
- **From**: Hayyat Contact Form (or your custom domain)
- **To**: info@hayyat.ai
- **Reply-To**: User's email address
- **Subject**: "Hayyat Contact: [User's Subject]"
- **Body**: Formatted with name, email, phone (if provided), subject, and message

## Troubleshooting

### "Email service is not configured" Error

- **Cause**: RESEND_API_KEY environment variable is not set
- **Solution**: Follow steps 3 or 4 above to configure the API key

### Emails Not Arriving

1. Check Resend dashboard for delivery logs
2. Verify API key is correct
3. Check spam folder
4. Ensure you haven't exceeded the free tier limits

### CORS Errors

- The API already has CORS enabled for `/api/*` routes
- If issues persist, check the browser console for specific errors

## Security Notes

- ✅ `.dev.vars` is in `.gitignore` (API keys never committed)
- ✅ Production API keys should be encrypted in Cloudflare
- ✅ Form validation on both frontend and backend
- ✅ Email addresses are validated with regex
- ✅ Reply-To header set to user's email for easy responses

## Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend with Cloudflare Workers](https://resend.com/docs/send-with-cloudflare-workers)
- [Cloudflare Workers Environment Variables](https://developers.cloudflare.com/workers/configuration/environment-variables/)
