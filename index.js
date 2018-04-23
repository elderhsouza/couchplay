const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash/fp');

const baseUrl = 'https://store.playstation.com';

const getGameLinks = (pageUrl) => {
    request(pageUrl, function (error, _, html) {
        if (error) return;

        const $ = cheerio.load(html);

        Array.from($('.grid-cell--game > .internal-app-link'))
            .map(node => node.attribs.href)
            .forEach(link => getGameDetails(`${baseUrl}${link}`));

        const nextPageUrl = $('.paginator-control__next').attr('href');
        if (nextPageUrl) getGameLinks(`${baseUrl}${nextPageUrl}`);
    });
};

const getGameDetails = (gameUrl) => {
    request(gameUrl, (error, _, html) => {
        if (error) return;

        const $ = cheerio.load(html);

        const title = $('.pdp__title').text();
        const isCoop = Boolean($('.pdp__description p').first().text().match(/\d-[234]\splayers?/g));

        if (isCoop) console.log(title);
    })
};

getGameLinks(`${baseUrl}/en-us/grid/STORE-MSF77008-PS3FULLGAMES/1?gameContentType=games&platform=ps4`);
