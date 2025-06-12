import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const TermOfService = () => {
  return (
    <PageTemplate>
      <section className="space-y-6 text-center" data-aos="zoom-in-up">
        <PageSentence badge="PAGE" title={`Terms & Conditions`} />
        {/*  <Text textStyle="BlogMeta" value="Updated at 2021-05-06" />*/}
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
          <Text textStyle="PageSubtitle" value="1. General Information" />
          <Text
            textStyle="PageContent"
            value={`
                Unicus is a fine-art interior company founded by Dheekshetha, offering custom-designed interiors, art installations, décor services, and creative workshops. All products and services are subject to availability and may be modified at our discretion.
              `}
          />
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="2. Intellectual Property" />
            <Text
              textStyle="PageContent"
              value={`
                All content including logos, artwork, text, designs, graphics, and images on this site are the intellectual property of Unicus or its partners and are protected by copyright and trademark laws. You may not use, reproduce, or redistribute any content without express permission.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="3. Custom Orders and Art Commissions" />
            <Text
              textStyle="PageContent"
              value={`
                * All artworks, interior products, and installations are custom-made and non-refundable once production has started.<br>
                * If the client provides a reference image, the final artwork will not be an exact replica. We aim for 50–80% similarity or better. Each piece is original and artistically interpreted.<br>
                * No rework or modification will be entertained after the final piece is delivered.<br>
                * Design finalization will be done in consultation with the client. Any post-approval changes are not the responsibility of Unicus.<br>
                * A non-refundable advance payment is required to initiate work.<br>
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="4. Workshops & Events" />
            <Text
              textStyle="PageContent"
              value={`
                * Registrations for workshops are confirmed only upon full payment.<br>
                * Cancellations must be made at least 48 hours prior for a partial refund.<br>
                * Unicus reserves the right to cancel or reschedule any workshop with prior notice.<br>
             </ul> `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="5. Payments" />
            <Text
              textStyle="PageContent"
              value={`
                * All prices will be mentioned clearly during the ordering or booking process.<br>
                * We accept digital payments via UPI, bank transfer, or authorized payment gateways.<br>
                * Full payment must be made before delivery or final handover of artwork/interior projects.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="6. Shipping and Delivery" />
            <Text
              textStyle="PageContent"
              value={`
                * Delivery charges may apply depending on location and size of the artwork.<br>
                * Damage during transit must be reported within 24 hours of receiving the item, with photographic evidence.<br>
                * We are not responsible for delays caused by third-party shipping providers.<br>
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="7. Privacy" />
            <Text
              textStyle="PageContent"
              value={`
                We respect your privacy. Your data will be handled as outlined in our Privacy Policy and will never be sold to third parties. We collect only relevant information needed to fulfill your order or enhance your user experience.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="8. Liability Disclaimer" />
            <Text
              textStyle="PageContent"
              value={`
                Unicus is not liable for any damages resulting from the use of this website or any product purchased through it. We do not guarantee uninterrupted or error-free service. All services are provided “as is” without warranties of any kind.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="9. Termination" />
            <Text
              textStyle="PageContent"
              value={`
                Unicus reserves the right to terminate access or refuse service to any individual found in violation of these Terms or involved in harmful or unethical conduct.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="10. Governing Law" />
            <Text
              textStyle="PageContent"
              value={`
                These Terms are governed by the laws of India. Any disputes arising from use of the website or services shall be subject to the jurisdiction of the courts located in [Insert City, e.g., Bangalore].
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="11. Modifications" />
            <Text
              textStyle="PageContent"
              value={`
                We may update these Terms and Conditions periodically. Changes will be posted on this page, and continued use of the website implies acceptance of those changes.
              `}
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default TermOfService
