import ZoneCalculator from '@/components/pages/zone'

type ToolPageProps = Promise<{
  params: {
    slug: string
  }
}>

export default async function ToolPage(
  props: ToolPageProps
) {
  const { params } = await props
  const { slug } = await params

  const tools = {
    "zone-two-heart-rate-calculator": ZoneCalculator
  }

  const ToolPage = tools[
    slug as keyof typeof tools
  ]

  return (
      ToolPage ? (
      <ToolPage />
    ): (
      <h1>not found</h1>
    )
  );
}
