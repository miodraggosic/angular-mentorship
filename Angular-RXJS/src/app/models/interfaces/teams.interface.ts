export interface Teams {
  data: {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    id: number;
    name: string;
  };
  meta: {
    current_page: number;
    next_page: number;
    per_page: number;
    total_count: number;
    total_pages: number;
  };
}
