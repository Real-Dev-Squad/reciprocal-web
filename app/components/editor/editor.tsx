import { cn } from "~/utils/classnames.util"

import { BlockTypeEnum } from "./editor.enum"
import { useEditorStore } from "./editor.store"
import { TBlock } from "./editor.types"

const AddDefaultPageButton = () => {
  const addBlocks = useEditorStore((store) => store.addBlocks)

  const createPage = () => {
    const parentId = self.crypto.randomUUID()
    const childId = self.crypto.randomUUID()

    addBlocks([
      {
        id: parentId,
        parentId: null,
        children: [childId],
        type: BlockTypeEnum.PAGE,
        content: "Welcome to Reciprocal",
      },
      {
        id: childId,
        children: [],
        parentId: parentId,
        type: BlockTypeEnum.TEXT,
        content: "",
      },
    ])
  }

  return (
    <button
      className="h-8 bg-gray-100 px-4 text-sm font-medium text-gray-800 transition hover:bg-gray-100 focus:bg-gray-100 active:scale-95 active:bg-gray-200"
      onClick={createPage}
    >
      Create default page
    </button>
  )
}

const Block = ({ content, type }: TBlock) => {
  if (type === BlockTypeEnum.PAGE) {
    return (
      <h1 contentEditable className="text-3xl font-bold">
        {content}
      </h1>
    )
  }

  return (
    <div
      contentEditable
      data-placeholder="Type something..."
      className={cn(
        "caret:text-stone-900 relative mb-2 cursor-text whitespace-pre-wrap break-words text-base text-stone-900 outline-none",
        "before:absolute before:text-stone-400 before:content-[attr(data-placeholder)]",
        "before:hidden focus:empty:before:block",
      )}
    ></div>
  )
}

export const Editor = () => {
  const blocks = useEditorStore((store) => store.blocks)

  return (
    <div>
      {!blocks.length && <AddDefaultPageButton />}

      <div>
        {blocks.map((block) => (
          <Block key={block.id} {...block} />
        ))}
      </div>
    </div>
  )
}
