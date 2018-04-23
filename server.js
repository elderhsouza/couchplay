const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', function(req, res) {
    const host = 'https://store.playstation.com';
    // const listingUrl = `${host}/en-us/grid/STORE-MSF77008-PS3FULLGAMES/1?gameContentType=games&platform=ps4`;

    const listingPageUrls = [`${host}/en-us/grid/STORE-MSF77008-PS3FULLGAMES/1?gameContentType=games&platform=ps4`];
    const gameUrls = [];

    request(listingUrl, function (error, response, html) {
        if (!error) {
            const $ = cheerio.load(html);
            const nextListingUrl
        }
    });
});

app.listen('8081')
console.log('Magic happens on port 8081');

exports = module.exports = app;
