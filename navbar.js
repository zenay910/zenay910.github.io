const navbar = function () {
    return {
        open: false,
        entries: [
            { name: 'home', targetSection: '#home' },
            { name: 'about', targetSection: '#about' },
            { name: 'skills', targetSection: '#skills' },
            { name: 'experience', targetSection: '#experience' },
            { name: 'project', targetSection: '#project' },
            { name: 'contact', targetSection: '#contact' },
        ],
    };
};
window.navbar = navbar;

const skills = function () {
    return {
        languages: [
            {
                name: 'Java',
                image: './java.svg',
                description:
                    'Java is a general-purpose, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
            },
            {
                name: 'HTML',
                image: './goodHTML.svg',
                description: 'HTML is where we write the code for the web page',
            },
            {
                name: 'CSS',
                image: './CSS3_logo.svg',
                description: 'CSS is what you use to make things look pretty',
            },
            {
                name: 'JavaScript',
                image: './goodJS.svg',
                description: 'JavaScript is used to make things work',
            },
        ],
        loaded: false,
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/zenay910', { method: 'GET' });
            const stats = await res.json();
            const { data } = stats;
            const languagesWanted = ['Java', 'HTML', 'CSS', 'JavaScript'];
            const langStatsList = data.languages.filter(l => languagesWanted.indexOf(l.name) !== -1);
            for (let i = 0; i < langStatsList.length; i++) {
                const langStats = langStatsList[i];
                const targetLang = this.languages.find(l => l.name === langStats.name);
                targetLang.hours = langStats.hours;
                targetLang.decimal = langStats.decimal;
            }
            this.loaded = true;
        },
        progress(language) {
            const percentage = (language.decimal / 320) * 100;
            return percentage;
        },
    };
};
window.$skills = skills;

const experience = function () {
    return {
        entries: [
            {
                place: 'Ensign College',
                date: 'Sep 2022 - Present',
                description: `
                <p>
                   Student at Ensign College trying to learn Java and other things about software engineering.
                </p>
                `,
            },
        ],
    };
};

window.$experience = experience;
