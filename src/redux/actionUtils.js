export function buildFilterQueryString(filters, page) {
    const queryParts = [];
    for (const key in filters) {
      if (filters[key] !== '') {
        queryParts.push(`${key}=${filters[key]}`);
      }
    }
    queryParts.push(`page=${page}`);
    return queryParts.join('&');
  }
  