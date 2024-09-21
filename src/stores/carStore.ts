import { defineStore } from 'pinia'
import type { Cars } from './interface'

export const useCarStore = defineStore('data', {
  state: () => ({
    store: {
      cars: [
        {
          name: '',
          details: ''
        }
      ]
    } as Cars
  }),

  actions: {
    async fill() {
      try {
        const module = await import('@/stores/data.json')
        const data = module.default as Cars

        this.store = data
      } catch (error) {
        console.error('Failed to load data: ', error)
      }
    }
  }
})
