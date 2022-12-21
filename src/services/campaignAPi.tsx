import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Campaign, CampaignResponse } from "../models/campaigns.model";

export const campaignsApi = createApi({
  //You can name the reducerPath same as the
  reducerPath: "campaignsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://omni-control-panel.azurewebsites.net/api/v1",
  }),

  //AutoFetch
  tagTypes: ["Campaign"],
  endpoints: (builder) => ({
    //fetch all campaigns
    campaigns: builder.query<CampaignResponse, number>({
      query: (pageNo = 1,pageSize = 5) => `/campaigns?pageNo=${pageNo}&pageSize=${pageSize}`,
      providesTags: ["Campaign"],
    }),

    // We are using the mutation method to add the campaign to the data collection.
    //  Mutation takes in the Campaign object defined in the model interface
    addCampaign: builder.mutation<void, Campaign>({
      query: (campaign) => ({
        //adding the end point of our api which is the same as the one we used when getting the campaigns
        url: "/posts",
        // adding the method, that is the POST method
        method: "POST",
        body: campaign,
      }),
      invalidatesTags: ["Campaign"],
    }),
    updateCampaign: builder.mutation<void, Campaign>({
      query: ({ id, ...rest }) => ({
        //adding the end point of our api which is the same as the one we used when getting a single campaign
        url: `/posts/${id}`,
        // adding the method, that is the PUT method
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Campaign"],
    }),

    // Here we pass in the number that represensts the type of ID as defined in the model.
    deleteCampaign: builder.mutation<void, number>({
      query: (id) => ({
        //adding the end point of our api which is the same as the one we used when getting a single campaign
        url: `/posts/${id}`,
        // adding the method, that is the DELETE method
        method: "DELETE",
      }),
      invalidatesTags: ["Campaign"],
    }),
  }),
});

// Exposed api
export const {
  useCampaignsQuery,
  useAddCampaignMutation,
  useDeleteCampaignMutation,
  useUpdateCampaignMutation,
} = campaignsApi;
// import the useCampaignsQuery in the App.tsx
