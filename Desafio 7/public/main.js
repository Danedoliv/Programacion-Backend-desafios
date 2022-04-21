const socket = io.connect();

const date = new Date();

function render(data) {
    
    const html = data.map(elem => {
        return(`<div style="color: blue"><strong>${elem.email}</strong> <em style="color: brown">[${date.toLocaleString()}]:</em>
            <em style="color: green" style="font-family: italic">${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });

function addMessage(e) {
    const message = {
        email: document.getElementById('email').value,
        text: document.getElementById('text').value
    };
    socket.emit('new-message', message);
    return false;
}