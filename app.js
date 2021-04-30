let container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
  container.innerHTML = `
<div class="content-box">
<h1>${e.key == " " ? "space" : e.key}</h1>
    <div class="four-box">
        <div style="--i:1" class="eventkey"e>
            <small>event.key</small>
            <h3>${e.key == " " ? "space" : e.key}</h3>
        </div>
        <div style="--i:2" class="eventloc">
        <small>e.which</small>
        <h3>${e.which}</h3>
        </div>
        <div style="--i:3" class="eventwhi">

            <small>event.location</small>
            <h3>${e.code}</h3>
        </div>
        <div style="--i:4" class="eventcod">
            <small>key code </small>
            <h3>${e.keyCode}</h3>
        </div>
    </div>
</div>

`;
});
