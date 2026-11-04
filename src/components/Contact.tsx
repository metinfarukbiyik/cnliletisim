import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck } from 'react-icons/fa';
import { companyData } from '../data/companyData';
import Reveal from './Reveal';

const layers = [
  {
    code: 'L1',
    icon: FaPhone,
    label: 'Telefon',
    value: companyData.contact.phone,
    href: `tel:${companyData.contact.phone.replace(/[^\d+]/g, '')}`,
    color: '#1f6fe8',
  },
  {
    code: 'L2',
    icon: FaEnvelope,
    label: 'E-posta',
    value: companyData.contact.email,
    href: `mailto:${companyData.contact.email}`,
    color: '#0e95a3',
  },
  {
    code: 'L3',
    icon: FaMapMarkerAlt,
    label: 'Adres',
    value: companyData.contact.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyData.contact.address)}`,
    color: '#6d4bdc',
  },
];

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (v: string) => {
    try {
      await navigator.clipboard.writeText(v);
      setCopied(v);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-28 grid-paper" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container-custom grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <Reveal>
          <div className="eyebrow">04 · İletişim</div>
          <h2 className="section-title mt-4">
            Bir sonraki sahanız <em className="italic" style={{ color: 'var(--primary)' }}>bizimle</em> yayına girsin.
          </h2>
          <p className="mt-5 max-w-md text-[15.5px] leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
            Projeleriniz için profesyonel çözümler sunmaya hazırız. Bir arama, bir e-posta yeterli.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={layers[0].href} className="btn primary">
              Hemen Ara <span className="arrow">→</span>
            </a>
            <a href={layers[1].href} className="btn">
              E-posta Gönder
            </a>
          </div>

          <div
            className="mt-10 flex items-center gap-4 p-4 rounded-[3px]"
            style={{ background: 'var(--panel)', border: '1px solid var(--line)' }}
          >
            <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--green) 14%, transparent)' }}>
              <span className="absolute inset-0 rounded-full animate-ping" style={{ background: 'color-mix(in srgb, var(--green) 20%, transparent)' }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--green)' }} />
            </span>
            <div>
              <div className="mono text-[13px] font-extrabold tracking-[0.06em]" style={{ color: 'var(--ink-strong)' }}>
                7/24 TEKNİK DESTEK
              </div>
              <div className="text-[13.5px]" style={{ color: 'var(--ink-muted)' }}>
                Acil durumlar için hızlı müdahale ve çözüm odaklı hizmet.
              </div>
            </div>
          </div>
        </Reveal>

        {/* Packet-inspector style card */}
        <Reveal delay={0.1}>
          <div className="panel overflow-hidden">
            <div className="panel-head">
              İletişim Paketi
              <span className="ml-auto tag" style={{ ['--c' as string]: 'var(--green)' }}>
                ONLINE
              </span>
            </div>
            {layers.map(({ code, icon: Icon, label, value, href, color }, i) => (
              <div
                key={code}
                className="group relative flex items-start gap-4 px-5 py-5 transition-colors"
                style={{
                  borderTop: i ? '1px solid var(--line-soft)' : 'none',
                  background: `linear-gradient(90deg, color-mix(in srgb, ${color} 9%, transparent), transparent 80%)`,
                  boxShadow: `inset 3px 0 0 ${color}`,
                }}
              >
                <div
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-[3px]"
                  style={{ background: 'var(--panel)', border: `1px solid color-mix(in srgb, ${color} 40%, transparent)`, color }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mono text-[11px] font-extrabold tracking-[0.14em] uppercase" style={{ color }}>
                    {code} · {label}
                  </div>
                  <a
                    href={href}
                    target={code === 'L3' ? '_blank' : undefined}
                    rel={code === 'L3' ? 'noopener noreferrer' : undefined}
                    className="mt-1 block mono text-[14.5px] sm:text-[15.5px] font-semibold break-words hover:underline underline-offset-4"
                    style={{ color: 'var(--ink-strong)' }}
                  >
                    {value}
                  </a>
                </div>
                <button
                  onClick={() => copy(value)}
                  className="btn !h-8 !w-8 !p-0 flex-none opacity-70 group-hover:opacity-100"
                  aria-label={`${label} kopyala`}
                  title="Kopyala"
                >
                  {copied === value ? <FaCheck size={11} className="step-pop" style={{ color: 'var(--green)' }} /> : <FaCopy size={11} />}
                </button>
              </div>
            ))}
            {/* hex dump flavour */}
            <div
              className="mono text-[11px] leading-[1.7] px-5 py-3 overflow-hidden whitespace-nowrap"
              style={{ borderTop: '1px solid var(--line)', background: 'var(--panel-soft)', color: 'var(--ink-faint)' }}
              aria-hidden="true"
            >
              0000 &nbsp;43 4e 4c 20 49 4c 45 54 &nbsp;49 53 49 4d 20 54 52 42 &nbsp;CNL ILETISIM TRB
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
