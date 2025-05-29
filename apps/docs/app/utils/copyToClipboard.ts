export async function copyToClipboard(text: string): Promise<boolean> {
    try {
      // Use the modern Clipboard API if available
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'absolute';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      return success;
    } catch (err) {
      console.error('Failed to copy text to clipboard:', err);
      return false;
    }
  }
  
  export function formatCodeForCopy(code: string): string {
    // Remove extra whitespace and normalize line endings
    return code
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n');
  }
  