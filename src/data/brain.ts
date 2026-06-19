// ── COLOURS ────────────────────────────────────────────────────
export const COLORS: Record<string, string> = {
  root:              '#f0f0f0',
  economics:         '#2a9d8f',
  innovation:        '#e9a238',
  industrial_policy: '#e06050',
  europe:            '#d44f8c',
  capital:           '#4580e6',
  energy:            '#3daf6e',
  ai:                '#8f5ce8',
  math:              '#9099a8',
};

// ── DOMAIN ORDER (clockwise from 12h) ──────────────────────────
export const L1_ANGLES: Record<string, number> = {
  economics:         -Math.PI / 2,
  innovation:        -Math.PI / 2 + Math.PI / 4,
  industrial_policy:  0,
  europe:             Math.PI / 4,
  capital:            Math.PI / 2,
  energy:             3 * Math.PI / 4,
  ai:                 Math.PI,
  math:              -3 * Math.PI / 4,
};

// ── NODES ───────────────────────────────────────────────────────
export type NodeType = 'root' | 'l1' | 'l2';
export interface NodeDef {
  id: string;
  label: string;
  type: NodeType;
  parent?: string;
}

export const NODE_DEFS: NodeDef[] = [
  { id: 'root',             label: 'Transformation\nTechnologique',  type: 'root' },
  // L1 — ordered clockwise from 12h
  { id: 'economics',        label: 'Économie',                        type: 'l1' },
  { id: 'innovation',       label: 'Innovation',                      type: 'l1' },
  { id: 'industrial_policy',label: 'Politique\nIndustrielle',         type: 'l1' },
  { id: 'europe',           label: 'Europe',                          type: 'l1' },
  { id: 'capital',          label: 'Marchés de\nCapitaux',            type: 'l1' },
  { id: 'energy',           label: 'Transition\nÉnergétique',         type: 'l1' },
  { id: 'ai',               label: 'Intelligence\nArtificielle',      type: 'l1' },
  { id: 'math',             label: 'Mathématiques',                   type: 'l1' },
  // Économie L2
  { id: 'growth',           label: 'Théorie de\nla croissance',       type: 'l2', parent: 'economics' },
  { id: 'dev_econ',         label: 'Économie du\ndéveloppement',      type: 'l2', parent: 'economics' },
  { id: 'institutions',     label: 'Institutions',                    type: 'l2', parent: 'economics' },
  { id: 'ind_org',          label: 'Org. industrielle',               type: 'l2', parent: 'economics' },
  { id: 'causal_econ',      label: 'Économétrie\ncausale',            type: 'l2', parent: 'economics' },
  // Innovation L2
  { id: 'schumpeter',       label: 'Schumpeter',                      type: 'l2', parent: 'innovation' },
  { id: 'creative',         label: 'Destruction\ncréatrice',          type: 'l2', parent: 'innovation' },
  { id: 'gpt_tech',         label: 'Technologies\ngénérales',         type: 'l2', parent: 'innovation' },
  { id: 'diffusion',        label: 'Diffusion',                       type: 'l2', parent: 'innovation' },
  { id: 'perez_cycles',     label: 'Cycles de\nPerez',                type: 'l2', parent: 'innovation' },
  // Politique industrielle L2
  { id: 'state_cap',        label: 'Capacité\nétatique',              type: 'l2', parent: 'industrial_policy' },
  { id: 'regulation',       label: 'Régulation',                      type: 'l2', parent: 'industrial_policy' },
  { id: 'strat_sectors',    label: 'Industries\nstratégiques',        type: 'l2', parent: 'industrial_policy' },
  { id: 'pub_procurement',  label: 'Commande\npublique',              type: 'l2', parent: 'industrial_policy' },
  // Europe L2
  { id: 'competitiveness',  label: 'Compétitivité',                   type: 'l2', parent: 'europe' },
  { id: 'sovereignty',      label: 'Souveraineté',                    type: 'l2', parent: 'europe' },
  { id: 'innov_gap',        label: 'Retard\nd\'innovation',           type: 'l2', parent: 'europe' },
  { id: 'eu_union',         label: 'Union des\nmarchés',              type: 'l2', parent: 'europe' },
  // Marchés de capitaux L2
  { id: 'vc',               label: 'Capital-risque',                  type: 'l2', parent: 'capital' },
  { id: 'pe',               label: 'Private Equity',                  type: 'l2', parent: 'capital' },
  { id: 'eu_markets',       label: 'Marchés\neuropéens',              type: 'l2', parent: 'capital' },
  { id: 'long_savings',     label: 'Épargne longue',                  type: 'l2', parent: 'capital' },
  // Transition énergétique L2
  { id: 'carbon',           label: 'Capture CO₂',                    type: 'l2', parent: 'energy' },
  { id: 'elec_markets',     label: 'Marchés\nélectriques',            type: 'l2', parent: 'energy' },
  { id: 'nuclear',          label: 'Nucléaire',                       type: 'l2', parent: 'energy' },
  { id: 'green_finance',    label: 'Finance verte',                   type: 'l2', parent: 'energy' },
  // IA L2
  { id: 'dl',               label: 'Deep Learning',                   type: 'l2', parent: 'ai' },
  { id: 'foundation',       label: 'Modèles de\nfondation',           type: 'l2', parent: 'ai' },
  { id: 'ai_econ',          label: 'IA & Économie',                   type: 'l2', parent: 'ai' },
  { id: 'ai_health',        label: 'IA & Santé',                      type: 'l2', parent: 'ai' },
  { id: 'ai_agents',        label: 'Agents',                          type: 'l2', parent: 'ai' },
  // Mathématiques L2
  { id: 'probability',      label: 'Probabilités',                    type: 'l2', parent: 'math' },
  { id: 'optimization',     label: 'Optimisation',                    type: 'l2', parent: 'math' },
  { id: 'geometry',         label: 'Géométrie',                       type: 'l2', parent: 'math' },
  { id: 'stochastic',       label: 'Processus\nstochastiques',        type: 'l2', parent: 'math' },
];

// ── LINKS ───────────────────────────────────────────────────────
export interface LinkDef {
  source: string;
  target: string;
  dist?: number;
  w?: number;
  label?: string;
}

export const LINK_DEFS: LinkDef[] = [
  // root → L1
  ...(['economics','innovation','industrial_policy','europe','capital','energy','ai','math'] as string[])
    .map(t => ({ source: 'root', target: t, dist: 190 })),
  // L1 → L2
  ...NODE_DEFS.filter(n => n.parent).map(n => ({ source: n.parent!, target: n.id, dist: 85 })),
  // Liens transversaux originaux
  { source: 'math',             target: 'ai',               dist: 230, w: 0.14, label: 'Outils formels de l\'apprentissage profond' },
  { source: 'math',             target: 'economics',        dist: 245, w: 0.14, label: 'Formalisation mathématique de la théorie économique' },
  { source: 'ai',               target: 'innovation',       dist: 230, w: 0.14, label: 'L\'IA comme cas paradigmatique de rupture technologique' },
  { source: 'capital',          target: 'europe',           dist: 230, w: 0.13, label: 'Sous-développement des marchés de capitaux en Europe' },
  { source: 'energy',           target: 'industrial_policy',dist: 225, w: 0.13, label: 'La décarbonisation requiert une politique industrielle assumée' },
  { source: 'economics',        target: 'innovation',       dist: 225, w: 0.13, label: 'Croissance endogène (Romer, Aghion)' },
  // Nouveaux liens transversaux
  { source: 'ai',               target: 'capital',          dist: 230, w: 0.12, label: 'Financement des modèles de fondation : capex calcul, VC, dette infra' },
  { source: 'ai',               target: 'industrial_policy',dist: 225, w: 0.12, label: 'AI Act, commande publique IA, contrôle export puces' },
  { source: 'ai',               target: 'europe',           dist: 230, w: 0.12, label: 'Où et comment l\'Europe peut exister face aux géants américains et chinois' },
  { source: 'ai',               target: 'economics',        dist: 225, w: 0.12, label: 'Effet de l\'IA sur productivité, travail et concentration des rentes' },
  { source: 'innovation',       target: 'industrial_policy',dist: 220, w: 0.12, label: 'La politique industrielle cible ses interventions via une théorie de l\'innovation' },
  { source: 'innovation',       target: 'capital',          dist: 225, w: 0.12, label: 'Chaque révolution technologique est portée par une révolution financière (Perez)' },
  { source: 'innovation',       target: 'europe',           dist: 220, w: 0.12, label: 'Le retard d\'innovation européen comme problème central (Draghi)' },
  { source: 'industrial_policy',target: 'europe',           dist: 215, w: 0.12, label: 'IPCEI, aides d\'État, politique industrielle commune' },
  { source: 'industrial_policy',target: 'capital',          dist: 220, w: 0.12, label: 'Articulation BPI, EIC, NextGenEU et marchés privés' },
  { source: 'energy',           target: 'capital',          dist: 220, w: 0.12, label: 'Finance verte, project finance actifs bas-carbone' },
  { source: 'energy',           target: 'europe',           dist: 220, w: 0.12, label: 'Green Deal et tension avec la compétitivité industrielle' },
  { source: 'energy',           target: 'innovation',       dist: 220, w: 0.12, label: 'CCS, électrolyse H₂, SMR : la transition est une trajectoire d\'innovation' },
  { source: 'economics',        target: 'europe',           dist: 220, w: 0.12, label: 'Économie publique européenne, théorie de l\'union monétaire optimale' },
  { source: 'economics',        target: 'industrial_policy',dist: 218, w: 0.12, label: 'Fondements : externalités, biens publics, market failures' },
  { source: 'economics',        target: 'capital',          dist: 222, w: 0.12, label: 'Finance et croissance, intermédiation, allocation du capital' },
  { source: 'economics',        target: 'energy',           dist: 218, w: 0.12, label: 'Économie du climat, prix du carbone, débats Stern-Nordhaus' },
  { source: 'math',             target: 'capital',          dist: 245, w: 0.11, label: 'Probabilités et stochastique pour la finance quantitative' },
  // Liens entre sous-thèmes
  { source: 'dev_econ',         target: 'ai_health',        dist: 185, w: 0.1,  label: 'IA appliquée aux systèmes de santé dans les pays en développement' },
  { source: 'eu_markets',       target: 'innov_gap',        dist: 165, w: 0.1,  label: 'Sans marchés de capitaux profonds, pas de scale-up européen' },
  { source: 'state_cap',        target: 'sovereignty',      dist: 185, w: 0.1,  label: 'La capacité d\'agir de l\'État conditionne la souveraineté' },
  { source: 'carbon',           target: 'strat_sectors',    dist: 185, w: 0.1,  label: 'Décarbonisation des industries lourdes comme enjeu de souveraineté' },
  { source: 'nuclear',          target: 'sovereignty',      dist: 185, w: 0.1,  label: 'La filière nucléaire française comme politique industrielle souveraine' },
];

// ── CONTENT ─────────────────────────────────────────────────────
export interface ContentEntry {
  title: string;
  body?: string;
  books?: string[];
  thinkers?: string[];
  research?: string[];
  questions?: string[];
  subthemes?: string[];
  experience?: string;
}

export const CONTENT: Record<string, ContentEntry> = {
  root: {
    title: 'Transformation Technologique',
    body: 'Le fil conducteur de tous mes intérêts intellectuels. Comment les sociétés inventent, adoptent et déploient les nouvelles technologies. Quelles institutions facilitent ou freinent ce processus. Comment l\'épargne et les marchés de capitaux financent ces transformations sur des horizons de quinze, vingt, trente ans. Pourquoi certaines économies prennent de l\'avance et d\'autres décrochent.',
    questions: [
      'Quelles sont les conditions institutionnelles d\'un saut technologique ?',
      'Pourquoi l\'écart se creuse entre les économies qui financent l\'innovation et celles qui la subissent ?',
      'Comment articuler puissance publique et marchés privés dans une trajectoire de souveraineté technologique ?',
    ],
  },
  economics: {
    title: 'Économie',
    body: 'Théories expliquant la croissance, les institutions et le développement. Fondement analytique de toute analyse rigoureuse des transformations technologiques et de l\'action publique.',
    books: [
      'Daron Acemoglu et James Robinson, Why Nations Fail',
      'Daron Acemoglu et James Robinson, The Narrow Corridor',
      'Robert Solow, A Contribution to the Theory of Economic Growth (1956)',
      'Paul Romer, Endogenous Technological Change (1990)',
      'Esther Duflo et Abhijit Banerjee, Poor Economics',
      'Esther Duflo et Abhijit Banerjee, Good Economics for Hard Times',
      'Friedrich Hayek, The Use of Knowledge in Society',
      'Kenneth Arrow, The Economic Implications of Learning by Doing',
      'Jean Tirole, Économie du bien commun',
    ],
    thinkers: ['Daron Acemoglu', 'Esther Duflo', 'Paul Romer', 'Robert Solow', 'Friedrich Hayek', 'Kenneth Arrow', 'Jean Tirole', 'Philippe Aghion', 'Olivier Blanchard', 'Thomas Philippon'],
    questions: [
      'Quelles institutions permettent une croissance soutenue par l\'innovation ?',
      'Comment mesurer rigoureusement l\'effet d\'une politique publique sur la trajectoire technologique d\'une économie ?',
      'Pourquoi la productivité européenne décroche-t-elle depuis vingt ans ?',
    ],
    experience: 'Stage de recherche au MIT, Département d\'économie, sous la direction d\'Esther Duflo.',
  },
  innovation: {
    title: 'Innovation',
    body: 'Comment les nouvelles technologies sont inventées, améliorées et diffusées au sein des économies. Couche analytique qui articule économie, politique industrielle, marchés de capitaux et IA.',
    books: [
      'Joseph Schumpeter, Capitalism, Socialism and Democracy',
      'Joseph Schumpeter, The Theory of Economic Development',
      'Joel Mokyr, The Lever of Riches',
      'Joel Mokyr, A Culture of Growth',
      'Everett Rogers, Diffusion of Innovations',
      'Carlota Perez, Technological Revolutions and Financial Capital',
      'Philippe Aghion, Céline Antonin et Simon Bunel, Le pouvoir de la destruction créatrice',
    ],
    thinkers: ['Joseph Schumpeter', 'Joel Mokyr', 'Carlota Perez', 'Philippe Aghion', 'Nathan Rosenberg', 'Brian Arthur', 'Tim Bresnahan'],
    questions: [
      'Pourquoi certaines innovations se diffusent en cinq ans et d\'autres mettent cinquante ans à transformer la productivité ?',
      'Quel est le bon véhicule de financement pour chaque phase du cycle d\'innovation ?',
      'La destruction créatrice est-elle encore opérante dans des économies où les rentes captent les surplus ?',
    ],
  },
  industrial_policy: {
    title: 'Politique Industrielle',
    body: 'Comment les États accélèrent ou freinent le changement technologique par la régulation, la commande publique, les investissements stratégiques et la protection des industries naissantes.',
    books: [
      'Mariana Mazzucato, The Entrepreneurial State',
      'Mariana Mazzucato, Mission Economy',
      'Dani Rodrik, Industrial Policy for the Twenty-First Century',
      'Ha-Joon Chang, Kicking Away the Ladder',
      'Alexander Hamilton, Report on Manufactures (1791)',
      'Friedrich List, The National System of Political Economy',
      'Réda Cherif et Fuad Hasanov, The Return of the Policy That Shall Not Be Named (FMI, 2019)',
      'Rapport Draghi, The Future of European Competitiveness (2024)',
      'Rapport Letta, Much More Than a Market (2024)',
    ],
    thinkers: ['Mariana Mazzucato', 'Dani Rodrik', 'Alexander Hamilton', 'Friedrich List', 'Ha-Joon Chang', 'Jean Tirole', 'Réda Cherif', 'Mario Draghi', 'Enrico Letta'],
    questions: [
      'Comment éviter les écueils classiques (capture, picking losers, lock-in) tout en assumant des paris technologiques ?',
      'Quel mix entre régulation, commande publique et participation au capital ?',
      'L\'Europe peut-elle mener une politique industrielle sans harmoniser sa politique budgétaire ?',
    ],
  },
  europe: {
    title: 'Europe',
    body: 'L\'avenir économique et stratégique de l\'Europe dans un monde façonné par l\'IA, la transition énergétique et la fragmentation géopolitique. Moins un domaine académique qu\'un terrain de synthèse.',
    books: [
      'Rapport Draghi, The Future of European Competitiveness (2024)',
      'Rapport Letta, Much More Than a Market (2024)',
      'Luuk van Middelaar, The Passage to Europe',
      'Luuk van Middelaar, Le réveil géopolitique de l\'Europe',
      'Jean Pisani-Ferry, L\'aventure européenne',
      'Anu Bradford, The Brussels Effect',
      'Anu Bradford, Digital Empires',
    ],
    thinkers: ['Mario Draghi', 'Enrico Letta', 'Jean Pisani-Ferry', 'Thomas Philippon', 'Nicolas Véron', 'Anu Bradford', 'Luuk van Middelaar', 'Patrick Artus'],
    questions: [
      'L\'Europe peut-elle rester technologiquement pertinente face aux États-Unis et à la Chine ?',
      'Comment construire des marchés de capitaux européens profonds et liquides ?',
      'Quelle politique industrielle commune pour une Europe souveraine ?',
      'Comment financer la transition IA en s\'appuyant sur l\'épargne européenne ?',
      'L\'effet Bruxelles est-il encore opérant à l\'ère des modèles de fondation ?',
    ],
  },
  capital: {
    title: 'Marchés de Capitaux',
    body: 'Comment les sociétés mobilisent l\'épargne pour financer l\'innovation et les investissements de long terme. Question centrale pour comprendre pourquoi certaines économies déploient leurs ruptures technologiques et d\'autres non.',
    books: [
      'Charles Kindleberger, Manias, Panics and Crashes',
      'Peter Bernstein, Against the Gods',
      'Mariana Mazzucato, Mission Economy',
      'Sebastian Mallaby, The Power Law',
      'Hyman Minsky, Stabilizing an Unstable Economy',
      'Rapport Draghi, The Future of European Competitiveness (2024)',
    ],
    thinkers: ['Charles Kindleberger', 'Hyman Minsky', 'Robert Shiller', 'Mariana Mazzucato', 'Thomas Philippon', 'Patrick Artus', 'Nicolas Véron'],
    questions: [
      'Pourquoi l\'Europe peine-t-elle à financer l\'innovation à grande échelle ?',
      'Quelles structures institutionnelles soutiennent une prise de risque à long terme ?',
      'Comment construire un marché unique des capitaux européen profond et liquide ?',
      'Comment rediriger l\'épargne européenne, abondante mais conservatrice, vers le risque technologique ?',
    ],
    experience: 'Stage en fusions-acquisitions, Centerview Partners.',
  },
  energy: {
    title: 'Transition Énergétique',
    body: 'L\'économie et le financement de la décarbonisation. Viabilité économique des technologies bas-carbone, structures de financement public et privé, politiques publiques.',
    books: [
      'David MacKay, Sustainable Energy Without the Hot Air',
      'Vaclav Smil, Energy and Civilization',
      'Vaclav Smil, How the World Really Works',
      'Jean-Marc Jancovici et Christophe Blain, Le monde sans fin',
      'Dieter Helm, Net Zero',
    ],
    thinkers: ['Vaclav Smil', 'David MacKay', 'Dieter Helm', 'Jean Tirole', 'William Nordhaus'],
    questions: [
      'Quelle structure de financement pour le nouveau nucléaire en Europe ?',
      'Comment articuler signal-prix carbone et politique industrielle verte ?',
      'Les CCUS sont-ils économiquement viables sans subvention pérenne ?',
    ],
    research: ['Économie des technologies de capture du carbone, TotalEnergies (2024)'],
  },
  ai: {
    title: 'Intelligence Artificielle',
    body: 'Fondements techniques de l\'IA moderne et ses conséquences économiques, organisationnelles et géopolitiques. À la fois objet technique et objet stratégique.',
    books: [
      'Ian Goodfellow, Yoshua Bengio et Aaron Courville, Deep Learning',
      'Christopher Bishop, Pattern Recognition and Machine Learning',
      'Ajay Agrawal, Joshua Gans et Avi Goldfarb, Prediction Machines',
      'Ajay Agrawal, Joshua Gans et Avi Goldfarb, Power and Prediction',
      'Erik Brynjolfsson et Andrew McAfee, The Second Machine Age',
      'Kai-Fu Lee, AI Superpowers',
    ],
    thinkers: ['Yoshua Bengio', 'Geoffrey Hinton', 'Yann LeCun', 'Erik Brynjolfsson', 'Daron Acemoglu', 'Anu Bradford'],
    questions: [
      'Comment se distribue la valeur entre couches infrastructure, modèle et application ?',
      'Quel est le levier productif de l\'IA pour une économie comme la France ?',
      'L\'IA générative est-elle une general purpose technology au sens de Bresnahan et Trajtenberg ?',
    ],
    research: [
      'Bornes de généralisation dépendantes des données (INRIA Sierra)',
      'Complexité géométrique des réseaux de neurones',
      'Stabilité des algorithmes d\'apprentissage',
    ],
  },
  math: {
    title: 'Mathématiques',
    body: 'Le langage formel sous-jacent aux modèles, aux algorithmes et à l\'analyse économique rigoureuse. Préalable technique à tout le reste.',
    books: [
      'Walter Rudin, Real and Complex Analysis',
      'Patrick Billingsley, Probability and Measure',
      'Stephen Boyd et Lieven Vandenberghe, Convex Optimization',
      'Michel Talagrand, Upper and Lower Bounds for Stochastic Processes',
    ],
    thinkers: ['Henri Poincaré', 'Andrei Kolmogorov', 'John von Neumann', 'Cédric Villani', 'Michel Talagrand'],
  },
};

export const THOUGHTS = [
  'Les révolutions technologiques échouent moins par manque d\'idées que par défaut d\'institutions capables de les absorber.',
  'Le problème de l\'Europe n\'est peut-être pas l\'innovation, mais son financement.',
  'L\'IA modifie non seulement la productivité, mais aussi l\'organisation des entreprises et la structure des marchés.',
  'La capture du carbone est autant un problème de financement qu\'un problème technique.',
  'La destruction créatrice n\'est pas automatique : elle requiert des institutions qui l\'acceptent et des marchés qui la financent.',
  'La souveraineté technologique européenne passera par la construction de marchés de capitaux profonds et liquides.',
  'Comprendre Schumpeter et Rawls est une condition nécessaire pour penser la politique économique contemporaine.',
  'Carlota Perez : chaque révolution technologique est portée par une révolution financière qui la précède.',
  'Sans scale-up européen, l\'Europe restera un continent de recherche qui exporte ses champions vers la Silicon Valley.',
];

export const TL_YEAR: Record<string, number> = {
  math:             2021,
  economics:        2023,
  energy:           2024,
  capital:          2025,
  ai:               2025,
  innovation:       2026,
  industrial_policy:2026,
  europe:           2026,
};

export const TL_LABEL: Record<number, string> = {
  2021: 'Mathématiques',
  2022: 'Mathématiques',
  2023: '+ Économie',
  2024: '+ Transition Énergétique',
  2025: '+ IA · Marchés de Capitaux',
  2026: '+ Innovation · Europe · Politique industrielle',
  2027: 'Vue complète',
};
