#!/usr/bin/env node

(async () => {
  for (;;) {
    process.stdout.write('Thank you!')
    await new Promise(resolve => setTimeout(resolve, 100))
  }
})()
