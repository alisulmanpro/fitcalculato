import { MdFavorite, MdMonitorHeart, MdDirectionsRun } from "react-icons/md";

interface ZoneTableProps {
  zones: {
    z1: [number, number];
    z2: [number, number];
    z3: [number, number];
    z4: [number, number];
    z5: [number, number];
  };
  intensityRanges: {
    z1: string;
    z2: string;
    z3: string;
    z4: string;
    z5: string;
  };
}

export default function ZoneTable({ zones, intensityRanges }: ZoneTableProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-headline-lg text-headline-lg text-on-background">Comprehensive Heart Rate Zones</h2>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface font-label-md text-label-md border-b border-outline-variant">
                <th className="py-4 px-6 font-semibold">Zone</th>
                <th className="py-4 px-6 font-semibold">Intensity (% Max)</th>
                <th className="py-4 px-6 font-semibold">Target HR (BPM)</th>
                <th className="py-4 px-6 font-semibold">Primary Benefit</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md text-on-surface-variant divide-y divide-outline-variant">
              {/* Zone 1 */}
              <tr className="hover:bg-surface-bright transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                    <span className="font-medium text-on-surface">Zone 1: Recovery</span>
                  </div>
                </td>
                <td className="py-4 px-6">{intensityRanges.z1}</td>
                <td className="py-4 px-6 font-semibold text-on-surface">{zones.z1[0]} - {zones.z1[1]}</td>
                <td className="py-4 px-6 text-sm">Active recovery, promoting metabolic clearing and blood flow.</td>
              </tr>
              {/* Zone 2 */}
              <tr className="bg-secondary/10 border-l-4 border-l-secondary hover:bg-secondary/20 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="font-semibold text-secondary-fixed-variant">Zone 2: Aerobic Base</span>
                  </div>
                </td>
                <td className="py-4 px-6 font-semibold text-on-surface">{intensityRanges.z2}</td>
                <td className="py-4 px-6 font-bold text-on-surface">{zones.z2[0]} - {zones.z2[1]}</td>
                <td className="py-4 px-6 text-sm font-medium text-on-surface">Fat oxidation, mitochondrial size and density.</td>
              </tr>
              {/* Zone 3 */}
              <tr className="hover:bg-surface-bright transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#facc15]"></div> 
                    <span className="font-medium text-on-surface">Zone 3: Tempo</span>
                  </div>
                </td>
                <td className="py-4 px-6">{intensityRanges.z3}</td>
                <td className="py-4 px-6 font-semibold text-on-surface">{zones.z3[0]} - {zones.z3[1]}</td>
                <td className="py-4 px-6 text-sm">Moderate aerobic capacity, glycogen storage capacity.</td>
              </tr>
              {/* Zone 4 */}
              <tr className="hover:bg-surface-bright transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#fb923c]"></div> 
                    <span className="font-medium text-on-surface">Zone 4: Threshold</span>
                  </div>
                </td>
                <td className="py-4 px-6">{intensityRanges.z4}</td>
                <td className="py-4 px-6 font-semibold text-on-surface">{zones.z4[0]} - {zones.z4[1]}</td>
                <td className="py-4 px-6 text-sm">Lactate threshold clearance rate and high aerobic capacity.</td>
              </tr>
              {/* Zone 5 */}
              <tr className="hover:bg-surface-bright transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <span className="font-medium text-on-surface">Zone 5: VO2 Max</span>
                  </div>
                </td>
                <td className="py-4 px-6">{intensityRanges.z5}</td>
                <td className="py-4 px-6 font-semibold text-on-surface">{zones.z5[0]} - {zones.z5[1]}</td>
                <td className="py-4 px-6 text-sm">Maximal oxygen intake, sprint velocity and power.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
