export function createPageUrl(pageName: string, params?: Record<string, string>): string {
  const basePath = `/${pageName.toLowerCase()}`;
  
  if (params) {
    const queryString = new URLSearchParams(params).toString();
    return `${basePath}?${queryString}`;
  }
  
  return basePath;
}

