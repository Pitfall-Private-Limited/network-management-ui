import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { LogoutViwe } from 'src/sections/logout/index';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Users - ${CONFIG.appName}`}</title>
      </Helmet>

      <LogoutViwe />
    </>
  );
}
