import { BlockTypeEnum } from "./editor.enum"

export type TBlock = {
  id: string
  content: string
  children: string[]
  type: BlockTypeEnum
  parentId: string | null // this will be null for the page
}
