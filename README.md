It looks like the formatting broke during the copy-paste because the Markdown structure wasn't preserved. To make this look clean and professional in a document or PDF, use the version below.

I have optimized the spacing, added clear headers, and used bullet points so it is easily readable for stakeholders.

---

# Business Requirements Document: Kno (ExpertFlow)
**Project Name:** Kno  
**Version:** 1.0  
**Status:** Draft / Technical Architecture Phase  

---

## 1. Executive Summary
**Kno** is a premium micro-consultancy marketplace designed to connect specialized domain experts (Legal, Tech, Health, Business) with users seeking high-value consultations. The platform’s primary objective is to bridge the "knowledge gap" through a high-performance UI that prioritizes trust, real-time synchronization, and a frictionless booking experience.

---

## 2. User Personas
* **The Client:** Seeks immediate, credible advice. They value intuitive search, transparent pricing, and mobile-friendly secure payments.
* **The Expert:** Requires a robust management suite to handle their professional schedule, automate buffer times, and track earnings without administrative overhead.

---

## 3. Functional Requirements

### 3.1 Discovery & Matchmaking
* **Smart Filter Engine:** Users must be able to filter experts by domain, sub-niche, hourly rate, average rating, and "Next Available" slot.
* **Credibility Indicators:** UI must support verified badges, years of experience, and "Top Rated" status indicators.
* **Rich Profile Views:** Support for video introductions, integrated client reviews, and a "Portfolio/Case Studies" section.

### 3.2 The Transactional Booking Engine
* **Universal Time-Zone Handling:** The system must automatically detect the user's local time and sync it with the Expert’s availability to eliminate scheduling errors.
* **Multi-Step Intake Flow:**
    * **Step 1:** Slot Selection via a high-performance interactive calendar.
    * **Step 2:** Context Gathering (User uploads files or provides a summary of the problem).
    * **Step 3:** Payment Authorization (Stripe/PayPal integration).
* **Dynamic Buffering:** Automatic insertion of "cooling periods" (e.g., 15 minutes) between back-to-back sessions to prevent expert burnout.

### 3.3 Expert Management Suite
* **Availability Ruleset:** Capability to set recurring hours, one-off blackouts, and "Urgent" session toggles (allowing higher rates for < 24hr notice).
* **Earnings Dashboard:** Real-time data visualization of "Pending Payouts," "Completed Sessions," and "Tax Summaries."
* **Integrated Virtual Room:** A dedicated UI for the session itself, featuring a countdown timer, hardware toggles (mic/camera), and shared note-taking.

---

## 4. Advanced Business Features
* **The "Queue" System:** If an expert is fully booked, users can join a "Notify Me" list to be alerted of cancellations.
* **Escrow Logic:** Funds are captured at booking but only released to the expert 24 hours after a successful session to ensure user satisfaction.
* **Subscription Retainers:** Allow clients to book "4-session bundles" at a discounted rate, managed via a credit-based UI.

---

## 5. Non-Functional (Architectural) Requirements

| Requirement | Business Impact |
| :--- | :--- |
| **Optimistic UI Updates** | High conversion; the app feels "instant" during booking and interactions. |
| **SEO Optimization** | Profiles must be Server-Side Rendered (SSR) to ensure visibility in search engines. |
| **State Persistence** | Form data must persist across refreshes or accidental tab closures during checkout. |
| **Accessibility (A11y)** | The calendar must be fully keyboard-navigable and screen-reader friendly. |

---

## 6. Success Metrics (KPIs)
* **Booking Velocity:** Time elapsed from landing on the homepage to completing a checkout.
* **Retention Rate:** Percentage of users who book a follow-up session.
* **Load Performance:** Largest Contentful Paint (LCP) must stay under 1.8 seconds.

---

## 7. Project Phasing
1.  **Phase 1 (MVP):** Basic search, static calendar slots, and simple checkout.
2.  **Phase 2 (Growth):** Time-zone automation, expert management dashboard, and review system.
3.  **Phase 3 (Scale):** Analytics, subscription "retainer" models, and integrated video calling.
