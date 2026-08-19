/**
 * HelloInsights — Technology Sub-site Configuration
 * 
 * 矩阵化复用：修改 SITE_CONFIG 中的字段即可适配不同子站。
 */
var SITE_CONFIG = {
    siteName: 'Technology',
    fullSiteName: 'HelloInsights Technology',
    tagline: 'Technology Insights for the Digital World',
    aboutText: 'Explore breakthroughs in AI, software, cybersecurity, gadgets, developer tools and the future of technology.',
    fallbackImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    jsonFile: 'technology-index.json',
    fullArticleJson: 'articles-technology.json',
    gaId: 'G-TECH-XXXXXXX',
    // SEO
    titleSuffix: 'Technology Insights on AI, Software, Cybersecurity & Gadgets | HelloInsights',
    metaDesc: 'Explore the latest in AI, software, cybersecurity, gadgets, developer tools and emerging technology from HelloInsights.',
    // Hero
    heroIntro: '<p>Technology is reshaping every industry, every workflow, and every daily decision. HelloInsights Technology delivers <strong>editorial-grade coverage of artificial intelligence, software, cybersecurity, gadgets, developer tools, and the technologies shaping tomorrow</strong>.</p><p>We go beyond press releases: our editors analyze what matters, who it affects, and where it\'s heading.</p>',
    // 6 Technology subcategories
    subcategories: [
        { id: 'ai', name: 'Artificial Intelligence', desc: 'AI models, products, industry trends and the future of intelligent systems.' },
        { id: 'software', name: 'Software & Apps', desc: 'Cloud platforms, productivity tools, digital products and the software that powers modern work.' },
        { id: 'cybersecurity', name: 'Cybersecurity', desc: 'Security threats, privacy, data protection and the evolving cybersecurity landscape.' },
        { id: 'gadgets', name: 'Gadgets', desc: 'Consumer devices, IoT, wearables and the hardware redefining personal technology.' },
        { id: 'developer', name: 'Developer Technology', desc: 'Edge computing, 5G, infrastructure and the tools developers rely on.' },
        { id: 'future-tech', name: 'Future Technology', desc: 'Quantum computing, blockchain, robotics, sustainable tech and emerging innovation.' }
    ],
    // URL mappings
    categoryUrlMap: {
        'ai': 'index.html?cat=ai',
        'software': 'index.html?cat=software',
        'cybersecurity': 'index.html?cat=cybersecurity',
        'gadgets': 'index.html?cat=gadgets',
        'developer': 'index.html?cat=developer',
        'future-tech': 'index.html?cat=future-tech'
    }
};
