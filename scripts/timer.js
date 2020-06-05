'use strict';

const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {

    console.log('Продолжительность', items.getEntries()[0].duration);
    performance.clearMarks();

});

obs.observe({ entryTypes: ['measure'] });

performance.measure('Start to Now');

performance.mark('start');

let timer_setTimeout = setTimeout((digit, str) => {

    console.log(`${digit} ${str}`);

    //performance.measure('Start to Now', 'start');

    performance.mark('Finish');
    performance.measure('Start to Finish', 'Start', 'Finish');

}, 2000, 100000, 'рублей');


/*let timer_setTimeout = setTimeout((digit, str) => {

    console.log(`${digit} ${str}`);

}, 1000, 100000, 'рублей');

let timer_setInterval = setInterval((digit, str) => {

    console.log(`${digit} ${str}`);

}, 2000, 1000, 'рублей');*/


