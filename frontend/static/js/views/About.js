import AbstractHead from './HeadAbstract.js';

export default class extends AbstractHead {
    constructor() {
        super();
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1>About</h1>
            <p>Built following a tutorial by "dcode" on YouTube.</p>
        `;
    }
}