import type { MetaFunction } from "@remix-run/node"

import { HomePage } from "~/modules/homepage/homepage"

export const meta: MetaFunction = () => {
  return [{ title: "Reciprocal" }, { name: "description", content: "Welcome to Reciprocal!" }]
}

export default HomePage
