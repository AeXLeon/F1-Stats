# 🏎️ F1 Stats Hub
## we use *https://openf1.org/*
Eine benutzerfreundliche Formel 1 Statistik-App mit Live-Daten der aktuellen Saison.

## ⭐ Features
*Currently Not Working*
- 👥 Aktuelle F1-Fahrerübersicht mit Detailansicht
- 📊 Umfangreiche Statistiken (Siege, Podien, Punkte)
- 🏁 Live-Rennkalender mit Ergebnissen
- 🔍 Schnelle Suchfunktion für Fahrer und Teams
- 📱 Responsive Design für alle Geräte

## 📥 Installation

### Methode 1: Express-Installation (Empfohlen)

1. Öffnen Sie PowerShell (Rechtsklick auf Start → Windows PowerShell)
2. Kopieren Sie den gesamten Block und fügen Sie ihn ein:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; `
$Block = { `
  Write-Host "`n🏁 Starte F1 Stats Hub...`n" -ForegroundColor Cyan; `
  if (!(Get-Command npm -ErrorAction SilentlyContinue)) { `
    Write-Host "❌ Node.js fehlt! Bitte installieren Sie es von: https://nodejs.org/`n" -ForegroundColor Red; `
    pause; exit 1 `
  } `
  Write-Host "📦 Installiere Abhängigkeiten...`n" -ForegroundColor Yellow; `
  npm install; `
  if ($LASTEXITCODE -eq 0) { `
    Write-Host "`n✅ Installation erfolgreich!`n" -ForegroundColor Green; `
    Write-Host "🚀 Starte Entwicklungsserver...`n" -ForegroundColor Cyan; `
    npm run dev `
  } else { `
    Write-Host "`n❌ Fehler bei der Installation. Bitte prüfen Sie die Fehlermeldungen.`n" -ForegroundColor Red; `
    pause `
  } `
}; `
Start-Process powershell -ArgumentList "-NoExit", "-Command", $Block
```

### Methode 2: Schritt-für-Schritt Installation

#### Voraussetzungen
1. **Node.js installieren**
   - Gehen Sie auf [nodejs.org](https://nodejs.org/)
   - Laden Sie die LTS-Version herunter
   - Führen Sie die Installation aus
   - Überprüfen Sie die Installation:
     ```powershell
     node --version
     npm --version
     ```

2. **Projekt herunterladen**
   - Laden Sie das Projekt herunter
   - Entpacken Sie es in einen Ordner Ihrer Wahl
   - Öffnen Sie PowerShell im Projektordner

3. **Abhängigkeiten installieren**
   ```powershell
   npm install
   ```

4. **Entwicklungsserver starten**
   ```powershell
   npm run dev
   ```

5. **App öffnen**
   - Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser
   - Die App startet automatisch und lädt die aktuellen F1-Daten

## 🛠️ Technische Details

### Verwendete Technologien
- ⚛️ **Next.js 14** - React Framework
- 🎨 **Tailwind CSS** - Styling
- 📝 **TypeScript** - Type-Safety
- 🎭 **Framer Motion** - Animationen
- 🌐 **OpenF1 API** - Live-Daten

### API-Status
- Der aktuelle API-Status wird am unteren Bildschirmrand angezeigt
- Bei Problemen erscheint eine Warnung oben auf der Seite

## ⚠️ Hinweise

- Die App aktualisiert Daten automatisch
- Keine Anmeldung erforderlich
- Kostenlose Nutzung
- Von Fans für Fans entwickelt

---
*Dieses Projekt ist ein von Fans erstelltes Werk und steht in keiner Verbindung zur Formel 1® oder Formula One World Championship Limited.*
