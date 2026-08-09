"use client"

import { DynamicCalculatorHub, DynamicHero, StaticTopic } from "@/components/categories/dynamic-page"
import PreFooter from "@/components/layout/PreFooter"
import { getCategoryData } from "@/lib/categoryData"
import { use } from "react"

const Page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params)
  const categoryData = getCategoryData(slug)
  return (
    <main>
      <DynamicHero title={categoryData?.heroTitle || ""} description={categoryData?.heroDescription || ""} image={categoryData?.heroImage || ""} />
      <StaticTopic />
      <DynamicCalculatorHub calculators={categoryData?.calculators || []} />

      {/* ==== Pre-Footer CTA ================================================ */}
      <PreFooter />
    </main>
  )
}

export default Page
