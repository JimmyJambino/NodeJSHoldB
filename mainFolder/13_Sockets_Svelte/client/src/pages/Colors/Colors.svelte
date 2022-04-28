<script>
    import io from 'socket.io-client' // why was this smarter?
    let lastPersonToChangeColor
    const socket = io()

    socket.on("changeTheColor", ({ data, username }) => {
        // In svelte don't access DOM with document... do it the svelte way with reactive components
        document.body.style.backgroundColor = data
        lastPersonToChangeColor = username
    })

    function changeColor(event) {
        socket.emit("colorChanged", {data: event.target.value})
    }


</script>
Last person to change the color: {lastPersonToChangeColor}
<input id="color-picker" type="color" on:change={changeColor} >