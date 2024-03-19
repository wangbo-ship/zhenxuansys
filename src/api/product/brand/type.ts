export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

//已有的品牌的ts数据类型
//定义对象类型用interface合适
export interface TradeMark {
  id?: number
  tmName: string
  logoUrl: string
}

//包含全部品牌数据的ts类型
// 定义联合类型、交叉类型、元组类型：type 可以用来定义更复杂的类型
export type Records = TradeMark[]

//获取的已有全部品牌的数据ts类型
export interface TradeMarkResponseData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    searchCount: boolean
    pages: number
  }
}
