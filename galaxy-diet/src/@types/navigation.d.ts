export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      stats: undefined
      create: undefined
      created: {
        isOnDiet: boolean
      }
      meal: {
        name: string
        description: string
        time: string
        isHealthy: boolean
      }
      edit: {
        name: string
        description: string
        time: string
        isHealthy: boolean
      }
    }
  }
}