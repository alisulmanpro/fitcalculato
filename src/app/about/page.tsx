import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FitCalculato's mission to provide free, science-backed fitness and health calculators built on current research for real-world use.",
  openGraph: {
    title: "About Us",
    description:
      "Learn about FitCalculato's mission to provide free, science-backed fitness and health calculators built on current research for real-world use.",
    url: "https://fitcalculato.com/about",
    siteName: "Fitness Calculator",
    type: "website",
  },
};

const typographyStyles = `
  [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:text-gray-900
  [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-gray-800
  [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-gray-800
  [&_h4]:text-lg [&_h4]:font-medium [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-gray-800
  [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-5
  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2 [&_li]:text-gray-700
  [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800
  [&_strong]:font-semibold [&_strong]:text-gray-900
`;

export default function AboutPage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <div className={`max-w-4xl mx-auto ${typographyStyles}`}>
        <h1>About Us</h1>
        <p>Last Updated: July 16, 2026</p>

        <h2>Fitness Data Should Be Accurate. We Make Sure It Is.</h2>
        <p>There are thousands of fitness calculators online. Most are wrong, or at least outdated. FitCalculato exists because you deserve better than a formula copied in 2008 and never updated.</p>
        <p>We build clinical-grade fitness and health calculation tools that are free, research-backed, and built for real people, whether you&apos;re a beginner figuring out your first training zone or an experienced athlete dialing in your aerobic base.</p>

        <h2>Our Story</h2>
        <p>Someone on our team was trying to find a reliable <Link href="/zone-two-heart-rate-calculator">Zone 2 heart rate calculator</Link>, not a rough estimate, but a real number based on their actual physiology. What they found were pages cluttered with banner ads, five different calculators using five different formulas with no explanation of which one was correct, and zero sources to verify anything.</p>
        <p>That experience stuck. Because the problem wasn&apos;t just one calculator, it was the entire category. Fitness tools had become filler content. Pages that existed to rank, collect a click, and move on. Nobody was asking the real question: is this number actually accurate for the person using it?</p>
        <p>So we decided to build something different.</p>
        <p>FitCalculato launched with one goal: to make clinical-grade methodology genuinely accessible. Not locked behind a $ 40-a-month app. Not buried in a research journal. Just clean, free tools that explain what they&apos;re calculating, why they&apos;re using a particular formula, and where that formula comes from.</p>
        <p>We started with two tools, our <Link href="/zone-two-heart-rate-calculator">Zone 2 Heart Rate Calculator</Link> and our <Link href="/vo2-max-calculator">vo2-max-calculator</Link> , because those two metrics sit at the foundation of almost every endurance and longevity training protocol. From there, we&apos;ve been expanding the toolkit steadily, always with the same standard: if we can&apos;t source the methodology, we don&apos;t publish the tool.</p>

        <h2>What We Actually Do?</h2>
        <p>FitCalculato is a directory of clinical-grade fitness and health calculators. Every tool we publish meets the same bar:</p>
        <p><strong>The formula has a source.</strong> We don&apos;t use arbitrary equations. Every calculation method we implement comes from peer-reviewed research, journals like Sports Medicine, the Journal of Applied Physiology, and guidelines published by the American College of Sports Medicine (ACSM) and the National Strength and Conditioning Association (NSCA).</p>
        <p><strong>We explain the methodology.</strong> Each tool tells you which formula it uses and why. If two validated methods exist for the same metric, we give you both and explain the difference.</p>
        <p><strong>We keep it simple.</strong> Clinical precision doesn&apos;t have to mean clinical complexity. You enter your numbers, you get your result, and you understand what it means. No jargon wall. No upsell.</p>
        <p><strong>It&apos;s completely free.</strong> No subscription. No account required. No paywalled results. Every calculator on FitCalculato is open and accessible to anyone, on any device, right now.</p>

        <h2>Our Mission</h2>
        <p><strong>To give every person access to the same quality of fitness data that professional athletes and their coaches take for granted, free, clear, and built on real science.</strong></p>
        <p>The gap between what elite athletes know about their bodies and what everyday people can easily find out has never made sense to us. The science isn&apos;t secret. The formulas aren&apos;t proprietary. We just built the tools to deliver them properly.</p>

        <h2>What We Stand For</h2>
        <h3>Clinical Accuracy</h3>
        <p>We treat every formula choice as a real decision. When research evolves, when a newer, better-validated method replaces an older one, we update our tools and explain the change. Accuracy isn&apos;t a marketing claim for us. It&apos;s a design requirement.</p>

        <h3>Honest Transparency</h3>
        <p>You&apos;ll never see a result from FitCalculato without knowing how it was calculated. Every tool shows its methodology, cites its sources, and explains its limitations. If a formula works better for certain populations than others, we say so.</p>

        <h3>No Barriers, No Conditions</h3>
        <p>Your health data belongs to you. We don&apos;t store what you enter. We don&apos;t require an email address to see your results. We don&apos;t lock features behind a paid tier. Free means free, not &quot;free until we upsell you.&quot;</p>

        <h3>Clarity Over Complexity</h3>
        <p>We translate clinical methodology into plain language without losing precision. A result is only useful if you understand what it means and what to do with it. Our tools give you both.</p>

        <h3>Continuous Rigor</h3>
        <p>We actively monitor published research in exercise physiology and sports medicine. When the science moves, our tools move with it. This is an ongoing commitment, not a one-time build.</p>

        <h2>The Tools We Build</h2>
        <p>Right now, FitCalculato focuses on the metrics that matter most for endurance performance, cardiovascular health, and longevity-focused training:</p>
        <p><Link href="/zone-two-heart-rate-calculator"><strong>Zone 2 Heart Rate Calculator:</strong></Link> Find your precise aerobic training zone for maximum endurance benefits. Zone 2 training has become one of the most evidence-backed approaches to improving cardiovascular fitness and metabolic health. Getting your zone right makes the difference between actually building an aerobic base and just logging junk miles.</p>
        <p><Link href="/vo2-max-calculator"><strong>/vo2-max-calculator:</strong></Link> Calculate your VO2 max and discover your true biological fitness age. VO2 max is one of the strongest predictors of long-term health outcomes. This tool uses validated estimation methods so you don&apos;t need a lab test to get a meaningful number.</p>
        <p>We&apos;re building more. <Link href="/">Explore all available calculators on our homepage</Link> to see what&apos;s live now.</p>

        <h2>Who This Is For</h2>
        <p>FitCalculato is built for anyone who takes their health seriously and wants data they can actually rely on.</p>
        <p>That includes the recreational runner training for their first half marathon. The 45-year-old who started taking Zone 2 seriously after reading about longevity research. The personal trainer who wants to give clients a tool they can use at home. The exercise science student is cross-referencing formulas. The coach is building a structured training plan and needs accurate baseline numbers.</p>
        <p>You don&apos;t need a background in physiology to use these tools. But if you do have one, you&apos;ll find the methodology rigorous enough to respect.</p>

        <h2>A Note on Health Information</h2>
        <p>FitCalculato provides fitness and health calculations for informational and educational purposes. Our tools give you accurate, research-backed data, but data is not a diagnosis, and it is not medical advice.</p>
        <p>If you have an underlying health condition, are new to exercise, or are making significant changes to your training or diet, please work with a qualified healthcare provider. For full details on how to interpret and use the information on this site responsibly, read our <Link href="/disclaimer">/disclaimer</Link>.</p>
        <p>We take this seriously. The fitness industry has a long history of overpromising what numbers can tell you. We&apos;d rather be honest about what our tools can and can&apos;t do.</p>

        <h2>Get In Touch</h2>
        <p>We read every message. If you have a question about a tool, a suggestion for a calculator we should build, a methodology concern, or just want to say hello, we want to hear from you.</p>
        <p><Link href="/contact">/contact</Link></p>
        <p>You can also browse our <Link href="/faqs">/faq</Link> for answers to the most common questions about how our tools work, which formulas we use, and how to interpret your results.</p>

        <h2>The Bigger Picture</h2>
        <p>The best thing that can happen when you use a FitCalculato tool is that you leave with a clear, accurate number, and you know exactly what to do with it.</p>
        <p>Not confused. Not upsold. Not redirected to a premium app. Just informed.</p>
        <p>That&apos;s it. That&apos;s the whole goal.</p>
        <p><Link href="/"><strong>Start with our calculators →</strong></Link></p>
        <p>FitCalculato provides general fitness and health information for educational purposes only. Nothing on this site constitutes medical advice. Always consult a qualified healthcare professional before making changes to your exercise, nutrition, or health routine. <Link href="/disclaimer">/disclaimer</Link> | <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">/terms</Link></p>
      </div>
    </main>
  );
}
