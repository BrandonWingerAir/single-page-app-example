import AbstractHead from './HeadAbstract.js';

export default class extends AbstractHead {
    constructor(params) {
        super(params);
        this.setTitle("Blog Post " + this.params.id);
    }

    async getHtml() {
        return `
            <h1>SQL vs. NoSQL (Pros & Cons)</h1>
            <p>You are viewing post ${this.params.id}.</p>
        `;
    }
}