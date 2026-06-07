import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

/**
 * Axiom Blastify - Unified Notification Engine
 * @param {string} message - El texto de la alerta que quieres enviar
 * @param {Object} channels - Los canales donde quieres que pite (discord, telegram, email)
 */
export async function blast(message, channels = {}) {
    console.log(`🚀 [Axiom Blastify] Desplegando alerta: "${message}"`);

    // 1. CANAL DISCORD (Vía Webhook)
    if (channels.discordUrl) {
        try {
            await fetch(channels.discordUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: message })
            });
            console.log('✅ Alerta enviada a Discord correctamente.');
        } catch (err) {
            console.error('❌ Error en canal Discord:', err.message);
        }
    }

    // 2. CANAL TELEGRAM (Vía Bot API)
    if (channels.telegramToken && channels.telegramChatId) {
        const url = `https://api.telegram.org/bot${channels.telegramToken}/sendMessage`;
        try {
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: channels.telegramChatId,
                    text: message
                })
            });
            console.log('✅ Alerta enviada a Telegram correctamente.');
        } catch (err) {
            console.error('❌ Error en canal Telegram:', err.message);
        }
    }

    // 3. CANAL EMAIL (Vía SMTP Directo)
    if (channels.email && channels.smtp) {
        try {
            let transporter = nodemailer.createTransport({
                host: channels.smtp.host,
                port: channels.smtp.port,
                secure: channels.smtp.port === 465,
                auth: {
                    user: channels.smtp.user,
                    pass: channels.smtp.pass
                }
            });

            await transporter.sendMail({
                from: channels.smtp.user,
                to: channels.email,
                subject: '🚨 Axiom Blastify Alert',
                text: message
            });
            console.log('✅ Alerta enviada por Email correctamente.');
        } catch (err) {
            console.error('❌ Error en canal Email:', err.message);
        }
    }
}
