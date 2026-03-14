const businessInput = document.getElementById('businessInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const heroSection = document.getElementById('heroSection');
const loading = document.getElementById('loading');
const loadingText = document.getElementById('loadingText');
const results = document.getElementById('results');
const stepsContainer = document.getElementById('stepsContainer');
const backBtn = document.getElementById('backBtn');
const resultNote = document.getElementById('resultNote');

const publicConfig = {
    qrCodeUrl: 'my-qr.png',
    instagramHandle: '@business10x2026',
    unlockPrice: '₹499'
};

function strategy(id, label, keywords, openingLine, steps) {
    return {
        id,
        label,
        keywords,
        openingLine,
        steps: buildSteps(steps)
    };
}

const defaultStrategy = strategy(
    'general',
    'General Business',
    [],
    'This comprehensive growth path is designed to transform any business through systematic execution and market positioning.',
    [
        ['Clarify Your Market Position', 'Define the exact transformation you deliver and which customer segment values it most. Position yourself as the only logical choice for this specific outcome, not just another vendor competing on price.'],
        ['Engineer Your Signature Offer', 'Package your core deliverable into a named, priced, and predictable system that customers can buy without hesitation. Include proof elements, clear outcomes, and remove all buyer confusion from the purchase decision.'],
        ['Build a Predictable Lead System', 'Commit to one primary acquisition channel and reverse-engineer daily lead targets. Whether paid ads, content, partnerships, or outbound—master consistency before adding complexity.'],
        ['Optimize the Conversion Path', 'Map every touchpoint from stranger to buyer. Fix the leaks in awareness, consideration, decision, and purchase. Most revenue gains come from converting existing traffic better, not finding new traffic.'],
        ['Install a Retention Engine', 'Design post-purchase sequences that turn customers into repeat buyers. The fastest path to revenue growth is selling more to people who already trust you.'],
        ['Create Scalable Systems', 'Document, delegate, and automate the repetitive parts of delivery, operations, and customer support. Your business should run without you making every decision.'],
        ['Leverage Social Proof Strategically', 'Position testimonials, case studies, and results where they influence purchase decisions. Collect proof systematically and deploy it at high-intent moments.'],
        ['Expand Customer Lifetime Value', 'Add complementary offers, upsells, cross-sells, and continuity programs. Engineer the revenue per customer to grow over time, not just at first purchase.'],
        ['Build Distribution Leverage', 'Identify who already has your ideal customers and structure partnerships, affiliates, or collaboration models that multiply your reach without multiplying your effort.']
    ]
);

const strategyCatalog = [
    strategy(
        'restaurant',
        'Food and Restaurant',
        ['restaurant', 'food', 'dhaba', 'cloud kitchen', 'kitchen', 'meal', 'tiffin', 'catering', 'biryani', 'pizza', 'burger', 'dining', 'eatery'],
        'Restaurant growth is a game of frequency, margin mix, and owning a local radius before trying to scale.',
        [
            ['Own a Signature Hero Dish', 'Identify the one item that travels well, photographs beautifully, and creates word-of-mouth. Make it your brand anchor and optimize pricing, packaging, and presentation around this flagship product.'],
            ['Dominate Your Local Delivery Radius', 'Target a 3-5km zone and become the default choice through hyper-local SEO, Google reviews, and WhatsApp broadcast lists. Depth in one area beats shallow presence across a city.'],
            ['Fix Your Menu Economics', 'Audit contribution margin by dish. Remove low-margin, slow-moving items. Push high-margin items through staff incentives, menu design, and combo engineering. Your profitability lives in the mix, not just volume.'],
            ['Engineer Repeat Order Triggers', 'Build subscription meal plans, family bundles, or office catering contracts. Make repeat ordering easier than deciding where to eat each time.'],
            ['Optimize for Off-Peak Revenue', 'Run targeted promotions during slow hours without training customers to expect discounts during peak times. Time-based offers protect margin while filling capacity.'],
            ['Build a First-Party Customer List', 'Capture phone numbers at checkout for WhatsApp broadcasts. Own your customer data instead of renting visibility on aggregator platforms.'],
            ['Master Packaging as Marketing', 'Invest in packaging that protects food quality, reinforces brand memory, and encourages social sharing. Packaging is your sales team after the order leaves the kitchen.'],
            ['Create Platform Independence', 'Use Zomato and Swiggy for discovery but drive repeat orders to your own channels. High commission platforms should acquire customers, not retain them.'],
            ['Track Unit Economics Religiously', 'Monitor food cost percentage, labor cost per order, and contribution margin by channel. Make decisions based on numbers, not hunches.']
        ]
    ),
    strategy(
        'cafe',
        'Cafe and Coffee Shop',
        ['cafe', 'coffee', 'espresso', 'coffee shop', 'brew', 'latte', 'cappuccino', 'barista'],
        'Cafes succeed by becoming rituals, not transactions. This strategy focuses on frequency, dwell time monetization, and community building.',
        [
            ['Create Signature Drink Rituals', 'Develop 2-3 unique drinks that customers associate only with your cafe. Make them Instagrammable, name them memorably, and train staff to upsell them as the experience, not just a beverage.'],
            ['Design for Content Generation', 'Identify one photogenic corner where natural light, aesthetics, and seating create shareable moments. User-generated content is free marketing if you engineer the environment for it.'],
            ['Build Morning Habit Capture', 'Launch coffee subscriptions or punch cards for weekday regulars. Turn occasional visitors into daily rituals by removing friction and adding predictable value.'],
            ['Monetize Long-Stay Customers', 'Create packages for students and remote workers that combine seating, Wi-Fi, and snacks. Charge for the workspace value you provide, not just the coffee.'],
            ['Engineer Seasonal Urgency', 'Drop limited-edition drinks tied to weather, festivals, or trends. Scarcity and newness drive visit frequency better than permanent menus.'],
            ['Capture Customer Data at Checkout', 'Offer loyalty perks in exchange for WhatsApp or email opt-in. Direct communication channels compound in value over time.'],
            ['Expand Revenue Beyond the Cup', 'Sell retail products like beans, merch, gift cards, or bottled drinks. Create income streams that don't require customers to sit in your cafe.'],
            ['Partner with Local Ecosystem', 'Collaborate with nearby boutiques, studios, or co-working spaces for cross-promotions. Shared audiences reduce acquisition costs.'],
            ['Optimize Table Turn vs Dwell Time', 'Measure revenue per seat-hour, not just revenue per transaction. Balance quick-turn peak hours with long-stay monetization during off-peak.']
        ]
    ),
    strategy(
        'bakery',
        'Bakery and Patisserie',
        ['bakery', 'cake', 'pastry', 'bake', 'brownie', 'cupcake', 'dessert', 'patisserie', 'confectionery'],
        'Bakery profitability comes from premium positioning, waste reduction, and capturing high-margin custom orders alongside daily fresh counters.',
        [
            ['Position One Premium Bestseller', 'Identify your signature product that commands premium pricing and drives referrals. Invest in perfecting this one item before expanding the range.'],
            ['Separate Impulse from Custom Revenue', 'Run daily fresh counters for walk-in traffic while building a higher-margin custom cake and gifting business. Different customer journeys require different systems.'],
            ['Show Freshness as a Feature', 'Post daily batch updates, behind-the-scenes baking content, and same-day inventory status. Freshness creates urgency and justifies premium pricing.'],
            ['Create Gift-Ready Packaging', 'Make products instantly giftable with attractive packaging, ribbons, and greeting cards. Remove friction from the gifting purchase decision.'],
            ['Engineer Festival Revenue Spikes', 'Plan themed collections around gifting seasons, birthdays, anniversaries, and festivals. Pre-launch marketing ensures production efficiency and maximizes seasonal demand.'],
            ['Reduce Custom Order Friction', 'Build a fast-quote system on WhatsApp with clear pricing tiers, flavor options, and size charts. Speed to quote wins orders from competitors with slow responses.'],
            ['Increase Basket Size at Checkout', 'Train staff to suggest complementary items like candles, toppers, cookies, or gift cards. Small upsells compound into significant revenue.'],
            ['Build B2B Distribution', 'Partner with event planners, corporate gifting services, hotels, and cafes for wholesale or partnership deals. One B2B relationship can match many B2C orders.'],
            ['Track Waste by Product and Day', 'Monitor unsold inventory patterns to improve forecasting. Waste directly erodes margin—treat forecasting as a competitive advantage.']
        ]
    ),
    strategy(
        'boutique',
        'Fashion Boutique',
        ['boutique', 'clothing', 'fashion', 'apparel', 'kurti', 'saree', 'dress', 'garment', 'wear', 'ethnic', 'designer'],
        'Fashion retail thrives on curation, styling confidence, and turning one-time buyers into repeat customers through relationship and occasion-based marketing.',
        [
            ['Define a Sharp Style Identity', 'Own one style lane: festive ethnic, workwear, sustainable casual, or statement pieces. Specificity beats breadth when building a memorable brand.'],
            ['Launch Collection Drops, Not Random Inventory', 'Release curated mini-collections that create launch momentum and storytelling opportunities. Drops generate urgency and reduce decision fatigue.'],
            ['Solve the Fit Confidence Problem', 'Show how pieces look on different body types through content and in-store styling. The faster you remove fit anxiety, the faster customers buy.'],
            ['Offer Styling as a Service', 'Train staff or create digital lookbooks that help customers build complete outfits. Styling support increases basket size and reduces returns.'],
            ['Market Around Occasions, Not Features', 'Promote outfits for weddings, corporate events, vacation travel, or festivals. Occasion-based marketing creates urgency and relevance.'],
            ['Build a VIP Repeat Customer System', 'Maintain a personal CRM for high-value buyers. Send early access, restock alerts, and private previews to your best customers.'],
            ['Bundle Primary and Accessory Sales', 'Suggest jewelry, bags, footwear, or dupattas with every outfit. Complete-the-look selling increases average order value naturally.'],
            ['Leverage Customer and Creator Content', 'Repost customers wearing your pieces. Real people in your clothes build trust faster than brand photography alone.'],
            ['Analyze Best-Performing Silhouettes', 'Track which cuts, fabrics, and price points convert fastest. Use data to inform future buying decisions and reduce unsold inventory.']
        ]
    ),
    strategy(
        'salon',
        'Salon and Beauty',
        ['salon', 'beauty', 'spa', 'makeup', 'hair', 'facial', 'nail', 'skincare', 'parlour', 'grooming'],
        'Beauty businesses scale through recurring appointments, premium service packaging, and trust-building through visible transformations.',
        [
            ['Position Around a Clear Transformation', 'Lead with specific outcomes: bridal glow, hair recovery, anti-aging skincare, or grooming confidence. Clarity on the result attracts the right customers.'],
            ['Package Services into Programs', 'Bundle treatments into 4-week or 12-week programs that deliver results through consistency. Programs create predictable revenue and better client outcomes than one-off services.'],
            ['Fill Low-Demand Slots Strategically', 'Offer weekday or off-peak specials without training customers to avoid peak times. Discounting should fill capacity, not subsidize demand that would happen anyway.'],
            ['Document Before-and-After Proof', 'Capture transformations with client permission and showcase them where prospects make booking decisions. Visual proof beats claims every time.'],
            ['Automate Rebooking at Checkout', 'Book the next appointment before the client leaves. Recurring services like hair, nails, and skincare should have rebooking as part of the checkout process.'],
            ['Build Bridal and Event Pipelines', 'Partner with wedding planners, photographers, and boutiques to access high-value clients planning significant events. One bridal client can bring an entire wedding party.'],
            ['Monetize Home-Care Product Recommendations', 'Sell retail products that extend service results at home. Product recommendations from the service provider carry trust and increase revenue per client.'],
            ['Create VIP Membership Tiers', 'Offer priority booking, exclusive treatments, and bundled pricing to reward loyalty and create recurring revenue streams.'],
            ['Track Therapist Performance and Rebooking', 'Monitor which staff members generate the highest rebooking rates and product attachment. Reward and replicate what works.']
        ]
    ),
    strategy(
        'gym',
        'Gym and Fitness Studio',
        ['gym', 'fitness', 'workout', 'zumba', 'yoga', 'pilates', 'training', 'crossfit', 'studio', 'health'],
        'Fitness businesses win through retention engineering, transformation marketing, and building accountability systems that keep members committed.',
        [
            ['Own a Specific Transformation Goal', 'Position your gym around fat loss, strength building, women-only fitness, or beginner confidence. Specificity attracts committed customers over tire-kickers.'],
            ['Engineer the First 30-Day Experience', 'Design onboarding, assessment, and follow-up sequences that prevent new member drop-off. Most churn happens in the first month—fix the experience here.'],
            ['Sell Structured Transformation Programs', 'Offer 6-week or 12-week results-based programs with check-ins and milestones. Programs create accountability and justify premium pricing over commodity memberships.'],
            ['Build Multi-Layer Accountability', 'Use coach check-ins, attendance tracking, WhatsApp groups, and buddy systems to keep members engaged. Emotional commitment drives consistency more than access alone.'],
            ['Show Real Member Transformations', 'Post measurable progress with photos, stats, and testimonials. Social proof demonstrates your methodology works and attracts similar prospects.'],
            ['Add Nutrition and Habit Coaching', 'Sell meal planning or behavior coaching as premium add-ons. Results come from combined effort—capture the value you create beyond just workouts.'],
            ['Engineer Member Referrals', 'Run limited-time referral challenges with meaningful rewards. Your best members are your best acquisition channel if you activate them.'],
            ['Monetize Merchandise and Add-Ons', 'Sell branded gear, supplements, personal training, and specialty classes. Multiple revenue streams reduce dependence on membership fees alone.'],
            ['Track Retention Metrics Weekly', 'Monitor attendance rates, freeze requests, and cancellation patterns. Early warning signals let you intervene before members ghost.']
        ]
    ),
    strategy(
        'ecommerce',
        'E-Commerce Store',
        ['ecommerce', 'online store', 'shopify', 'amazon', 'marketplace', 'dropshipping', 'online retail', 'digital store'],
        'E-commerce profitability comes from customer acquisition cost efficiency, conversion rate optimization, and maximizing lifetime value through retention.',
        [
            ['Find Product-Market Fit Through Testing', 'Launch with a focused product set and validate demand before expanding inventory. Cash flow dies in unsold inventory—test before you invest.'],
            ['Master One Acquisition Channel', 'Choose between paid ads, SEO, influencer partnerships, or marketplaces and become exceptional at one before diversifying. Mediocrity across channels loses to mastery in one.'],
            ['Optimize for Conversion, Not Just Traffic', 'A/B test product pages, checkout flow, trust signals, and pricing presentation. Most stores leave 30-50% revenue on the table through poor conversion optimization.'],
            ['Build an Email and SMS Revenue Engine', 'Capture contact information and create automated sequences for cart abandonment, post-purchase upsells, and re-engagement. Owned channels compound in value.'],
            ['Increase Average Order Value Systematically', 'Use bundles, quantity discounts, free shipping thresholds, and cross-sell recommendations. Small AOV improvements create massive profit increases.'],
            ['Engineer Repeat Purchase Behavior', 'Launch subscription models, loyalty programs, or replenishment reminders for consumable products. Customer acquisition is expensive—monetize retention.'],
            ['Reduce Return Rates and Friction', 'Clear product descriptions, sizing guides, and customer photos reduce returns. Returns destroy margin—prevention is far more profitable than processing.'],
            ['Expand Through Customer Data', 'Analyze purchase patterns, cohort behavior, and product affinity to inform new product launches and marketing angles. Data-driven expansion beats intuition.'],
            ['Build Brand Equity Beyond Price', 'Create content, community, or values-driven positioning that justifies premium pricing. Competing on price alone is a race to zero margin.']
        ]
    ),
    strategy(
        'saas',
        'SaaS and Software',
        ['saas', 'software', 'app', 'platform', 'subscription', 'tech', 'b2b software', 'enterprise'],
        'SaaS growth is driven by reducing time-to-value, optimizing onboarding, and expanding revenue within existing accounts.',
        [
            ['Define a Clear Value Metric', 'Position your pricing around the value customers receive, not features or users. Value-based pricing captures more of the value you create.'],
            ['Reduce Time-to-First-Value', 'Shorten the path from signup to the moment users experience your core benefit. Fast activation drives retention and word-of-mouth.'],
            ['Build Self-Service Onboarding', 'Create product tours, templates, and interactive guides that get users productive without sales handholding. Self-service scales, custom onboarding doesn't.'],
            ['Optimize Trial-to-Paid Conversion', 'Identify where trial users drop off and remove friction. Most SaaS companies focus on acquisition while leaving massive conversion improvements on the table.'],
            ['Create Expansion Revenue Paths', 'Design pricing tiers, usage-based upgrades, and add-on features that grow revenue within existing accounts. Net revenue retention over 100% powers compounding growth.'],
            ['Engineer Product-Led Growth Loops', 'Build viral mechanisms, collaboration features, or integrations that make your product more valuable when more people use it. PLG reduces CAC while scaling distribution.'],
            ['Reduce Churn Through Usage Analytics', 'Monitor leading indicators of churn like declining login frequency or feature usage. Proactive intervention saves accounts before they cancel.'],
            ['Build Content That Educates Your Market', 'Create SEO-optimized content that solves problems your product addresses. Educational content builds pipeline while improving search visibility.'],
            ['Develop Partner and Integration Ecosystems', 'Build integrations with complementary tools and create partnership programs. Strategic partnerships multiply reach without multiplying spend.']
        ]
    ),
    strategy(
        'agency',
        'Agency and Services',
        ['agency', 'marketing', 'consulting', 'services', 'freelance', 'creative', 'digital agency', 'advertising'],
        'Service businesses scale by specializing deeply, productizing delivery, and creating leverage through systems and team.',
        [
            ['Specialize in a Vertical Niche', 'Focus on one industry or customer type where you can develop deep expertise and premium positioning. Specialists command higher fees than generalists.'],
            ['Productize Your Core Service', 'Package deliverables into fixed-scope, fixed-price offerings with clear outcomes. Productization enables scaling beyond hourly billing.'],
            ['Build a Repeatable Delivery System', 'Document processes, create templates, and systematize client work so delivery doesn't depend on you personally. Systems create capacity for growth.'],
            ['Shift from Labor to Leverage', 'Move from trading time for money to outcome-based pricing that captures value created, not hours worked. Premium pricing requires value positioning, not just execution.'],
            ['Create a Signature Methodology', 'Develop a named framework or process that differentiates your approach. A methodology becomes your intellectual property and marketing asset.'],
            ['Build Predictable Lead Generation', 'Invest in content, partnerships, or outbound systems that generate consistent pipeline. Feast-or-famine cycles kill agency growth.'],
            ['Engineer Client Retention and Expansion', 'Design service packages with natural upsells, cross-sells, and retainer extensions. The best clients are the ones you already have.'],
            ['Develop Case Studies and Proof', 'Document results systematically and position them where prospects make buying decisions. Results-driven case studies close deals faster than capabilities decks.'],
            ['Build Team and Culture Systems', 'Hire, train, and retain talent through clear processes and strong culture. Your business scales when your team can deliver without you.']
        ]
    ),
    strategy(
        'education',
        'Education and Coaching',
        ['education', 'coaching', 'training', 'online course', 'tuition', 'academy', 'learning', 'teaching', 'school', 'classes'],
        'Education businesses thrive through proven transformations, completion rates, and turning students into advocates who bring more students.',
        [
            ['Position Around a Specific Outcome', 'Be known for delivering one measurable result: exam scores, career transitions, skill mastery, or certification. Outcome clarity attracts committed students.'],
            ['Design for Completion, Not Just Enrollment', 'Structure your program with accountability, milestones, and engagement mechanisms that prevent drop-off. Completion drives results, results drive referrals.'],
            ['Build Social Proof Through Student Wins', 'Showcase before-and-after transformations, test scores, career placements, or skill demonstrations. Proof is your best marketing asset.'],
            ['Create Tiered Pricing and Access', 'Offer self-paced, group, and premium one-on-one options at different price points. Tiered pricing captures different willingness to pay.'],
            ['Engineer Cohort-Based Learning', 'Launch courses in fixed cohorts rather than evergreen enrollment. Cohorts create peer accountability and drive completion through community.'],
            ['Reduce Time-to-First-Win', 'Help students achieve a quick, meaningful win early in the program. Early wins build momentum and reduce drop-off.'],
            ['Monetize Alumni and Advanced Training', 'Create advanced programs, certifications, or mastermind groups for graduates. Lifetime value extends beyond the first course.'],
            ['Build Referral Systems into Completion', 'Reward students for bringing others after they finish. Your best marketing comes from people who have experienced the transformation.'],
            ['Develop Corporate and B2B Revenue', 'Package your training for corporate clients, institutions, or licensing deals. B2B contracts create more predictable revenue than individual student enrollment.']
        ]
    ),
    strategy(
        'healthcare',
        'Healthcare and Wellness',
        ['healthcare', 'clinic', 'doctor', 'medical', 'wellness', 'therapy', 'hospital', 'physiotherapy', 'dentist', 'health'],
        'Healthcare practices grow through patient retention, outcome-focused marketing, and building trust-based referral systems.',
        [
            ['Position Around Health Outcomes', 'Lead with the transformations you create: pain elimination, mobility restoration, preventive care, or quality of life improvement. Patients buy outcomes, not appointments.'],
            ['Design Patient Journey for Continuity', 'Build treatment protocols that require follow-ups and create natural next appointments. Continuity improves outcomes and lifetime value.'],
            ['Build Educational Content Authority', 'Create content that answers patient questions and positions you as the expert. Educational marketing builds trust before the first appointment.'],
            ['Optimize Appointment Scheduling', 'Remove friction from booking, rescheduling, and reminders. Every point of friction costs you patients and revenue.'],
            ['Engineer Patient Referrals', 'Ask satisfied patients for referrals at the right moment and make it easy for them to recommend you. Referrals are your highest-quality acquisition channel.'],
            ['Create Preventive Care Programs', 'Package wellness check-ups, maintenance visits, or preventive screenings into membership or subscription models. Recurring revenue improves both business stability and patient outcomes.'],
            ['Build Insurance and Corporate Partnerships', 'Develop relationships with insurance panels, corporate wellness programs, or employer health benefits. Partnership channels multiply patient acquisition.'],
            ['Invest in Patient Experience', 'Optimize wait times, communication quality, follow-up care, and environment. Exceptional experience drives retention and word-of-mouth in healthcare.'],
            ['Track Patient Outcomes and Satisfaction', 'Monitor treatment effectiveness, patient satisfaction scores, and referral rates. Outcome data informs both clinical improvement and marketing messaging.']
        ]
    ),
    strategy(
        'realestate',
        'Real Estate',
        ['real estate', 'property', 'realtor', 'broker', 'construction', 'developer', 'housing', 'builder', 'plots'],
        'Real estate success comes from trusted relationships, local market authority, and building systems that generate consistent buyer and seller leads.',
        [
            ['Own a Geographic or Property Niche', 'Become the go-to expert for a specific neighborhood, property type, or buyer segment. Deep specialization beats broad generalist positioning.'],
            ['Build Local Market Authority', 'Create content about local market trends, pricing analysis, and neighborhood guides. Authority positioning attracts both buyers and sellers.'],
            ['Develop a Consistent Lead Generation System', 'Invest in SEO, paid ads, referral programs, or partnerships that create predictable pipeline. Inconsistent lead flow creates revenue volatility.'],
            ['Engineer Fast Response Systems', 'Speed to lead contact is the single biggest driver of conversion in real estate. Automate initial responses and prioritize immediate follow-up.'],
            ['Showcase Properties Through Premium Content', 'Invest in professional photography, video tours, and staging. High-quality presentation differentiates properties and justifies premium pricing.'],
            ['Build a Referral and Past Client System', 'Stay in touch with past clients through market updates, holiday greetings, and home value reports. Repeat and referral business has the lowest acquisition cost.'],
            ['Create Buyer and Seller Education', 'Develop guides, workshops, or consultations that educate first-time buyers or sellers. Education builds trust and positions you as the advisor, not just the transaction facilitator.'],
            ['Partner with Related Service Providers', 'Build relationships with mortgage brokers, inspectors, contractors, and moving companies. Cross-referrals create consistent lead flow.'],
            ['Track Lead Source ROI', 'Monitor which marketing channels generate the highest-quality leads at the lowest cost. Double down on what works and cut what doesn't.']
        ]
    ),
    strategy(
        'automotive',
        'Automotive and Vehicle Services',
        ['automotive', 'car', 'vehicle', 'garage', 'mechanic', 'auto repair', 'service center', 'detailing', 'workshop'],
        'Automotive service businesses thrive through customer retention, preventive maintenance programs, and building trust through transparent service.',
        [
            ['Build Trust Through Transparency', 'Show customers what needs fixing, why it matters, and what it costs before work begins. Transparency differentiates you in an industry known for distrust.'],
            ['Create Service Reminder Systems', 'Automate follow-ups for oil changes, tire rotations, and seasonal maintenance. Proactive reminders increase retention and lifetime value.'],
            ['Package Preventive Maintenance Plans', 'Bundle regular services into annual or mileage-based packages with predictable pricing. Packages create recurring revenue and reduce churn.'],
            ['Offer Convenience and Speed', 'Provide pickup/drop-off, mobile service, or express lanes for routine maintenance. Convenience justifies premium pricing and builds loyalty.'],
            ['Build Local Reputation Through Reviews', 'Systematically collect Google and online reviews from satisfied customers. New customers choose service providers based on ratings and review volume.'],
            ['Educate on Preventive vs Emergency Repairs', 'Help customers understand how preventive maintenance saves money long-term. Educational selling reduces price resistance and improves customer outcomes.'],
            ['Create Specialty Service Lines', 'Develop expertise in specific vehicle types, restoration, performance upgrades, or detailing. Specialization commands higher margins than commodity oil changes.'],
            ['Partner with Fleet and Corporate Accounts', 'Pursue contracts with businesses that maintain vehicle fleets. B2B relationships create more predictable revenue than individual consumer services.'],
            ['Track Customer Lifecycle and Frequency', 'Monitor how often customers return and identify at-risk accounts before they churn. Retention is cheaper than acquisition in automotive services.']
        ]
    ),
    strategy(
        'freelance',
        'Freelancing and Personal Services',
        ['freelance', 'freelancer', 'independent', 'contractor', 'gig', 'self-employed', 'consultant', 'writer', 'designer', 'developer'],
        'Freelancing scales through specialization, value-based pricing, and building systems that generate consistent high-quality leads.',
        [
            ['Niche Down to Stand Out', 'Focus on serving one type of client or solving one specific problem exceptionally well. Specialists charge more and attract better clients than generalists.'],
            ['Shift from Hourly to Value Pricing', 'Price based on the value you create, not the hours you work. Value pricing captures more of the impact you generate.'],
            ['Build a Portfolio of Proof', 'Document your best work with results, testimonials, and case studies. Social proof is your most powerful sales asset.'],
            ['Create Productized Service Offerings', 'Package your services into fixed-scope deliverables with clear pricing. Productization makes buying easier and selling more scalable.'],
            ['Develop Multiple Lead Sources', 'Build pipeline through content, referrals, platforms, and outreach. Diversified lead generation reduces income volatility.'],
            ['Build Long-Term Client Relationships', 'Turn one-off projects into ongoing retainers or repeat work. Retention is more profitable than constantly finding new clients.'],
            ['Increase Your Effective Hourly Rate', 'Systematize your process, build templates, and leverage tools to deliver more value in less time. Your income scales when you work smarter, not just harder.'],
            ['Position as an Expert, Not a Vendor', 'Share insights, create content, and demonstrate expertise publicly. Expert positioning attracts better clients who value your judgment, not just your execution.'],
            ['Build Passive Income Streams', 'Create digital products, courses, or templates that generate revenue without trading time. Passive income creates financial stability and optionality.']
        ]
    ),
    strategy(
        'retail',
        'Retail Store',
        ['retail', 'shop', 'store', 'showroom', 'outlet', 'mart', 'supermarket', 'general store', 'kirana'],
        'Retail profitability comes from inventory turnover, basket size optimization, and building customer loyalty through experience and convenience.',
        [
            ['Optimize Product Mix for Margin', 'Carry products based on contribution margin, not just revenue. High-turnover, high-margin items should get premium placement and focus.'],
            ['Increase Basket Size Systematically', 'Use cross-merchandising, bundles, and staff training to increase items per transaction. Small basket size increases compound into significant revenue.'],
            ['Build Customer Loyalty Programs', 'Reward repeat purchases through points, discounts, or exclusive access. Loyalty programs increase lifetime value and reduce price sensitivity.'],
            ['Optimize Store Layout for Sales', 'Place high-margin impulse purchases near checkout, create clear pathways, and use visual merchandising to guide customer behavior.'],
            ['Reduce Inventory Carrying Costs', 'Monitor turnover rates and eliminate slow-moving stock. Cash tied up in unsold inventory kills profitability.'],
            ['Create Seasonal and Event-Based Promotions', 'Drive traffic through strategic promotions around festivals, seasons, and local events. Planned promotions are more profitable than reactive discounting.'],
            ['Build Omnichannel Presence', 'Add online ordering, WhatsApp catalogs, or home delivery to complement physical retail. Convenience drives loyalty in competitive markets.'],
            ['Train Staff for Suggestive Selling', 'Teach employees to recommend complementary products and upsells naturally. Well-trained staff increase revenue without additional marketing spend.'],
            ['Track Sales by Category and Time', 'Analyze which products sell best during which periods to optimize purchasing, staffing, and promotional planning.']
        ]
    ),
    strategy(
        'manufacturing',
        'Manufacturing and Production',
        ['manufacturing', 'factory', 'production', 'fabrication', 'industrial', 'plant', 'workshop', 'printing'],
        'Manufacturing businesses scale through capacity utilization, margin improvement, and developing direct customer relationships or distribution channels.',
        [
            ['Optimize Capacity Utilization', 'Maximize the productive output of your equipment and labor. Unused capacity is wasted fixed cost—fill it with profitable work.'],
            ['Reduce Production Waste', 'Implement lean manufacturing principles to minimize material waste, rework, and inefficiency. Margin improvement often comes from waste reduction, not price increases.'],
            ['Develop Direct Customer Relationships', 'Build branded consumer products or B2B direct sales to capture more margin than wholesale or white-label production.'],
            ['Create Inventory and Cash Flow Systems', 'Optimize raw material purchasing, production scheduling, and finished goods inventory to improve working capital efficiency.'],
            ['Invest in Quality Control', 'Reduce defects and returns through systematic quality processes. Quality issues destroy margin and reputation faster than they can be recovered.'],
            ['Build Predictable Order Flow', 'Secure long-term contracts, retainer arrangements, or subscription-based production schedules. Predictable orders enable better planning and margins.'],
            ['Add Value-Added Services', 'Offer design, customization, or finishing services that differentiate you from commodity producers and justify premium pricing.'],
            ['Develop Distribution Partnerships', 'Build relationships with distributors, retailers, or e-commerce platforms that multiply your reach without requiring direct sales effort.'],
            ['Track Production Efficiency Metrics', 'Monitor output per labor hour, material yield rates, and defect percentages. Data-driven improvement compounds over time.']
        ]
    ),
    strategy(
        'hospitality',
        'Hospitality and Hotels',
        ['hotel', 'resort', 'hospitality', 'guest house', 'homestay', 'hostel', 'accommodation', 'lodging'],
        'Hospitality businesses grow through occupancy optimization, direct booking channels, and creating experiences that drive repeat visits and referrals.',
        [
            ['Optimize Occupancy Through Dynamic Pricing', 'Adjust rates based on demand, seasonality, and local events. Revenue management is the fastest path to profitability improvement.'],
            ['Build Direct Booking Channels', 'Drive bookings to your own website or phone to avoid OTA commissions. Direct bookings have higher margins and enable better customer relationships.'],
            ['Create Signature Guest Experiences', 'Develop unique amenities, services, or moments that guests remember and share. Differentiated experiences justify premium rates and drive word-of-mouth.'],
            ['Maximize Revenue Per Available Room', 'Add upsells like breakfast packages, spa services, experiences, or room upgrades to increase revenue beyond just room rates.'],
            ['Build Corporate and Group Business', 'Develop relationships with companies, event planners, and travel agencies for predictable block bookings.'],
            ['Invest in Online Reputation', 'Actively manage reviews on Google, TripAdvisor, and OTAs. Online reputation directly impacts booking conversion rates.'],
            ['Create Loyalty and Repeat Visit Programs', 'Reward returning guests with perks, discounts, or exclusive benefits. Repeat guests have lower acquisition costs and higher lifetime value.'],
            ['Optimize Off-Season Revenue', 'Create packages, experiences, or events that drive bookings during traditionally slow periods. Unused rooms are perishable inventory.'],
            ['Track Guest Satisfaction and Net Promoter', 'Monitor satisfaction scores and identify improvement opportunities. Happy guests become your marketing engine through reviews and referrals.']
        ]
    ),
    strategy(
        'photography',
        'Photography and Videography',
        ['photography', 'photographer', 'videography', 'video', 'wedding photography', 'studio', 'photo', 'cinematography'],
        'Creative service businesses scale through premium positioning, productized packages, and building recurring revenue through relationships and content creation.',
        [
            ['Specialize in a Profitable Niche', 'Focus on weddings, corporate, product, or real estate photography. Specialists command higher rates than generalists who shoot everything.'],
            ['Build a Premium Portfolio', 'Showcase only your absolute best work. Your portfolio is your sales team—every image should demonstrate the quality clients are paying for.'],
            ['Create Packaged Service Tiers', 'Offer good-better-best packages with clear inclusions and pricing. Tiered packages make buying easier and increase average order value.'],
            ['Develop Upsell and Add-On Systems', 'Sell albums, prints, extended coverage, or additional edits at higher margins than the core photography package.'],
            ['Build Referral and Repeat Systems', 'Stay in touch with past clients for anniversaries, family updates, or events. Referrals and repeat business have the lowest acquisition cost.'],
            ['Create Content Marketing Assets', 'Share behind-the-scenes, tips, and showcase work on social media. Consistent content attracts clients organically.'],
            ['Partner with Related Vendors', 'Build relationships with wedding planners, venues, florists, or real estate agents who can refer clients to you.'],
            ['Streamline Workflow and Delivery', 'Use templates, presets, and systems to deliver consistently excellent work efficiently. Efficiency allows you to serve more clients profitably.'],
            ['Diversify Revenue Streams', 'Add workshops, presets, stock photography, or equipment rentals to create income beyond client bookings.']
        ]
    ),
    strategy(
        'eventplanning',
        'Event Planning',
        ['event', 'wedding', 'party', 'planner', 'event management', 'celebration', 'decorator', 'catering'],
        'Event businesses thrive through specialization, vendor relationships, and building systems that deliver consistent quality while capturing more margin.',
        [
            ['Specialize in Event Type or Market', 'Focus on weddings, corporate events, or social celebrations. Specialization builds expertise, reputation, and premium pricing power.'],
            ['Build Trusted Vendor Networks', 'Develop relationships with reliable caterers, decorators, venues, and entertainers. Your network is your competitive advantage.'],
            ['Create Tiered Service Packages', 'Offer planning, partial planning, and day-of coordination at different price points to capture different budget segments.'],
            ['Capture Deposits and Milestone Payments', 'Structure payment terms that protect cash flow and reduce financial risk from cancellations or scope changes.'],
            ['Document Events as Marketing Assets', 'Professional photos and videos of executed events become your portfolio and sales materials for future clients.'],
            ['Build Repeat Business Through Relationships', 'Stay connected with clients for anniversaries, corporate annual events, or referrals to friends and family.'],
            ['Negotiate Vendor Commissions', 'Earn referral fees or commissions from vendors you recommend while maintaining transparency with clients.'],
            ['Systemize Planning Processes', 'Create checklists, timelines, and templates that ensure consistent quality and reduce planning stress for you and clients.'],
            ['Expand Through Venue Partnerships', 'Become the preferred planner for specific venues, gaining access to their client flow in exchange for quality service.']
        ]
    ),
    strategy(
        'petcare',
        'Pet Care and Veterinary',
        ['pet', 'veterinary', 'vet', 'animal', 'dog', 'cat', 'grooming', 'pet shop', 'kennel', 'pet care'],
        'Pet care businesses grow through customer retention, preventive care programs, and building emotional connections with pet owners.',
        [
            ['Build Preventive Care Membership Programs', 'Package regular check-ups, vaccinations, and preventive treatments into subscription models that create recurring revenue and better pet health outcomes.'],
            ['Create Pet Parent Education Content', 'Share care tips, health information, and training advice. Educational content builds trust and positions you as the expert.'],
            ['Optimize Appointment Scheduling', 'Remove friction from booking, send reminders, and create systems for follow-ups. Convenience drives loyalty in pet care.'],
            ['Develop Retail and Product Revenue', 'Sell food, toys, supplements, and care products that complement your services. Product sales increase revenue per customer.'],
            ['Build Emergency and After-Hours Services', 'Premium pricing for emergency care creates additional revenue while serving critical pet owner needs.'],
            ['Create Multi-Pet Family Incentives', 'Offer discounts or package deals for families with multiple pets to increase customer lifetime value.'],
            ['Partner with Breeders and Adoption Centers', 'Build relationships that provide consistent client flow from new pet owners who need ongoing care.'],
            ['Invest in Pet Owner Experience', 'Create a welcoming environment, minimize wait times, and communicate clearly. Emotional pet owners choose providers based on experience quality.'],
            ['Track Customer Lifetime Value by Service', 'Monitor which services and customer types generate the highest long-term value to inform marketing and service development.']
        ]
    ),
    strategy(
        'homeservices',
        'Home Services',
        ['plumbing', 'electrician', 'carpenter', 'painting', 'renovation', 'contractor', 'repair', 'maintenance', 'handyman'],
        'Home service businesses scale through reputation, response speed, and building systems that generate consistent leads and referrals.',
        [
            ['Build Local SEO and Map Presence', 'Dominate local search for your service area through Google Business Profile optimization and review collection. Local visibility drives call volume.'],
            ['Respond to Inquiries Immediately', 'Speed to response is the biggest driver of conversion. Automate initial responses and prioritize rapid follow-up.'],
            ['Offer Upfront Transparent Pricing', 'Provide clear estimates before work begins to build trust and reduce price shopping. Transparency differentiates you in an industry known for surprises.'],
            ['Build Preventive Maintenance Programs', 'Create recurring service packages for HVAC, plumbing, or electrical maintenance. Recurring revenue is more predictable than emergency call-outs.'],
            ['Collect and Showcase Reviews', 'Systematically ask satisfied customers for Google reviews. Reputation is your primary sales asset in home services.'],
            ['Create Service Membership Programs', 'Offer priority scheduling, discounts, or annual maintenance packages to increase customer lifetime value and retention.'],
            ['Develop Property Manager Relationships', 'Build partnerships with landlords, property managers, and real estate agents for consistent B2B work.'],
            ['Train for Upselling and Cross-Selling', 'Identify additional work during service calls and quote it professionally. In-person visits create natural upsell opportunities.'],
            ['Track Lead Source ROI', 'Monitor which marketing channels generate the highest-quality leads at the lowest cost and optimize spend accordingly.']
        ]
    ),
];

analyzeBtn.addEventListener('click', () => {
    const businessIdea = businessInput.value.trim();

    if (!businessIdea) {
        businessInput.focus();
        return;
    }

    heroSection.style.display = 'none';
    loading.classList.add('active');

    const loadingMessages = [
        'Analyzing your business model...',
        'Matching growth strategies...',
        'Building your custom roadmap...',
        'Finalizing recommendations...'
    ];

    runLoadingSequence(loadingMessages).then(() => {
        runAnalysis(businessIdea);
    });
});

backBtn.addEventListener('click', resetApp);

businessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        analyzeBtn.click();
    }
});

function runAnalysis(businessIdea) {
    const matchedStrategy = findStrategy(businessIdea);

    loading.classList.remove('active');
    results.classList.add('active');
    resultNote.textContent = `${matchedStrategy.label} growth strategy applied. ${matchedStrategy.openingLine}`;

    displaySteps(matchedStrategy.steps);
}

function findStrategy(businessIdea) {
    const normalizedIdea = normalizeText(businessIdea);

    let bestStrategy = defaultStrategy;
    let bestScore = 0;

    strategyCatalog.forEach((item) => {
        const score = item.keywords.reduce((total, keyword) => {
            return total + (normalizedIdea.includes(keyword) ? keyword.length : 0);
        }, 0);

        if (score > bestScore) {
            bestScore = score;
            bestStrategy = item;
        }
    });

    return bestStrategy;
}

async function runLoadingSequence(messages) {
    for (const message of messages) {
        loadingText.textContent = message;
        await delay(650);
    }
}

function displaySteps(steps) {
    stepsContainer.innerHTML = '';

    steps.forEach((step, index) => {
        setTimeout(() => {
            const stepCard = createStepCard(step);
            stepsContainer.appendChild(stepCard);

            requestAnimationFrame(() => {
                stepCard.classList.add('animate');
            });
        }, index * 150);
    });

    setTimeout(() => {
        const lockedStep = createLockedStep();
        stepsContainer.appendChild(lockedStep);

        requestAnimationFrame(() => {
            lockedStep.classList.add('animate');
        });
    }, steps.length * 150);
}

function createStepCard(step) {
    const card = document.createElement('div');
    card.className = 'step-card';
    card.innerHTML = `
        <div class="step-number">Step ${step.number}</div>
        <div class="step-title">${escapeHtml(step.title)}</div>
        <div class="step-description">${escapeHtml(step.description)}</div>
    `;
    return card;
}

function createLockedStep() {
    const card = document.createElement('div');
    card.className = 'step-card locked-card';
    card.innerHTML = `
        <div class="step-number">Step 10</div>
        <div class="step-title">
            <span class="lock-icon">🔒</span>
            The 10X Multiplier Strategy
        </div>
        <div class="step-description">
            This final step reveals the highest-leverage move specific to your business model—the one action that can create exponential rather than linear growth.
        </div>
        <div class="payment-section">
            <div class="payment-text">Unlock Your Custom 10X Strategy - ${escapeHtml(publicConfig.unlockPrice)}</div>
            <div class="qr-code">
                <img src="${escapeAttribute(publicConfig.qrCodeUrl)}" alt="Payment QR Code">
            </div>
            <div class="payment-instruction">
                <strong>After payment</strong>, send a screenshot of this plan to ${escapeHtml(publicConfig.instagramHandle)} on Instagram. You'll receive a personalized Step 10 strategy tailored to your specific business context within 24 hours.
                <div class="personalization-note">
                    The final strategy is delivered personally because the 10X move is different for every business depending on current resources, market position, and leverage points.
                </div>
            </div>
        </div>
    `;
    return card;
}

function resetApp() {
    results.classList.remove('active');
    loading.classList.remove('active');
    stepsContainer.innerHTML = '';
    resultNote.textContent = '';
    loadingText.textContent = 'Analyzing your business model...';
    heroSection.style.display = 'block';
    businessInput.value = '';
    businessInput.focus();
}

function buildSteps(entries) {
    return entries.map(([title, description], index) => ({
        number: index + 1,
        title,
        description
    }));
}

function normalizeText(value) {
    return String(value)
        .toLowerCase()
        .replaceAll('&', ' and ')
        .replace(/[^a-z0-9\s-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function escapeAttribute(value) {
    return escapeHtml(value);
}
