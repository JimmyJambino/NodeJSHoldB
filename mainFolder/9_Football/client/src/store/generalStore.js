import {readable} from "svelte/store"

export const baseURL = readable("http://localhost:3000") // Needs to use readable? otherwise localhost can't be customized.
