export interface Database {
  product: {
  [string:string]: {
    productId: string | number
    productImg: string
    productPrice: string
    productTitle: string
    productType: string
    }
  }
}
