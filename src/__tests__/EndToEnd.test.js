import puppeteer from "puppeteer";

describe('show/hide an event details', () => {

    let browser;
    let page;
    jest.setTimeout(50000);
    beforeAll(async () => {

        browser = await puppeteer.launch();
        // browser = await puppeteer.launch({
        //     headless: false,
        //     slowMo: 250,
        //     ignoreDefaultArgs: ['--disable-extensions']
        //     //ignores default setting that causes timeout errors
        // });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/meet');
        await page.waitForSelector('.event');
    });


    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .extra-details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .show-details');
        const eventDetails = await page.$('.event .extra-details');
        expect(eventDetails).toBeDefined();
    })

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .hide-details');
        const eventDetails = await page.$('.event .extra-details');
        expect(eventDetails).toBeNull();
    })

    afterAll(() => {
        browser.close();
    });

});


describe('Filter events by city', () => {

    test('When user hasnt searched for a city, show upcoming events from all cities.', async () => {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();
        await page.goto('http://localhost:300/meet');

        await page.waitForSelector('.CitySearch');

    })

})
