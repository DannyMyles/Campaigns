export interface Campaign {
    "id": number;
    "title": string;
    "description": string;
  }

  export interface CampaignResponse{
    pageNo: number
    per_page: number
    total: number
    pageSize: number
    campaigns: Campaign[]
  }