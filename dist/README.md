# 🚀 x1997 Resume Builder

A modern, highly customizable, and **strictly ATS-compliant** client-side resume builder designed to help you craft perfect resumes that pass through automated screening systems flawlessly.

---

## ✨ Features

- **🔒 100% Client-Side & Private**: Your data never leaves your browser. All parsing, configuration, and PDF generation happens locally via `localStorage`. No accounts, no data harvesting.
- **🤖 True ATS-Optimized Export**: Uses native browser printing (`window.print()`) under the hood to generate pure text-based PDFs. Unlike image-based or canvas-based generators, this guarantees that Applicant Tracking Systems can read every single word seamlessly.
- **🎨 8 Distinct Templates**: From *Harvard Classic* and *Executive* to *Creative* and *Corporate* templates, switch designs on the fly without ever re-typing your content.
- **🖱️ Advanced Drag & Drop**: Enable the **Advanced** toggle to drag and reorder entire resume sections intuitively directly on the live preview.
- **📱 Responsive & Mobile Optimized**: Build and edit your resume directly on your phone with a dedicated, touch-friendly Mobile View.
- **🔤 Highly Customizable Typography & Layout**: 
  - Choose between **10+ premium typography themes**.
  - Granular control over heading sizes, body text, line spacing, and word spacing.
  - Custom **Page Margin** controls (Narrow, Compact, Standard, Wide) applied natively to the PDF output.
  - Slider control for **Bullet Indentation**.
  - Global toggles for **Bold Dates** and customizable **Contact Separators**.
- **⚡ PWA Ready**: Can be installed directly to your device as a Progressive Web App for full offline access.
- **💾 Auto Save & Restore**: Instantly saves your layout and text progress across sessions.

---

## 🚀 Quick Start

1. Download or clone this repository.
2. Open `dist/index.html` in your modern web browser (Chrome or Edge recommended).
3. Start typing in the sidebar and watch the live preview update instantly.
4. Click **Design** to tweak the aesthetic to your liking.
5. Click **Download PDF**.
   - *💡 Note: Ensure you disable "Headers and footers" in the browser print dialog for a clean, professional document.*

---

## 🛠️ Building from Source

This project uses a custom Node.js build script to minify and obfuscate assets. 

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
node build.js
```

The compiled, production-ready assets will be placed in the `dist` folder.

---

## 🤝 Contributing

Pull requests and feature suggestions are always welcome! 

**Important:** Ensure that any layout or CSS changes are rigorously tested against `window.print()`. We prioritize strict text extractability for ATS compliance over complex DOM layouts.

---

## ❤️ Support & Donate

If this project helped you land your dream job or save time, consider supporting its development! 

* **USDT Wallet** (BEP20) - 0xcc621214e5f733dd89dda5c25c6cbf462d97032b

---

## 📄 License

Copyright (c) 2026 Prometheus-1997. All Rights Reserved.

This software is proprietary and closed-source. You may not copy, modify, distribute, sell, or reverse engineer any part of this code. See the `LICENSE.md` file for full details.
