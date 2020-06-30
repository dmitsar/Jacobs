const puppeteer = require('puppeteer');

class JacobsPage {
    options = {
        login: 'ivanno',
        password: 'buit02052017',
        // width: 1920,
        // height: 1080,
        // scaleFactor: 1,
        width: 1440,
        height: 900,
        scaleFactor: 1,
        headless: false
    }

    async init() {
        this.url = 'http://avesign.com';
        this.browser = await puppeteer.launch({
            headless: this.options.headless,
            args: ['--no-sandbox', '--disable-setuid-sandbox',
                `--window-size=${this.options.width * this.options.scaleFactor},${this.options.width * this.options.scaleFactor}`
            ],
            devtools: this.options.devtools
        });
        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: this.options.width, height: this.options.height })
        await this.page.goto(this.url);
    }

    async login() {
        await this.page.click('#login-form > div:nth-child(1) > input');        
        await this.page.type('#login-form > div:nth-child(1) > input', this.options.login, { delay: 20 });
        await this.page.click('#login-form > div:nth-child(2) > input');        
        await this.page.type('#login-form > div:nth-child(2) > input', this.options.password, { delay: 20 });
        await this.page.click('div.ki-modal-window-buttons-wrap.flex-block.flex-wrap > a');
        await this.sleep(2000)
    }

    async wait(selector)
    {
        return this.page.waitForSelector(selector)
    }

    async dollar(selector)
    {
        return this.page.$(selector)
    }

    async hasText (text) {
        const regexp = new RegExp(text, 'gi')
        const found = (await this.page.content()).match(regexp)
        return Array.isArray(found)
    }

    async click(selector) {
        return this.page.click(selector)
    }

    close () {
        this.browser.close()
    }

    async getText(selector) {
        return await this.page.evaluate(({ selector }) => {
            return document.querySelector(selector).innerText
        }, { selector });
    }

    async getHTML(selector) {
        return await this.page.evaluate(({ selector }) => {
            return document.querySelector(selector).innerHTML
        }, { selector });
    }

    async getInputValue(selector) {
        return await this.page.evaluate(({ selector }) => {
            return document.querySelector(selector).value
        }, { selector });
    }

    async replaceInputValue(selector, value, delay = 20) {
        await this.page.evaluate(({ selector }) => {
            document.querySelector(selector).value = ''
        }, { selector })
        await this.page.type(selector, value, { delay });
    }

    async replaceInputValueImmediately(selector, value) {
        await this.page.evaluate(({ selector, value }) => {
            document.querySelector(selector).value = value
        }, { selector, value })
    }

    sleep(ms) {
        return this.page.waitFor(ms);
    }

    navigate(url) {
        if (url.startsWith('/')) {
            url = `${this.url}${url}`
        }
        return this.page.goto(url);
    }
}

module.exports = JacobsPage