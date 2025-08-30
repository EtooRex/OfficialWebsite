import { marked } from 'marked';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function parseMarkdown(content: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  
  // First pass: extract headings for ToC
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    
    toc.push({ id, text, level });
  }
  
  // Configure marked renderer
  const renderer = new marked.Renderer();
  
  // Override heading renderer to add IDs and classes
  renderer.heading = function(text, level) {
    const cleanText = String(text).replace(/<[^>]*>/g, '').trim();
    const id = cleanText
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    
    const headingClasses = {
      1: 'text-3xl font-bold text-gray-900 mb-6 mt-0 border-b border-gray-200 pb-4',
      2: 'text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-200 pb-2',
      3: 'text-xl font-bold text-gray-900 mb-3 mt-6',
      4: 'text-lg font-semibold text-gray-900 mb-2 mt-4',
      5: 'text-base font-semibold text-gray-900 mb-2 mt-4',
      6: 'text-sm font-semibold text-gray-900 mb-2 mt-4'
    };
    
    const className = headingClasses[level as keyof typeof headingClasses] || headingClasses[6];
    
    return `<h${level} id="${id}" class="${className}">${text}</h${level}>`;
  };
  
  // Override other renderers for consistent styling
  renderer.paragraph = function(text) {
    return `<p class="text-gray-600 mb-4 leading-relaxed">${text}</p>`;
  };
  
  renderer.list = function(body, ordered) {
    const tag = ordered ? 'ol' : 'ul';
    const className = ordered 
      ? 'list-decimal list-inside space-y-2 mb-4 ml-4 text-gray-600' 
      : 'list-disc list-inside space-y-2 mb-4 ml-4 text-gray-600';
    return `<${tag} class="${className}">${body}</${tag}>`;
  };
  
  renderer.listitem = function(text) {
    return `<li class="text-gray-600">${text}</li>`;
  };
  
  renderer.code = function(code, language) {
    return `<pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code class="text-sm">${code}</code></pre>`;
  };
  
  renderer.codespan = function(code) {
    return `<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">${code}</code>`;
  };
  
  renderer.blockquote = function(quote) {
    return `<blockquote class="border-l-4 border-pink-500 pl-4 italic text-gray-700 mb-4 bg-gray-50 py-2">${quote}</blockquote>`;
  };
  
  renderer.strong = function(text) {
    return `<strong class="font-semibold text-gray-900">${text}</strong>`;
  };
  
  renderer.em = function(text) {
    return `<em class="italic text-gray-700">${text}</em>`;
  };
  
  renderer.link = function(href, title, text) {
    const titleAttr = title ? ` title="${title}"` : '';
    return `<a href="${href}"${titleAttr} class="text-pink-600 hover:text-pink-700 hover:underline font-medium">${text}</a>`;
  };
  
  renderer.hr = function() {
    return '<hr class="border-gray-300 my-8" />';
  };
  
  // Configure marked options
  marked.setOptions({
    renderer,
    breaks: true,
    gfm: true,
    headerIds: false,
    mangle: false
  });
  
  // Parse the markdown
  const html = marked.parse(content);
  
  return { 
    html: String(html), 
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