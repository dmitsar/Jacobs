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

    describe('Скрин', function () {
        element = "";
        it('Просмотр видео', async () => {
            await Page.sleep(1000)
            await Page.navigate('/#/objects/2714112/tv/view/6311043/REPEATABLE')
            await Page.wait('body > div > ui-view > div > div.app-content-wrap.flex-block.flex-wrap.flex-vertical > div.app-workspace.ng-scope > ui-view > div > ui-view > ui-view > div.new-content-wrap.flex-vertical.action-buttons-in-new-content-wrap.ng-scope > div.object-tv-bottom-block.flex > div.object-tv-right-col.flex-block.flex-wrap.flex-vertical.ng-scope > ui-view > div.office-playlists-info-wrap-inner.ng-scope.on-object-tv-screen > div.office-playlists-bottom-info-block.playlist-screen-padding.abs-wrap.float-wrap.on-object-tv-screen > div.templates-grid.float-wrap > div.template-in-grid.abs-wrap.float-wrap.ng-scope > div.template-in-grid-preview-wrap.abs-wrap.float-wrap > img:nth-child(1)');
            await Page.sleep(1000)
            element = await Page.dollar('body > div > ui-view > div > div.app-content-wrap.flex-block.flex-wrap.flex-vertical > div.app-workspace.ng-scope > ui-view > div > ui-view > ui-view > div.new-content-wrap.flex-vertical.action-buttons-in-new-content-wrap.ng-scope > div.object-tv-bottom-block.flex > div.object-tv-right-col.flex-block.flex-wrap.flex-vertical.ng-scope > ui-view > div.office-playlists-info-wrap-inner.ng-scope.on-object-tv-screen > div.office-playlists-bottom-info-block.playlist-screen-padding.abs-wrap.float-wrap.on-object-tv-screen > div.templates-grid.float-wrap > div.template-in-grid.abs-wrap.float-wrap.ng-scope > div.template-in-grid-preview-wrap.abs-wrap.float-wrap > img:nth-child(1)');
        })
        it('Сохранение скрина', async () => {
            await Page.sleep(5000)
            await element.screenshot({path: 'jacobs.png'});
        })
        })
    })