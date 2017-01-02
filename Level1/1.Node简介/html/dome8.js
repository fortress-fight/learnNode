process.stdout.write('chunk')

process.stdin.on('data', function   (chunk) {
    console.log(chunk);
})
