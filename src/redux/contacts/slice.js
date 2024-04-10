import { createSlice, isAnyOf, createSelector } from "@reduxjs/toolkit"
import { fetchContacts, addContacts, deleteContacts } from "./operations"
import { selectUserContacts } from "../contacts/selectors"
import { selectNameFilter } from "../filters/selectors";

const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  isError: false,
};

export const selectFilteredContacts = createSelector(
  [selectUserContacts, selectNameFilter],
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
  name: "phonebook",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContacts.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContacts.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
