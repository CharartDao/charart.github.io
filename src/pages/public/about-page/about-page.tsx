import React from 'react';
import layout from '../../../components/layout';

const AboutPage: React.FC = () => {

  return (
    <div className="about">
    <h1> ABOUT </h1>
    <img
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </div>
  );
};

export default layout(AboutPage)({ pageName: 'About' });
