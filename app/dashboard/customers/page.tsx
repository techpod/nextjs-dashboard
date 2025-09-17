import { Metadata } from 'next';
import styles from '@/app/ui/customers.module.css';
import { roboto } from '@/app/ui/fonts';
import { orbitron } from '@/app/ui/fonts';
import { dancing_script } from '@/app/ui/fonts';
import AltRevenueChart from '@/app/ui/customers/alt-revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <div className="pt-1 mt-1">
      <div className="-mt-10 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <AltRevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
        <p>&nbsp;</p>
        <div className={styles.fontTxtWrap}>
        <p>
          The section above demonstrates dynamic rendering and component level streaming in NextJS.
        </p>
        <p>
          Refresh the page and note the Skeleton displayed while fetching Recent Revenue data&#33;
        </p>
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
       <div className={`${roboto.className}`}>
        <p className="pb-8 text-4xl text-indigo-500 font-bold italic">
          Customer Font 1
        </p>
      </div>
      <div className={`${dancing_script.className}`}>
        <p className="pb-8 text-5xl text-indigo-600 font-bold italic p-[50]">
          Customer Font 2
        </p>
      </div>
      <div className={`${orbitron.className}`}>
        <p className="pb-8 text-4xl text-indigo-700 font-bold italic p-[50]">
          Customer Font 3
        </p>
      </div>
      <div className={styles.fontTxtWrap}>
        <p>
          The section above uses the next/font module of NextJS which offers
          framework level font support. Fonts are downloaded at build time
          eliminating subsequent network requests for fonts and the associated
          cumulative layout shift!
        </p>
        <p>&nbsp;</p>
        <p>
          The styling is accomplished with Tailwind utility classes and a
          module.css file which enables standard css syntax.
        </p>
      </div>
    </div>
  );
}