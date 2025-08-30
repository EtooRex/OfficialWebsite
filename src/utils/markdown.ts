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
    // Extract clean text for ToC
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    
    // Generate ID from clean text
    const id = cleanText.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    
    // Add to table of contents
    toc.push({
      id,
      text: cleanText,
      level
    });
    
    // Return HTML with proper heading classes
    const headingClasses = {
      1: 'text-3xl font-bold text-dark mb-6 mt-0 border-b border-gray-200 pb-4',
      2: 'text-2xl font-bold text-dark mb-4 mt-8 border-b border-gray-200 pb-2',
      3: 'text-xl font-bold text-dark mb-3 mt-6',
      4: 'text-lg font-semibold text-dark mb-2 mt-4',
      5: 'text-base font-semibold text-dark mb-2 mt-4',
      6: 'text-sm font-semibold text-dark mb-2 mt-4'
    };
    
    const className = headingClasses[level as keyof typeof headingClasses] || headingClasses[6];
    
    return `<h${level} id="${id}" class="${className}">${text}</h${level}>`;
  };
  
  // Configure other renderers for better styling
  renderer.paragraph = function(text: string) {
    return `<p class="text-gray-600 mb-4 leading-relaxed">${text}</p>`;
  };
  
  renderer.list = function(body: string, ordered: boolean) {
    const tag = ordered ? 'ol' : 'ul';
    const className = ordered ? 'list-decimal list-inside space-y-2 mb-4 ml-4' : 'list-disc list-inside space-y-2 mb-4 ml-4';
    return `<${tag} class="${className}">${body}</${tag}>`;
  };
  
  renderer.listitem = function(text: string) {
    return `<li class="text-gray-600">${text}</li>`;
  };
  
  renderer.code = function(code: string, language?: string) {
    return `<pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code class="text-sm">${code}</code></pre>`;
  };
  
  renderer.codespan = function(code: string) {
    return `<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">${code}</code>`;
  };
  
  renderer.blockquote = function(quote: string) {
    return `<blockquote class="border-l-4 border-primary pl-4 italic text-gray-700 mb-4">${quote}</blockquote>`;
  };
  
  renderer.strong = function(text: string) {
    return `<strong class="font-semibold text-dark">${text}</strong>`;
  };
  
  renderer.em = function(text: string) {
    return `<em class="italic">${text}</em>`;
  };
  
  renderer.link = function(href: string, title: string | null, text: string) {
    const titleAttr = title ? ` title="${title}"` : '';
    return `<a href="${href}"${titleAttr} class="text-primary hover:underline">${text}</a>`;
  };
  
  // Set marked options
  marked.setOptions({
    renderer,
    breaks: true,
    gfm: true
  });
  
  // Parse the markdown
  const html = marked.parse(content);
  
  return { 
    html: typeof html === 'string' ? html : String(html), 
    toc 
  };
}

export async function loadMarkdownFile(path: string): Promise<string> {
  try {
    const response = await fetch(`/docs/${path}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}.md (${response.status})`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return `# Error\n\nCould not load documentation file: ${path}.md\n\nPlease check that the file exists in the public/docs/ directory.`;
  }
}