import AbstractHead from './HeadAbstract.js';

export default class extends AbstractHead {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Home</h1>
            <p>JavaScript SPA Example.</p>
            <p>
                <a href="/posts/1" data-link>Check out recent posts</a>
            </p>
        `;
    }
}