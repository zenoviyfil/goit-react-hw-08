import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./contactsOps";
import { selectContacts, selectNameFilter } from "../selectors/selectors";

const handlePending = state => {
    state.isLoading = true
}

const handleFetchFullfield = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
}
const handleAddFullfield = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload)
}
const handleDelFullfield = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const i = state.items.findIndex((task) => task.id === action.payload.id)
    state.items.splice(i, 1)
}

const handleRejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter.length > 0) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  }
);


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
          .addCase(fetchContacts.pending, handlePending)
          .addCase(fetchContacts.fulfilled, handleFetchFullfield)
          .addCase(fetchContacts.rejected, handleRejected)
          .addCase(addContacts.pending, handlePending)
          .addCase(addContacts.fulfilled, handleAddFullfield)
          .addCase(addContacts.rejected, handleRejected)
          .addCase(deleteContacts.pending, handlePending)
          .addCase(deleteContacts.fulfilled, handleDelFullfield)
          .addCase(deleteContacts.rejected, handleRejected)
               
    }
})

export const contactsReducer = contactsSlice.reducer