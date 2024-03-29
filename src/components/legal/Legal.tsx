import React from 'react';
// import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';
import './legal.css';

interface IProps {
  title: string;
}

const Legal: React.FC<IProps> = ({ title }) => {
  const renderDocument = () => {
    switch (title) {
      case 'Terms of Use':
        // return <TermsOfUse />;
      case 'Privacy Policy':
        return <PrivacyPolicy />;
      default:
        return null;
    }
  };

  return (
    <section className="terms-wrapper">
      <div className="container">
        <div className="terms-content">
          <h2 className="text-center">{title}</h2>
          {renderDocument()}
        </div>
      </div>
    </section>
  );
};

export default Legal;
