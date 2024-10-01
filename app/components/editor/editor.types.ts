import { BlockTypesEnum } from "./editor.enum"

export type TBlock = {
  id: string
  content: string
  children: string[]
  type: BlockTypesEnum
  parentId: string | null // this will be null for the page
}
