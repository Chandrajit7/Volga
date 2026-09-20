# ✦ Volga Ltd — Official Website

**Photography × Tech Solutions**

Volga Ltd is a creative technology company bringing together **photography, visual storytelling, and modern technology solutions**.

This repository contains the source code for the official Volga Ltd website, designed with a premium black-and-gold visual identity and built using **HTML, CSS, and vanilla JavaScript**.

---

## 🌐 About Volga Ltd

Volga Ltd is built around the idea of combining **creative vision with technical innovation**.

Our work brings two worlds together:

📸 **Photography**
Professional photography, visual storytelling, creative content, and brand-focused imagery.

💻 **Technology**
Websites, digital experiences, automation, software solutions, and technology-driven products.

✨ **Creative Collaboration**
Combining visual creativity and technical expertise to develop modern solutions for individuals, brands, and businesses.

---

## 🚀 Website Features

The website includes:

* ✦ Premium black-and-gold luxury design
* 📱 Fully responsive layout
* 📌 Fixed navigation header
* 🏠 Home section
* 🛍️ Products section
* 📩 Contact section
* 🌙 Dark mode
* ☀️ Light mode
* ⌨️ Hero-section typewriter animation
* 🤖 Predefined chatbot
* 💬 Interactive chatbot quick questions
* 📱 Mobile navigation menu
* ✨ Gold hover animations and transitions
* 🎨 Volga Ltd VL branding
* ⚡ Lightweight vanilla JavaScript
* 🔌 No external API required for the chatbot

---

## 🛠️ Technologies Used

| Technology     | Purpose                                 |
| -------------- | --------------------------------------- |
| HTML5          | Website structure                       |
| CSS3           | Styling, animations & responsive design |
| JavaScript     | Interactivity and chatbot               |
| LocalStorage   | Saving theme preference                 |
| Responsive CSS | Mobile & desktop compatibility          |

---

## 📂 Project Structure

```text
volga-ltd-website/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

### `index.html`

Contains the complete structure of the website, including:

* Header
* Navigation
* Hero section
* Services
* Products
* Contact section
* Footer
* Chatbot interface

### `style.css`

Contains:

* Black and gold theme
* Light theme
* Responsive layouts
* Animations
* Buttons
* Cards
* Navigation
* Chatbot styling
* Mobile design

### `script.js`

Controls:

* Typewriter animation
* Light/dark theme
* Mobile navigation
* Footer year
* Chatbot
* Predefined questions and answers

---

## 🤖 Predefined Chatbot

The Volga chatbot works completely through JavaScript.

No AI API or backend is required.

All questions and answers can be modified from:

```javascript
const predefinedQuestions = [
```

Example:

```javascript
{
    question: "What is Volga Ltd?",

    keywords: [
        "what is volga",
        "about volga",
        "volga ltd"
    ],

    answer:
        "Volga Ltd is a collaboration of photography and technology solutions."
},
```

You can easily add your own:

```javascript
{
    question: "Do you provide event photography?",

    keywords: [
        "event",
        "events",
        "event photography"
    ],

    answer:
        "Yes, Volga Ltd provides professional event photography solutions."
},
```

The chatbot matches the user's message against the predefined keywords and returns the corresponding answer.

---

## 🎨 Design

The website follows Volga Ltd's visual identity:

**Primary:** Black
**Accent:** Metallic Gold
**Typography:** Elegant serif + modern sans-serif
**Style:** Premium, minimal, cinematic, technology-focused

The design represents the combination of:

```text
       PHOTOGRAPHY
            │
            ×
            │
       TECHNOLOGY
            │
            ↓
         VOLGA LTD
```

---

## 🌙 Theme System

The website includes both:

### Dark Mode

The primary Volga Ltd experience uses a premium black background with metallic gold accents.

### Light Mode

A clean light theme is available through the theme toggle in the header.

The selected theme is saved using:

```javascript
localStorage
```

Therefore, the visitor's theme preference remains available when they return to the website.

---

## ⌨️ Typewriter Effect

The hero section includes a dynamic typewriter animation.

Current phrases include:

```javascript
const typewriterWords = [
    "technology.",
    "experiences.",
    "possibilities.",
    "the future."
];
```

These can be changed to any Volga Ltd brand messaging.

---

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile phones

On smaller screens, the desktop navigation automatically changes into a mobile menu.

---

## ⚙️ Installation

No framework or package installation is required.

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/volga-ltd-website.git
```

Navigate into the project:

```bash
cd volga-ltd-website
```

Then open:

```text
index.html
```

in your browser.

That's it.

---

## 🖥️ Local Development

You can also use VS Code with the **Live Server** extension.

Open the project folder in VS Code and run:

```text
index.html → Open with Live Server
```

The website will automatically refresh whenever you save changes.

---

## ✏️ Customization

Before deploying the production website, update the placeholder information.

### Contact Email

In `index.html`:

```html
<a href="mailto:hello@volgaltd.com">
    hello@volgaltd.com
</a>
```

Replace it with Volga Ltd's official email address.

### Products

Edit the product cards inside:

```html
<section class="section products">
```

### Chatbot

Edit:

```javascript
const predefinedQuestions = [
```

inside `script.js`.

### Typewriter Text

Edit:

```javascript
const typewriterWords = [
    "technology.",
    "experiences.",
    "possibilities.",
    "the future."
];
```

### Company Information

Update the About, Services, Contact, and footer information with the final official company details.

---

## 🚀 Deployment

Because this is a static website, it can be deployed on platforms such as:

* GitHub Pages
* Vercel
* Netlify
* Cloudflare Pages
* Any standard web server

No backend is required for the current version.

---

## 🔮 Future Improvements

Potential future additions include:

* [ ] Official Volga Ltd logo asset
* [ ] Portfolio/gallery section
* [ ] Photography categories
* [ ] Project showcase
* [ ] Online booking system
* [ ] Contact form
* [ ] WhatsApp integration
* [ ] Admin dashboard
* [ ] Backend-powered chatbot
* [ ] AI chatbot integration
* [ ] Product/service enquiry system
* [ ] Image gallery with lightbox
* [ ] Customer testimonials
* [ ] Team section
* [ ] SEO optimization
* [ ] Google Analytics integration

---

## 📜 License

© 2026 **Volga Ltd**. All rights reserved.

This project and its branding, visual assets, content, and source code are intended for Volga Ltd's official use unless otherwise specified.

---

## ✦ Volga
