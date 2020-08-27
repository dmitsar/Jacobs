const JacobsPage = require('../page')
const { expect } = require('chai').use(require('chai-as-promised'))
//const { getRandomString } = require('../helpers')

describe('Якобс', function () {
    let Page
    this.timeout(50000);

    before(async () => {
        Page = new JacobsPage()
        await Page.init()
        await Page.login()
    });

    after(async () => {
         Page.close()
    })

    describe('Перезагрузка видео', function () {
        it('Нажатие кнопки', async () => {
            await Page.sleep(1000)
            await Page.navigate('/#/objects/2714112/tv/view/12869090/REPEATABLE')
            await Page.wait('body > div > ui-view > div > div.app-content-wrap.flex-block.flex-wrap.flex-vertical > div.app-workspace.ng-scope > ui-view > div > ui-view > ui-view > div.new-content-wrap.flex-vertical.action-buttons-in-new-content-wrap.ng-scope > div.object-tv-bottom-block.flex > div.object-tv-left-col.flex-wrap.flex-vertical.flex > div.flex-table-tr.no-highlight.no-select.ng-scope.active-force-highlight > div.flex-table-td.fixed-width.object-tv-left-col-power.text-center > div > div > ki-new-tv-power-icon > span > span.new-tv-power-indicator.on');
            await Page.click('body > div > ui-view > div > div.app-content-wrap.flex-block.flex-wrap.flex-vertical > div.app-workspace.ng-scope > ui-view > div > ui-view > ui-view > div.new-content-wrap.flex-vertical.action-buttons-in-new-content-wrap.ng-scope > div.object-tv-bottom-block.flex > div.object-tv-left-col.flex-wrap.flex-vertical.flex > div.flex-table-tr.no-highlight.no-select.ng-scope.active-force-highlight > div.flex-table-td.fixed-width.object-tv-left-col-power.text-center > div > div > ki-new-tv-power-icon > span > span.new-tv-power-indicator.on');
            await Page.sleep(1000)
            await Page.click('body > div > ui-view > div > div.app-content-wrap.flex-block.flex-wrap.flex-vertical > div.app-workspace.ng-scope > ui-view > div > ui-view > ui-view > div.new-content-wrap.flex-vertical.action-buttons-in-new-content-wrap.ng-scope > div.object-tv-bottom-block.flex > div.object-tv-left-col.flex-wrap.flex-vertical.flex > div.flex-table-tr.no-highlight.no-select.ng-scope.active-force-highlight > div.flex-table-td.fixed-width.object-tv-left-col-power.text-center > div > div > ki-new-tv-power-icon > ul > li:nth-child(4) > a');
            await Page.sleep(1000)
        })
        })
    })