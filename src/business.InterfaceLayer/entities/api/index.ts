import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RowResponse } from "./types";

import httpMethods from "../https/httpMethods";

const baseUrl = "http://185.244.172.108:8081/";
export const mainID = 116504;
export const mainRowID = "f995a3b8-56dc-41cc-8d90-72b522ada8d9";

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getOutlayRows: build.query<void, RowResponse>({
      query: ({ params }) => ({
        url: `v1/outlay-rows/entity/${mainID}/row/list`,
        method: httpMethods.GET,
        body: params,
      }),
    }),
    createOutlayRow: build.mutation<void, RowResponse>({
      query: ({ params }) => ({
        url: `v1/outlay-rows/entity/${mainID}/row/create`,
        method: httpMethods.POST,
        body: params,
      }),
    }),
    updateOutlayRow: build.mutation<void, RowResponse>({
      query: ({ params }) => ({
        url: `v1/outlay-rows/entity/${mainID}/row/${params.id}/update`,
        method: httpMethods.POST,
        body: params,
      }),
    }),
    deleteOutlayRow: build.mutation<void, RowResponse>({
      query: ({ params }) => ({
        url: `v1/outlay-rows/entity/${mainID}/row/${params.id}/delete`,
        method: httpMethods.DELETE,
        body: params,
      }),
    }),
  }),
});

export const {
  useGetOutlayRowsQuery,
  useCreateOutlayRowMutation,
  useUpdateOutlayRowMutation,
  useDeleteOutlayRowMutation,
} = todoApi;
