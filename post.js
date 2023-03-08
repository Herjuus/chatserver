res = fetch('http://localhost:8888/messages', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": "jacob",
        "message": "taper^^"
    })
})