SCALECRAFT STUDIO™ MASTER BUILD PROMPT

=============================

Build an elite, high-performance, conversion-optimized website for:

ScaleCraft Studio™
Strategic Experience Engineering for Growth-Stage SaaS

This website must function as a $20K–$50K+ SaaS client acquisition system — not a portfolio.

Primary Objectives:
	•	Attract funded and revenue-generating SaaS companies
	•	Filter out low-budget clients automatically
	•	Signal authority within 5 seconds
	•	Increase qualified strategy call applications
	•	Feel premium, controlled, and venture-tier
	•	Maintain Lighthouse score 85+ minimum

Tone:
Confident. Strategic. Controlled. Minimal. Premium.
Not playful. Not experimental. Not freelancer-style.

Target Audience:
	•	Seed to Series B SaaS startups
	•	B2B platforms
	•	Revenue-generating tech products
	•	Founders focused on activation, retention, and conversion
	•	Teams with $20K–$100K design budgets

⸻

TECH STACK (MANDATORY)

Framework:
	•	Next.js (App Router)
	•	React 18+
	•	TypeScript

3D:
	•	React Three Fiber
	•	Drei
	•	Subtle GLSL distortion shader
	•	Instancing where possible

Motion:
	•	GSAP Core
	•	ScrollTrigger
	•	SplitText
	•	ScrambleText
	•	DrawSVG
	•	MorphSVG
	•	MotionPath

Transitions:
	•	Barba.js + GSAP

Scrolling:
	•	Lenis smooth scrolling

Other:
	•	Lottie for micro-interactions only
	•	Dynamic imports for 3D
	•	IntersectionObserver for lazy loading
	•	Fully SSR optimized

Performance Targets:
	•	LCP under 2.5s
	•	CLS under 0.1
	•	TTI under 3s
	•	Lazy-load 3D hero
	•	Disable heavy shaders on low-end devices
	•	Fallback static hero for mobile
	•	Use requestAnimationFrame for loops
	•	Clean up GSAP contexts on unmount
	•	Optimize SVG paths
	•	Use React.memo where appropriate
	•	Avoid layout thrashing
	•	Use GPU transforms only

⸻

VISUAL IDENTITY

Base Color: #0B0C10
Accent: Electric Gold (#D4AF37) or Neon Cyan (#00F0FF)
Typography: Large editorial sans-serif
Spacing: Generous whitespace
Motion: Slow, restrained, premium
No chaotic animations

⸻

HOMEPAGE STRUCTURE + COPY
	1.	HERO SECTION

Micro Tag:
For Growth-Stage SaaS Teams

Headline (SplitText animated):
We Engineer Digital Experiences That Scale Revenue.

Subheadline:
Strategic UI systems designed to improve activation, retention, and conversion for ambitious SaaS companies.

Primary CTA:
Apply for a Strategy Call

Secondary CTA:
View Case Studies

Trust Indicators:
40+ Product Interfaces Delivered
Supporting 7-Figure SaaS
Onboarding 2 Partners Per Quarter

Small text under CTA:
Projects starting at $20,000

HERO 3D IMPLEMENTATION

Three.js Scene:
	•	Dark environment
	•	Floating glass UI panels
	•	Subtle ambient camera drift
	•	Soft lighting

Camera drift example:
useFrame(({ clock }) => {
camera.position.x = Math.sin(clock.elapsedTime * 0.1) * 0.5
camera.position.y = Math.cos(clock.elapsedTime * 0.1) * 0.3
})

Panel rotation:
useFrame(() => {
mesh.rotation.y += 0.001
})

GSAP Hero Timeline:
	•	SplitText stagger from y:80 opacity:0
	•	Subheadline fade-up
	•	CTA scale fade-in

Use:
stagger: 0.03
ease: “power4.out”
Controlled pacing

CTA hover:
Scale to 1.05 with 0.3 duration.

Motion intensity: 30% maximum.

⸻

	2.	AUTHORITY STRIP

Metrics displayed horizontally:

+32% Activation Lift
+18% Retention Growth
+22% Trial-to-Paid Increase

ScrollTrigger fade-in stagger on stats.

⸻

	3.	PAIN SECTION (Pinned)

Headline:
Your Product Might Be Losing Revenue Right Now.

Pinned ScrollTrigger section.

Sequential reveal:
	•	Low activation
	•	Feature confusion
	•	Weak perceived value
	•	Churn after onboarding

Final bold line:
Design Is Leverage.

Optional subtle shader pulse during midpoint.

Motion must feel tense but controlled.

⸻

	4.	CASE STUDIES

Three large outcome-driven cards.

Each includes:
	•	Industry
	•	Core problem
	•	Measurable outcome
	•	CTA to full case study

3D hover tilt effect using mouse position.

Barba.js transitions:
Fade-out current container
Fade-in next container
Optional subtle camera move

Case studies must focus on:
Activation rate
MRR growth
Churn reduction
Trial-to-paid conversion
Feature adoption

No beauty-focused portfolio language.

⸻

	5.	METHOD SECTION

Headline:
Our Strategic Experience Framework

Four phases:
	1.	Diagnose
	2.	Architect
	3.	Design
	4.	Optimize

DrawSVG animated connection line between steps.

Messaging must reinforce:
This is not decoration.
This is product engineering.

⸻

	6.	PRICING SECTION (Anchoring Strategy)

Enterprise Experience Systems — $45,000+
Product Growth Experience — $30,000+
Conversion Optimization Sprint — Starting at $20,000

Under pricing:
We are not a fit for early-stage hobby projects.

Cards reveal on scroll with subtle upward motion.

Optional subtle 3D tilt on hover.

⸻

	7.	EXCLUSIVITY SECTION

Headline:
We Only Partner With Ambitious Teams.

Bullet list:
	•	Funded startups
	•	Revenue-generating SaaS
	•	Teams serious about growth

Line:
We decline over 60% of inquiries to maintain quality.

Minimal motion.
High whitespace.

⸻

	8.	APPLICATION SECTION (Qualification Funnel)

Headline:
Apply to Work With ScaleCraft Studio

Subtext:
If aligned, you will receive a strategy call invitation within 48 hours.

Multi-step form:

Step 1:
Funding stage
Annual revenue

Step 2:
Budget range
	•	10–20k
	•	20–40k
	•	40k+

Step 3:
Primary growth objective
	•	Increase activation
	•	Improve onboarding
	•	Reduce churn
	•	Launch new product

Step 4:
Commitment confirmation

Animate transitions between steps using horizontal slide.

Progress bar animated using DrawSVG.

On submit:
Play Lottie success animation.

⸻

SEO + STRUCTURED DATA
	•	Use semantic HTML
	•	Proper heading hierarchy
	•	Schema.org Organization markup
	•	Schema CreativeWork for case studies
	•	Optimized metadata per page
	•	Sitemap generation
	•	Optimized OpenGraph
	•	GEO targeting for SaaS design studio
	•	Fast TTFB

⸻

FOLDER STRUCTURE

/app
/components
/components/3d
/components/sections
/hooks
/hooks/useGSAP.ts
/hooks/useThreeScene.ts
/animations
/utils
/styles
/public/assets
/public/shaders

Create reusable:
	•	AnimatedHeading (SplitText wrapper)
	•	MagneticButton
	•	ScrambleTextButton
	•	DrawLine component
	•	useGSAP hook abstraction
	•	useThreeScene hook abstraction

No messy inline animations.

⸻

FINAL EXPECTATION

Generate:
	•	Full component structure
	•	Modular animation setup
	•	Clean reusable hooks
	•	Production-ready code
	•	Performance-optimized 3D
	•	Clean GSAP timelines
	•	No animation spaghetti
	•	Fully responsive layout

This website must:
	•	Signal elite authority
	•	Anchor high-ticket pricing
	•	Filter low-budget clients
	•	Speak SaaS growth language
	•	Convert founders into strategy call applicants
	•	Feel expensive
	•	Feel controlled
	•	Feel engineered

Do not generate a generic agency website.

Generate a venture-tier SaaS growth partner platform.
