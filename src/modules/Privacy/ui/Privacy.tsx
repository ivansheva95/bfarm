import React from 'react'
import './privacy.scss'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <section className='privacy'>
      <div className='privacy__container'>
        <h1 className='privacy__title'>
          <p>Privacy</p>
        </h1>

        <div className='privacy__body'>
          <div className='privacy__left'>
            <div className='privacy__help'>
              <span>NEED HELP?</span>
              <p>If you have any questions please reach out and we'll get back to you as soon as possible</p>

              <div className='privacy__navigate'>
                <Link to='/contact'>CONTACT US</Link>
              </div>
            </div>
          </div>

          <div className='privacy__right'>
            <div className='privacy__legal'>
              <h2>Privacy Policy</h2>
              <p>At BFarm, your privacy is our top priority. We understand the importance of protecting your personal information and are committed to processing it responsibly and in compliance with applicable data protection laws.</p>
              <p>This Privacy Policy is meant to help you understand what information we collect, why we collect it, how we use it, and how you can manage your information.</p>
              <h2>Information We Collect</h2>
              <p>We collect information to provide better services to all our users. The types of information we collect depend on your interaction with our services. This can include information you provide to us directly, such as your name, email address, and phone number. We may also collect technical data such as log information and device information.</p>
              <h2>How We Use Information</h2>
              <p>We use the information we collect to deliver, maintain, and improve our services, to develop new ones, and to protect BFarm and our users. We also use this information to offer you tailored content like giving you more relevant search results and advertisements.</p>
              <h2>Information Sharing</h2>
              <ul>
                <p>We do not share your personal information with companies, organizations, or individuals outside of BFarm unless one of the following circumstances applies:</p>
                <li>With your consent: We will share personal information with companies, organizations, or individuals outside of BFarm when we have your consent to do so.</li>
                <li>For legal reasons: We will share personal information if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
              </ul>
              <h2>Do Not Sell My Info</h2>
              <p>In accordance with privacy laws, BFarm respects your right to opt out of the sale of your personal information. BFarm does not sell personal information to third parties for monetary or other valuable consideration.</p>
              <p>If you wish to exercise this right, please contact us at <span className='privacy__navigate'><Link to='mailto:websitebfarm@gmail.com'>websitebfarm@gmail.com</Link></span>.<div className='privacy__navigate'><Link to='mailto:websitebfarm@gmail.com'>websitebfarm@gmail.com</Link></div> Please note that we may need to verify your identity before processing your request.</p>
              <h2>Changes to This Privacy Policy</h2>
              <p>We may change this Privacy Policy from time to time. We will post any changes on this page and, if the changes are significant, we will provide a more prominent notice.</p>
              <h2>Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at websitebfarm@gmail.com.</p>
              <p>Please note that this is a basic privacy policy and may not cover all potential issues. It is strongly recommended to consult with a legal expert to ensure you are fully compliant with all local and international privacy laws.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
