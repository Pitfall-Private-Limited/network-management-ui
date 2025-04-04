import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ScannerView } from 'src/sections/scanner/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Products - ${CONFIG.appName}`}</title>
      </Helmet>

      <ScannerView />
    </>
  );
}
