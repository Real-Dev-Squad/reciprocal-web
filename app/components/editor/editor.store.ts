import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { TBlock } from "./editor.types"

type Store = {
  blocks: TBlock[]
}

type Actions = {
  addBlocks: (blocks: TBlock[]) => void
  removeBlock: (blockId: string) => void
  updateBlock: (blockId: string, block: TBlock) => void
}

export const useEditorStore = create<Store & Actions>()(
  devtools(
    (set) => ({
      blocks: [],
      addBlocks: (blocks) => set((state) => ({ blocks: state.blocks.concat(blocks) })),
      removeBlock: (blockId) => set((state) => ({ blocks: state.blocks.filter((block) => block.id !== blockId) })),
      updateBlock: (blockId, newBlock) =>
        set((state) => ({ blocks: state.blocks.map((block) => (block.id === blockId ? newBlock : block)) })),
    }),
    { name: "Editor store", enabled: true }, // TODO : @yesyash - disable devtools in production
  ),
)
