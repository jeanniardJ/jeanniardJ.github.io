import React from 'react';
import { MailOpen, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto pt-16">
      <h2 className="text-3xl font-bold text-lab-primary border-b border-lab-primary/50 pb-4 mb-10 flex items-center justify-center gap-3">
        <MailOpen className="w-8 h-8 text-lab-cyan" />
        <span className="glow-text-primary">TRANSMIT_PACKET</span>
      </h2>

      <form
        action="mailto:jonathan@jja-dev.fr"
        method="post"
        encType="text/plain"
        className="glass-panel border border-lab-border p-8 rounded-sm space-y-6"
      >
        <div className="space-y-2">
          <label htmlFor="c-email" className="font-mono text-xs text-lab-primary block">
            Source Address (Your Email)
          </label>
          <input
            type="email"
            id="c-email"
            name="email"
            required
            placeholder=">> user@external-network.com"
            className="w-full bg-black/50 border border-lab-border focus:border-lab-primary text-lab-terminal p-3 text-sm rounded-sm outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="c-subject" className="font-mono text-xs text-lab-primary block">
            Packet Subject (Command/Query)
          </label>
          <input
            type="text"
            id="c-subject"
            name="subject"
            required
            placeholder=">> INITIATE_CONTACT_QUERY"
            className="w-full bg-black/50 border border-lab-border focus:border-lab-primary text-lab-terminal p-3 text-sm rounded-sm outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="c-body" className="font-mono text-xs text-lab-primary block">
            Payload (Message Body)
          </label>
          <textarea
            id="c-body"
            name="body"
            rows={6}
            required
            placeholder=">> Enter your full message payload here..."
            className="w-full bg-black/50 border border-lab-border focus:border-lab-primary text-lab-terminal p-3 text-sm rounded-sm outline-none transition-colors resize-none"
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-lab-terminal text-black font-mono text-sm font-bold uppercase hover:bg-[#00e87d] transition-colors flex items-center justify-center gap-3 rounded-sm shadow-md shadow-lab-terminal/30"
          >
            <Send className="w-5 h-5" />
            EXECUTE TRANSMISSION
          </button>
          <p className="text-center text-lab-muted font-mono text-[10px] mt-2">
            NOTE: L&apos;email sera envoyé à jonathan@jja-dev.fr via votre client email local.
          </p>
        </div>
      </form>
    </section>
  );
}
