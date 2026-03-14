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
    'Based on your idea, this growth path focuses on offer clarity, lead flow, and repeat revenue.',
    [
        ['Clarify the Core Offer', 'Describe the main result you deliver in one clean sentence so buyers understand your business fast.'],
        ['Pick One Best Customer Segment', 'Choose the customer type that buys fastest and gets the strongest result so your message stays focused.'],
        ['Build a Signature Package', 'Turn your product or service into a named offer with fixed outcomes, pricing, and proof points.'],
        ['Create a Daily Lead Engine', 'Use one dependable channel such as WhatsApp, Instagram, referrals, or local outreach every day.'],
        ['Improve Your First Impression', 'Tighten your page, profile, pitch, and visuals so a new visitor quickly sees trust and clarity.'],
        ['Add Social Proof Fast', 'Collect customer reviews, before-and-after examples, or short testimonials and place them near every call to action.'],
        ['Increase Repeat Purchases', 'Add follow-up offers, reminders, and loyalty rewards so existing buyers come back more often.'],
        ['Systemize the Work', 'Write simple checklists for delivery, lead follow-up, and customer support so the business runs consistently.'],
        ['Track the Revenue Drivers', 'Review weekly leads, conversion rate, repeat customers, and average order value so you know what to improve next.']
    ]
);

const strategyCatalog = [
    strategy(
        'restaurant',
        'Food and Restaurant',
        ['restaurant', 'food', 'dhaba', 'cloud kitchen', 'kitchen', 'meal', 'tiffin', 'catering', 'biryani', 'pizza', 'burger'],
        'This roadmap focuses on faster table turnover, stronger repeat orders, and local food visibility.',
        [
            ['Define Your Signature Seller', 'Pick one hero dish or combo that customers instantly remember and mention in reviews and referrals.'],
            ['Win a Local Radius', 'Target homes, offices, and colleges within your strongest delivery zone before trying to scale citywide.'],
            ['Fix the Menu Mix', 'Remove slow, low-margin items and push dishes that travel well, photograph well, and keep strong margins.'],
            ['Engineer a Repeat Offer', 'Bundle lunch plans, family packs, or weekly specials so customers have a reason to order more than once.'],
            ['Own Google and Maps Search', 'Collect reviews, update food photos, and refresh business details so local buyers find you first.'],
            ['Make Delivery Packaging Sell', 'Use spill-proof branded packaging that protects quality and leaves a memorable impression.'],
            ['Push Peak-Hour Promotions', 'Run timed offers during lunch, dinner, and weekends instead of discounting randomly all day.'],
            ['Build a WhatsApp Retention List', 'Capture repeat buyers into broadcast lists for launches, festival menus, and limited dishes.'],
            ['Track Item-Level Profitability', 'Review which dishes bring the highest repeat rate, margin, and ratings so your menu evolves around winners.']
        ]
    ),
    strategy(
        'cafe',
        'Cafe',
        ['cafe', 'coffee', 'espresso', 'coffee shop', 'brew', 'latte'],
        'This strategy is designed to make your cafe feel like a habit, not just a one-time visit.',
        [
            ['Create a Signature Drink Line', 'Introduce two or three memorable drinks that people associate only with your cafe and post online willingly.'],
            ['Design a Stay-and-Share Corner', 'Set up one highly photogenic seating area so your customers generate content without being asked.'],
            ['Drive Morning Repeat Traffic', 'Offer weekday drink subscriptions or breakfast combos to become part of the customer routine.'],
            ['Optimize Student and Freelancer Offers', 'Package long-stay seating, Wi-Fi, and snack combinations to increase weekday demand.'],
            ['Build a Local Collaboration Loop', 'Partner with nearby boutiques, studios, and creators for pop-ups that bring fresh audiences in.'],
            ['Use Seasonal Menu Drops', 'Launch limited drinks tied to weather, festivals, or trends to create urgency and repeat curiosity.'],
            ['Collect Contact Details at Billing', 'Offer a free cookie upgrade or loyalty benefit in exchange for WhatsApp or Instagram opt-ins.'],
            ['Sell Take-Home Products', 'Add beans, bottled drinks, gift cards, or merch so your brand keeps earning outside the cafe.'],
            ['Measure Visit Frequency', 'Track how often regulars return and which time slots underperform so you can adjust staffing and offers.']
        ]
    ),
    strategy(
        'bakery',
        'Bakery',
        ['bakery', 'cake', 'pastry', 'bake', 'brownie', 'cupcake', 'dessert'],
        'This bakery growth path focuses on premium perception, daily freshness, and higher-value custom orders.',
        [
            ['Own One Premium Bestseller', 'Choose one cake, brownie box, or pastry item that becomes the product everyone recommends first.'],
            ['Separate Daily and Celebration Sales', 'Run regular fresh counters for walk-ins while building a higher-margin custom order line.'],
            ['Show Freshness Publicly', 'Post daily baking batches, oven moments, and same-day inventory stories to increase urgency and trust.'],
            ['Create Ready-to-Gift Packaging', 'Use attractive boxes and ribbons so customers can buy quickly for gifting without extra effort.'],
            ['Promote Festival Collections', 'Launch themed assortments around birthdays, anniversaries, and festive gifting cycles.'],
            ['Shorten Custom Order Response Time', 'Use a fast quote format on WhatsApp so cake inquiries convert before people message other bakeries.'],
            ['Upsell Add-Ons at Checkout', 'Offer candles, toppers, greeting cards, mini desserts, and party bundles to lift average order value.'],
            ['Partner with Local Event Sources', 'Build referral relationships with decorators, planners, schools, and office admins.'],
            ['Track Waste by Product', 'Monitor unsold items by batch and day so you improve forecasting and keep margins healthy.']
        ]
    ),
    strategy(
        'boutique',
        'Clothing and Fashion Boutique',
        ['boutique', 'clothing', 'fashion', 'apparel', 'kurti', 'saree', 'dress', 'garment', 'wear'],
        'This plan focuses on making your collection feel curated, premium, and easy to buy repeatedly.',
        [
            ['Define a Sharp Style Identity', 'Own one style direction such as festive ethnic, office wear, or statement casual.'],
            ['Build Collection Drops', 'Release products in curated mini-launches so new arrivals feel exciting and easier to market.'],
            ['Use Body-Type Friendly Selling', 'Create content showing fit, drape, and styling on different body types to reduce hesitation.'],
            ['Strengthen Trial and Styling Support', 'Offer styling suggestions in-store or through chat so buyers feel confident buying complete looks.'],
            ['Push Occasion-Based Marketing', 'Promote outfits around weddings, office events, vacations, and festivals rather than generic sales posts.'],
            ['Capture Repeat Buyers', 'Maintain a VIP customer list for early previews, restock alerts, and private promotions.'],
            ['Increase Basket Size', 'Pair primary outfits with jewelry, dupattas, bags, or footwear suggestions in every sale conversation.'],
            ['Use Creator and Customer Content', 'Post real people wearing your pieces so the brand feels more trustworthy and wearable.'],
            ['Track Best-Selling Silhouettes', 'Identify which cuts, fabrics, and price ranges convert fastest so future buying decisions improve.']
        ]
    ),
    strategy(
        'salon',
        'Salon and Beauty',
        ['salon', 'beauty', 'spa', 'makeup', 'hair', 'facial', 'nail', 'skincare'],
        'This growth track is built around recurring appointments, premium services, and stronger beauty trust.',
        [
            ['Position Around a Transformation', 'Lead with visible outcomes such as bridal glow, hair recovery, or premium grooming.'],
            ['Package High-Value Services', 'Bundle treatments into monthly care plans so customers buy consistency rather than one-off appointments.'],
            ['Fill Off-Peak Slots Smartly', 'Offer weekday specials for quieter hours to keep staff utilization high without discounting prime times.'],
            ['Show Before-and-After Results', 'Document real client transformations with permission so new buyers see proof before they book.'],
            ['Automate Rebooking', 'Prompt each customer to book the next visit before leaving, especially for hair, skin, and nails.'],
            ['Build Bridal and Event Pipelines', 'Partner with photographers, wedding planners, and boutique stores that can feed you premium clients.'],
            ['Upsell Home-Care Products', 'Recommend products tied to the service performed so your retail sales feel credible and useful.'],
            ['Create VIP Memberships', 'Offer priority slots, exclusive treatments, and bundle savings for repeat loyal clients.'],
            ['Track Therapist and Service Profitability', 'Review rebooking rate, product attachment, and revenue by staff member and service type.']
        ]
    ),
    strategy(
        'gym',
        'Gym and Fitness Studio',
        ['gym', 'fitness', 'workout', 'zumba', 'yoga', 'pilates', 'training', 'crossfit'],
        'This plan is aimed at higher retention, stronger referrals, and a fitness brand people stay committed to.',
        [
            ['Own a Specific Transformation Goal', 'Market your gym around fat loss, strength, women-only fitness, or beginner confidence.'],
            ['Fix the First 30 Days', 'Design onboarding, assessment, and coach follow-up so new members do not disappear after week one.'],
            ['Use Program-Based Memberships', 'Sell structured 6-week or 12-week results programs instead of only open-access memberships.'],
            ['Create Accountability Loops', 'Use check-ins, attendance nudges, and WhatsApp groups to keep members emotionally committed.'],
            ['Show Real Client Wins', 'Post measurable progress stories with photos, stats, or testimonials to improve social proof.'],
            ['Monetize Nutrition Guidance', 'Add meal-planning or habit-coaching upgrades that increase results and lifetime value.'],
            ['Launch Referral Challenges', 'Reward existing members for bringing friends during limited-time transformation campaigns.'],
            ['Sell Merchandise and Add-Ons', 'Offer branded gear, supplements, classes, or personal training as relevant upsells.'],
            ['Track Retention by Cohort', 'Monitor how many members stay after 30, 60, and 90 days so you see where drop-off starts.']
        ]
    ),
    strategy(
        'coaching',
        'Coaching and Tuition',
        ['coaching', 'tuition', 'teacher', 'academy', 'course', 'training institute', 'education', 'classes'],
        'This strategy focuses on proof-based enrollment, student outcomes, and parent trust.',
        [
            ['Pick a Clear Student Outcome', 'Lead with exam success, language fluency, job readiness, or concept mastery so the promise feels concrete.'],
            ['Segment by Student Type', 'Separate beginner, intermediate, topper, and remedial messaging instead of speaking to everyone the same way.'],
            ['Offer a Strong Demo Experience', 'Design trial classes that immediately show teaching quality, structure, and confidence.'],
            ['Publish Results and Proof', 'Show score improvements, student wins, testimonials, and classroom moments to build trust.'],
            ['Build Parent Communication', 'Send simple progress updates that make your coaching feel accountable and premium.'],
            ['Create Referral Momentum', 'Encourage current students to bring classmates with incentives tied to enrollment or renewal.'],
            ['Bundle Complementary Products', 'Add worksheets, doubt sessions, crash courses, or mock tests to raise value per student.'],
            ['Systemize Student Tracking', 'Record attendance, weak topics, and follow-up actions so performance support is consistent.'],
            ['Measure Enrollment Source Quality', 'Track which leads from reels, local ads, school tie-ups, or referrals convert best.']
        ]
    ),
    strategy(
        'real-estate',
        'Real Estate',
        ['real estate', 'property', 'broker', 'realtor', 'plots', 'apartment', 'flat', 'villa'],
        'This roadmap is designed to increase serious buyer trust and shorten your sales cycle.',
        [
            ['Own a Niche Market', 'Focus on one category such as rentals, investor plots, premium apartments, or first-time buyers.'],
            ['Build Area Authority', 'Publish hyper-local insights about pricing, road access, schools, rentals, and future development.'],
            ['Qualify Leads Early', 'Use a simple screening process for budget, location, and timeline so you spend time on serious prospects.'],
            ['Improve Listing Presentation', 'Upgrade photos, short videos, and copy so each property feels easier to imagine and trust.'],
            ['Use WhatsApp Follow-Up Sequences', 'Send organized property options, reminders, and next steps so leads do not go cold.'],
            ['Host Guided Site Visits', 'Turn visits into structured consultative experiences instead of casual walkthroughs.'],
            ['Build Referral Partnerships', 'Connect with builders, loan agents, lawyers, and relocation networks that can send qualified clients.'],
            ['Document Social Proof', 'Collect buyer testimonials and closed-deal stories to reduce risk perception for new clients.'],
            ['Track Closings by Source', 'Measure which ad channels, brokers, or partnerships create the most profitable closed deals.']
        ]
    ),
    strategy(
        'agency',
        'Digital Marketing Agency',
        ['digital marketing', 'agency', 'seo', 'ads', 'social media', 'performance marketing', 'branding'],
        'This agency strategy is built around better positioning, stronger retainers, and visible client outcomes.',
        [
            ['Choose a Service Wedge', 'Lead with one sharp service like lead generation, Instagram growth, or local SEO first.'],
            ['Pick One Buyer Segment', 'Target one client type such as clinics, coaches, restaurants, or ecommerce brands.'],
            ['Productize the Offer', 'Turn your service into a clearly named package with deliverables, timeline, and expected outcome.'],
            ['Lead With Case Study Selling', 'Use past results to show metrics and prove you can execute.'],
            ['Build an Outreach Engine', 'Run disciplined outbound through email, LinkedIn, and WhatsApp with personalized hooks and proof.'],
            ['Improve Proposal Close Rate', 'Shorten proposals, focus on outcomes, and remove vague marketing jargon that slows decisions.'],
            ['Protect Retainers With Reporting', 'Send clean monthly reports that connect your work to leads, sales, or visibility.'],
            ['Upsell Adjacent Services', 'Offer landing pages, content systems, or ad creative once the core service proves value.'],
            ['Track Client Payback Period', 'Know how quickly each client becomes profitable and which niches stay the longest.']
        ]
    ),
    strategy(
        'photography',
        'Photography and Videography',
        ['photography', 'photographer', 'videography', 'video', 'wedding shoot', 'camera', 'studio'],
        'This plan focuses on premium positioning, stronger referrals, and more profitable booking calendars.',
        [
            ['Choose Your Booking Niche', 'Specialize in weddings, maternity, brand shoots, reels, or family sessions.'],
            ['Curate a Conversion Portfolio', 'Show only your best work in the exact category you want to book more of.'],
            ['Simplify Packages', 'Offer clear shoot tiers with add-ons so buyers compare value quickly without confusion.'],
            ['Speed Up Inquiry Response', 'Reply with a polished quote flow on WhatsApp or Instagram before the lead contacts another creator.'],
            ['Turn Delivery Into Marketing', 'Package final photos or videos in a shareable way that naturally drives tags and referrals.'],
            ['Partner With Local Vendors', 'Build relationships with makeup artists, planners, venues, and boutiques that serve the same customers.'],
            ['Create Content From Every Shoot', 'Turn client work into reels, behind-the-scenes clips, and testimonial snippets.'],
            ['Upsell Albums and Reels', 'Offer premium edits, prints, teaser reels, and highlight packages after trust is established.'],
            ['Track Revenue Per Shoot Type', 'Compare margin, referral rate, and repeat value across different project categories.']
        ]
    ),
    strategy(
        'jewelry',
        'Jewelry',
        ['jewelry', 'jewellery', 'gold', 'silver', 'diamond', 'rings', 'necklace', 'bangles'],
        'This jewelry roadmap is designed to increase trust, gifting demand, and premium purchase confidence.',
        [
            ['Clarify Your Design Identity', 'Lead with bridal, daily wear, handcrafted, silver, or custom luxury so your brand feels intentional.'],
            ['Build Trust Around Quality', 'Explain material purity, making process, certification, and care in buyer-friendly language.'],
            ['Create Occasion Collections', 'Launch edits tied to weddings, anniversaries, gifting, and festivals to align with purchase moments.'],
            ['Use Close-Up Visual Selling', 'Invest in high-detail photos and videos that show texture, shine, and scale clearly.'],
            ['Offer Styling Assistance', 'Help buyers pair pieces with outfits or occasions so the sale feels easier and more personal.'],
            ['Promote Customization', 'Use initials, birthstones, names, or design tweaks to create higher-margin bespoke orders.'],
            ['Build High-Intent Follow-Up', 'Stay in touch with serious buyers who save or inquire but need more time before purchasing.'],
            ['Encourage Gifting and Repeat Buying', 'Package maintenance, gift wrapping, and occasion reminders into the customer experience.'],
            ['Track Best Conversion Price Bands', 'Review which price ranges, styles, and materials sell fastest so you buy smarter.']
        ]
    ),
    strategy(
        'travel',
        'Travel Agency',
        ['travel', 'tour', 'trip', 'holiday', 'vacation', 'visa', 'honeymoon', 'package'],
        'This growth path is built around trust, itinerary clarity, and repeat travel planning.',
        [
            ['Specialize in a Travel Lane', 'Focus on domestic getaways, international tours, pilgrimages, luxury trips, or honeymoon packages first.'],
            ['Package Itineraries Clearly', 'Present plans with day-by-day value, hotel quality, inclusions, and expected experience instead of vague summaries.'],
            ['Reduce Buyer Anxiety', 'Answer common concerns around safety, budget, visa, and hidden costs before the customer asks.'],
            ['Use Destination Content', 'Share destination guides, packing tips, and travel hacks so you attract buyers before they are ready to book.'],
            ['Create Seasonal Campaigns', 'Align offers with vacations, long weekends, school holidays, and festival travel demand.'],
            ['Build Referral and Group Plans', 'Encourage family trips, office outings, and friend groups with organizer-friendly package perks.'],
            ['Sell Add-On Services', 'Upsell transfers, insurance, upgrades, local experiences, and photography to raise order value.'],
            ['Maintain Trip Follow-Up', 'Check in before and after travel to improve reviews, referrals, and repeat bookings.'],
            ['Measure Destination Profitability', 'Track which destinations, seasons, and package types bring the best margins and least friction.']
        ]
    ),
    strategy(
        'interior',
        'Interior and Home Decor',
        ['interior', 'home decor', 'furniture', 'decor', 'modular kitchen', 'design studio', 'home styling'],
        'This strategy focuses on visual trust, premium projects, and better conversion from inquiry to booking.',
        [
            ['Pick a Signature Aesthetic', 'Own one design language such as modern luxury, compact homes, minimal elegance, or budget-smart interiors.'],
            ['Show Before-and-After Outcomes', 'Let prospects see transformation clearly so your value feels tangible and worth the spend.'],
            ['Package Design Phases', 'Break services into consultation, concept, execution, and styling so buyers understand the journey.'],
            ['Use Room-Based Selling', 'Market kitchens, bedrooms, offices, or living rooms separately to capture intent more precisely.'],
            ['Build Trust With Material Guidance', 'Explain finishes, durability, timelines, and maintenance in plain language that reduces risk.'],
            ['Partner With Builders and Realtors', 'Secure lead sources upstream from people who already influence home decisions.'],
            ['Create Moodboard-Led Consultations', 'Use visual discovery sessions that help the client feel understood quickly.'],
            ['Upsell Styling and Maintenance', 'Offer decor sourcing, organizing, or refresh services after the main project ends.'],
            ['Track Quote-to-Project Conversion', 'Review where prospects drop off so pricing, presentation, or scope can improve.']
        ]
    ),
    strategy(
        'electronics',
        'Electronics and Mobile Shop',
        ['electronics', 'mobile shop', 'phone', 'laptop', 'gadgets', 'accessories', 'repair'],
        'This roadmap helps your electronics business compete on trust, accessories, and repeat service revenue.',
        [
            ['Lead With Category Authority', 'Be known for phones, accessories, laptops, repairs, or premium gadgets instead of a vague shop identity.'],
            ['Display Trusted Recommendations', 'Guide customers to the right device by usage and budget, not just price tags.'],
            ['Bundle High-Margin Add-Ons', 'Package covers, glass, earbuds, chargers, warranty, and setup support into every device sale.'],
            ['Use Fast Demo Selling', 'Show speed, camera quality, storage, or battery benefits live to make decisions easier.'],
            ['Promote Exchange and Upgrade Paths', 'Create an easy story for customers to upgrade rather than delay their purchase.'],
            ['Sell Service Plans', 'Offer repairs, data transfer, cleaning, and maintenance as a dependable repeat-revenue layer.'],
            ['Build Local Trust Content', 'Post stock arrivals, comparison videos, and quick problem-solving tips to stay top of mind.'],
            ['Capture Repeat Customers', 'Use WhatsApp for restock alerts, accessory offers, and festival upgrade campaigns.'],
            ['Track Profit by Product Mix', 'Know whether devices, accessories, financing, or repairs create the best overall margin.']
        ]
    ),
    strategy(
        'grocery',
        'Grocery and Kirana',
        ['grocery', 'kirana', 'supermarket', 'mart', 'provision store', 'daily needs'],
        'This plan focuses on neighborhood loyalty, faster ordering, and larger basket sizes.',
        [
            ['Own a Local Convenience Promise', 'Stand for speed, freshness, trust, or hard-to-find items so your store becomes the default choice nearby.'],
            ['Create a WhatsApp Ordering Channel', 'Let repeat households order quickly without visiting every time.'],
            ['Push High-Frequency Essentials', 'Make milk, bread, snacks, staples, and cleaning products easy to reorder and easy to bundle.'],
            ['Use Weekly Household Packs', 'Offer pre-built family grocery baskets to increase average order value and convenience.'],
            ['Highlight Fresh and Premium Lines', 'Feature fruits, dairy, organic goods, or imported items that justify higher-margin selling.'],
            ['Reward Neighborhood Loyalty', 'Give points, cashback, or special pricing to families who buy regularly.'],
            ['Add Festival and Monthly Planning', 'Promote stock-up packs before festivals, salary cycles, and school reopenings.'],
            ['Improve Delivery Discipline', 'Keep delivery windows tight and communication clear so nearby customers rely on you.'],
            ['Track Repeat Basket Behavior', 'See which products trigger the biggest and most frequent orders so you manage stock smarter.']
        ]
    ),
    strategy(
        'clinic',
        'Clinic and Healthcare',
        ['clinic', 'doctor', 'dentist', 'physio', 'hospital', 'skin clinic', 'healthcare', 'medical'],
        'This growth path is built around patient trust, retention, and a premium care experience.',
        [
            ['Specialize Your Public Message', 'Position around one clear need such as dental care, physiotherapy recovery, skin treatment, or family health.'],
            ['Strengthen the First Contact', 'Make booking, directions, fees, and expected process easy to understand before the patient arrives.'],
            ['Show Expertise With Education', 'Publish practical health content that demonstrates care quality without sounding promotional.'],
            ['Improve Patient Experience', 'Reduce waiting friction and communicate the next steps clearly so visits feel organized and reassuring.'],
            ['Create Follow-Up Protocols', 'Use reminders for reports, review visits, and ongoing treatment so patient outcomes and retention improve.'],
            ['Encourage Review Growth', 'Collect ethical patient feedback and reviews to build local credibility.'],
            ['Build Referral Relationships', 'Partner with nearby pharmacies, diagnostic centers, gyms, or specialists who can send aligned cases.'],
            ['Package Preventive Care', 'Offer checkups, treatment plans, or wellness memberships that deepen long-term care.'],
            ['Track Return Visits and Referrals', 'Measure how many patients come back and where your best patients originate.']
        ]
    ),
    strategy(
        'events',
        'Event and Wedding Services',
        ['event', 'wedding', 'planner', 'decoration', 'decorator', 'birthday planner', 'event management'],
        'This strategy focuses on premium presentation, trust, and booking higher-value event packages.',
        [
            ['Own a Signature Event Style', 'Define whether you are known for luxury weddings, intimate decor, corporate events, or kids parties.'],
            ['Show Visual Proof Fast', 'Lead with your strongest albums and highlight reels so clients instantly see execution quality.'],
            ['Package Events Clearly', 'Present simple tiers around scale, decor, logistics, and add-ons so quoting becomes easier.'],
            ['Create Consultation Scripts', 'Ask the right questions about guest count, mood, budget, and deadlines so planning feels expert-led.'],
            ['Build Vendor Ecosystems', 'Strengthen relationships with photographers, makeup artists, venues, caterers, and DJs.'],
            ['Use Occasion-Based Marketing', 'Push campaigns before wedding season, corporate calendar peaks, and major family celebration dates.'],
            ['Add Premium Upsells', 'Offer welcome kits, special lighting, premium entry concepts, or content coverage to boost margins.'],
            ['Collect Referral Momentum', 'Request reviews and referrals immediately after a successful event while excitement is highest.'],
            ['Track Win Rate by Event Type', 'See which event categories close faster and deliver better margins so you focus correctly.']
        ]
    ),
    strategy(
        'pet',
        'Pet Business',
        ['pet', 'dog', 'cat', 'pet shop', 'grooming', 'pet food', 'pet care', 'veterinary'],
        'This pet-business plan is built around trust, recurring care, and community-led growth.',
        [
            ['Define Your Pet Niche', 'Specialize in grooming, nutrition, accessories, daycare, training, or premium pet retail.'],
            ['Build Emotional Trust', 'Speak to pet parents with care-first messaging that shows reliability and safety.'],
            ['Offer Recurring Care Plans', 'Create grooming packages, food subscriptions, or wellness visits to increase retention.'],
            ['Show Real Pet Stories', 'Use customer pets in content to build relatability and social proof.'],
            ['Educate Through Content', 'Share breed tips, care routines, and product guidance so your business becomes a trusted advisor.'],
            ['Create Community Moments', 'Host pet meetups, adoption support, or mini events that generate local visibility.'],
            ['Bundle Smart Add-Ons', 'Pair grooming with accessories, food, or hygiene products to increase average sale value.'],
            ['Capture Reminders Automatically', 'Send reminders for grooming cycles, vaccinations, or reorders so customers return on time.'],
            ['Track Lifetime Value by Pet Parent', 'Measure recurring revenue and repeat behavior to see which services truly stick.']
        ]
    ),
    strategy(
        'handmade',
        'Handmade and Gift Business',
        ['handmade', 'gift', 'craft', 'resin', 'candles', 'art', 'custom gift', 'hamper'],
        'This plan focuses on premium storytelling, occasion-based demand, and repeat gifting buyers.',
        [
            ['Choose a Signature Product Style', 'Lead with one memorable format such as hampers, resin gifts, candles, or personalized keepsakes.'],
            ['Sell by Occasion', 'Market around birthdays, anniversaries, weddings, festivals, and corporate gifting instead of generic product posts.'],
            ['Show the Making Process', 'Use behind-the-scenes content so the handcrafted value feels visible and worth the price.'],
            ['Simplify Custom Orders', 'Use forms or templates that make personalization easy without long back-and-forth chats.'],
            ['Create Tiered Gift Options', 'Offer entry, premium, and luxury versions so customers can buy at different budgets.'],
            ['Improve Unboxing Appeal', 'Packaging should feel gift-ready the moment it arrives, with no extra work needed from the customer.'],
            ['Partner for Gifting Demand', 'Work with event planners, HR teams, and boutiques that need regular custom gifting.'],
            ['Use Repeat-Buyer Lists', 'Retarget past customers before major gifting seasons and personal milestones.'],
            ['Track Best-Selling Themes', 'Review which products, colors, and occasions produce the strongest repeat and margin.']
        ]
    ),
    strategy(
        'ecommerce',
        'Ecommerce and Online Store',
        ['ecommerce', 'e-commerce', 'online store', 'shopify', 'amazon', 'flipkart', 'website store', 'online business'],
        'This roadmap focuses on conversion rate, repeat orders, and stronger product positioning online.',
        [
            ['Sharpen Your Hero Offer', 'Make the homepage lead with one clear winning product or collection that earns attention fast.'],
            ['Improve Product Page Clarity', 'Upgrade images, descriptions, proof, and FAQs so visitors understand why the product is worth buying.'],
            ['Reduce Checkout Friction', 'Keep checkout simple and remove hesitation around shipping, returns, and payment trust.'],
            ['Use Intent-Based Traffic', 'Focus on ads, creators, or search terms tied to buyers already looking for your product type.'],
            ['Capture Abandoned Visitors', 'Use WhatsApp, email, or retargeting to recover shoppers who showed intent but left.'],
            ['Drive Repeat Purchases', 'Set up reorder reminders, bundles, and post-purchase flows to increase customer lifetime value.'],
            ['Launch Seasonal Drops', 'Use timed releases and limited editions to create urgency instead of always-on discounting.'],
            ['Strengthen Social Proof', 'Highlight ratings, reviews, UGC, and customer photos across the buying journey.'],
            ['Track Conversion by Source', 'Measure which channels bring profitable customers, not just traffic volume.']
        ]
    ),
    strategy(
        'legal',
        'Legal Services',
        ['lawyer', 'legal', 'advocate', 'law firm', 'attorney', 'legal services'],
        'This legal-services roadmap focuses on trust, authority, and converting high-intent consultations.',
        [
            ['Pick Your Practice Focus', 'Lead with a clear area such as property, family, corporate, criminal, or startup legal work so your positioning feels stronger.'],
            ['Build Trust Through Clarity', 'Explain your process, expected documents, and likely timelines in simple language that reduces client fear.'],
            ['Own Search Intent', 'Optimize your Google profile, FAQs, and service pages around the exact legal queries clients search for.'],
            ['Use Consultation Screening', 'Qualify leads by case type, urgency, and budget so your time stays focused on serious clients.'],
            ['Publish Authority Content', 'Share short explainers on common legal problems so prospects see expertise before calling.'],
            ['Create Referral Partnerships', 'Build ties with property agents, accountants, HR consultants, and business advisors who can send relevant work.'],
            ['Standardize Client Communication', 'Use structured updates so clients feel informed and handled professionally throughout the matter.'],
            ['Bundle Related Services', 'Offer document review, filing support, compliance checks, or retainer packages where relevant.'],
            ['Track Case Source Quality', 'Review which lead channels bring the best clients, fees, and repeat referrals so your marketing stays disciplined.']
        ]
    ),
    strategy(
        'automobile',
        'Automobile and Car Services',
        ['car wash', 'car service', 'garage', 'automobile', 'auto', 'bike service', 'detailing', 'mechanic'],
        'This vehicle-service strategy is built around repeat visits, trust, and higher-ticket service packages.',
        [
            ['Specialize in a Service Edge', 'Be known for detailing, repairs, bike servicing, quick maintenance, or premium diagnostics instead of trying to own everything equally.'],
            ['Make Diagnosis Visible', 'Show customers the issue with photos, videos, or part explanations so repair trust rises immediately.'],
            ['Package Routine Maintenance', 'Create service bundles for oil changes, cleaning, inspection, and basic replacements to increase repeat revenue.'],
            ['Build Reminder Systems', 'Use WhatsApp reminders for servicing cycles, insurance, or maintenance checkups so customers come back on time.'],
            ['Upsell Useful Add-Ons', 'Recommend coating, alignment, accessories, pickup-drop, or emergency support where it genuinely adds value.'],
            ['Collect Before-and-After Proof', 'Show transformations from dirty, damaged, or poorly maintained vehicles to stronger finished results.'],
            ['Partner With Local Fleets', 'Target taxis, delivery operators, offices, and rental owners who need recurring vehicle support.'],
            ['Speed Up Delivery Experience', 'Keep promised completion times tight and communicate delays early so reliability becomes a competitive advantage.'],
            ['Track Repeat Service Value', 'Measure how often each customer returns and which services create the best margin and loyalty.']
        ]
    ),
    strategy(
        'accounting',
        'Accounting and Tax Consultancy',
        ['accounting', 'accountant', 'ca', 'chartered accountant', 'tax', 'gst', 'bookkeeping', 'audit'],
        'This accounting roadmap focuses on authority, retainers, and predictable client acquisition.',
        [
            ['Define a Strong Client Niche', 'Target one segment such as small businesses, salaried professionals, ecommerce sellers, or startups to sharpen your messaging.'],
            ['Productize Core Services', 'Package GST filing, bookkeeping, tax planning, payroll, or audit support into clear monthly or annual offers.'],
            ['Lead With Compliance Relief', 'Frame your value around saving time, reducing risk, and keeping clients penalty-free.'],
            ['Build Deadline Campaigns', 'Use seasonal filing and compliance dates as natural points to acquire and re-engage clients.'],
            ['Use Education-Based Marketing', 'Post practical tax tips and compliance updates that prove expertise without overwhelming people.'],
            ['Create Referral Channels', 'Partner with lawyers, agencies, consultants, and local business communities that serve the same audience.'],
            ['Push Retainer Relationships', 'Move one-time work into ongoing monthly finance support wherever possible.'],
            ['Systemize Document Collection', 'Make submissions, reminders, and approvals easy so clients experience less friction.'],
            ['Track Client Lifetime Value', 'Compare one-time clients versus retainers so you keep focusing on the most durable revenue base.']
        ]
    ),
    strategy(
        'laundry',
        'Laundry and Dry Cleaning',
        ['laundry', 'dry clean', 'dry cleaning', 'wash', 'ironing', 'steam press'],
        'This laundry strategy focuses on repeat household demand, convenience, and local loyalty.',
        [
            ['Own a Convenience Promise', 'Stand for speed, pickup-drop, stain care, premium fabric handling, or subscription convenience.'],
            ['Create Recurring Plans', 'Offer weekly or monthly family, hostel, and bachelor packages that turn one-offs into predictable revenue.'],
            ['Promote Pickup and Delivery', 'Make collection and drop-off the default story in your marketing so the service feels effortless.'],
            ['Segment by Customer Type', 'Run separate offers for families, offices, students, salons, and hotels if they matter in your area.'],
            ['Build WhatsApp Reorders', 'Encourage customers to reorder with one message instead of forcing them through a slow process.'],
            ['Use Quality Assurance Proof', 'Show fabric care, stain handling, and packaging quality so customers trust you with expensive garments.'],
            ['Add Premium Services', 'Upsell shoe cleaning, curtain cleaning, blanket care, express delivery, or wedding wear treatment.'],
            ['Partner Locally', 'Work with hostels, gyms, clinics, and apartment communities that can send repeat volume.'],
            ['Track Repeat Frequency', 'Measure how often users reorder and which packages create the best margin and loyalty.']
        ]
    ),
    strategy(
        'home-services',
        'Home Services and Repairs',
        ['plumber', 'electrician', 'carpenter', 'ac repair', 'home service', 'repair service', 'technician'],
        'This home-services roadmap is built around response speed, trust, and recurring local referrals.',
        [
            ['Choose a Service Specialty', 'Be known for plumbing, electrical, AC, appliance repair, or multi-service home maintenance with a clear promise.'],
            ['Make Booking Frictionless', 'Let customers request help quickly through call or WhatsApp with time-slot clarity and price expectations.'],
            ['Lead With Reliability', 'Show up on time, communicate clearly, and confirm visits because trust matters as much as skill in home services.'],
            ['Use Local Search Visibility', 'Strengthen your Google presence, reviews, and service-area messaging so urgent buyers find you first.'],
            ['Package Maintenance Plans', 'Offer annual or seasonal care packages for ACs, wiring checks, plumbing, or appliance upkeep.'],
            ['Capture Proof and Reviews', 'Collect before-and-after photos and customer reviews after successful jobs to build social trust fast.'],
            ['Partner With Residential Networks', 'Work with societies, property managers, builders, and interior firms that can send steady demand.'],
            ['Upsell Preventive Work', 'Recommend maintenance and minor fixes that prevent bigger problems while adding real value.'],
            ['Track Response-to-Booking Rate', 'Measure how quickly leads are answered and how often that turns into paid jobs.']
        ]
    ),
    strategy(
        'recruitment',
        'Recruitment and Staffing',
        ['recruitment', 'staffing', 'hiring', 'hr consultancy', 'placement', 'job consultancy'],
        'This staffing strategy focuses on niche positioning, employer trust, and faster placements.',
        [
            ['Pick a Hiring Niche', 'Specialize in one area such as sales, tech, healthcare, hospitality, or blue-collar staffing to stand out.'],
            ['Build Employer-Focused Messaging', 'Speak to speed, candidate quality, retention, and screening depth instead of vague hiring promises.'],
            ['Create Candidate Pipelines', 'Continuously build talent lists before roles open so you are not sourcing from zero every time.'],
            ['Qualify Client Roles Better', 'Use structured intake to understand urgency, compensation, non-negotiables, and culture fit before starting.'],
            ['Show Placement Proof', 'Share anonymized success stories, fill times, and retention wins that build credibility with new clients.'],
            ['Partner With Training Sources', 'Connect with colleges, bootcamps, institutes, and local communities that feed candidates.'],
            ['Productize Hiring Support', 'Offer screening-only, full-cycle hiring, bulk hiring, or retained search packages depending on client type.'],
            ['Keep Candidates Warm', 'Maintain regular communication so strong prospects do not disappear between interviews.'],
            ['Track Fill Rate and Time to Close', 'Measure which roles, sectors, and client types produce the healthiest economics.']
        ]
    ),
    strategy(
        'logistics',
        'Logistics and Courier',
        ['logistics', 'courier', 'delivery service', 'transport', 'shipping', 'cargo', 'parcel'],
        'This logistics roadmap focuses on reliability, route efficiency, and long-term business accounts.',
        [
            ['Define Your Delivery Lane', 'Choose local parcel, B2B distribution, ecommerce shipping, or specialized transport as your strongest offer.'],
            ['Sell Reliability First', 'Make on-time delivery, tracking clarity, and package safety the core of your promise.'],
            ['Target Repeat Shippers', 'Focus on sellers, pharmacies, offices, and wholesalers that need frequent movement instead of only one-off jobs.'],
            ['Simplify Booking and Tracking', 'Make pickup requests, status updates, and proof of delivery easy for customers to access.'],
            ['Price Around Value Bands', 'Use clear slabs for speed, weight, distance, or special handling so pricing feels understandable.'],
            ['Build Route Efficiency', 'Cluster orders and service areas intelligently so margins improve without hurting delivery time.'],
            ['Partner With Sellers', 'Create account-based offers for ecommerce stores, flower shops, labs, and retailers with recurring logistics needs.'],
            ['Offer Premium Delivery Options', 'Add same-day, fragile handling, COD support, or scheduled slots where profitable.'],
            ['Track Account Retention', 'Measure which customer types ship most frequently and stay longest so your sales effort stays focused.']
        ]
    ),
    strategy(
        'hardware',
        'Hardware and Building Materials',
        ['hardware', 'paint shop', 'cement', 'tiles', 'building materials', 'sanitary', 'plywood'],
        'This hardware-store strategy is built around contractor loyalty, bulk orders, and product trust.',
        [
            ['Choose Your Core Category Edge', 'Be known for paint, plumbing materials, electricals, tiles, sanitary, or contractor supply depth.'],
            ['Build Contractor Relationships', 'Focus on plumbers, builders, electricians, and renovators who generate repeat purchase volume.'],
            ['Improve In-Store Recommendation Selling', 'Guide buyers clearly on quality, compatibility, and pricing so they buy with confidence.'],
            ['Offer Bulk and Site Delivery', 'Make it easy for customers to place large orders and get materials delivered where they are needed.'],
            ['Use Stock Availability as a Selling Point', 'Promote dependable inventory on key items that slow work when unavailable.'],
            ['Add Cross-Sell Logic', 'Recommend complementary materials with every purchase so the basket becomes more complete and valuable.'],
            ['Create Builder Loyalty Plans', 'Reward repeat contractors with preferential service, priority sourcing, or volume pricing.'],
            ['Capture Urgent Demand Fast', 'Respond quickly to calls and WhatsApp requests because site work often depends on immediate supply.'],
            ['Track Product Mix Margin', 'Know which categories, brands, and buyer types drive the best repeat business and gross profit.']
        ]
    ),
    strategy(
        'daycare',
        'Daycare and Preschool',
        ['daycare', 'preschool', 'play school', 'playschool', 'child care', 'kids school', 'nursery school'],
        'This daycare roadmap focuses on parent trust, enrollment consistency, and a premium care experience.',
        [
            ['Lead With Safety and Care', 'Make supervision, hygiene, teacher quality, and child comfort the center of your message.'],
            ['Differentiate Your Learning Style', 'Position around play-based learning, early academics, activity-rich care, or flexible daycare support.'],
            ['Upgrade Parent Communication', 'Share simple daily updates, photos, or progress notes so families feel secure and connected.'],
            ['Create Strong Tour Experiences', 'Use walk-throughs and trial interactions that help parents imagine their child fitting in happily.'],
            ['Build Community Referrals', 'Encourage parent recommendations through trust-led referral programs and neighborhood visibility.'],
            ['Use Occasion-Based Enrollment Pushes', 'Promote admissions ahead of school cycles, relocations, and return-to-work periods for parents.'],
            ['Package Extended Services', 'Offer after-school support, transport, activity classes, or meal options where appropriate.'],
            ['Show Real Classroom Energy', 'Share controlled glimpses of engagement, routine, and staff warmth to reduce hesitation.'],
            ['Track Inquiry-to-Enrollment Rate', 'Measure where parents drop off so you can improve tours, pricing communication, or follow-up.']
        ]
    ),
    strategy(
        'software',
        'Software and App Development',
        ['software', 'app development', 'web development', 'saas', 'it services', 'tech company', 'developer'],
        'This software-services strategy focuses on niche positioning, proof, and higher-value client work.',
        [
            ['Choose a Service Niche', 'Lead with SaaS builds, websites, mobile apps, automation, or business software instead of generic coding services.'],
            ['Target a Buyer Vertical', 'Pick sectors like clinics, education, retail, or logistics so your case studies and messaging align.'],
            ['Productize Delivery', 'Package discovery, MVP builds, maintenance, or retainers into clear scopes that reduce buyer confusion.'],
            ['Sell Outcomes, Not Features', 'Frame your offer around speed, cost savings, automation, or revenue impact instead of technical jargon alone.'],
            ['Show Working Proof', 'Use demos, screenshots, client stories, and mini case studies that prove you can ship reliably.'],
            ['Build a Consistent Outreach Engine', 'Prospect through LinkedIn, email, founder communities, and referrals with tailored examples.'],
            ['Add Ongoing Revenue Layers', 'Offer maintenance, hosting, analytics, or iteration retainers after the initial project closes.'],
            ['Improve Proposal Speed', 'Send clear estimates and next steps quickly so warm leads do not drift toward slower competitors.'],
            ['Track Win Rate by Project Type', 'Measure which services, industries, and deal sizes close fastest and produce the best margins.']
        ]
    )
];

analyzeBtn.addEventListener('click', generatePlan);
businessInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        generatePlan();
    }
});
backBtn.addEventListener('click', resetApp);

async function generatePlan() {
    const businessIdea = businessInput.value.trim();

    if (!businessIdea) {
        businessInput.focus();
        return;
    }

    const matchedStrategy = findStrategy(businessIdea);

    heroSection.style.display = 'none';
    results.classList.remove('active');
    stepsContainer.innerHTML = '';
    loading.classList.add('active');

    await runLoadingSequence([
        'Reading your business profile...',
        'Matching your category to the right growth track...',
        `Building your ${matchedStrategy.label.toLowerCase()} roadmap...`
    ]);

    loading.classList.remove('active');
    results.classList.add('active');
    resultNote.textContent = `${matchedStrategy.label} strategy matched. ${matchedStrategy.openingLine}`;

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
            The Growth Multiplier
        </div>
        <div class="step-description">
            This final step contains the highest-leverage strategy tailored to your business.
        </div>
        <div class="payment-section">
            <div class="payment-text">Unlock the final strategy - ${escapeHtml(publicConfig.unlockPrice)}</div>
            <div class="qr-code">
                <img src="${escapeAttribute(publicConfig.qrCodeUrl)}" alt="Payment QR Code">
            </div>
            <div class="payment-instruction">
                <strong>After completing the payment</strong>, send a screenshot of your plan on Instagram DM at ${escapeHtml(publicConfig.instagramHandle)} to receive your final personalized strategy.
                <div class="personalization-note">
                    Step 10 stays manual so you can deliver the final move personally in DM.
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
    loadingText.textContent = 'Reading your business profile...';
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
