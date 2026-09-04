# Notebook

A tiny personal knowledge base you host on GitHub Pages. No backend, no database — entries live in `posts.js` and are rendered by plain HTML/CSS/JS.

## Files

- `index.html` — page structure
- `style.css` — styling
- `app.js` — search, filtering, rendering, and the "New entry" helper
- `posts.js` — **this is where your content lives**

## Run it locally

Just open `index.html` in a browser. No build step, no install.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `notebook`).
2. Push these files to the repo's root (or to a `docs/` folder — your choice).
3. On GitHub: go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch," pick the branch (usually `main`) and the folder (`/root` or `/docs`, matching where you put the files).
5. Save. GitHub gives you a URL like `https://yourusername.github.io/notebook/` within a minute or two.

## Adding a new entry

Since GitHub Pages only serves static files, there's no "save" button that writes to your repo — adding a post means editing `posts.js` and pushing.

Two ways to do it:

**Using the in-app helper (recommended):**
1. Open your site, click **New entry**.
2. Fill in title, tags (optional), and body (markdown supported).
3. Click **Generate snippet**, then **Copy to clipboard**.
4. Open `posts.js` in your editor, paste the snippet right after the opening `[`.
5. Commit and push. Your site updates automatically within a minute or two.

**Editing directly:**
Open `posts.js` and add an object to the `POSTS` array yourself, following the existing example:

```js
{
  id: "unique-id",
  title: "Entry title",
  date: "2026-09-04",
  tags: ["optional", "tags"],
  body: `Markdown content goes here.`
},
```

## Notes

- `id` must be unique across entries.
- `tags` is optional — use `[]` for none.
- `body` supports markdown: headings, lists, links, code blocks, blockquotes.
- Search matches against title and body text; tag filters narrow the list further.
