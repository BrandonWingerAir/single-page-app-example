import AbstractHead from './HeadAbstract.js';

export default class extends AbstractHead {
    constructor() {
        super();
        this.setTitle("Blog");
    }

    async getHtml() {
        return `
            <h1>Blog</h1>
            <p>Coming soon!</p>
        `;
    }
}