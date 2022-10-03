/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line semi
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import Newsletter from "./components/Newsletter";

function MailchimpForm() {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_}$ID=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => <></>}
      />
      {/* <Newsletter
        status={status}
        message={message}
        onValidated={(formData) => subscribe(formData)}
      /> */}
    </>
  );
}
export default MailchimpForm;
