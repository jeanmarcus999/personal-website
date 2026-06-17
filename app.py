"""
Prototype Streamlit — site personnel Jean
Visual mockup before building the Astro static site.
"""

import streamlit as st

st.set_page_config(
    page_title="Jean — Site personnel",
    page_icon="✦",
    layout="centered",
    initial_sidebar_state="collapsed",
)

# ── Design system ─────────────────────────────────────────────────────────────
ACCENT = "#1F3A5F"
BACKGROUND = "#FBFAF7"
TEXT_PRIMARY = "#1A1A1A"
TEXT_SECONDARY = "#5C5C5C"
BORDER = "#E8E5DD"

CSS = f"""
<style>
/* ---------- Reset & globals ---------- */
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&family=Inter:wght@400;500&display=swap');

html, body, [data-testid="stAppViewContainer"] {{
    background-color: {BACKGROUND} !important;
}}

[data-testid="stAppViewContainer"] > .main {{
    background-color: {BACKGROUND};
}}

[data-testid="stHeader"] {{
    background-color: {BACKGROUND};
    border-bottom: 1px solid {BORDER};
}}

/* Hide Streamlit chrome */
#MainMenu, footer, [data-testid="stToolbar"] {{ display: none; }}

/* ---------- Typography ---------- */
html {{ font-size: 18px; }}

body, .stMarkdown p, .stMarkdown li {{
    font-family: 'Source Serif 4', Georgia, serif;
    color: {TEXT_PRIMARY};
    line-height: 1.7;
}}

h1 {{
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 2.5rem !important;
    font-weight: 600;
    line-height: 1.15 !important;
    color: {TEXT_PRIMARY} !important;
    margin-bottom: 0.4rem !important;
}}

h2 {{
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1.6rem !important;
    font-weight: 500;
    color: {TEXT_PRIMARY} !important;
    margin-top: 3rem !important;
    margin-bottom: 1rem !important;
    padding-top: 2rem !important;
    border-top: 1px solid {BORDER};
}}

h3 {{
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1.25rem !important;
    font-weight: 500;
    color: {TEXT_PRIMARY} !important;
}}

/* ---------- Navigation ---------- */
.nav-bar {{
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 0.9rem;
    display: flex;
    gap: 2rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid {BORDER};
    margin-bottom: 3.5rem;
    align-items: baseline;
}}

.nav-brand {{
    font-weight: 500;
    color: {TEXT_PRIMARY};
    margin-right: auto;
    text-decoration: none;
}}

.nav-link {{
    color: {TEXT_SECONDARY};
    text-decoration: underline;
    cursor: pointer;
}}

.nav-link.active {{
    color: {ACCENT};
}}

/* ---------- Layout ---------- */
.content-wrapper {{
    max-width: 68ch;
    margin: 0 auto;
    padding: 0 0 6rem 0;
}}

/* ---------- Subtitle / meta ---------- */
.subtitle {{
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 1rem;
    color: {TEXT_SECONDARY};
    margin-bottom: 2.5rem;
    line-height: 1.5;
}}

/* ---------- Post card ---------- */
.post-card {{
    border-top: 1px solid {BORDER};
    padding: 1.5rem 0;
}}

.post-card:last-child {{
    border-bottom: 1px solid {BORDER};
}}

.post-date {{
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 0.85rem;
    color: {TEXT_SECONDARY};
    margin-bottom: 0.35rem;
}}

.post-title {{
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: {ACCENT};
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 0.3rem;
}}

.post-desc {{
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 0.95rem;
    color: {TEXT_SECONDARY};
    line-height: 1.6;
    margin: 0;
}}

/* ---------- Parcours entries ---------- */
.parcours-entry {{
    display: grid;
    grid-template-columns: 8rem 1fr;
    gap: 1rem;
    padding: 1.25rem 0;
    border-top: 1px solid {BORDER};
}}

.parcours-years {{
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 0.85rem;
    color: {TEXT_SECONDARY};
    padding-top: 0.2rem;
    white-space: nowrap;
}}

.parcours-title {{
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1.05rem;
    font-weight: 500;
    color: {TEXT_PRIMARY};
    margin-bottom: 0.2rem;
}}

.parcours-desc {{
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 0.9rem;
    color: {TEXT_SECONDARY};
    line-height: 1.55;
    margin: 0;
}}

/* ---------- Contact ---------- */
.contact-line {{
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 0.95rem;
    color: {TEXT_SECONDARY};
    margin: 0.5rem 0;
}}

.contact-line a {{
    color: {ACCENT};
    text-decoration: underline;
}}

/* ---------- Footer ---------- */
.site-footer {{
    border-top: 1px solid {BORDER};
    margin-top: 5rem;
    padding-top: 1.5rem;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 0.8rem;
    color: {TEXT_SECONDARY};
}}

/* ---------- Button ---------- */
.pdf-btn {{
    display: inline-block;
    margin-top: 2rem;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 0.85rem;
    color: {ACCENT};
    text-decoration: underline;
    border: 1px solid {BORDER};
    padding: 0.5rem 1rem;
    cursor: pointer;
}}

/* ---------- Post body ---------- */
.post-body {{
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 1rem;
    line-height: 1.75;
    color: {TEXT_PRIMARY};
    max-width: 68ch;
}}

.post-header-meta {{
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 0.85rem;
    color: {TEXT_SECONDARY};
    margin-bottom: 2rem;
    border-bottom: 1px solid {BORDER};
    padding-bottom: 1rem;
}}

.back-link {{
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 0.85rem;
    color: {ACCENT};
    text-decoration: underline;
    cursor: pointer;
    margin-top: 3rem;
    display: inline-block;
}}
</style>
"""

st.markdown(CSS, unsafe_allow_html=True)

# ── State ─────────────────────────────────────────────────────────────────────
if "page" not in st.session_state:
    st.session_state.page = "accueil"
if "post" not in st.session_state:
    st.session_state.post = None

# ── Content data ──────────────────────────────────────────────────────────────
POSTS = [
    {
        "slug": "financer-deploiement-ia-europe",
        "title": "Financer le déploiement de l'IA en Europe : conditions de capital",
        "date": "12 juin 2025",
        "description": (
            "Les modèles fondationnaux sont construits aux Etats-Unis et en Chine. "
            "Ce qui reste ouvert en Europe, c'est la question du déploiement : "
            "quelles structures de capital permettent d'y tenir le rythme ?"
        ),
        "read_time": "6 min de lecture",
        "body": """
Le débat européen sur l'IA se concentre souvent sur la régulation et la souveraineté des données.
Ce cadre est utile, mais il laisse dans l'ombre une question plus directement opérationnelle :
par quels mécanismes de financement les entreprises européennes peuvent-elles déployer
des systèmes d'IA à l'échelle, sans dépendre de conditions de marché dictées depuis l'extérieur ?

**L'asymétrie de capital comme contrainte structurelle**

Le coût d'inférence a baissé de façon spectaculaire en deux ans. Mais le coût d'intégration,
lui, reste élevé : adaptation des systèmes internes, recrutement spécialisé, maintenance des
pipelines de données. Ces dépenses s'étalent sur deux à cinq ans, ce qui exige des structures
de financement patientes. Or la majorité du capital-risque européen reste orienté vers des
horizons de sortie courts, inadaptés à cette temporalité.

**Deux modèles en tension**

On peut distinguer grossièrement deux approches. La première consiste à faire financer le
déploiement par les revenus d'exploitation existants, en mobilisant les fonds propres d'un
grand groupe. La seconde fait appel à des véhicules dédiés, proches du modèle infrastructure,
avec des engagements de long terme et des rendements modestes mais stables.

La première approche concentre le risque sur des acteurs déjà établis. La seconde ouvre le
financement du déploiement IA à des investisseurs institutionnels (assureurs, caisses de retraite)
qui manquent aujourd'hui d'instruments adaptés à ce segment.

**Ce qui manque**

Les instruments manquants ne sont pas des subventions supplémentaires. Ce sont des produits
financiers standardisés permettant d'adosser des investissements en IA à des flux de revenus
futurs prévisibles. Quelques initiatives existent en Allemagne et aux Pays-Bas. Rien de comparable
en France à ce stade.

Ce billet est une introduction à une série plus longue sur ce sujet. Les billets suivants
examineront les modèles de financement par secteur (industrie, santé, défense) et les
conditions réglementaires qui les contraignent.
""",
    },
    {
        "slug": "epargne-europeenne-transition-ia",
        "title": "L'epargne europeenne comme levier de la transition IA",
        "date": "28 mai 2025",
        "description": (
            "L'Europe dispose d'un stock d'epargne parmi les plus eleves au monde, "
            "mais ses mecanismes d'allocation ne le dirigent pas vers le financement "
            "des infrastructures technologiques. Ce n'est pas une fatalite."
        ),
        "read_time": "5 min de lecture",
        "body": """
L'Union europeenne represente environ 25 % du PIB mondial mais une fraction marginale
des investissements en IA a l'echelle globale. Cette disproportion n'est pas due a une absence
de ressources financieres : le taux d'epargne des menages europeens est structurellement plus
eleve que celui des menages americains. Elle tient a des mecanismes d'allocation inadaptes.

**Un stock d'epargne mal oriente**

La majeure partie de l'epargne europeenne est placee en produits a faible risque et faible
rendement : livrets reglementaires, fonds en euros, obligations souveraines. Ces vehicules
financent peu l'economie productive au sens contemporain du terme, et encore moins les
infrastructures technologiques.

Aux Etats-Unis, les fonds de pension jouent un role direct dans le financement du venture
capital et des infrastructures numeriques. En Europe, les contraintes reglementaires (Solvabilite II
pour les assureurs, regles prudentielles pour les caisses de retraite) limitent fortement cette
possibilite.

**Trois leviers possibles**

Premierement, adapter les ratios prudentiels pour permettre aux investisseurs institutionnels
d'allouer une fraction de leurs actifs a des fonds d'infrastructure IA. Deuxiemement, creer
des enveloppes fiscales dediees au financement de la transition numerique, sur le modele
du Plan d'Epargne en Actions mais orientes vers le capital-risque europeen. Troisiemement,
developper des instruments de titrisation permettant de transformer des flux de revenus issus
du deploiement IA en produits de dette accessibles aux investisseurs institutionnels.

Aucun de ces trois leviers n'est techniquement nouveau. Leur mise en oeuvre bute sur des
questions de coordination politique et de volonte reglementaire plus que sur des obstacles
de marche.

**Le role de la BEI**

La Banque europeenne d'investissement constitue un point de passage oblige dans ce schema.
Elle dispose du mandat et de la capacite de bilan pour jouer un role de premier pertes dans
des structures de financement hybrides. Des discussions sont en cours, mais leur traduction
operationnelle reste lente au regard de l'urgence du deploiement.
""",
    },
]

POSTS_BY_SLUG = {p["slug"]: p for p in POSTS}

# ── Navigation ────────────────────────────────────────────────────────────────
def nav(current: str) -> None:
    pages = [
        ("accueil", "Accueil"),
        ("parcours", "Parcours"),
        ("ecrits", "Ecrits"),
        ("contact", "Contact"),
    ]
    links_html = '<nav class="nav-bar">'
    links_html += '<span class="nav-brand">Jean Marcus</span>'
    for key, label in pages:
        active = 'active' if current == key else ''
        links_html += f'<span class="nav-link {active}" id="nav-{key}">{label}</span>'
    links_html += "</nav>"
    st.markdown(links_html, unsafe_allow_html=True)

    cols = st.columns(4)
    labels = ["Accueil", "Parcours", "Ecrits", "Contact"]
    keys = ["accueil", "parcours", "ecrits", "contact"]
    for col, key, label in zip(cols, keys, labels):
        with col:
            if st.button(label, key=f"btn_{key}", use_container_width=True):
                st.session_state.page = key
                st.session_state.post = None
                st.rerun()


# ── Pages ──────────────────────────────────────────────────────────────────────
def page_accueil() -> None:
    nav("accueil")
    st.markdown('<div class="content-wrapper">', unsafe_allow_html=True)

    st.markdown("# Jean Marcus")
    st.markdown(
        '<p class="subtitle">Financement et deploiement des technologies strategiques en Europe.</p>',
        unsafe_allow_html=True,
    )

    st.markdown(
        """
Eleve a l'Ecole Polytechnique, en internat de recherche en economie au MIT sous la direction
d'Esther Duflo, entrant au Corps des Mines en septembre 2026. Mon travail porte sur les
conditions de financement et les structures de capital qui permettent aux entreprises europeennes
de deployer des systemes d'intelligence artificielle a l'echelle, dans un contexte ou la
dynamique d'investissement mondiale est largement dictee depuis les Etats-Unis.

Je m'interesse en particulier aux mecanismes par lesquels l'epargne europeenne et les
investisseurs institutionnels peuvent etre orientes vers le financement de cette transition,
ainsi qu'aux contraintes reglementaires qui en definissent le perimetre.
        """,
        unsafe_allow_html=True,
    )

    st.markdown("## Ecrits recents")

    for post in POSTS[:3]:
        st.markdown(
            f"""
<div class="post-card">
    <div class="post-date">{post['date']}</div>
    <div class="post-title" onclick="">{post['title']}</div>
    <p class="post-desc">{post['description']}</p>
</div>
""",
            unsafe_allow_html=True,
        )
        if st.button(f"Lire &rarr;", key=f"home_post_{post['slug']}"):
            st.session_state.page = "post"
            st.session_state.post = post["slug"]
            st.rerun()

    col_all, _ = st.columns([1, 3])
    with col_all:
        if st.button("Tous les ecrits", key="home_all_ecrits"):
            st.session_state.page = "ecrits"
            st.rerun()

    st.markdown("## Contact")
    st.markdown(
        f"""
<div class="contact-line">
    Email : <a href="mailto:marcusjean501@gmail.com">marcusjean501@gmail.com</a>
</div>
<div class="contact-line">
    LinkedIn : <a href="#">linkedin.com/in/jean-marcus</a>
</div>
""",
        unsafe_allow_html=True,
    )

    st.markdown(
        '<div class="site-footer">Jean Marcus &mdash; 2025</div>',
        unsafe_allow_html=True,
    )
    st.markdown("</div>", unsafe_allow_html=True)


def page_parcours() -> None:
    nav("parcours")
    st.markdown('<div class="content-wrapper">', unsafe_allow_html=True)

    st.markdown("# Parcours")

    # Formation
    st.markdown("## Formation")
    entries_formation = [
        {
            "years": "2022 -- 2026",
            "title": "Ecole Polytechnique",
            "institution": "Cycle ingenieur, Paris-Saclay",
            "desc": "Formation scientifique et technologique de haut niveau. Majeure en economie et sciences des donnees.",
        },
        {
            "years": "2025 -- 2026",
            "title": "MIT, Department of Economics",
            "institution": "Internat de recherche, Cambridge MA",
            "desc": "Recherche en economie du developpement sous la direction d'Esther Duflo. Focus sur les effets de l'investissement technologique dans les economies emergentes.",
        },
        {
            "years": "Sept. 2026",
            "title": "Corps des Mines",
            "institution": "Mines Paris, PSL",
            "desc": "Entree prevue au corps des Mines. Formation a l'interface de l'ingenierie, de l'administration et de l'economie industrielle.",
        },
    ]

    for e in entries_formation:
        st.markdown(
            f"""
<div class="parcours-entry">
    <div class="parcours-years">{e['years']}</div>
    <div>
        <div class="parcours-title">{e['title']}</div>
        <div class="parcours-desc">{e['institution']}<br>{e['desc']}</div>
    </div>
</div>
""",
            unsafe_allow_html=True,
        )

    # Recherche et experiences
    st.markdown("## Recherche et experiences")
    st.markdown(
        '<p class="subtitle" style="margin-top:0">A completer.</p>',
        unsafe_allow_html=True,
    )

    # Distinctions
    st.markdown("## Distinctions")
    st.markdown(
        '<p class="subtitle" style="margin-top:0">A completer.</p>',
        unsafe_allow_html=True,
    )

    st.markdown(
        '<div style="margin-top:3rem"><span class="pdf-btn">Telecharger le CV en PDF</span></div>',
        unsafe_allow_html=True,
    )

    st.markdown(
        '<div class="site-footer">Jean Marcus &mdash; 2025</div>',
        unsafe_allow_html=True,
    )
    st.markdown("</div>", unsafe_allow_html=True)


def page_ecrits() -> None:
    nav("ecrits")
    st.markdown('<div class="content-wrapper">', unsafe_allow_html=True)

    st.markdown("# Ecrits")

    for post in POSTS:
        st.markdown(
            f"""
<div class="post-card">
    <div class="post-date">{post['date']}</div>
    <div class="post-title">{post['title']}</div>
    <p class="post-desc">{post['description']}</p>
</div>
""",
            unsafe_allow_html=True,
        )
        if st.button("Lire", key=f"ecrits_{post['slug']}"):
            st.session_state.page = "post"
            st.session_state.post = post["slug"]
            st.rerun()

    st.markdown(
        '<div class="site-footer">Jean Marcus &mdash; 2025</div>',
        unsafe_allow_html=True,
    )
    st.markdown("</div>", unsafe_allow_html=True)


def page_post(slug: str) -> None:
    post = POSTS_BY_SLUG.get(slug)
    if not post:
        st.error("Billet introuvable.")
        return

    nav("ecrits")
    st.markdown('<div class="content-wrapper">', unsafe_allow_html=True)

    st.markdown(f"# {post['title']}")
    st.markdown(
        f'<div class="post-header-meta">{post["date"]} &nbsp;&middot;&nbsp; {post["read_time"]}</div>',
        unsafe_allow_html=True,
    )

    st.markdown(post["body"])

    if st.button("← Retour aux ecrits", key="back_to_ecrits"):
        st.session_state.page = "ecrits"
        st.session_state.post = None
        st.rerun()

    st.markdown(
        '<div class="site-footer">Jean Marcus &mdash; 2025</div>',
        unsafe_allow_html=True,
    )
    st.markdown("</div>", unsafe_allow_html=True)


def page_contact() -> None:
    nav("contact")
    st.markdown('<div class="content-wrapper">', unsafe_allow_html=True)

    st.markdown("# Contact")
    st.markdown(
        """
Je suis ouvert a des echanges sur le financement du deploiement de l'IA en Europe,
les structures de capital adaptees aux investissements de long terme en technologie,
et les interactions entre politique reglementaire europeenne et dynamiques d'investissement.
        """
    )

    st.markdown(
        f"""
<div style="margin-top:2rem">
    <div class="contact-line">Email : <a href="mailto:marcusjean501@gmail.com">marcusjean501@gmail.com</a></div>
    <div class="contact-line">LinkedIn : <a href="#">linkedin.com/in/jean-marcus</a></div>
    <div class="contact-line">X : <a href="#">@jeanmarcus</a></div>
</div>
""",
        unsafe_allow_html=True,
    )

    st.markdown(
        '<div class="site-footer">Jean Marcus &mdash; 2025</div>',
        unsafe_allow_html=True,
    )
    st.markdown("</div>", unsafe_allow_html=True)


# ── Router ────────────────────────────────────────────────────────────────────
page = st.session_state.page
post_slug = st.session_state.post

if page == "post" and post_slug:
    page_post(post_slug)
elif page == "parcours":
    page_parcours()
elif page == "ecrits":
    page_ecrits()
elif page == "contact":
    page_contact()
else:
    page_accueil()
