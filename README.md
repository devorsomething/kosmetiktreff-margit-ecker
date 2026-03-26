# Kosmetiktreff Margit Ecker – Website

## Lead Score: 71/100 — TIER 1 (HEISS)

| Feld | Wert |
|---|---|
| **Lead Score** | 71/100 |
| **Tier** | TIER 1 – HEISS |
| **Pain Point** | Website aus frühem 2010er-Design – schreckt junge Frauen ab |
| **Umsatz-Potenzial** | Hoch – Bestandskundschaft toll, aber keine Akquise für neue Kundinnen |
| **Outreach-Winkel** | „Eure Stammkundschaft ist super — aber wie gewinnt ihr neue Kundinnen? Eure Website schreckt junge Frauen ab." |

---

## Ist-Analyse

### Website-Problem
- **Aktuelle Website:** Frühes 2010er-Design, unprofessionell, nicht mobiloptimiert
- **Wahrnehmung:** Veraltet, untrustwürdig — junge Frauen (< 35) buchen woanders
- **Trafik:** Wahrscheinlich fast nur Stammkundschaft über Empfehlung

### Was die neue Website löst
- Modernes, warmes Design das Vertrauen schafft (Lavendel/Creme/Rose-Farbschema)
- Mobil-optimiert — heutige Kundinnen suchen auf dem Handy
- Klare Leistungsübersicht mit Preisen
- Kontaktformular für Terminbuchungen
- Google Maps Integration
- Geschenkgutschein-Sektion für Upselling

### Zielgruppen-Expansion
| Vorher | Nachher |
|---|---|
| Nur Bestandskundschaft (40+) | + Junge Frauen 25–40 |
| Mundpropaganda | + Google-Suche „Kosmetik Bregenz" |
| Kein Online-Auftritt | + Instagram-/Social-ready Design |
| Veraltete Website | + Modern, schnell, professionell |

---

## Technische Details

- **Framework:** Next.js 15 + TypeScript
- **Styling:** Tailwind CSS v3
- **Fonts:** Cormorant Garamond (Headings) + DM Sans (Body)
- **Farbschema:** Soft Lavender (#E6E0F0) · Warm Cream (#FAF8F0) · Charcoal (#3D3D3D) · Soft Rose (#E8D5D5)
- **Bilder:** Unsplash (lizenzfrei)
- **Hosting:** Coolify (Docker)

---

## Deployment — Coolify

```bash
# 1. Auf den Server wechseln
cd /root/coolify

# 2. Neues Repository hinzufügen (GitHub)
#    Repo: https://github.com/YOUR_USERNAME/kosmetiktreff-margit-ecker
#    Branch: main
#    Build Command: npm install && npm run build
#    Start Command: npm start
#    Port: 3000

# 3. Oder via Coolify CLI (falls installiert):
coolify repository add https://github.com/YOUR_USERNAME/kosmetiktreff-margit-ecker

# 4. Umgebungsvariablen setzen:
#    NODE_ENV=production
```

### Coolify Docker Setup (Manual)

```dockerfile
# Dockerfile im Root erstellen:
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Docker Build:
docker build -t kosmetiktreff .
docker run -d -p 3000:3000 --name kosmetiktreff kosmetiktreff
```

---

## Kontakt-Daten (BITTE VERIFIZIEREN!)

> ⚠️ Die folgenden Daten sind **Platzhalter** und müssen mit den echten Daten ersetzt werden!

| Feld | Platzhalter | Status |
|---|---|---|
| **Telefon** | +43 664 123 4567 | ❌ Verifizieren |
| **Adresse** | Bregenz, Vorarlberg | ❌ Bitte eintragen |
| **Google Maps** | Bregenz | ❌ Echte Adresse eintragen |
| **Öffnungszeiten** | Mo–Fr 09:00–18:00 | ❌ Verifizieren |

---

## Nächste Schritte (To-Do)

- [ ] **Kontaktdaten verifizieren** — Telefon und echte Adresse eintragen
- [ ] **Google Maps iframe** einbauen — mit echter Adresse
- [ ] **Instagram/Snail** verlinken falls vorhanden
- [ ] **Google Business** Profile verifizieren und mit Website verknüpfen
- [ ] **SEO:** Meta-Tags, Open Graph, Local Business Schema
- [ ] **Domain** auf kosmetiktreff-ecker.at oder ähnlich registrieren
- [ ] **SSL-Zertifikat** über Coolify/Lets Encrypt
- [ ] **Bilder** durch echte Studio-Fotos ersetzen (mit Einwilligung)

---

## GitHub Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/kosmetiktreff-margit-ecker.git
git push -u origin main
```

---

## Design-Rationale

Das Design folgt bewusst einer **Warm-Personal-Wellness-Studio**-Ästhetik:

- **Farben:** Kein kaltes Clinical-White, sondern warme, einladende Töne
- **Typografie:** Cormorant Garamond (elegant, serif) für Überschriften; DM Sans (modern, clean) für Body-Text
- **Bilder:** Unsplash-Spa/Beauty-Bilder transportieren Entspannung und Professionalität
- **CTAs:** Dezent aber präsent — „Termin vereinbaren" und „Anrufen" nebeneinander
- **Tonfall:** Persönlich, einladend, nicht продавай-lastig

> Das Gefühl: *„In dieses Studio gehe ich seit Jahren, weil ich Margit kenne und ihr vertraue."*
