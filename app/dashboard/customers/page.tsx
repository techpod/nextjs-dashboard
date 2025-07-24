
import { Metadata } from 'next';
import styles from '@/app/ui/customers.module.css';
import { roboto } from '@/app/ui/fonts';
import { orbitron } from '@/app/ui/fonts';
import { dancing_script } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <div>
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
          This section uses the next/font module of NextJS which offers
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