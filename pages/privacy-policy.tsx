import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <PageTemplate>
            <section className="space-y-6 text-center" data-aos="zoom-in-up">
                <PageSentence badge="Page" title={`Privacy Policy`} />
            </section>
            <LineDivider />
            <section className="grid place-items-center" data-aos="fade-up">
                <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
                    <Text textStyle="PageSubtitle" value="1. Information We Collect" />
                    <Text
                        textStyle="PageContent"
                        value={`
                    We may collect the following types of personal information when you:<br>
                    - Visit our website<br>
                    - Fill out contact forms or inquiry forms<br>
                    - Purchase our products or book services<br>
                    - Register for workshops or events<br>
                    - Engage with us on social media or via email<br>
                                <br>
                    Information we collect may include:<br>
                    - Full name<br>
                    - Email address<br>
                    - Phone number<br>
                    - Shipping/Billing address<br>
                    - Company name (if applicable)<br>
                    - Payment details (processed via secure third-party gateway)<br>
                    - Design preferences and feedback<br>
                    - Artwork references or brief details you share for custom projects<br>
                        <br>        
                    We do not knowingly collect or store sensitive financial data like card numbers directly. Payments are handled by trusted third-party providers (e.g., Razorpay, Stripe, UPI, etc.).
                  `}
                    />
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="2. How We Use Your Information" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We use your information to:<br>
                    - Communicate with you regarding your orders or inquiries<br>
                    - Deliver products or schedule services<br>
                    - Personalize design experiences and custom art orders<br>
                    - Send updates, offers, or newsletters (only if you opt-in)<br>
                    - Improve our website, services, and user experience<br>
                    - Maintain records for legal and accounting purposes<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="3. Sharing Your Information" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We do not sell, rent, or trade your information. However, we may share your information with:<br>
                    - Trusted third-party service providers (payment gateways, courier partners, design collaborators)<br>
                    - Legal authorities if required by law or to protect our legal rights<br>
                    - Partners or vendors working on your project under strict confidentiality<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="4. Cookies and Tracking Technologies" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We may use cookies or similar technologies to:<br>
                    - Enhance your browsing experience<br>
                    - Track website traffic and analytics<br>
                    - Remember your preferences<br>
                       <br>             
                    You can choose to disable cookies in your browser settings if preferred.
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="5. Data Security" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We take appropriate measures to protect your personal data from unauthorized access, alteration, or disclosure. All information is stored on secure servers and only accessible by authorized personnel.
<br>
                    However, no online transmission is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="6. Your GDPR Data Protection Rights" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    At Unicus Core, we are committed to protecting your personal data. Under the General Data Protection Regulation (GDPR), you have the following rights:<br>
                    - Right to Access: You have the right to request a copy of the personal data we hold about you. A small fee may apply for this service.<br>
                    - Right to Rectification: If you believe any information we hold is inaccurate or incomplete, you have the right to request a correction or update.<br>
                    - Right to Erasure: You can request the deletion of your personal data, subject to certain legal conditions.<br>
                    - Right to Restrict Processing: You have the right to request that we limit the processing of your personal data in specific circumstances.<br>
                    - Right to Object to Processing: You may object to the processing of your personal data, particularly if we are using it for direct marketing or based on legitimate interests.<br>
                    - Right to Data Portability: You have the right to request that we transfer your data to another organization, or directly to you, in a structured, commonly used, and machine-readable format.<br>
<br>
                    How to Make a Request: If you wish to exercise any of these rights, please contact us. We are required to respond within one month of receiving your request.
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="7. Third-Party Links" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    Our website may contain links to external websites. We are not responsible for their content or privacy practices. We recommend reviewing their privacy policies before sharing your information.
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="8. Changes to This Policy" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We may update this Privacy Policy periodically. Any changes will be posted here with a revised “Effective Date.” Continued use of the site constitutes your acceptance of the updated terms.
                  `}
                        />
                    </div>
                </div>
            </section>
        </PageTemplate>
    )
}

export default PrivacyPolicy
