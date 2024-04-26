export interface StreamingService {
        name: string
        logo_url: string
        prices: Price[]
      }
      
export interface Price {
        plan: string
        price: number
        ads: boolean
      }
      
