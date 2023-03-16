import { defineStore } from 'pinia'

export const useGenericStore = defineStore({
  id: 'generic',
  state: () => ({
    data: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchData() {
      try {
        this.loading = true;
        const data = await fetch('/api/data')
        this.data = await data.json()
      } catch (error) {
        // this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
