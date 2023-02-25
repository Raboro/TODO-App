// eslint-disable-next-line no-unused-vars
async function callApi(call) {
    return await fetch(call.url, {
        method: call.method,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: call.body
    });
}
