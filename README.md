# 🚀 Axiom Blastify

A unified, zero-bloat micro-notification utility for modern developer architecture. Send instant alerts across Discord, Telegram, or Email using a single, clean function execution. Stop spending hours configuring multiple heavy APIs just to make your local scripts talk to your phone.

## 🔥 Key Benefits
- **Zero Configuration Friction:** One uniform object payload controls all routing destinations.
- **Multi-Channel Dispatch:** Broadcast messages to separate targets simultaneously or selectively.
- **Ultra-Lightweight Implementation:** Built with minimal dependency overhead for execution tracking.

## 📦 How to Integrate It

```javascript
import { blast } from './index.js';

const config = {
    discordUrl: "[https://discord.com/api/webhooks/](https://discord.com/api/webhooks/)...",
    telegramToken: "123456:ABC...",
    telegramChatId: "987654321",
    email: "alerts@yourdomain.com",
    smtp: {
        host: "smtp.mailtrap.io",
        port: 587,
        user: "your_user",
        pass: "your_password"
    }
};

// Dispatch the notification to all active channels in one single line
await blast("🚨 Server anomaly detected on node-04.", config);
```
## 🛠️ Setup
2.​Clone the repository into your architecture framework.
​Initialize and verify operational dependencies:
```bash
npm install
```
3. ​Inject the **blast** execution block inside your automated event listeners, monitoring cronjobs, or financial trading bots.