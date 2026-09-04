// Each entry is one object in this array.
// Add new entries at the top (or anywhere) — order in the list matches order here.
// id must be unique. date format: "YYYY-MM-DD".
// tags is optional — leave as [] if you don't want any.
// body supports markdown (headings, lists, links, code, etc).

const POSTS = [
  {
    id: "welcome",
    title: "Welcome to your notebook",
    date: "2026-09-04",
    tags: ["meta"],
    body: `This is a starter entry. It lives in \`posts.js\` as a plain JavaScript object.

To add a new entry:

1. Click **New entry** in the top bar, fill in the form, and hit **Generate snippet**.
2. Copy the snippet it gives you.
3. Open \`posts.js\` and paste the snippet in, right after the opening \`[\`.
4. Commit and push to GitHub — your entry appears the next time the page loads.

You can also skip the form and just edit this file directly if that's faster for you.

Markdown works in the body, so you can use:

- lists like this one
- \`inline code\`
- [links](https://example.com)
- > blockquotes

Delete this entry whenever you're ready — it's just here to show the format.`
  },
];
