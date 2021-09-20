import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const FooterDefaultComponent = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <footer>
      <ul>
        <li>
          <Link id="imprint-button" component="a">
            {t('global.imprint')}
          </Link>
        </li>
        <li>
          <Link id="privacy-button" component="a">
            {t('global.privacy')}
          </Link>
        </li>
        <li>
          <Link id="tac-button" component="a" dangerouslySetInnerHTML={{ __html: t('global.termsOfUse') }}></Link>
        </li>
      </ul>
    </footer>
  );
};

export default FooterDefaultComponent;