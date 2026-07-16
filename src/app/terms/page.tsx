import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for using FitCalculato's free fitness and health calculators.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions",
    description:
      "Terms & Conditions for using FitCalculato's free fitness and health calculators.",
    url: "https://fitcalculato.com/terms",
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

export default function TermsOfServicePage() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <div className={`max-w-4xl mx-auto ${typographyStyles}`}>
        <h1>Terms & Conditions</h1>
        <p>Last Updated: July 16, 2026</p>
        
        <h2>Before You Use FitCalculato, Please Read This</h2>
        <p>These Terms & Conditions govern your access to and use of FitCalculato, including every calculator, tool, page, and piece of content available at <a href="https://fitcalculato.com">fitcalculato.com</a>.</p>
        <p>By visiting or using this website, you agree to these terms in full. If any part of this agreement does not work for you, please discontinue use of the site. We have written these terms in plain language because we believe you deserve to understand what you are agreeing to, not just sign off on something unreadable.</p>
        <p>If you have questions before you proceed, you are welcome to <Link href="/contact">contact</Link> first.</p>
        
        <h2>1. Who We Are</h2>
        <p>FitCalculato is an independent fitness and health tool platform offering free, science-backed calculators and informational content. Our tools are built on peer-reviewed research and designed to give users clinical-grade fitness metrics without the cost or friction of premium apps or professional assessments.</p>
        <p>You can learn more about our approach, our methodology, and the team behind this platform on our <Link href="/about">About page</Link>.</p>
        <p>We are not a medical provider, a gym, a supplement company, or a healthcare organization. We are a technology and content platform. That distinction matters, and it is explained in detail in our <Link href="/disclaimer">disclaimer</Link>, which forms part of these terms by reference.</p>
        
        <h2>2. Acceptance of Terms</h2>
        <p>By accessing <a href="https://fitcalculato.com">fitcalculato.com</a> in any capacity, browsing, using a calculator, reading an article, accessing the Providers directory, or any other interaction, you confirm that:</p>
        <ul>
          <li>You are at least 18 years of age, or you are accessing the site under the supervision of a parent or legal guardian who has agreed to these terms on your behalf.</li>
          <li>You have read and understood these Terms & Conditions.</li>
          <li>You agree to be legally bound by them.</li>
          <li>You will comply with all applicable local, national, and international laws while using this site.</li>
        </ul>
        <p>If you are under 18, please do not use this site without a parent or guardian&apos;s involvement and consent.</p>

        <h2>3. What FitCalculato Provides</h2>
        <p>FitCalculato provides:</p>
        <ul>
          <li><strong>Free fitness calculators</strong> built on validated, peer-reviewed formulas. Our current tools include the Zone 2 Heart Rate Calculator and the VO2 Max Calculator, with more tools being developed and added on an ongoing basis. You can find everything currently available on our <Link href="/">homepage</Link>.</li>
          <li><strong>Informational content</strong> covering exercise science, training methodology, and fitness concepts, written to help users understand their results and make informed decisions about their health and training.</li>
          <li><strong>A Providers directory</strong> listing independent fitness professionals who may offer their own services to users who want additional coaching, programming, or guidance beyond what our free tools provide.</li>
          <li><strong>FAQs and support content</strong> to help users understand how our formulas work, how to interpret their results, and when to seek professional advice. Visit our <Link href="/faqs">faqs</Link> for answers to the most common questions.</li>
        </ul>
        <p>Everything FitCalculato provides is free to access. We do not charge for calculator use, content access, or directory browsing.</p>

        <h2>4. What FitCalculato Does Not Provide</h2>
        <p>This is important. FitCalculato does not provide:</p>
        <ul>
          <li>Medical advice of any kind</li>
          <li>Clinical diagnoses or health assessments</li>
          <li>Treatment plans or exercise prescriptions</li>
          <li>Nutritional plans or dietary recommendations</li>
          <li>Professional coaching, training, or consulting services</li>
          <li>A patient-provider or client-coach relationship of any kind</li>
        </ul>
        <p>The results generated by our calculators are estimates based on validated population-level research. They are meaningful, useful starting points. They are not substitutes for personalized professional evaluation.</p>
        <p>For the full explanation of what our tools can and cannot do, including critical notes on medications that affect heart rate, individual variation in formula accuracy, and when you must consult a doctor before exercising, please read our <Link href="/disclaimer">disclaimer</Link>. This is not optional reading. It is part of using this site responsibly.</p>

        <h2>5. Accuracy of Calculator Results</h2>
        <p>We take accuracy seriously. Every formula we implement is sourced from published, peer-reviewed research, including work from the American College of Sports Medicine (ACSM), the National Strength and Conditioning Association (NSCA), and peer-reviewed journals including Sports Medicine, the Journal of the American College of Cardiology, and Medicine & Science in Sports & Exercise.</p>
        <p>We review our methodologies regularly. When better-validated approaches emerge in the research literature, we update our tools accordingly.</p>
        <p>That said, we make no guarantee that every result produced by our calculators will be accurate for every individual user. Estimation formulas are built from population averages. Your individual physiology, health history, fitness level, medications, and other factors may cause your actual values to differ from what our tools calculate.</p>
        <p><strong>Use our results as informed starting points, not as precise clinical measurements.</strong> For precise measurement, consult a qualified sports medicine physician, exercise physiologist, or certified fitness professional.</p>

        <h2>6. Your Responsibilities as a User</h2>
        <p>When you use FitCalculato, you agree to:</p>
        <ul>
          <li><strong>Use the tools lawfully and responsibly.</strong> Do not use this site for any purpose that violates applicable laws or regulations in your jurisdiction.</li>
          <li><strong>Do not misrepresent calculator outputs.</strong> Results generated on FitCalculato are estimates for personal use. You agree not to present these results as clinical assessments, diagnostic findings, or professional evaluations to yourself or to others.</li>
          <li><strong>Consult appropriate professionals when the decision matters.</strong> If you have a health condition, take medications that affect heart rate or exercise capacity, are pregnant, or are returning to exercise after injury or illness, you agree to seek qualified professional guidance before acting on results from our tools. See our <Link href="/disclaimer">disclaimer</Link> for the full list of situations where professional consultation is required before using our calculators.</li>
          <li><strong>Do not attempt to harm, disrupt, or exploit this platform.</strong> You agree not to attempt to hack, scrape, reverse-engineer, overload, or otherwise interfere with any aspect of FitCalculato&apos;s infrastructure, tools, or content.</li>
          <li><strong>Do not reproduce or redistribute our content without permission.</strong> The calculators, written content, methodology explanations, and all other original material on this site are our intellectual property. Do not copy, republish, or create derivative works from our content without prior written permission.</li>
        </ul>

        <h2>7. Providers Directory: Third-Party Services</h2>
        <p>FitCalculato maintains a Providers directory listing independent fitness professionals who offer their own services separately from this platform.</p>
        <p>These providers are independent third parties. FitCalculato does not:</p>
        <ul>
          <li>Employ, supervise, or manage listed providers.</li>
          <li>Endorse or guarantee the quality of their services.</li>
          <li>Review, approve, or take responsibility for the advice, programs, or recommendations they offer.</li>
          <li>Act as an intermediary or agent in any transaction between you and a provider.</li>
        </ul>
        <p>Any engagement you enter into with a listed provider is a direct relationship between you and that provider, governed by their own terms, qualifications, and professional standards.</p>
        <p>FitCalculato is not liable for any outcome, experience, injury, or loss arising from services provided by third-party providers listed on this platform. Always verify a provider&apos;s credentials and qualifications independently before engaging their services.</p>

        <h2>8. Intellectual Property</h2>
        <p>All original content on FitCalculato, including but not limited to calculator tools, methodology explanations, written articles, page copy, site design, and structural layout, is the intellectual property of FitCalculato and is protected under applicable copyright law.</p>
        <p>You are permitted to:</p>
        <ul>
          <li>Use our calculators for personal, non-commercial fitness purposes.</li>
          <li>Share links to our tools and content.</li>
          <li>Quote brief excerpts from our content for educational purposes with proper attribution and a link back to the source.</li>
        </ul>
        <p>You are not permitted to:</p>
        <ul>
          <li>Copy, reproduce, or republish substantial portions of our content on other websites or platforms.</li>
          <li>Build or offer competing tools or services derived from our calculators without written permission.</li>
          <li>Remove, obscure, or alter any attribution, copyright notice, or branding associated with our content.</li>
          <li>Use our brand name, logo, or visual identity without prior written authorization.</li>
        </ul>
        <p>For licensing inquiries or collaboration requests, <Link href="/contact">contact</Link>.</p>

        <h2>9. Privacy and Data</h2>
        <p>FitCalculato does not collect, store, or share the data you enter into our calculators. Your inputs stay in your browser session and are not transmitted to our servers.</p>
        <p>We do use standard analytics tools to understand how people use the site, such as page views, general usage patterns, and similar aggregate data. We do not sell your data to third parties.</p>
        <p>The full details of how we handle data, cookies, and your privacy rights are explained in our <Link href="/privacy">Privacy Policy</Link>. Please read it; it is short, and it is honest.</p>

        <h2>10. Advertising</h2>
        <p>FitCalculato may display advertisements served by third-party advertising partners, including Google AdSense. These advertisements help us keep our tools free and our platform running.</p>
        <p>We do not control the specific ads displayed and do not endorse the products or services advertised. Ad content is served automatically based on your browsing context and the policies of our advertising partners.</p>
        <p>We never allow advertising content to influence our editorial decisions, our calculator methodology, or the information we present to users. Our tools and content are independent of our advertising relationships.</p>
        <p>If you encounter an ad that you believe is inappropriate or misleading, please <Link href="/contact">contact</Link>.</p>

        <h2>11. External Links</h2>
        <p>Our content occasionally links to external websites, research papers, professional organizations, reference sources, and other useful third-party resources.</p>
        <p>FitCalculato does not control external websites and is not responsible for their content, accuracy, privacy practices, or availability. A link to an external site does not constitute an endorsement of that site or its content.</p>
        <p>We recommend reviewing the terms and privacy policies of any external site before engaging with it.</p>

        <h2>12. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, FitCalculato, including its founders, team members, contributors, and affiliated parties, shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:</p>
        <ul>
          <li>Your use of or inability to use this website or any tool on it</li>
          <li>Errors, inaccuracies, or omissions in our content or calculator results</li>
          <li>Decisions made based on information or results found on this site</li>
          <li>Any interruption, suspension, or termination of the website or its tools</li>
          <li>Any action taken in connection with a third-party provider listed on this platform</li>
        </ul>
        <p>Your use of FitCalculato is at your own risk. You assume full responsibility for how you interpret and act on the results produced by our tools.</p>
        <p>Nothing in this limitation of liability excludes or restricts liability that cannot be excluded by law in your jurisdiction.</p>

        <h2>13. No Warranty</h2>
        <p>FitCalculato is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, express or implied, regarding the reliability, accuracy, completeness, or fitness for a particular purpose of any tool, calculator, or content on this site.</p>
        <p>We do not guarantee that the site will be available without interruption, that results will be error-free, or that any defects will be corrected. While we work hard to keep everything accurate and operational, we cannot guarantee it.</p>

        <h2>14. Changes to These Terms</h2>
        <p>We update these Terms &amp; Conditions when our platform changes, when new features or tools are added, or when legal or policy requirements shift.</p>
        <p>The &quot;Last Updated&quot; date at the top of this page reflects the most recent revision. We encourage you to check this page periodically if you are a regular user of FitCalculato.</p>
        <p>Your continued use of the site after a revision constitutes your acceptance of the updated terms. If you do not agree with a revision, please stop using the site and <Link href="/contact">contact</Link> if you have concerns.</p>

        <h2>15. Governing Law</h2>
        <p>These Terms &amp; Conditions are governed by and construed in accordance with applicable law. Any disputes arising under or in connection with these terms shall be subject to the jurisdiction of the appropriate courts, as determined by applicable law in your region.</p>

        <h2>16. Contact and Feedback</h2>
        <p>We take these terms seriously, and we take user feedback seriously.</p>
        <p>If you have questions about these Terms &amp; Conditions, want to report a concern about content or tool accuracy, believe a methodology needs to be reviewed against newer research, or have found something on this site that does not meet our stated standards, we want to hear from you.</p>
        <p><Link href="/contact">contact</Link></p>
        <p>We read every message. Response times may vary, but nothing gets ignored.</p>
        
        <h2>Related Pages</h2>
        <p>These pages form the full legal and informational framework for your use of FitCalculato. Please review them alongside these terms:</p>
        <ul>
          <li><Link href="/disclaimer">/disclaimer</Link> What our tools can and cannot do, and when to see a doctor</li>
          <li><Link href="/privacy">Privacy Policy</Link>: How we handle your data (we don&apos;t collect or sell it)</li>
          <li><Link href="/about">About FitCalculato</Link>: Who we are, what we build, and our methodology</li>
          <li><Link href="/faqs">/faqs</Link>: Common questions about our calculators and how to use them</li>
          <li><Link href="/contact">/contact</Link>: Reach us directly with any question or concern</li>
          <li><Link href="/">Homepage — All Calculators</Link>: Browse every free tool we currently offer</li>
        </ul>
        <p>FitCalculato: Clinical precision for your fitness journey. These Terms &amp; Conditions were last reviewed and updated on July 16, 2026.</p>
      </div>
    </main>
  );
}
