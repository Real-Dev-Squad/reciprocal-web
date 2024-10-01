import { Editor } from "~/components/editor"

export const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="pb-8 text-3xl font-semibold text-gray-800">Welcome to Reciprocal</h1>
      <Editor />
    </div>
  )
}
