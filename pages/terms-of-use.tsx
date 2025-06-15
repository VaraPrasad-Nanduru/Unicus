import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const TermsOfUse = () => {
    return (
        <PageTemplate>
            <section className="space-y-6 text-center" data-aos="zoom-in-up">
                <PageSentence badge="Page" title={`Terms Of Use`} />
            </section>
            <LineDivider />
            <section className="grid place-items-center" data-aos="fade-up">
                <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="1. Use of Cookies" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We use cookies to improve your browsing experience. By using our website, you consent to our use of cookies in accordance with our Privacy Policy. Cookies help enhance functionality and store user preferences for future visits.
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="2. Intellectual Property" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    All content on this site—including but not limited to text, graphics, layouts, software code, UI designs, mood boards, and 3D renders—is the intellectual property of Unicus Solutions unless otherwise stated.
                    <br>You may not:<br>
                    - Copy, reuse, or redistribute any content without prior written consent<br>
                    - Use Unicus Core branding or visual content for promotion without a license<br>
                    - Claim ownership over any of our designs, mockups, or software demos<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="3. ERP and Interior Project Engagement" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    By hiring Unicus Core for any service, whether ERP-based or interior design:<br>
                    - You agree to provide accurate information required for timely execution<br>
                    - You understand that timelines and project scope may vary based on deliverables<br>
                    - Interior design services may involve third-party vendors, and Unicus Core will not be held liable for issues caused by those vendors unless under direct contract<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="4. User-Generated Content" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    Clients may submit content, suggestions, or testimonials. By doing so, you grant Unicus Core a non-exclusive, royalty-free license to use, publish, and share this content for marketing or case study purposes, unless stated otherwise in writing.<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="5. Third-Party Links and References" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    Our website may link to third-party sites or tools for reference or collaboration. Unicus Core is not responsible for the content or policies of these external sites.<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="6. Linking Policy" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    Organizations may link to our website with prior written approval, provided the link:<br>
                    - Is not misleading<br>
                    - Does not falsely imply sponsorship or partnership<br>
                    - Fits contextually within the linking party’s site<br>
                    To request permission, email us at connect@unicuscloud.com with your name, business, and purpose.<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="7. Framing and Embedding" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    You may not embed our webpages or frame our content without explicit permission. This includes interior design images, software dashboards, or interactive demos.<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="8. Disclaimer" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We provide our website and services “as is,” without any express or implied warranties. Unicus Core does not guarantee uninterrupted service or absolute accuracy of all information provided.<br>
                    Nothing in this disclaimer limits our liability for fraud, personal injury due to negligence, or any matter which cannot be legally excluded.<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="9. Limitation of Liability" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    Unicus Core is not liable for:<br>
                    - Loss of data or revenue from ERP service misuse<br>
                    - Delays in interior project timelines due to unforeseen site conditions or third-party suppliers<br>
                    - Indirect damages arising from your use of the site or services<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="10. Privacy and Data Protection" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We value your privacy. Our Privacy Policy outlines how your personal and project data is collected, stored, and used across both ERP and interior services.<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="11. Modifications" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    We may update these terms periodically. Continued use of our site or services indicates acceptance of the current terms.<br>
                  `}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Text textStyle="PageSubtitle" value="12. Governing Law" />
                        <Text
                            textStyle="PageContent"
                            value={`
                    These terms are governed by the laws applicable in the jurisdiction of Unicus Core Solutions' registered office.<br>
                  `}
                        />
                    </div>
                </div>
            </section>
        </PageTemplate>
    )
}

export default TermsOfUse
