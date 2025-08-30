import { marked } from 'marked';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function parseMarkdown(content: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  
  // Configure marked with custom renderer for headings
  const renderer = new marked.Renderer();
  
  renderer.heading = function(text: string, level: number) {
    const id = String(text).toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .trim();
    
    toc.push({
      id,
      text: String(text),
      level
    });
    
    return `<h${level} id="${id}" class="heading-${level}">${String(text)}</h${level}>`;
  };
  
  marked.setOptions({
    renderer,
    breaks: true,
    gfm: true
  });
  
  const html = marked(content);
  
  return { html, toc };
}

export async function loadMarkdownFile(path: string): Promise<string> {
  try {
    const response = await fetch(`/docs/${path}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}.md`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return `# Error\n\nCould not load documentation file: ${path}.md`;
  }
}