# Landing Page Rulebook — v2

Plain English rules for building client landing pages.
Drop this file in the project root. Cursor reads it. Update it whenever you correct something twice.

**Status:** v2. Built from two of my own builds (newrove, TowMaster) and ten reference sites: Superside, Softriver, Maven, Hims, Aitia, El Toro de Oro, Spector, Healthy Menu, Beanro, Velora, MasterCare.

**What changed from v1:** four rules were wrong and are corrected here — card borders, the stat block spec, five-star testimonials, and one-accent. Emphasis devices went from three to five. Services layouts are now chosen by count, not fixed at four. New sections on the announcement bar, before/after proof, locations, and reference sites.

**Still missing:** real estate, retail, fitness, hospitality. Restaurant and legal are partial — see section 8.

---

## 0. The thesis

Every page must read **modern and sophisticated, never cheap or dated.**

That feeling isn't a style. It comes from five mechanics. If a page feels cheap, one of these is broken:

1. **Generous whitespace.** More than feels comfortable. Cheap pages are crowded. Spector runs half-empty viewports and reads at the price it's asking.
2. **Restricted palette.** One dark base, one light base, one accent.
3. **One accent, used sparingly.** Buttons and small marks only. See section 3 for the corrected version of this rule — the palette can rotate, but the ink can't.
4. **Consistent photography.** One light direction, one treatment, held across every image. Mixed stock is the single biggest tell.
5. **Two or three type sizes.** Not six. Headline, subhead, body.

Check every finished page against these five before showing a client.

---

## 1. First branch — who is buying?

This decides more than industry does. Same industry, different buyer, opposite page.

Proof: Maven (sells to HR departments), Hims (sells to individuals), Aitia (sells to pharma) are all healthcare and share nothing.

### Consumer
Selling to a person spending their own money.
- Product or outcome photography, not corporate imagery
- Prices visible
- Low-commitment secondary CTA alongside the main one ("See if I'm eligible" next to "Get started")
- Objections handled in the subheading, before benefits
- Privacy/discretion is a feature if the category is embarrassing

### Small business / local service
Selling to an owner who answers their own phone.
- Phone number in the header, hero, every section, and footer
- Service area named explicitly — **and in the page title tag.** Velora's title is "Pressure Washing in Riverside, CA." That's the service-area rule doing double duty as SEO.
- Response time, hours, availability as badges
- Insurance / payment methods stated early — cost anxiety is the top objection
- Plain heavy sans. No decorative type. Nobody in a ditch wants elegance.

### Enterprise / B2B
Selling to a committee.
- Prices usually hidden — but not always. Spector shows three tiers with a project/monthly toggle and it works, because the buyer needs to self-qualify before booking a call. Judge by whether hiding the price costs you more leads than it filters.
- Credibility comes from press, publications, events, awards, board members — not star ratings
- Outlined buttons, not filled. Institutional, not salesy.
- Abstract or conceptual imagery is acceptable and often better than people
- Case studies over testimonials

---

## 2. Second branch — want or need?

### Want (elective, aspirational, considered purchase)
Cosmetic, luxury, weddings, high-end services.
- Lead with imagery and outcome
- Portfolio/gallery high on the page
- Personality visible
- Bigger type, more air, more restraint
- No hard sell

### Need (urgent, routine, problem-solving)
Emergency services, trades, insurance-driven care.
- Lead with access and trust
- Phone and hours above the fold
- Credentials early
- Tighter, denser, more information visible without scrolling
- Repeat the CTA constantly

### When need meets a high price
Legal, surgery, major contracting. Section 2 says repeat the CTA constantly; section 9 says drop urgency above ~$2,000. Both can't win.

Resolution: **repeat the CTA, but soften each repetition.** Spector runs five interstitial CTA bands on a page selling $8,000 engagements, and none of them feel pushy, because each one is attached to a named person with a role and photo. The ask repeats; the pressure doesn't.

---

## 3. Always true

### Spacing
Pick from this scale only. Never invent a value.
`8, 16, 24, 32, 48, 64, 96, 128`

Inconsistent spacing is the #1 reason a page reads amateur. More than color. More than fonts.

### Type
- Three sizes maximum: headline, subhead, body
- Headline max 44px on mobile
- One headline per section, never two
- Judge the hero at viewport height, not full page. A tall screenshot makes any asymmetric hero look unbalanced — that's the screenshot lying, not the layout.

### Color roles
Never hard-code colors. Assign roles:
- `base` — page background
- `base-content` — body text
- `primary` — accent, buttons only
- `neutral` — dark sections

If the client has brand colors: use them for `primary` only. Keep everything else from the chosen theme.

**Corrected rule on large color fields.** v1 said never let a brand color become a large background. That's too strict — Healthy Menu runs four full-card background colors and Spector uses red as a background twice. Both work. What makes them work:

- **The ink never changes.** One text color sits on every surface. Rotating backgrounds with rotating text colors is where pages cheapen.
- **Large color is bounded**, sitting inside white space as a card — not a full-width band.
- **It carries the strongest single proof point**, not decoration. Spector's red tile is the 98% retention figure.

Beanro is the counter-proof in the other direction: two colors total, cream and brown plus one orange, on the cheapest product in the survey. Restraint isn't a luxury-tier move. It's just correct.

**Every orange thing on Beanro's page is clickable.** Not one word of body copy carries the accent. That's the discipline the one-accent rule is reaching for: the accent marks *action*, not emphasis.

### Photography
- One art direction per page, held across every image
- Match the direction to the buyer: warm domestic light for families, hard studio light for products, real on-site work for trades, abstract data for enterprise
- No clinical settings for healthcare. Sell relief, not medicine.
- No mixed stock sources. This is the fastest way to look cheap.
- **Sources: Unsplash, Pexels, or client-supplied. AI-generated photography is forbidden.** Three of five reference sites used it and it failed visibly every time — Beanro's coffee splash arcs behind a sealed lid, Spector's 25-person team photo is uncanny and contradicts the "we take on fewer projects" copy fifty pixels away. Compare El Toro's commissioned food photography, same category, and it isn't close.
- Where the client has no usable photography, say so and tell them what to shoot on a phone. One real photo of the actual operator beats any amount of stock.

### Embedded maps
A raw Google Maps embed will wreck a palette — cyan ocean, default-blue buttons. El Toro's is the second-worst element on an otherwise expensive-looking page. Mute or greyscale it to the palette, or replace it with a styled static image plus a Directions link.

---

## 4. The emphasis device

Every good site I've studied emphasises something inside the headline. Five ways. **Pick one per client and hold it across every section.**

1. **Serif italic inside sans** — "The *creative team* behind your brand." Elegant, premium, editorial. Needs two fonts. Used by Superside, Maven, newrove, El Toro. This is my default and I should know that's a preference, not a law.
2. **Accent color on the operative word** — "Personalized healthcare **for you**." One font, cheaper to execute, warmer. Used by Hims.
3. **Weight + brightness shift in all-caps** — "WE ARE **ESSENTIAL COLLABORATORS**." Institutional, technical. Used by Aitia.
4. **Two-tone line stack** — setup lines in light grey, payoff lines in near-black, thin hairline rules between every line. "WE DIDN'T CHASE / THE RECOGNITION" grey, "THE WORK / DID THAT FOR US" black. Used by Spector. The emphasis isn't a word inside a sentence, it's the second half of the sentence. **This is the only device that improves as type gets bigger** — a serif italic at 120px is ridiculous, this isn't. One typeface, no serif needed.
5. **No device at all.** One characterful display face carrying everything. Used by Healthy Menu (high-contrast serif) and Beanro (heavy condensed sans). Cheapest to execute and often correct for fast, friendly, inexpensive businesses where an italic would read pretentious.

**Rules:**
- Don't use the serif italic for urgent/trades clients. Decorative type reads as frivolous when someone has a problem.
- Devices 4 and 5 need a genuinely good display face. If the typeface is ordinary, use device 1, 2, or 3.

---

## 5. Page skeleton

Default order. Deviate deliberately, not accidentally.

0. **Announcement bar** — optional. Full-width strip above the header, one line, one link, dismissible. A second CTA that costs no hero space and no attention once dismissed. Right slot for a promotion, seasonal item, or holiday hours. Used by Beanro and Velora.
1. **Header** — logo, minimal nav, one CTA (phone number for local service)
2. **Hero** — headline with emphasis device, subhead handling the top objection, primary + secondary CTA, trust row
3. **Trust row** — four short proofs directly under the buttons. See section 6, which now has two modes.
4. **Problem** — name what's wrong before offering the fix
5. **Services / what you get** — layout chosen by count, see section 6
6. **Proof** — stat block, then testimonials. For visible-result trades, before/after replaces the stat block.
7. **Comparison** — two columns, us vs the alternative. Three lines each. Not a six-column matrix.
8. **Process** — numbered steps with a time label on each. The *when* answers more anxiety than the *what*. Spector's spec is tighter than mine and worth copying: title + one-line thesis + timeframe + three short "We…" lines. Be honest about the long steps — Spector states "Build / 4–8 weeks" plainly rather than hiding it.
9. **Locations** — for any business with a service area. See section 6.
10. **Pricing** — if applicable
11. **FAQ** — two columns. Every question is a fear, not a query.
12. **Closing CTA** — dark band, one headline, two buttons
13. **Footer**

**When the closing CTA can be dropped:** if the header is sticky and carries both the phone number and the primary CTA on every scroll position, the closing band is optional. El Toro ends on the map and gets away with it. I'd still argue for the band.

Every section gets an **eyebrow**. Three variants — short caps label in the accent color, dotted rule (5–8 small squares, fading), or bordered pill with a small icon. Hold one throughout.

The section header block can carry more than eyebrow + headline. Spector runs eyebrow → micro-line → translation → headline, four elements, consistently. If you add elements, add them everywhere.

---

## 6. Component rules

### Trust row — two modes

**Proof mode** (service businesses, professional services, trades):
Four items, pipe-separated, directly under the hero buttons. Format: `Volume number | Credential | Years | Differentiator`. Velora runs `1000+ customers served | 4.75 on Google Reviews | 10+ years`. Three works when the fourth would be filler.

**Expectation mode** (restaurants, bars, hospitality, retail):
Proof belongs on Google and TripAdvisor; putting it on your own site reads as fake. Instead, set expectations: what kind of place this is and what to expect on arrival. El Toro runs a scrolling marquee — *Reservations Recommended · Imported From Argentina · Live-Fire Parrilla · Hand-Cut Steaks · Argentine Wines*. Not one is proof, and that's correct.

The **marquee ticker** appeared on both food pages in the survey. Treat it as a category convention for food and drink, not a general device.

### Stat block — corrected
v1's spec was wrong on every count. The real pattern:

- **Three or four items**, not fixed at three
- **Tokens can be numbers or words.** El Toro runs *Live-Fire / Hand-Cut / Mendoza* in the display face with small caps labels underneath. Same slot, same treatment, no numbers. "Every service business has three numbers worth this treatment" was over-fitting to my own two builds.
- Rule can be **horizontal under** each item, or a **thin vertical rule at the left** of a full-width row. Rows scale better with long labels.
- The label can be a **paragraph**, not just a caption. For considered purchases the number alone means nothing — Spector runs *"Retention Rate — Most clients return not because we ask them to, but because the work earns it."* The sentence is what makes the number credible.
- Where numbers are animated counters, **check they render.** Velora ships `0+ / 0 / 0+ / 0+` with four identical labels underneath. Shipped live, on a paid template.

### Services — layout by count
There is no fixed number of services. There is a fixed rule about matching shape to count.

- **3–6** → grid, no fixed column count. Three across, or two rows of three.
- **5–8** → numbered vertical list, one item expanded at a time with an image panel. Velora runs 01–05 this way. Handles odd numbers and works better on mobile than a grid.
- **9+** → filter pills over a curated subset, plus a link to the full list.
- **Uncountable** (a menu, a catalogue) → curated highlights plus a PDF or separate page. El Toro shows a subset behind pills, then a bordered card: *"Want the whole menu, wine list and all?"* with three outlined PDF buttons. That pattern generalises to any client with more inventory than a page can hold.

The thing that breaks a page isn't the number of services. It's forcing an odd number into an even grid and leaving a hole in the bottom row.

### Cards — corrected
v1 said no card borders, no shadows. That's wrong as written — Beanro and Spector both use filled, bordered, shadowed cards and read expensive.

The real rules:
- **Don't use outlined cards where text lengths vary.** That's what caused the uneven-card bug on TowMaster.
- **Anchor variable-length content to a shared edge.** El Toro's dish cards put the text block at the bottom of the image, growing upward, so everything shares a baseline.
- **Every card needs at least one line of body text.** Healthy Menu bottom-anchors its links correctly but has no description, so the cards read hollow with a dead gap in the middle. Bottom-anchoring only works if the content reaches down.
- **Break the rectangle.** Beanro overlaps a numbered badge on the card's top-left corner. Small move, and it's most of what stops the row reading as a template.
- **Filled cards with real internal padding are fine.** Whitespace separating is still the cleaner default.

### Pricing
- **Rows, not columns**, when tiers have unequal feature counts. Spector runs three full-width horizontal rows: graphic | name, price, billing toggle, duration | tick list | CTA plus a one-line descriptor. Rows can't go uneven the way columns do.
- Every tier shows its billing period. `$800 one-time` / `$3,500 one-time` / `$900/mo`. Ambiguity here costs sales at the decision moment.
- Same price format across tiers — **except where a unit is real.** El Toro prices a tomahawk at `£6.25 / per 100g` among fixed prices, and that's correct. Never suppress a unit to make a row look tidy; the customer finds out at the table.
- **Grey out unavailable features rather than hiding them.** Spector re-lists inherited features in full instead, and the result is that you can't see what you're forfeiting without scrolling back and comparing from memory. The rule survives by being broken.
- Guarantee line under each tier
- "Everything in [previous tier] +" as a pill works for software-style features. For service tiers, re-listing in full reads better — the buyer reads one column and stops.

### Before / after — for visible-result trades
For any service with a visible outcome — washing, landscaping, detailing, painting, restoration, dentistry — before/after **replaces the stat block as the primary proof**. Velora leads with it: *"We'll let our before and after pictures do the talking."* Slider or side-by-side, labelled, real photography only.

### Locations
For any business with a service area. Numbered entries, each carrying:
- Real street address
- **Directions** link (opens maps)
- **Call** link (tel:)

Plus a line handling the exclusion objection: *"Serving 12+ cities with same-week scheduling. If your city isn't listed, reach out — we may still service your area or can refer you to a trusted partner."* That keeps the claim honest without shrinking it.

### Testimonials — corrected
- **Cite the platform, and never round up.** v1 said never show less than five stars on your own site. Wrong. Velora shows **4.75 on Google Reviews** and it's more credible than a 5.0 would be, because it's sourced and real. An unsourced 5.0 reads as fake.
- Real name, real role, real photo, or don't show a face at all — grey placeholder avatars are worse than nothing
- Never repeat the same quote twice on one page. The same *person* appearing twice with different quotes is fine.
- Consider a "verified" or "non-incentivized" marker
- If a case study card shows a star rating, it's five or it isn't shown. Spector ships a four-star rating on its own case study card, which is an own goal.

### FAQ
**Every question is a fear, not a query.** Velora's list is the model: Is it safe for my home? Is it safe for pets and plants? How long will you be here? Do you guarantee it? That's objection handling wearing an FAQ costume.

Two columns. Check every answer actually answers its question — MasterCare ships an FAQ asking how to book a service and answering with a paragraph about a strategic design studio, left over from another template.

### Buttons
- Primary: filled accent
- Secondary: outlined
- Enterprise: outlined for both
- Pair a commit button with a browse button ("Get started" / "See if I'm eligible")
- **Fill the button they're ready to click, not the one you want most.** El Toro fills `VIEW THE MENU` and outlines `BOOK A TABLE`. Nobody books a steakhouse before seeing prices. Same logic: a contractor fills "See our work" over "Get a quote"; a clinic fills "Check if you're covered" over "Book".

### Interstitial CTA
For high-price considered purchases, a small CTA band between major sections — but attach a named person with role and photo to each one. Repeats the ask without repeating the pressure. Spector runs five, all different people.

---

## 7. Starting theme presets

Using daisyUI's built-in themes as the base library. All are role-assigned and tested.

| Theme | Reads as | Use for |
|---|---|---|
| `corporate` | Clean blue, credible | B2B, insurance, consulting, financial |
| `winter` | Cool, airy, lots of white | Medical, dental, therapy, wellness |
| `nord` | Muted gray-blue, sophisticated | SaaS, tech, architecture, design |
| `silk` | Soft, refined, premium | Spa, cosmetic, boutique services |
| `emerald` | Clean green | Landscaping, sustainability, fitness |
| `autumn` | Rust and brick | Restaurants, bakeries, trades, artisan |
| `luxury` | Dark with gold | Jewelry, high-end real estate, cosmetic |
| `business` | Dark navy, heavy | Law, accounting, industrial, construction |

Themes only work if components use role names (`btn btn-primary`, `bg-base-100`) rather than hard-coded colors.

Reference: daisyui.com/docs/themes

---

## 8. Industry notes

### Healthcare
- **No outcome claim without a source the client provides in writing.** This protects me, not just them.
- Every stat gets a qualifier and a date. "Up to 20%*" with the asterisk unpacked immediately beneath.
- Show insurance/coverage language on every service card — cost is the top anxiety
- Credentials and licence numbers in the footer
- Warm domestic photography, never clinical
- Discretion is a selling point for anything embarrassing

### Trades / local service
Velora is the model. MasterCare is the counter-example — same category, same section order, and it falls apart entirely on copy.

- Phone number everywhere; service area in the title tag
- Response time as a badge
- Before/after as primary proof
- One photo of the actual operator beats any amount of stock
- Payment methods stated
- Locations block with per-branch address, directions, call
- FAQ = fears
- Free quote / free estimate as the low-commitment CTA
- **Name specifics or the page is worthless.** MasterCare's benefit cards read *Experienced Professionals / Fast & Reliable Service / Affordable Pricing / Customer Satisfaction* — four cards, zero information, every competitor could run identical copy. Velora names a city, a rating with its source, an address per branch, a real guarantee. The design is comparable. The copy is the whole difference.

### Restaurant — partial
Confirmed from two pages, both templates. Needs one real working restaurant before I trust it.

- Trust row runs in expectation mode, not proof mode
- Marquee ticker under the hero
- Menu: curated subset behind filter pills + PDF escape hatch
- Dotted leader rules between list rows, not solid
- Old-style figures on prices in the display face
- Fill the menu button, outline the booking button
- **Open question:** both reference pages bury or omit address, hours and location. My instinct is that's a template-designer habit — templates have no real address to put in — and a real restaurant must invert it. Not writing that as a rule until I've seen a working one.

### To be written
Real estate · Retail · Fitness · Legal · Hospitality

---

## 9. Copywriting

Design and copy are separate layers. This section is about words only — nothing here affects layout or styling.

### The test for every section

Any section that doesn't do one of these four jobs gets cut:

1. **Raise the outcome** — make the result bigger or clearer
2. **Raise belief** — make it more believable that it'll work for *them*
3. **Cut the wait** — shorten the perceived time to result
4. **Cut the effort** — shorten the perceived hassle

### Rules that apply to every client

**Sell the outcome, not the deliverable.**
Nobody wants a website. They want the phone to ring.
- Weak: "One-page website with mobile-ready design"
- Strong: "The page that gets people to call you"

**Name the pain first, and name it specifically.**
State the problem better than the visitor could state it themselves, before offering anything. Six specific failures beats one vague one.

**The paste test.** Could this copy be pasted onto a competitor's site unchanged? If yes, rewrite it.

**Kill the risk, near the price.**
Guarantee stated plainly, next to the cost, not buried in terms. If there's no guarantee, find another risk-reversal: free consultation, no contract, cancel anytime, you keep the plan either way.

A risk reversal doesn't have to be a refund. Spector's is *"What we quote is what you pay. Scope locked before anything moves."* No money back promised — it removes the specific fear (surprise invoices) instead.

**Make the next step tiny.**
Not "buy." Something small and reversible. "Book a 20 minute call. We'll send you a one-page plan. Free, yours to keep, and you're welcome to take it to someone else."

**Handle objections above the fold.**
The trust row is objection handling, not decoration.

**Show what the cheaper option costs them.**
In pricing, grey out the features a tier doesn't include rather than hiding them.

### When the offer framework applies — corrected

v1 said: margin, bundling, price high enough to need justifying. That's wrong, and Velora proves it — a cheap, single-transaction local service running a full value stack (free first wash, free quote, no obligation, no hidden fees, satisfaction guarantee, before/after proof) and it works.

**The real test: does the client have anything cheap to give away that removes a specific fear?**

- A pressure washer does. The fears are property damage, pets, disruption, being overcharged. Free quote and a guarantee cost almost nothing and kill three of them.
- A tow truck doesn't. The fear is being ripped off, and the answer is a stated fair price, not a bonus.

Same price bracket. Opposite answers.

### When it doesn't apply

Don't force it. In those cases the copy job is different:
- Make the phone number impossible to miss
- State the response time
- Say the price is fair and given upfront
- Remove the fear of being ripped off
- One sentence of reassurance, then get out of the way

That's still a good sales pitch. It just isn't an offer stack, and pretending otherwise makes the page ridiculous.

### Match aggression to price point — corrected

Urgency and scarcity language scales inversely with price. But scarcity doesn't disappear at the top — **it inverts.**

- Under ~$500: "Only 3 spots left" reads as legitimate demand
- Over ~$2,000: the same line reads as manipulation and costs the sale
- Over ~$2,000, flip it to **selectivity**: *"We take on fewer projects." "Not every inquiry becomes a project." "One of sixteen studios recognised — selected work, not volume submissions."*

Same psychological lever. Aimed at the buyer's ego instead of their fear.

---

## 10. Working rules

- **Advise, then respect the decision.** Note recommendations the client declined. When results are poor six months later, I'll know it wasn't the design.
- **Judge at viewport height, not full page.**
- **Study layouts, don't copy code.** Learning why a section works is fine. Rebuilding someone's page in different colors is not.
- **Reference sites supply structure and proportion only.** Never the palette, never the typeface, never the copy. Record the extraction specifically — "take the locations block pattern," not "make it look like this site." Otherwise every page drifts toward whatever I looked at that morning, and the client ends up wearing someone else's brand.
- **Licensing:** components must be MIT or work-for-hire. No ThemeForest components in the parts bin — that licence forbids extracting pieces into a reusable system. Framer templates are the same trap in a different storefront: they're for studying, not for building on.
- **Images:** Unsplash, Pexels, or client-supplied only. No AI-generated photography.
- **Never publish unreviewed.** Human approval step stays permanently, even after automation.
- **Check the small things.** Across five paid reference templates I found: a phone number with the wrong state's area code, a Calgary address with a UK phone number, an FAQ answer left over from a different template, animated counters rendering as zero, an empty "Duration:" field, and "What out customer say." All shipped. All would take thirty seconds to catch.

---

## 11. Open questions

- Business name still undecided — blocking my own site
- **The dark green / acid yellow look is not mine.** Healthy Menu runs the same palette. It's a current look, not a signature. If I brand with it I'll be one of many — so it goes back to being an option for client pages, not my agency identity.
- Target market not yet fixed: local service businesses only, or wider? Velora is the strongest evidence yet that local service is a real, winnable market with a repeatable page.
- Multilingual toggle (Healthy Menu runs PT-BR / EN) — plausible differentiator in Toronto. Worth testing on one client.
