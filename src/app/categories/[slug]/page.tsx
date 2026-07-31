"use client"

import { DynamicCalculatorHub, DynamicHero, StaticTopic } from "@/components/categories/dynamic-page"
import { getCategoryData } from "@/lib/categoryData"
import { use } from "react"

const Page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params)
  const categoryData = getCategoryData(slug)
  return (
    <main>
      <DynamicHero title={categoryData?.heroTitle || ""} description={categoryData?.heroDescription || ""} />
      <DynamicCalculatorHub calculators={categoryData?.calculators || []} />
      <StaticTopic />
    </main>
  )
}

export default Page
