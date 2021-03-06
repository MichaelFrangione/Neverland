import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContentContainer = styled.div`
	min-height: 100vh;
	margin: 0 auto;
	background: #fff;

	& > div {
		max-width: 1200px;
		margin: 0 auto;
		padding: 128px 64px 64px;
	}
`;

class PrivacyPolicy extends Component {
	state = {};
	render() {
		return (
			<div className="page privacy-policy">
				<Navigation showNavItems={true} forceBG />
				<ContentContainer>
					<div className="privacy-policy-container">
						<h1>NEVERLAND ARTS &amp; ENTERTAINMENT INC. PRIVACY POLICY</h1>
						<h3>Commitment</h3>
						<p>
							Neverland Arts &amp; Entertainment Inc. and its Affiliates are committed to protecting the
							privacy of the personal information of its employees, volunteers, Clients, Parents, and
							other stakeholders. We value the trust of those we deal with, and of the public, and
							recognize that maintaining this trust requires that we be transparent and accountable in how
							we treat the information that you choose to share with us.
						</p>
						<p>
							During the course of our various team and individual activities including performance
							contracts, recreational and/or competitive memberships, we frequently gather and use
							personal information to ensure that we are operating and reporting information as required
							by government regulators. Anyone from whom we collect such information should expect that it
							will be carefully protected and that any use of or other dealing with this information
							subject to consent. Our privacy practices are designed to achieve this.
						</p>
						<br />
						<h3>Defining Personal Information</h3>
						<p>
							Personal information is any information that can be used to distinguish, identify or contact
							a specific individual. This information can include an individual&#39;s opinion or beliefs,
							as well as facts about, or related to, the individual. Exceptions: business contact
							information and certain publicly available information, such as names, addresses, and
							telephone numbers as published in telephone directories, are not considered personal
							information.
						</p>
						<br />
						<h3>Privacy Practices</h3>
						<p>
							Personal information gathered by our organization is kept in confidence. Our personnel are
							authorized to access personal information based only on their need to deal with the
							information for the reason(s) for which it was obtained. Safeguards are in place to ensure
							that the information is not disclosed or shared more widely than is necessary to achieve the
							purpose for which it was gathered. We also take measures to ensure that the integrity of
							this information is maintained and to prevent its being lost or destroyed.
						</p>
						<p>
							We collect, use and disclose personal information only for the purposes that a reasonable
							person would consider appropriate in light of the circumstances. We offer annually to each
							individuals we deal with the opportunity to opt not to have their information shared for
							purposes beyond those for which it was explicitly collected.
						</p>
						<br />
						<h3>Website and Collection of Personal Information</h3>
						<p>
							We use password protocols and encryption software to protect personal and other information
							we receive through online payments, registrations, and other products and services that are
							available through our website. Our software is routinely updated to maximize protection of
							such information.
						</p>
						<p>
							This policy statement discloses the privacy practices for our website. However, our site may
							contain links to other sites which we will take the necessary steps to protect yours and
							Neverland’s information. Once you link to another site, you are subject to the privacy and
							security policies of the new site. We encourage you to read the privacy policy of all
							websites you visit, especially if you share any personal information.
						</p>
						<br />
						<h3>Registration Online</h3>
						<p>
							When you choose to register online to Neverland Arts &amp; Entertainment Inc. and its
							Affiliates, we may request the following information:
						</p>

						<p>
							<b>Contact Information: </b>First and Last name, Street address, city, province or state,
							postal or zip code, country, telephone number(s), e-mail address and other contact
							information. This information is used to process all registration and your tax receipt.
						</p>
						<p>
							<b>Credit card/banking information: </b>for registration and credit card or PAP
							(pre-Authorization Payments), we process standard credit card information (card number, card
							type and expiration date) and banking information.
						</p>
						<p>
							<b>Discipline: </b>special information around your previous club and/or skill levels are
							gathered to help in placing you with the right coach and in the right discipline level.
							Skill assessments are required with all new athletes and the final level you are placed in
							might not reflect your current expectation.
						</p>
						<p>
							<b>PAP: </b>
							requires banking number, transit number and account number for Canadian Banks and for United
							State Banks ABA numbers and Account number. Banking contract information is required for
							both Canadian and US Banks.
							<br />
							Banking and personal government IDs are stored in locked or electronic filing systems with
							access available to only authorized personnel. All PAPs are limited to one year term and
							must be renewed annually.
						</p>
						<p>
							<b>Contact Information: </b>Questions, concerns or complaints relation to Neverland Arts
							&amp; Entertainment Inc. <b>Privacy Policy</b> on the treatment of personal information
							should be emailed to deon@neverlandartsent.com with Attention <b>Privacy Officer</b> in the
							subject Line.
						</p>
						<br />
						<h3>Survey and Contest</h3>
						<p>
							From time-to- time our site requests information via surveys or contests. Participation in
							these surveys or contests is completely voluntary and you may choose whether or not to
							participate and therefore disclose this information. Information requested may include
							contact information (such as name, addresses, children in our household), and demographic
							information (such as postal code, age level). Contact information will be used to notify the
							winners and award prizes. Survey information will be used for purposes of monitoring or
							improving the use of our website or our company.
						</p>
						<br />
						<h3>Resumes</h3>
						<p>
							Submitting your resume through Neverland Arts &amp; Entertainment Inc. or any of its
							Affiliates job posting section the following additional conditions shall apply. By
							submitting the information you agree to these conditions:
						</p>
						<p>
							Your information submitted to us may be used for the purpose of employment consideration
							either as full time, contract or for Neverland Arts &amp; Entertainment Inc. or its
							Affiliates acting as an Agent on your behalf for hire by a third party representative for
							current or future positions. A position can be for an hour performance to a term contract or
							full time salary position.
						</p>
						<p>
							We may choose to contact former employers and/or references and/or verify information
							provided to us by you, with or without providing advance notice to you.
						</p>
						<p>
							After an offer of employment is made, we may request that you submit verification of your
							legal right to work in the location of employment, and the offer will be conditional on you
							having the necessary rights and qualifications.
						</p>
					</div>
				</ContentContainer>
				<Footer />
			</div>
		);
	}
}

export default PrivacyPolicy;
