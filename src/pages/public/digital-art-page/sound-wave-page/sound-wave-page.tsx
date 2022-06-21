import React from 'react';
import { useTranslation } from 'react-i18next';
import layout from '../../../../components/layout';
import MicrophoneInput from '../../../../components/microphone-input';
import './sound-wave-page.scss';

const SoundWavePage: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className="sound-wave">
        <h1> Sound Wave</h1>
        <p className="subtitle">Present the special person the special sound to abstract art representation of love. </p>
        <MicrophoneInput />
    </div>
  );
};

export default layout(SoundWavePage)({ pageName: 'Sound Wave Page' });