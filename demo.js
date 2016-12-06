'use strict'

const switchPrompt = require('.')

const prompt = (...args) => new Promise((yay, nay) => {
	switchPrompt(...args)
	.on('submit', yay)
	.on('abort', nay)
})

Promise.resolve()
.then(() => prompt('Agree with the terms & conditions?', 'yes', 'no', true))
.then(() => prompt('Dark Mode', 'on', 'off', false))
.then(() => prompt('Beta Program', 'active', 'inactive', false))
.then(() => prompt('Launch nuclear missiles?', 'Yes', 'Remind me in 5m', true))
