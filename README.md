# F1 Stats Hub

Eine moderne Webanwendung zur Anzeige von Formel 1 Statistiken, Fahrern und Rennergebnissen.

## Features
*Currently Nor Working*
- 🏎️ Aktuelle F1-Fahrerübersicht
- 📊 Detaillierte Fahrerstatistiken
- 🏁 Rennkalender und Ergebnisse
- 🔍 Echtzeit-Suchfunktion
- 🌐 Live-API-Integration

## Schnellstart

### Automatische Installation (Empfohlen)

Kopieren Sie einfach diesen Befehl und führen Sie ihn in PowerShell aus:

```powershell
$ScriptBlock = {
    Write-Host "🏁 Starte F1 Stats Hub Installation..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Abhängigkeiten erfolgreich installiert" -ForegroundColor Green
        Write-Host "🚀 Starte Entwicklungsserver..." -ForegroundColor Cyan
        npm run dev
    } else {
        Write-Host "❌ Fehler bei der Installation" -ForegroundColor Red
    }
}
Start-Process powershell -ArgumentList "-NoExit", "-Command", $ScriptBlock
```

### Manuelle Installation

1. Installieren Sie die Abhängigkeiten:
```bash
npm install
```

2. Starten Sie den Entwicklungsserver:
```bash
npm run dev
```

3. Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser

## API Status

Diese Anwendung nutzt die OpenF1 API. Der aktuelle Status wird am unteren Bildschirmrand angezeigt.

## Technologie-Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Hinweis

Diese Seite ist ein von Fans erstelltes Projekt und steht in keiner Verbindung zur Formel 1® oder Formula One World Championship Limited.
