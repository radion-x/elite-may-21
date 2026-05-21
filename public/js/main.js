(function() {
    const state = {
        observer: null
    };

    const enhancedTreatmentPages = {
        '/tooth-coloured-fillings/': {
            overviewTitle: 'A conservative repair that still looks natural',
            overviewParagraphs: [
                'Tooth coloured fillings are used to repair decay, chips and small areas of structural damage while keeping the restoration visually discreet. They are chosen when the goal is to restore strength and seal the tooth without drawing attention to the treatment.',
                'Modern filling materials bond directly to the tooth, which means more healthy structure can often be preserved compared with older metal restorations. This makes them a practical option for both front and back teeth in many cases.'
            ],
            indicationsTitle: 'When a filling is usually recommended',
            indicationsParagraphs: [
                'A filling is often the right first step when damage is localised and the tooth can still be restored conservatively.'
            ],
            indicationsList: [
                'Decay detected during an exam or on x-rays',
                'Small cracks, chips or worn areas that need support',
                'Replacement of old failing restorations',
                'Early intervention before damage becomes larger and more expensive to repair'
            ],
            processTitle: 'What treatment involves',
            processParagraphs: [
                'After diagnosis, the affected area is carefully cleaned and prepared before the filling material is bonded in layers. The restoration is then shaped and polished so it feels comfortable and sits naturally in the bite.',
                'If the damage is more extensive than expected, the discussion may shift toward an inlay, onlay or crown. The key is choosing the restoration that will last well rather than forcing a smaller repair where it is unlikely to hold up.'
            ],
            cardsTitle: 'Why patients choose this option',
            cards: [
                { title: 'Discreet appearance', text: 'The repair is shade matched to blend with surrounding teeth more naturally.' },
                { title: 'Conservative treatment', text: 'It is often possible to preserve more healthy tooth structure than with larger restorations.' },
                { title: 'Fast improvement', text: 'Many fillings can be completed in a single visit once the tooth has been assessed.' },
                { title: 'Stops problems growing', text: 'Treating small decay or damage early helps avoid more involved treatment later.' }
            ],
            sidebarTitle: 'Good fit for',
            sidebarText: 'Patients wanting a practical, low-profile repair for mild to moderate damage.',
            sidebarItems: [
                'New cavities and minor fractures',
                'Replacing worn or broken old fillings',
                'Front or back teeth depending on bite forces',
                'Preventive treatment before deeper damage develops'
            ],
            sidebarLinks: [
                { label: 'Book an appointment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Back to general dentistry', href: '/general-dentistry/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about tooth coloured fillings',
            faqs: [
                { question: 'How long do tooth coloured fillings last?', answer: 'Longevity depends on the size of the filling, where it sits in the mouth and how much pressure it carries. With good care and regular reviews, many last well for years.' },
                { question: 'Can a filling replace every damaged tooth surface?', answer: 'No. If too much structure is missing, a larger restoration such as an inlay, onlay or crown may be the better long-term option.' }
            ],
            ctaEyebrow: 'Repair Early',
            ctaTitle: 'Small problems are easier to solve when they are treated early.',
            ctaText: 'If you suspect decay, a chip or a failing old filling, Elite Dentistry can assess the tooth and recommend the most sensible repair before the problem escalates.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'See the new patient offer',
            ctaSecondaryHref: '/offers/'
        },
        '/root-canals-endodontics/': {
            overviewTitle: 'Root canal treatment is about removing infection while saving the tooth',
            overviewParagraphs: [
                'When the inside of a tooth becomes infected or inflamed, root canal treatment can often remove the source of pain while preserving the tooth itself. For many patients, this is the difference between keeping a tooth and losing it.',
                'The aim is to clean the internal canal system, seal the tooth and then restore it properly so it can keep functioning comfortably within the bite.'
            ],
            indicationsTitle: 'Signs a root canal may be needed',
            indicationsParagraphs: [
                'Not every painful tooth needs endodontic treatment, but there are clear patterns that often point in that direction.'
            ],
            indicationsList: [
                'Persistent toothache or throbbing pain',
                'Sensitivity to hot or cold that lingers',
                'Pain when chewing or biting pressure',
                'A tooth that has darkened after trauma or deep decay'
            ],
            processTitle: 'How treatment is planned',
            processParagraphs: [
                'The process starts with diagnosis, usually including x-rays and clinical testing, so the tooth can be assessed properly. If root canal treatment is appropriate, the internal infection is removed and the canals are cleaned and sealed.',
                'Many root canal treated teeth also need a strong final restoration, often a crown, because the tooth may have already lost significant structure. The restoration plan is just as important as the canal treatment itself.'
            ],
            cardsTitle: 'What patients usually want clarified',
            cards: [
                { title: 'Can the tooth be saved?', text: 'That depends on how much sound tooth structure remains and whether the surrounding support is healthy enough.' },
                { title: 'Will it relieve pain?', text: 'When infection is the driver, removing the diseased tissue is often the key step toward settling symptoms.' },
                { title: 'How many visits?', text: 'Some teeth are completed in one visit, while others need staged treatment depending on complexity.' },
                { title: 'What comes after?', text: 'A strong final restoration helps protect the tooth and improve the odds of long-term success.' }
            ],
            sidebarTitle: 'Usually recommended when',
            sidebarText: 'The tooth is worth saving and the infection is inside the pulp rather than only on the surface.',
            sidebarItems: [
                'Deep decay has reached the nerve',
                'A crack or trauma has affected the pulp',
                'There is pain, swelling or persistent sensitivity',
                'Extraction would be a poorer long-term outcome'
            ],
            sidebarLinks: [
                { label: 'Book an assessment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Explore dental crowns', href: '/dental-crowns/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about root canal treatment',
            faqs: [
                { question: 'Is root canal treatment always better than extraction?', answer: 'Not always. The best option depends on the remaining tooth structure, the surrounding bone and gums, and what restoration would be needed afterwards.' },
                { question: 'Will I need a crown after root canal treatment?', answer: 'Often, yes. Teeth that have had root canal treatment can be more vulnerable structurally, so a crown is commonly recommended to protect them.' }
            ],
            ctaEyebrow: 'Save The Tooth',
            ctaTitle: 'If a tooth is painful or infected, get it assessed before the damage spreads.',
            ctaText: 'Elite Dentistry can diagnose whether root canal treatment, restoration or another option makes the most sense for the tooth and for your wider oral health.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Back to general dentistry',
            ctaSecondaryHref: '/general-dentistry/'
        },
        '/tooth-extractions/': {
            overviewTitle: 'Extractions are recommended carefully and only when the tooth is no longer a good long-term bet',
            overviewParagraphs: [
                'Removing a tooth is usually a last-resort decision. It is considered when the tooth cannot be predictably restored, is causing recurring infection or pain, or is creating a broader oral health problem that needs to be resolved.',
                'The extraction itself matters, but so does the plan afterwards. Healing, replacement options and protecting the rest of the bite all need to be thought through clearly.'
            ],
            indicationsTitle: 'When extraction may be the right step',
            indicationsParagraphs: [
                'The decision is based on what is most predictable for comfort, stability and long-term oral health.'
            ],
            indicationsList: [
                'A tooth is too damaged or decayed to restore reliably',
                'Advanced infection has undermined the tooth or surrounding support',
                'The tooth is fractured in a way that cannot be predictably repaired',
                'The extraction is part of a wider restorative or orthodontic plan'
            ],
            processTitle: 'What to expect from treatment',
            processParagraphs: [
                'Before recommending removal, the tooth and supporting structures are assessed carefully. The procedure is then planned around the difficulty of the extraction, your comfort needs and what the next step will be once the tooth is removed.',
                'Aftercare is important. Healing instructions, pain control, cleaning guidance and timing for any replacement options all need to be clear so recovery is smoother and complications are reduced.'
            ],
            cardsTitle: 'What matters most around an extraction',
            cards: [
                { title: 'Comfort during treatment', text: 'Anaesthetic and communication are key to making the appointment more manageable.' },
                { title: 'A clear reason why', text: 'The recommendation should make clinical sense rather than being the easiest short-term fix.' },
                { title: 'Good healing support', text: 'Follow-up advice has a direct effect on comfort, bleeding and recovery.' },
                { title: 'A plan afterwards', text: 'Where appropriate, replacement and bite stability should be discussed early.' }
            ],
            sidebarTitle: 'The full decision includes',
            sidebarText: 'Not just removal, but what recovery and tooth replacement should look like afterwards.',
            sidebarItems: [
                'Whether the tooth can be saved instead',
                'How simple or complex the extraction is likely to be',
                'Healing time and aftercare requirements',
                'Implant, bridge or other replacement planning where needed'
            ],
            sidebarLinks: [
                { label: 'Book an assessment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Explore implants', href: '/dental-implants/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about tooth extraction',
            faqs: [
                { question: 'Will I always need to replace an extracted tooth?', answer: 'Not always, but many extracted teeth do need replacement to maintain chewing function, bite stability or appearance. That depends on which tooth is involved and the wider treatment plan.' },
                { question: 'How long does recovery take?', answer: 'Initial healing is usually measured in days to a couple of weeks, but complete tissue and bone healing takes longer. The complexity of the extraction affects the timeline.' }
            ],
            ctaEyebrow: 'Make The Next Step Clear',
            ctaTitle: 'If a tooth may need removal, get a clear diagnosis before deciding anything.',
            ctaText: 'Elite Dentistry can confirm whether extraction is truly necessary and explain what recovery and replacement should look like if it is.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Learn about wisdom teeth',
            ctaSecondaryHref: '/wisdom-teeth-removal/'
        },
        '/wisdom-teeth-removal/': {
            overviewTitle: 'Wisdom teeth are usually a problem because of position, pressure or repeated inflammation',
            overviewParagraphs: [
                'Wisdom teeth often become difficult to manage when there is not enough room for them to erupt normally, when they grow at an angle or when they are hard to keep clean. This can lead to pain, swelling, infection and ongoing pressure around the back of the mouth.',
                'At Elite Dentistry, the aim is to assess whether removal is necessary, how complex the procedure is likely to be and what support you may need during treatment and recovery.'
            ],
            indicationsTitle: 'Conditions that commonly lead to wisdom tooth removal',
            indicationsParagraphs: [
                'Some wisdom teeth remain quiet for years, while others cause repeated episodes that make early treatment the better option.'
            ],
            indicationsList: [
                'Impaction or partial eruption causing pain or jaw pressure',
                'Infection or inflammation around the gum over the tooth',
                'Food trapping and difficulty cleaning the area properly',
                'Crowding, decay or damage affecting the wisdom tooth or nearby tooth'
            ],
            processTitle: 'How the procedure is approached',
            processParagraphs: [
                'The treatment plan depends on how the wisdom tooth is positioned and whether it is fully erupted or still impacted. Some extractions are relatively straightforward, while others are more surgical in nature and need more careful planning.',
                'Patient comfort is central to the appointment. Anaesthetic, communication and aftercare guidance all matter, and sedation pathways may be relevant for anxious patients or more involved cases.'
            ],
            cardsTitle: 'What patients usually want clarified first',
            cards: [
                { title: 'Do all wisdom teeth need to come out?', text: 'No. The recommendation depends on symptoms, tooth position, hygiene access and the risk of future problems.' },
                { title: 'How difficult will it be?', text: 'That is determined by the angle, eruption level and how the roots sit in relation to surrounding structures.' },
                { title: 'What is recovery like?', text: 'Recovery varies by complexity, but aftercare instructions have a major effect on comfort and healing.' },
                { title: 'Is sedation available?', text: 'For appropriate cases, additional comfort support may be discussed as part of the treatment plan.' }
            ],
            sidebarTitle: 'Important planning points',
            sidebarText: 'Wisdom tooth treatment is not one-size-fits-all. Good diagnosis makes the experience more predictable.',
            sidebarItems: [
                'Position and eruption level of the tooth',
                'Signs of infection or repeated flare-ups',
                'Risk to neighbouring teeth',
                'Comfort needs and sedation options'
            ],
            sidebarLinks: [
                { label: 'Book an assessment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Explore sleep dentistry', href: '/sleep-dentistry/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about wisdom teeth removal',
            faqs: [
                { question: 'Can wisdom teeth be monitored instead of removed?', answer: 'Yes, if they are healthy, accessible to clean and not damaging neighbouring teeth. Monitoring only makes sense when the risk profile is acceptable.' },
                { question: 'Is IV or sleep-style sedation an option for anxious patients?', answer: 'For suitable cases, sedation support may be discussed when anxiety or procedural complexity makes additional reassurance helpful.' }
            ],
            ctaEyebrow: 'Resolve Repeated Problems',
            ctaTitle: 'If wisdom teeth are flaring up, get the position checked before it turns into a larger issue.',
            ctaText: 'Elite Dentistry can assess whether monitoring, removal or a staged plan makes the most sense for comfort and long-term oral health.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Back to general dentistry',
            ctaSecondaryHref: '/general-dentistry/'
        },
        '/periodontal-gum-care/': {
            overviewTitle: 'Gum care is about protecting the structures that support every tooth',
            overviewParagraphs: [
                'Bleeding, inflammation and persistent gum tenderness are not just minor annoyances. They can be early indicators of periodontal problems that affect the bone and soft tissue support around teeth over time.',
                'Periodontal care focuses on identifying what is driving the inflammation, improving cleaning access and creating a maintenance plan that reduces the risk of long-term breakdown.'
            ],
            indicationsTitle: 'Signs gum treatment may be needed',
            indicationsParagraphs: [
                'Gum disease often progresses quietly, so early signs should be taken seriously.'
            ],
            indicationsList: [
                'Bleeding when brushing or flossing',
                'Tender, swollen or receding gums',
                'Persistent bad breath or a bad taste in the mouth',
                'Build-up, deeper pockets or bone loss identified at dental review'
            ],
            processTitle: 'What periodontal care usually involves',
            processParagraphs: [
                'Treatment usually begins with assessment of gum health, pocketing, plaque retention factors and home care habits. Cleaning may then be staged more carefully below the gumline to reduce inflammation and bacterial load.',
                'Long-term control matters more than a one-off clean. Periodontal care often includes maintenance visits, coaching around home care and regular review so the condition stays stable.'
            ],
            cardsTitle: 'Why early gum care matters',
            cards: [
                { title: 'Protects tooth support', text: 'Healthy gums and surrounding bone are essential to keeping teeth stable over time.' },
                { title: 'Improves comfort', text: 'Reducing inflammation often improves bleeding, tenderness and daily irritation.' },
                { title: 'Supports other dentistry', text: 'Cosmetic and restorative work performs better when gum health is stable first.' },
                { title: 'Creates a maintenance plan', text: 'Consistency is usually what keeps periodontal issues from returning quickly.' }
            ],
            sidebarTitle: 'Treatment is usually built around',
            sidebarText: 'Diagnosis, debridement where needed and a realistic maintenance routine that fits daily life.',
            sidebarItems: [
                'Identifying plaque traps and inflammation drivers',
                'Deep cleaning or supportive periodontal care where indicated',
                'Home care improvement',
                'Ongoing hygiene and review appointments'
            ],
            sidebarLinks: [
                { label: 'Book an appointment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'See hygienist support', href: '/dental-hygienists/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about gum care',
            faqs: [
                { question: 'Do bleeding gums always mean gum disease?', answer: 'Not always, but bleeding is a sign that the tissues are irritated and should be assessed rather than ignored.' },
                { question: 'Can gum disease be completely reversed?', answer: 'Early inflammation can often be reversed. More advanced periodontal disease is usually managed and stabilised rather than simply undone.' }
            ],
            ctaEyebrow: 'Protect The Foundations',
            ctaTitle: 'If your gums bleed, feel sore or seem to be receding, have them assessed properly.',
            ctaText: 'Elite Dentistry can identify the cause, explain the severity and create a treatment and maintenance plan that is realistic to keep up with.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Back to general dentistry',
            ctaSecondaryHref: '/general-dentistry/'
        },
        '/dental-hygienists/': {
            overviewTitle: 'Hygienist appointments are where prevention becomes practical',
            overviewParagraphs: [
                'A hygienist visit is more than a standard clean. It is part of the maintenance system that helps reduce plaque build-up, monitor gum health and keep patients ahead of recurring issues that are easy to ignore until they become bigger.',
                'For many patients, hygienist care is what protects the results of previous dental work and makes long-term oral health more manageable.'
            ],
            indicationsTitle: 'Who benefits most from hygienist support',
            indicationsParagraphs: [
                'While almost every patient benefits from regular hygiene care, some patients rely on it more heavily because their risk profile is higher.'
            ],
            indicationsList: [
                'Patients with recurring tartar or staining',
                'Anyone managing bleeding gums or early periodontal issues',
                'Patients with crowns, bridges, veneers or implants',
                'People who want more structure around prevention and maintenance'
            ],
            processTitle: 'What a hygienist appointment usually includes',
            processParagraphs: [
                'The appointment typically includes review of plaque retention, gum health and cleaning needs, followed by a professional clean tailored to what is happening clinically rather than a generic routine.',
                'Patients also get guidance on the daily habits and tools that matter most for their mouth. The goal is to make home care more effective, not just to repeat instructions that are too general to help.'
            ],
            cardsTitle: 'Why this matters between dentist visits',
            cards: [
                { title: 'Supports gum stability', text: 'Regular maintenance helps reduce inflammation before it becomes more serious.' },
                { title: 'Protects dental work', text: 'Crowns, implants and cosmetic work all benefit from better hygiene control.' },
                { title: 'Improves home care', text: 'Advice is more useful when it is specific to what is actually happening in your mouth.' },
                { title: 'Keeps reviews meaningful', text: 'Cleaner, healthier tissues make dental exams and treatment planning more accurate.' }
            ],
            sidebarTitle: 'Often recommended for',
            sidebarText: 'Patients who need more than an occasional clean to keep things stable.',
            sidebarItems: [
                'Maintenance after gum treatment',
                'Support around implants and restorative work',
                'Heavy plaque or tartar build-up',
                'A clearer preventive routine'
            ],
            sidebarLinks: [
                { label: 'Book an appointment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Read about oral health', href: '/oral-health/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about hygienist care',
            faqs: [
                { question: 'How often should I see a hygienist?', answer: 'That depends on your gum health, build-up patterns and past treatment. Some patients are best reviewed every few months, while others need less frequent maintenance.' },
                { question: 'Is a hygienist appointment different from a routine clean?', answer: 'Yes. It is usually more focused on maintenance, gum health monitoring and preventing recurring issues rather than just surface cleaning.' }
            ],
            ctaEyebrow: 'Stay Ahead Of Problems',
            ctaTitle: 'Regular maintenance is often what keeps small issues from coming back.',
            ctaText: 'Elite Dentistry can recommend the hygiene schedule and support level that makes sense for your gum health, build-up pattern and past dental work.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Back to general dentistry',
            ctaSecondaryHref: '/general-dentistry/'
        },
        '/oral-health/': {
            overviewTitle: 'Good oral health is rarely accidental',
            overviewParagraphs: [
                'Strong oral health usually comes from a system that works: regular examinations, realistic home care, appropriate hygiene support and timely treatment before small issues become larger ones.',
                'This page is for patients thinking beyond one isolated problem and looking at how to keep their teeth, gums and existing dental work stable for the long term.'
            ],
            indicationsTitle: 'What usually affects long-term oral health',
            indicationsParagraphs: [
                'The most common dental problems often build gradually and quietly before they become obvious.'
            ],
            indicationsList: [
                'Plaque retention and inconsistent cleaning habits',
                'Untreated grinding, wear or bite imbalance',
                'Skipping reviews until pain or damage appears',
                'Ignoring early signs such as bleeding gums, sensitivity or recurring food traps'
            ],
            processTitle: 'How to build a stronger maintenance plan',
            processParagraphs: [
                'The most effective oral health plans are personalised. They are based on what has happened in your mouth previously, where you are most vulnerable and which habits are realistic to maintain consistently.',
                'That may include scheduled examinations, hygiene support, dietary advice, fluoride use, gum care or earlier intervention on teeth that show signs of weakness or decay.'
            ],
            cardsTitle: 'What stronger oral health usually depends on',
            cards: [
                { title: 'Regular review', text: 'Problems are easier to manage when they are seen early and discussed clearly.' },
                { title: 'Better daily habits', text: 'Small improvements in brushing, cleaning between teeth and diet can change risk significantly.' },
                { title: 'Professional maintenance', text: 'Some mouths need more structured hygiene support to stay healthy.' },
                { title: 'Timely treatment', text: 'Addressing early wear, decay or gum issues reduces the chance of bigger restorative work later.' }
            ],
            sidebarTitle: 'Useful if you want to',
            sidebarText: 'Move from reacting to dental problems toward preventing them more consistently.',
            sidebarItems: [
                'Reduce recurring repairs',
                'Protect gum health',
                'Support existing dental work',
                'Understand your real risk factors'
            ],
            sidebarLinks: [
                { label: 'Book an oral health review', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'See hygienist care', href: '/dental-hygienists/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about oral health planning',
            faqs: [
                { question: 'If I am not in pain, do I still need regular checks?', answer: 'Yes. Many dental and gum problems develop without obvious pain until they are more advanced and harder to treat conservatively.' },
                { question: 'What is the biggest change most patients can make?', answer: 'Consistency. Regular reviews and realistic daily care usually outperform short bursts of effort after a problem appears.' }
            ],
            ctaEyebrow: 'Think Long Term',
            ctaTitle: 'The best oral health plan is the one you can actually keep up with.',
            ctaText: 'Elite Dentistry can help you identify your risks, tighten up daily care and build a maintenance routine that makes future problems less likely.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Back to general dentistry',
            ctaSecondaryHref: '/general-dentistry/'
        },
        '/porcelain-veneers/': {
            overviewTitle: 'Veneers are chosen when patients want a more comprehensive cosmetic change',
            overviewParagraphs: [
                'Porcelain veneers are often considered when the goal is to refine shape, colour, symmetry and smile balance in a more transformational way than whitening or minor bonding can usually provide.',
                'The best veneer cases are planned carefully. Proportion, facial harmony, bite function and how natural the result should look all matter more than simply making teeth whiter or larger.'
            ],
            indicationsTitle: 'What veneers are often used to improve',
            indicationsParagraphs: [
                'Veneers are typically considered when several aesthetic factors need improvement together.'
            ],
            indicationsList: [
                'Shape irregularities and worn edges',
                'Stubborn discolouration that is not a good whitening case',
                'Minor spacing or alignment concerns',
                'A desire for a more balanced, refined smile design'
            ],
            processTitle: 'How veneer planning works',
            processParagraphs: [
                'Cosmetic planning starts with understanding what you want the smile to feel like rather than only what you want changed. From there, tooth display, proportions, facial balance and material selection are considered carefully.',
                'Once a plan is agreed, the teeth are prepared conservatively where appropriate, records are taken and the restorations are made to fit the desired shape, texture and shade outcome.'
            ],
            cardsTitle: 'What separates a strong veneer result',
            cards: [
                { title: 'Natural proportions', text: 'The smile should suit the face, not look generic or overdone.' },
                { title: 'Material quality', text: 'Porcelain offers strength, polish and translucency that support a premium result.' },
                { title: 'Careful planning', text: 'Mock-up thinking, shape discussion and clear goals reduce aesthetic surprises.' },
                { title: 'Functional fit', text: 'Cosmetic work still has to sit well in the bite and perform comfortably day to day.' }
            ],
            sidebarTitle: 'Often right for',
            sidebarText: 'Patients wanting a more complete cosmetic improvement rather than one small adjustment.',
            sidebarItems: [
                'Shape, colour and symmetry concerns together',
                'Smile design rather than simple whitening alone',
                'Patients wanting a refined but natural result',
                'Cases where bonding is unlikely to deliver the same longevity or finish'
            ],
            sidebarLinks: [
                { label: 'Book a cosmetic consultation', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'See cosmetic dentistry', href: '/cosmetic-dentistry/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about porcelain veneers',
            faqs: [
                { question: 'Are veneers always the best cosmetic option?', answer: 'No. Sometimes whitening, bonding, orthodontics or crowns are more appropriate depending on the underlying issue and how much change is needed.' },
                { question: 'Will veneers look obviously done?', answer: 'They should not. The strongest cosmetic outcomes look intentional and refined while still feeling believable on the face.' }
            ],
            ctaEyebrow: 'Plan The Smile Properly',
            ctaTitle: 'A veneer case is only as good as the planning behind it.',
            ctaText: 'Elite Dentistry can assess whether veneers are the right cosmetic pathway and explain how to approach shape, shade and smile design in a natural-looking way.',
            ctaPrimaryLabel: 'Arrange a cosmetic consultation',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Explore whitening',
            ctaSecondaryHref: '/zoom-teeth-whitening/'
        },
        '/dental-bridges/': {
            overviewTitle: 'A bridge can be a practical fixed solution when replacing a missing tooth',
            overviewParagraphs: [
                'Dental bridges are used to replace one or more missing teeth by anchoring a fixed restoration to surrounding support teeth. They are often discussed when patients want a non-removable option but implants are not the preferred or most suitable path.',
                'The decision is less about whether a bridge exists as an option and more about whether it makes sense for the neighbouring teeth, bite forces and long-term restorative plan.'
            ],
            indicationsTitle: 'When a bridge may be recommended',
            indicationsParagraphs: [
                'A bridge is often considered where a fixed replacement is needed and the local conditions support it.'
            ],
            indicationsList: [
                'A missing tooth is affecting chewing or appearance',
                'The surrounding teeth already need restorative work',
                'Implant treatment is not preferred or is less suitable clinically',
                'A fixed option is wanted instead of a removable prosthesis'
            ],
            processTitle: 'How bridge treatment is planned',
            processParagraphs: [
                'The supporting teeth, bite and gum health are assessed first to confirm whether a bridge will be stable and worth doing. The shape of the replacement tooth and the way the bridge sits within the smile also need careful planning.',
                'Once designed, the bridge is made to restore appearance and function while keeping cleaning access and long-term maintenance in mind.'
            ],
            cardsTitle: 'What makes a bridge case work well',
            cards: [
                { title: 'Strong support teeth', text: 'The neighbouring teeth need to be healthy enough to carry the restoration well.' },
                { title: 'A clear maintenance plan', text: 'Bridges need good cleaning habits underneath and around the supporting teeth.' },
                { title: 'The right indication', text: 'A bridge should be chosen because it suits the case, not because it is familiar.' },
                { title: 'Aesthetic integration', text: 'The replacement tooth still needs to look balanced within the smile.' }
            ],
            sidebarTitle: 'Useful when',
            sidebarText: 'A patient wants a fixed replacement and the surrounding teeth or clinical context support a bridge plan.',
            sidebarItems: [
                'Single or limited tooth replacement',
                'Implants are not the preferred path',
                'Adjacent teeth already need crowns or restorative work',
                'Fixed function and appearance are both priorities'
            ],
            sidebarLinks: [
                { label: 'Book an appointment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Explore implants', href: '/dental-implants/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about dental bridges',
            faqs: [
                { question: 'Is a bridge better than an implant?', answer: 'Neither is automatically better. The right choice depends on the condition of neighbouring teeth, bone support, budget, timeline and the wider restorative plan.' },
                { question: 'How do I clean around a bridge?', answer: 'Cleaning is different from a natural tooth. Specific tools or techniques are usually recommended so plaque does not build up around the supporting teeth.' }
            ],
            ctaEyebrow: 'Replace Missing Teeth Clearly',
            ctaTitle: 'If you are weighing bridge versus implant options, start with a proper assessment.',
            ctaText: 'Elite Dentistry can explain which fixed replacement option makes the most sense for the tooth, the bite and the surrounding structures.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Back to cosmetic dentistry',
            ctaSecondaryHref: '/cosmetic-dentistry/'
        },
        '/zoom-teeth-whitening/': {
            overviewTitle: 'Professional whitening is about suitability and realistic shade planning',
            overviewParagraphs: [
                'Patients often arrive wanting a brighter smile quickly, but the best whitening outcomes come from understanding what is causing the discolouration and whether whitening is the right first move.',
                'Professional whitening offers a more controlled pathway than over-the-counter products, with clearer guidance around sensitivity, expected shade change and how whitening fits into wider cosmetic planning.'
            ],
            indicationsTitle: 'What whitening is best suited to improve',
            indicationsParagraphs: [
                'Whitening is typically chosen when natural teeth have darkened or picked up surface and internal staining over time.'
            ],
            indicationsList: [
                'General yellowing or dullness of natural tooth shade',
                'Staining from coffee, tea, red wine or smoking history',
                'Preparing for a cosmetic refresh before other treatments are considered',
                'Patients wanting a cleaner, brighter smile without changing tooth shape'
            ],
            processTitle: 'How whitening is approached',
            processParagraphs: [
                'A proper whitening plan starts with checking the health of the teeth and gums, because unresolved decay, gum issues or certain restorations may change how treatment should be approached.',
                'The likely result is then discussed realistically. Whitening works on natural tooth structure, but it will not change the colour of crowns, veneers or fillings, so timing matters if additional cosmetic work is also being considered.'
            ],
            cardsTitle: 'What patients usually need clarified',
            cards: [
                { title: 'How white can teeth go?', text: 'The final result depends on the starting shade, tooth structure and the type of discolouration present.' },
                { title: 'Will it cause sensitivity?', text: 'Some patients experience short-term sensitivity, so suitability and product choice matter.' },
                { title: 'Does whitening affect veneers or crowns?', text: 'No. Existing restorations do not lighten the same way natural teeth do.' },
                { title: 'Should whitening happen before other cosmetic work?', text: 'Often yes, especially if the final shade will influence future restorations.' }
            ],
            sidebarTitle: 'Useful for patients who want',
            sidebarText: 'A simpler cosmetic improvement without changing tooth shape or alignment.',
            sidebarItems: [
                'A fresher, brighter smile',
                'Professional guidance rather than guesswork',
                'Whitening before veneers or bonding decisions',
                'A more controlled alternative to retail products'
            ],
            sidebarLinks: [
                { label: 'Book a whitening consultation', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'See cosmetic dentistry', href: '/cosmetic-dentistry/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about whitening',
            faqs: [
                { question: 'Will whitening work on every type of stain?', answer: 'No. Some intrinsic discolouration responds less predictably, which is why a professional assessment matters before committing to treatment.' },
                { question: 'How long do whitening results last?', answer: 'That varies with diet, smoking, oral hygiene and maintenance habits. The result is not permanent, but good habits can help it last longer.' }
            ],
            ctaEyebrow: 'Brighten Without Guesswork',
            ctaTitle: 'If you want a whiter smile, start by confirming whether whitening is the right pathway.',
            ctaText: 'Elite Dentistry can assess suitability, explain realistic shade expectations and show where whitening fits into any broader cosmetic plan.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Explore veneers',
            ctaSecondaryHref: '/porcelain-veneers/'
        },
        '/bone-grafts/': {
            overviewTitle: 'Bone grafting is used when the implant site needs more support first',
            overviewParagraphs: [
                'Some implant cases are straightforward, while others need additional bone volume before the implant can be placed predictably. Bone grafting is used to rebuild or support the site so the foundation is stronger for the final restoration.',
                'For patients, the main question is usually not the name of the procedure but why it is needed and how it affects timing, healing and final implant stability.'
            ],
            indicationsTitle: 'When a graft may be recommended',
            indicationsParagraphs: [
                'Bone loss can happen after extraction, long-term missing teeth, infection or natural anatomy limitations.'
            ],
            indicationsList: [
                'There is not enough bone volume for secure implant placement',
                'The site needs contour or structural support after a tooth has been lost',
                'Previous infection or trauma has compromised the bone',
                'A more stable long-term implant result depends on site development first'
            ],
            processTitle: 'What the treatment is designed to do',
            processParagraphs: [
                'Bone grafting is used to create a healthier volume of supporting structure in the area planned for an implant. The exact method depends on how much support is needed and whether the graft is staged before implant placement or combined with other treatment steps.',
                'Healing time matters because the grafted site needs time to integrate before the next stage can move forward confidently. That is why good implant planning often involves sequencing rather than rushing straight to the final tooth replacement.'
            ],
            cardsTitle: 'Why the extra step can matter',
            cards: [
                { title: 'Improves support', text: 'A better foundation helps create a more predictable implant position and outcome.' },
                { title: 'Protects aesthetics', text: 'Site shape and volume influence how natural the final restoration can look.' },
                { title: 'Supports longevity', text: 'Stable bone support is central to long-term implant performance.' },
                { title: 'Creates planning clarity', text: 'Patients understand timing better when the site development stage is explained properly.' }
            ],
            sidebarTitle: 'Often part of implant planning where',
            sidebarText: 'The site is not yet ideal for an implant to be placed predictably and attractively.',
            sidebarItems: [
                'Bone volume is limited',
                'A recent or old extraction has left a deficient ridge',
                'Aesthetic implant positioning matters',
                'Long-term support needs to be improved first'
            ],
            sidebarLinks: [
                { label: 'Book an implant assessment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Back to implants', href: '/dental-implants/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about bone grafting',
            faqs: [
                { question: 'Does grafting mean I cannot have an implant yet?', answer: 'Sometimes it means the site should be developed first, but the exact sequence depends on how much support is missing and the type of implant plan.' },
                { question: 'Will grafting change the total timeline?', answer: 'Often yes. Healing and integration are part of the plan, so grafted cases usually need a more staged timeline than straightforward implant placement.' }
            ],
            ctaEyebrow: 'Build The Foundation First',
            ctaTitle: 'When the implant site needs more support, good sequencing matters.',
            ctaText: 'Elite Dentistry can explain whether bone grafting is needed, what it changes in the timeline and how it supports a stronger final implant outcome.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Read about sinus lifts',
            ctaSecondaryHref: '/sinus-lifts/'
        },
        '/guided-bone-tissue-regeneration/': {
            overviewTitle: 'Regeneration support is used when implant planning needs more than basic site preparation',
            overviewParagraphs: [
                'Guided bone and tissue regeneration is relevant when the implant site needs more advanced support to improve both structure and the quality of the surrounding soft tissue environment.',
                'For patients, this usually means the case needs a more precise staged approach so the final implant has better conditions for function, support and appearance.'
            ],
            indicationsTitle: 'Why regeneration may be part of the plan',
            indicationsParagraphs: [
                'These procedures are generally considered when bone or soft tissue deficiencies would otherwise compromise the final result.'
            ],
            indicationsList: [
                'The site has more complex bone deficiency',
                'Soft tissue support is also part of the implant challenge',
                'A stable, aesthetic implant outcome needs more advanced planning',
                'The case requires a staged regenerative approach rather than a simple implant-only pathway'
            ],
            processTitle: 'What patients should understand first',
            processParagraphs: [
                'The key point is that regeneration is not an unnecessary complication. It is used where better tissue conditions are needed to improve predictability and protect the long-term outcome.',
                'That usually means clearer sequencing, careful healing periods and more attention to the quality of the site before the final implant stage progresses.'
            ],
            cardsTitle: 'What this extra planning stage helps achieve',
            cards: [
                { title: 'Better support', text: 'The implant site can be developed to give the final restoration a stronger foundation.' },
                { title: 'Healthier tissue conditions', text: 'Good soft tissue quality can matter as much as bone for long-term stability and appearance.' },
                { title: 'Improved predictability', text: 'More complex cases usually benefit from a staged, structured approach rather than shortcuts.' },
                { title: 'Clearer expectations', text: 'Patients understand why the timeline is longer and what each step is designed to achieve.' }
            ],
            sidebarTitle: 'Usually discussed when',
            sidebarText: 'The implant site needs more advanced regeneration support for the result to be predictable.',
            sidebarItems: [
                'Bone and tissue deficiency are both concerns',
                'A more complex implant case is being staged',
                'Aesthetic demands are higher',
                'Long-term support is being prioritised over speed'
            ],
            sidebarLinks: [
                { label: 'Book an implant consultation', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Back to implants', href: '/dental-implants/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about regeneration support',
            faqs: [
                { question: 'Is regeneration only for severe cases?', answer: 'It is mostly used where the site needs more support than a straightforward implant case, but the exact threshold depends on anatomy, aesthetics and restorative goals.' },
                { question: 'Why not just place the implant without this step?', answer: 'Because if the site is not ready, the implant position, stability, gum support or long-term appearance may all be compromised.' }
            ],
            ctaEyebrow: 'Stage Complex Cases Properly',
            ctaTitle: 'More advanced implant cases need clearer sequencing, not shortcuts.',
            ctaText: 'Elite Dentistry can explain whether regenerative support is part of your implant plan and what that means for timing, healing and the final result.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Read about bone grafts',
            ctaSecondaryHref: '/bone-grafts/'
        },
        '/sinus-lifts/': {
            overviewTitle: 'A sinus lift is used when upper implant treatment needs more vertical bone support',
            overviewParagraphs: [
                'In the upper back jaw, available bone height can sometimes be too limited for implant placement. A sinus lift is used to improve the space and support available so implant treatment can move forward more predictably.',
                'Patients usually want to understand why this step is necessary, how it changes timing and whether it is being recommended to protect the long-term implant result rather than complicate the process unnecessarily.'
            ],
            indicationsTitle: 'When sinus lift planning may be relevant',
            indicationsParagraphs: [
                'This is generally considered where anatomy in the upper jaw limits implant placement.'
            ],
            indicationsList: [
                'Insufficient bone height beneath the sinus',
                'An upper molar or premolar implant is being considered',
                'The implant site has reduced after tooth loss',
                'A stronger, more stable implant foundation is needed first'
            ],
            processTitle: 'Why the procedure is included in implant planning',
            processParagraphs: [
                'The purpose is to create enough vertical support for safe and predictable implant placement in the upper jaw. That may require a staged healing period before the implant or may be integrated into a broader sequence depending on the case.',
                'As with other site-development procedures, the value lies in improving the quality of the final result rather than trying to bypass anatomy that does not support a predictable implant position.'
            ],
            cardsTitle: 'What this planning step helps with',
            cards: [
                { title: 'Safer implant positioning', text: 'Adequate height helps create a more stable and properly supported implant site.' },
                { title: 'A more predictable timeline', text: 'Staging clarifies when the implant can be placed and when restoration can follow.' },
                { title: 'Better long-term support', text: 'Foundation quality matters to both function and longevity.' },
                { title: 'Fewer compromises', text: 'It reduces the need to force the implant into a less ideal position.' }
            ],
            sidebarTitle: 'Usually part of cases involving',
            sidebarText: 'Upper implant sites where natural anatomy leaves too little height for a straightforward placement.',
            sidebarItems: [
                'Upper molar replacement',
                'Bone height limitations on imaging',
                'A staged implant plan',
                'The need for stronger support before restoration'
            ],
            sidebarLinks: [
                { label: 'Book an implant assessment', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Back to implants', href: '/dental-implants/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about sinus lifts',
            faqs: [
                { question: 'Does every upper implant case need a sinus lift?', answer: 'No. It is only recommended when imaging and clinical planning show that bone height is insufficient for predictable implant placement.' },
                { question: 'Will it extend the implant treatment timeline?', answer: 'Often yes, because staged healing may be needed. That extra time is usually about improving predictability, not creating unnecessary delay.' }
            ],
            ctaEyebrow: 'Make Upper Implant Planning Predictable',
            ctaTitle: 'If the upper jaw needs more support first, it should be built into the plan early.',
            ctaText: 'Elite Dentistry can show whether a sinus lift is relevant to your implant case and explain how it affects timing, support and the final restorative outcome.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'Read about bone grafts',
            ctaSecondaryHref: '/bone-grafts/'
        },
        '/all-on-4-implants/': {
            overviewTitle: 'Full-arch implant treatment needs clarity around sequencing, suitability and expectations',
            overviewParagraphs: [
                'All-on-4 style treatment is usually explored by patients who need a more complete tooth replacement solution and want to understand how full-arch implants compare with removable options or more staged restorative approaches.',
                'This kind of treatment carries bigger decisions around diagnosis, bone support, healing, aesthetics and bite function. It should feel carefully planned rather than rushed into because the idea sounds attractive.'
            ],
            indicationsTitle: 'Who usually explores this option',
            indicationsParagraphs: [
                'Full-arch implant treatment is generally considered where multiple missing, failing or heavily compromised teeth are part of the picture.'
            ],
            indicationsList: [
                'Wider tooth loss or multiple failing teeth',
                'A patient wants a fixed full-arch direction rather than a removable one',
                'The existing dentition is no longer a good long-term foundation',
                'A comprehensive implant plan is being considered instead of repeated piecemeal treatment'
            ],
            processTitle: 'What the planning phase needs to cover',
            processParagraphs: [
                'Good planning looks at bone support, facial profile, smile design, bite function, comfort and how the treatment will be staged. The final outcome is much stronger when these decisions are made upfront instead of being solved one at a time later.',
                'Patients also need realistic guidance on what recovery, temporaries, maintenance and long-term review will involve. This is a bigger restorative pathway, so clarity matters at every stage.'
            ],
            cardsTitle: 'What makes a full-arch case work well',
            cards: [
                { title: 'Proper diagnosis', text: 'A full-arch case should be planned from imaging, structure and function, not only from appearance goals.' },
                { title: 'A staged roadmap', text: 'Patients need to understand which teeth, implants and restorations happen when and why.' },
                { title: 'Strong maintenance planning', text: 'Long-term review and hygiene support are essential once the final work is in place.' },
                { title: 'A realistic aesthetic goal', text: 'The strongest outcome looks stable, healthy and natural rather than simply bright or dramatic.' }
            ],
            sidebarTitle: 'Usually considered when',
            sidebarText: 'The patient needs a broader replacement strategy rather than another isolated repair.',
            sidebarItems: [
                'Several teeth are already missing or failing',
                'The bite and smile need wider reconstruction',
                'A fixed alternative is preferred',
                'A comprehensive implant roadmap is needed'
            ],
            sidebarLinks: [
                { label: 'Book an implant consultation', href: '/contact/#appointment-form', kind: 'button' },
                { label: 'Back to implants', href: '/dental-implants/', kind: 'outline' }
            ],
            faqTitle: 'Common questions about full-arch implant treatment',
            faqs: [
                { question: 'Does every patient with missing teeth need an All-on-4 style solution?', answer: 'No. It is one option within full-mouth and implant planning, and suitability depends on the number of affected teeth, bone support, restorative goals and budget.' },
                { question: 'Is maintenance still important after treatment?', answer: 'Yes. Full-arch implant work still depends on regular review, hygiene support and good day-to-day care to perform well long-term.' }
            ],
            ctaEyebrow: 'Think Bigger Than One Tooth',
            ctaTitle: 'If you need a broader replacement plan, start with a clear full-arch assessment.',
            ctaText: 'Elite Dentistry can explain whether a full-arch implant pathway is relevant and how the case should be staged around support, function and aesthetics.',
            ctaPrimaryLabel: 'Arrange an appointment',
            ctaPrimaryHref: '/contact/#appointment-form',
            ctaSecondaryLabel: 'See implant options',
            ctaSecondaryHref: '/dental-implants/'
        }
    };

    function setVar(name, value) {
        if (value) {
            document.documentElement.style.setProperty(name, value);
        }
    }

    function applyClientConfig(config) {
        if (!config) return;
        window.ClientConfig = config;

        const design = config.design || {};
        const colors = design.colors || {};
        const fonts = design.fonts || {};
        const radius = design.radius || {};

        setVar('--color-primary', colors.primary);
        setVar('--color-primary-light', colors.primaryLight);
        setVar('--color-accent', colors.accent);
        setVar('--color-accent-hover', colors.accentHover);
        setVar('--color-copper', colors.copper);
        setVar('--color-bg-body', colors.body);
        setVar('--color-bg-surface', colors.surface);
        setVar('--color-text-main', colors.textMain);
        setVar('--color-text-secondary', colors.textSecondary);
        setVar('--color-text-inverse', colors.textInverse);
        setVar('--font-heading', fonts.heading);
        setVar('--font-body', fonts.body);
        setVar('--radius-sm', radius.sm);
        setVar('--radius-md', radius.md);
        setVar('--radius-lg', radius.lg);
        setVar('--radius-xl', radius.xl);

        document.querySelectorAll('[data-site-phone]').forEach(node => {
            node.textContent = config.phone || node.textContent;
        });
        document.querySelectorAll('[data-site-email]').forEach(node => {
            node.textContent = config.publicEmail || node.textContent;
        });
        document.querySelectorAll('[data-site-address]').forEach(node => {
            node.textContent = config.address || node.textContent;
        });
        document.querySelectorAll('[data-site-name]').forEach(node => {
            node.textContent = config.siteName || node.textContent;
        });
        document.querySelectorAll('[data-site-tagline]').forEach(node => {
            node.textContent = config.tagline || node.textContent;
        });
        document.querySelectorAll('[data-booking-link]').forEach(node => {
            node.href = config.bookingUrl || '/contact/#appointment-form';
        });
        document.querySelectorAll('[data-contact-link]').forEach(node => {
            node.href = config.contactUrl || '/contact/';
        });
        document.querySelectorAll('[data-site-phone-link]').forEach(node => {
            if (config.phone) {
                node.href = `tel:${config.phone.replace(/[^\d+]/g, '')}`;
            }
        });
        document.querySelectorAll('[data-site-email-link]').forEach(node => {
            if (config.publicEmail) {
                node.href = `mailto:${config.publicEmail}`;
            }
        });
    }

    async function ensureConfig() {
        if (window.ClientConfig) {
            applyClientConfig(window.ClientConfig);
            return window.ClientConfig;
        }

        try {
            const response = await fetch('/api/client-config');
            if (!response.ok) return null;
            const config = await response.json();
            applyClientConfig(config);
            return config;
        } catch (error) {
            return null;
        }
    }

    function initHeaderState() {
        const header = document.querySelector('.site-header');
        if (!header || header.dataset.bound === 'true') return;
        header.dataset.bound = 'true';

        const onScroll = () => {
            header.classList.toggle('header-solid', window.scrollY > 32);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function initMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.nav-links');

        if (!toggle || !nav || toggle.dataset.bound === 'true') return;
        toggle.dataset.bound = 'true';

        const closeMenu = () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.querySelectorAll('.nav-item-dropdown.active').forEach(item => {
                item.classList.remove('active');
            });
        };

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        document.querySelectorAll('.nav-item-dropdown > a').forEach(link => {
            if (link.dataset.bound === 'true') return;
            link.dataset.bound = 'true';
            link.addEventListener('click', event => {
                if (window.innerWidth > 820) return;
                event.preventDefault();
                const parent = link.parentElement;
                const isOpen = parent.classList.contains('active');
                document.querySelectorAll('.nav-item-dropdown.active').forEach(item => {
                    item.classList.remove('active');
                });
                if (!isOpen) {
                    parent.classList.add('active');
                }
            });
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.dataset.closeBound === 'true') return;
            link.dataset.closeBound = 'true';
            link.addEventListener('click', () => {
                if (window.innerWidth <= 820 && !link.parentElement.classList.contains('nav-item-dropdown')) {
                    closeMenu();
                }
            });
        });

        document.addEventListener('click', event => {
            if (window.innerWidth > 820) return;
            if (!event.target.closest('.nav-shell')) {
                closeMenu();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 820) {
                closeMenu();
            }
        });
    }

    function initFaqs() {
        document.querySelectorAll('.faq-item').forEach(item => {
            const button = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            if (!button || !answer || button.dataset.bound === 'true') return;

            button.dataset.bound = 'true';
            answer.hidden = false;
            answer.style.maxHeight = item.classList.contains('is-open') ? `${answer.scrollHeight}px` : '0px';
            button.setAttribute('aria-expanded', item.classList.contains('is-open') ? 'true' : 'false');
            button.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');
                item.classList.toggle('is-open', !isOpen);
                answer.style.maxHeight = isOpen ? '0px' : `${answer.scrollHeight}px`;
                button.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
            });
        });
    }

    function normalizePath(pathname) {
        const path = (pathname || '/').replace(/index\.html$/, '');
        if (path === '' || path === '/') return '/';
        return path.endsWith('/') ? path : `${path}/`;
    }

    function renderFaqItems(faqs) {
        return faqs.map(faq => `
            <article class="faq-item" data-faq-item>
                <button class="faq-question" type="button" data-faq-trigger aria-expanded="false">
                    <span>${faq.question}</span>
                    <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" data-faq-panel>
                    <p>${faq.answer}</p>
                </div>
            </article>
        `).join('');
    }

    function renderSidebarLinks(links) {
        return links.map(link => {
            const className = link.kind === 'button' ? 'button' : 'button-outline';
            return `<a class="${className}" href="${link.href}">${link.label}</a>`;
        }).join('');
    }

    function renderEnhancedTreatmentPage(data) {
        return `
            <section class="section">
                <div class="container content-grid">
                    <div class="stack-lg" data-reveal>
                        <div class="panel">
                            <h3>${data.overviewTitle}</h3>
                            ${data.overviewParagraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
                        </div>
                        <div class="panel">
                            <h3>${data.indicationsTitle}</h3>
                            ${data.indicationsParagraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
                            <ul class="page-list" style="margin-top: 1rem;">
                                ${data.indicationsList.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="panel">
                            <h3>${data.processTitle}</h3>
                            ${data.processParagraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
                        </div>
                    </div>
                    <aside class="sidebar-card" data-reveal="right">
                        <div class="stack">
                            <div class="small-caps">${data.sidebarTitle}</div>
                            <p>${data.sidebarText}</p>
                            <ul class="page-list">
                                ${data.sidebarItems.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                            ${renderSidebarLinks(data.sidebarLinks)}
                        </div>
                    </aside>
                </div>
            </section>
            <section class="section surface-section">
                <div class="container">
                    <div class="section-intro centered" data-reveal>
                        <div class="eyebrow">Treatment Detail</div>
                        <h2>${data.cardsTitle}</h2>
                    </div>
                    <div class="feature-grid">
                        ${data.cards.map(card => `
                            <div class="feature-card" data-reveal>
                                <h4>${card.title}</h4>
                                <p>${card.text}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="section-intro centered" data-reveal style="margin-top: 3.5rem;">
                        <div class="eyebrow">Questions Patients Ask</div>
                        <h2>${data.faqTitle}</h2>
                    </div>
                    <div class="faq-list" data-faq-group>
                        ${renderFaqItems(data.faqs)}
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container cta-band" data-reveal>
                    <div class="cta-grid">
                        <div class="stack">
                            <div class="eyebrow" style="color: var(--color-copper);">${data.ctaEyebrow}</div>
                            <h2 style="color: var(--color-text-inverse);">${data.ctaTitle}</h2>
                            <p style="color: rgba(249, 247, 242, 0.78);">${data.ctaText}</p>
                        </div>
                        <div class="stack">
                            <a class="button" href="${data.ctaPrimaryHref}">${data.ctaPrimaryLabel}</a>
                            <a class="button-outline" href="${data.ctaSecondaryHref}">${data.ctaSecondaryLabel}</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    function enhanceTreatmentPage() {
        const path = normalizePath(window.location.pathname);
        const data = enhancedTreatmentPages[path];
        const main = document.querySelector('main');
        const hero = main ? main.querySelector('.page-hero') : null;

        if (!data || !main || !hero || main.dataset.enhancedTreatmentPath === path) {
            return;
        }

        Array.from(main.children).forEach(section => {
            if (section !== hero) {
                section.remove();
            }
        });

        main.insertAdjacentHTML('beforeend', renderEnhancedTreatmentPage(data));
        main.dataset.enhancedTreatmentPath = path;
    }

    function initPageHeroImages() {
        const imageMap = {
            '/': '/images/web-1600/DOK-Website-23.jpeg',
            '/treatments/': '/images/web-1600/DOK-Website-1.jpeg',
            '/general-dentistry/': '/images/web-1600/DOK-Website-3.jpeg',
            '/cosmetic-dentistry/': '/images/web-1600/DOK-Website-10.jpeg',
            '/porcelain-veneers/': '/images/web-1600/DOK-Website-16.jpeg',
            '/zoom-teeth-whitening/': '/images/web-1600/DOK-Website-41.jpeg',
            '/dental-crowns/': '/images/web-1600/DOK-Website-42.jpeg',
            '/dental-bridges/': '/images/web-1600/DOK-Website-44.jpeg',
            '/invisalign/': '/images/web-1600/DOK-Website-57.jpeg',
            '/braces/': '/images/web-1600/DOK-Website-56.jpeg',
            '/clearcorrect/': '/images/web-1600/DOK-Website-58.jpeg',
            '/tru-line/': '/images/web-1600/DOK-Website-62.jpeg',
            '/dental-implants/': '/images/web-1600/DOK-Website-48.jpeg',
            '/all-on-4-implants/': '/images/web-1600/DOK-Website-49.jpeg',
            '/bone-grafts/': '/images/web-1600/DOK-Website-50.jpeg',
            '/sinus-lifts/': '/images/web-1600/DOK-Website-51.jpeg',
            '/guided-bone-tissue-regeneration/': '/images/web-1600/DOK-Website-52.jpeg',
            '/emergency-dental-appointments/': '/images/web-1600/DOK-Website-33.jpeg',
            '/sleep-dentistry/': '/images/web-1600/DOK-Website-34.jpeg',
            '/sedation/': '/images/web-1600/DOK-Website-35.jpeg',
            '/about/': '/images/web-1600/DOK-Website-36.jpeg',
            '/about/our-team-2/': '/images/web-1600/DOK-Website-36.jpeg',
            '/about/our-neutral-bay-dental-clinic/': '/images/web-1600/DOK-Website-63.jpeg',
            '/contact/': '/images/web-1600/DOK-Website-64.jpeg',
            '/offers/': '/images/web-1600/DOK-Website-55.jpeg',
            '/forms/': '/images/web-1600/DOK-Website-65.jpeg',
            '/dental-hygienists/': '/images/web-1600/DOK-Website-22.jpeg',
            '/oral-health/': '/images/web-1600/DOK-Website-8.jpeg',
            '/tooth-coloured-fillings/': '/images/web-1600/DOK-Website-9.jpeg',
            '/root-canals-endodontics/': '/images/web-1600/DOK-Website-46.jpeg',
            '/tooth-extractions/': '/images/web-1600/DOK-Website-47.jpeg',
            '/wisdom-teeth-removal/': '/images/web-1600/DOK-Website-6.jpeg',
            '/periodontal-gum-care/': '/images/web-1600/DOK-Website-20.jpeg'
        };

        const path = normalizePath(window.location.pathname);
        const hero = document.querySelector('.page-hero');
        const image = imageMap[path] || '/images/web-1600/DOK-Website-1.jpeg';

        if (hero) {
            hero.style.setProperty('--page-hero-image', `url('${image}')`);
        }
    }

    function initReveal() {
        if (state.observer) {
            state.observer.disconnect();
        }

        state.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    state.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('[data-reveal]').forEach(node => {
            state.observer.observe(node);
        });
    }

    function initActiveNav() {
        const path = window.location.pathname.replace(/index\.html$/, '') || '/';
        document.querySelectorAll('[data-nav-match]').forEach(link => {
            const match = link.getAttribute('data-nav-match');
            const isMatch = match === '/'
                ? path === '/'
                : path === match || path.startsWith(`${match}/`);
            link.classList.toggle('active', isMatch);
            const parent = link.closest('.nav-item-dropdown');
            if (isMatch && parent) {
                parent.classList.add('active');
            }
        });
    }

    function setYear() {
        document.querySelectorAll('[data-current-year]').forEach(node => {
            node.textContent = new Date().getFullYear();
        });
    }

    function init() {
        enhanceTreatmentPage();
        initPageHeroImages();
        initHeaderState();
        initMobileMenu();
        initFaqs();
        initReveal();
        initActiveNav();
        setYear();
    }

    function boot() {
        ensureConfig().finally(init);
    }

    document.addEventListener('DOMContentLoaded', boot);
    document.addEventListener('site:shell-ready', boot);
})();
