import React from 'react';
import EducationalContent from '@/components/ui/tool/EducationalContent';
import FAQSection from '@/components/ui/tool/FAQSection';
import ZoneCalculatorInteractive from '@/components/calculators/ZoneCalculatorInteractive';

export default function ZoneCalculator() {
    return (
        <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile md:gap-gutter-desktop">
            <div className="md:col-span-9 flex flex-col gap-8 md:gap-12">
                <ZoneCalculatorInteractive />
                <EducationalContent />
                <FAQSection />
            </div>
        </main>
    );
}