res = fetch('http://20.238.117.226:8888/messages', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": "Henrik",
        "message": "legende"
    })
})