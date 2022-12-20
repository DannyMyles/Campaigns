export interface Campaign {
    "id": number;
    "title": string;
    "description": string;
  }

  export interface CampaignResponse<T> {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: T[]
  }