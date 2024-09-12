import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
    reducerPath: "jsonServerApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    tagTypes: ["Albums"],
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query: (page = 1) => `/products?limit=${page}`,
            providesTags: ["Albums"],
        }),

        createAlbum: builder.mutation({
            query: (title) => ({
                url: "/products",
                method: "POST",
                body: { title },
            }),
            invalidatesTags: ["Albums"],
        }),

        updateAlbum: builder.mutation({
            query: ({ id, title }) => ({
                url: `/products/${id}`,
                method: "PUT",
                body: { title },
            }),
            invalidatesTags: ["Albums"],
          }),

        deleteAlbum: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Albums"],
        })
    }),
});

export const {
    useGetAlbumsQuery,
    useCreateAlbumMutation,
    useUpdateAlbumMutation,
    useDeleteAlbumMutation,
} = jsonServerApi;
