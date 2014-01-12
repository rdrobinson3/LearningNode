/**
 * Created by rrobinson on 1/12/14.
 */
process.stdin.resume();

process.stdin.on('data', function(chunk) {
    process.stdout.write('data: ' + chunk);
});
