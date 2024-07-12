// Project name constant declaration
const projectName = 'markdown-previewer';

// Setting options for the marked library
marked.setOptions({
    breaks: true // Enable line breaks in markdown
});

// Initial markdown text for the previewer
const markdownInitialText = `
# Welcome to My Markdown Previewer
## Features Overview
### Markdown Syntax Examples
#### Additional Information

**Bold text** and *italic text* can be used to emphasize important points.

> This is a blockquote. It's useful for highlighting quotations or special notes.

Organized list of tasks:
1. Initialize the project
2. Develop core features
3. Test thoroughly
4. Deploy to production

Unorganized list of favorite fruits:
- Apples
- Bananas
- Cherries

<br />

\`console.log('This is a sample code block');\`

<br />
HTML tags can also be used here.
<br /><br />

Let's create a function that sums two numbers:

\`\`\`
function sumNumbers(a, b) {
    return a + b;
}
\`\`\`

Use this previewer to see how your markdown renders in real-time!
`;
