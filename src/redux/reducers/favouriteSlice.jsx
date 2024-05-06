//  creating an slicefor favouite item management

import { createSlice } from "@reduxjs/toolkit";

const favouiteSlice = createSlice(
    {
        name: "favouite",
        initialState: {
            favouiteItems: [],
            loading: false,
            error: null
        },
        reducers: {
            // creating an action to set the favouite item 
            setFavouiteItem: (state, action) => {
                state.favouiteItems.push(action.payload);
                
            },
            // creating an action to remove the favouite item 
            removeFavouiteItem: (state, action) => {
                state.favouiteItems = state.favouiteItems.filter(item => item.id!== action.payload);
                
            }
        }
    }
);

export const {setFavouiteItem, removeFavouiteItem} = favouiteSlice.actions;
export default favouiteSlice.reducers;