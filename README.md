# Wajiha Babar - Data Science Portfolio Dashboard

A responsive React/Vite portfolio website designed like a modern data science dashboard.

## Features

- Dashboard-style dark UI inspired by analytics admin panels
- Light / dark mode toggle
- Animated moving outer background
- Responsive layout for mobile, tablet, laptop, large, and extra-large screens
- Resume download button
- LinkedIn, GitHub, and Portfolio Hub links
- Profile photo support with automatic WB fallback

## Run locally

```bash
npm install
npm run dev
```

## Add your profile picture

Place the real profile image here:

```bash
public/profile.jpg
```

The website already looks for this file. If the image is missing, it shows the WB initials avatar automatically.

If your image name is different, open:

```bash
src/main.jsx
```

and update:

```js
image: "/profile.jpg"
```

Example:

```js
image: "/wajiha.png"
```

## Main files

```bash
src/main.jsx
src/styles.css
public/Wajiha-Babar-Resume.pdf
```
