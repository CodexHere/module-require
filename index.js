console.log('This is the index file, every 3 seconds a module will reload');

setInterval(() => {
    const moduleCacheName = require.resolve('./myModule.js');
    delete require.cache[moduleCacheName];

    const module = require('./myModule.js');

    module.exec();
}, 3000);