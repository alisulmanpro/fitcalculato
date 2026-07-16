import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important medical disclaimer for FitCalculato's fitness and health calculators. Our tools are for informational purposes only.",
  openGraph: {
    title: "Disclaimer",
    description:
      "Important medical disclaimer for FitCalculato's fitness and health calculators. Our tools are for informational purposes only.",
    url: "https://fitcalculato.com/disclaimer",
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

export default function DisclaimerPage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <div className={`max-w-4xl mx-auto ${typographyStyles}`}>
        <h1>Disclaimer</h1>
        <p>Last Updated: July 16, 2026</p>
        
        <h2>Read This Before You Use Any Calculator on This Site</h2>
        <p>We want to be straightforward with you before you use any tool on FitCalculato.</p>
        <p>Our calculators are built on peer-reviewed research. The formulas are validated. The methodology is sound. But a number produced by a website, however accurate the formula, is not the same thing as a clinical assessment by a qualified healthcare professional. That distinction matters, and we take it seriously.</p>
        <p>This page explains exactly what our tools can do, what they can&apos;t do, and when you should speak to a doctor instead of relying on an online calculator.</p>
        
        <h2>1. For Informational and Educational Purposes Only</h2>
        <p>All content, calculators, and tools provided on FitCalculato, including every page at <a href="https://fitcalculato.com">fitcalculato.com</a>, are intended for <strong>informational and educational purposes only</strong>.</p>
        <p>Nothing on this website constitutes:</p>
        <ul>
          <li>Medical advice</li>
          <li>A clinical diagnosis</li>
          <li>A treatment recommendation</li>
          <li>A substitute for professional healthcare guidance</li>
        </ul>
        <p>Our tools give you data. Useful, research-backed data. But data is a starting point for an informed conversation with your healthcare provider, not a replacement for one.</p>

        <h2>2. Always Consult a Qualified Healthcare Professional</h2>
        <p>Before acting on results from any calculator on this site, whether that&apos;s a Zone 2 heart rate target, a <Link href="/vo2-max-calculator">vo2-max-calculator</Link>, or any other metric, please consult with a qualified healthcare professional who can evaluate your individual health history, current condition, and fitness goals.</p>
        <p>This is especially important if you:</p>
        <ul>
          <li>Have a known heart condition, cardiovascular disease, or arrhythmia.</li>
          <li>Take medication that affects heart rate, including beta-blockers, calcium-channel blockers, or antiarrhythmic drugs.</li>
          <li>Have been diagnosed with hypertension, type 1 or type 2 diabetes, or metabolic syndrome</li>
          <li>Are pregnant, postpartum, or planning to become pregnant</li>
          <li>Have a musculoskeletal injury, chronic pain condition, or are recovering from surgery.</li>
          <li>Are over 40 years old and returning to exercise after a period of inactivity</li>
          <li>Have experienced chest pain, dizziness, shortness of breath, or fainting during or after physical activity</li>
          <li>Have any other medical conditions that could affect your response to exercise</li>
        </ul>
        <p><strong>Never disregard professional medical advice, and never delay seeking it, because of something you read or calculated on this website.</strong></p>

        <h2>3. The Honest Limitations of Estimation Formulas</h2>
        <p>Our tools use formulas derived from published, peer-reviewed population studies. These are the same methods used by exercise physiologists and sports medicine professionals around the world. They are well-validated, and they are still estimates.</p>
        <p>Here is what that means in practice:</p>
        <p><strong>Individual variation is real.</strong> A formula built from population averages will produce a result that is accurate for the average person in that study. You may not be the average. Genetics, fitness history, health status, altitude, heat acclimatization, and dozens of other factors all influence your actual physiological responses. The number our tool produces is a strong, evidence-based starting point, not a precise measurement of your specific body.</p>
        <p><strong>Study populations have limits.</strong> Many landmark formulas in exercise science were developed using relatively narrow populations, predominantly healthy adults within specific age ranges, often from Western countries. If your profile differs significantly from those study samples, your results may be less accurate.</p>
        <p><strong>Online calculators are not diagnostic instruments.</strong> If you need a precise VO2 Max reading, that requires a graded exercise test in a clinical or laboratory setting with metabolic gas analysis, the gold standard. Our <Link href="/vo2-max-calculator">vo2-max-calculator</Link> uses validated estimation methods, but &quot;validated estimation&quot; and &quot;laboratory measurement&quot; are not the same thing.</p>
        <p><strong>Medications can override formula assumptions.</strong> Many common medications, particularly beta-blockers and calcium-channel blockers, significantly alter heart rate response during exercise. If you take any of these medications, heart rate-based calculators like our <Link href="/zone-two-heart-rate-calculator">Zone 2 Heart Rate Calculator</Link> will likely underestimate or misrepresent your training zones. Speak to your cardiologist or prescribing physician for guidance tailored to your medication profile.</p>

        <h2>4. The Research We Build On</h2>
        <p>FitCalculato&apos;s tools are based on peer-reviewed, published research. We don&apos;t use arbitrary formulas, every methodology we implement has a traceable source. The core research underpinning our current calculators includes:</p>
        <p><strong>Tanaka, Monahan &amp; Seals (2001)</strong> &quot;Age-predicted maximal heart rate revisited.&quot; Published in the Journal of the American College of Cardiology. This study established the formula HRmax = 208 − (0.7 × age) as a more accurate alternative to the widely cited but less precise 220 − age formula.</p>
        <p><strong>Karvonen, Kentala &amp; Mustala (1957)</strong> The Karvonen method for calculating heart rate reserve (HRR), used to determine personalized training intensity zones based on an individual&apos;s actual resting and maximum heart rate rather than population averages alone.</p>
        <p><strong>Uth, Sørensen, Overgaard &amp; Pedersen (2004)</strong> &quot;Estimation of VO2 max from the ratio between HRmax and HRrest.&quot; Published in Medicine &amp; Science in Sports &amp; Exercise. This formula provides a validated non-exercise VO2 Max estimate derived from resting and maximum heart rate values.</p>
        <p><strong>Cooper Institute Normative Data</strong> Fitness classification standards and cardiovascular fitness norms used for contextualizing VO2 Max results across age and sex categories.</p>
        <p><strong>American College of Sports Medicine (ACSM)</strong> Exercise intensity guidelines and physical activity recommendations are referenced across our methodology and content.</p>
        <p>We review our tools regularly against current literature. When better-validated methods emerge, we update our calculators and document the change. If you have questions about methodology, visit our <Link href="/faqs">faqs</Link> or <Link href="/contact">contact</Link>.</p>

        <h2>5. Not a Provider Relationship</h2>
        <p>Using FitCalculato does not create a patient-provider relationship, a client-coach relationship, or any form of professional advisory relationship between you and FitCalculato, its creators, or any fitness or healthcare professional listed on this platform.</p>
        <p>Our Providers directory lists fitness professionals who may offer their own services independently. Engagement with any listed provider is between you and that provider directly. FitCalculato does not supervise, endorse, or take responsibility for the advice, programs, or services offered by third-party providers on this platform.</p>

        <h2>6. Medical Emergencies</h2>
        <p>If you are experiencing a medical emergency, including but not limited to:</p>
        <ul>
          <li>Chest pain or pressure</li>
          <li>Difficulty breathing or shortness of breath</li>
          <li>Sudden severe dizziness or fainting</li>
          <li>Irregular or racing heartbeat with accompanying symptoms</li>
          <li>Loss of consciousness</li>
        </ul>
        <p><strong>Stop what you are doing and call 911 (or your local emergency services number) immediately.</strong></p>
        <p>Do not search for answers online during a medical emergency. Do not use any calculator on this site. Seek immediate professional emergency care.</p>

        <h2>7. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, FitCalculato, including its founders, contributors, editors, and affiliated parties, shall not be liable for any loss, injury, harm, or damage of any kind arising from:</p>
        <ul>
          <li>Your use of or reliance on any calculator, tool, or content on this website</li>
          <li>Errors or omissions in our content or calculation results</li>
          <li>Actions taken based on information found on this site</li>
          <li>Inability to access the site or any tool on it</li>
        </ul>
        <p>By using FitCalculato, you acknowledge that you do so at your own risk and that you assume full responsibility for how you interpret and act on the results produced by our tools.</p>

        <h2>8. Changes to This Disclaimer</h2>
        <p>We update this disclaimer when our tools change, when new research shifts our methodology, or when legal or policy requirements change. The &quot;Last Updated&quot; date at the top of this page reflects the most recent revision.</p>
        <p>We recommend checking this page periodically if you are a regular user of FitCalculato. The version in effect at the time of your use is the version that applies.</p>

        <h2>9. A Note on How We Think About This</h2>
        <p>We could have written a shorter disclaimer. Most fitness sites do.</p>
        <p>But health data is genuinely sensitive, and the people who use tools like ours deserve to understand exactly what those tools are and aren&apos;t capable of. The calculators on FitCalculato are as accurate as published science allows for estimation-based tools. That&apos;s a real, meaningful standard. It&apos;s also not the same as a clinical evaluation tailored to your individual history.</p>
        <p>Use our tools as the informed starting point they&apos;re designed to be. Pair the numbers with professional guidance when the decision matters. That combination of accessible data plus expert interpretation is exactly what these tools are meant to support.</p>

        <h2>Related Pages</h2>
        <p>For the full picture of how FitCalculato operates and what commitments we make to you as a user, please also review:</p>
        <ul>
          <li><Link href="/privacy">Privacy Policy</Link>: How we handle your data (short version: we don&apos;t collect it)</li>
          <li><Link href="/terms">/terms</Link>: The terms that govern your use of this site</li>
          <li><Link href="/about">About FitCalculato</Link>: Who we are, what we build, and why</li>
          <li><Link href="/faqs">/faqs</Link>: Answers to common questions about our formulas and how to use our tools</li>
          <li><Link href="/contact">/contact</Link>: Reach the FitCalculato team directly</li>
        </ul>

        <h2>Questions or Concerns?</h2>
        <p>If you have questions about this disclaimer, want to flag a concern about one of our tools, or believe a formula on our site needs to be reviewed against newer research, we want to hear from you.</p>
        <p><Link href="/contact">/contact</Link></p>
        <p>We read every message and take methodology feedback seriously.</p>
        <p><em>FitCalculato: Science-backed precision for your fitness journey.</em> <Link href="/">Home</Link> | <Link href="/calculators">Calculators</Link> | <Link href="/about">About</Link> | <Link href="/contact">/contact</Link></p>
      </div>
    </main>
  );
}
