document.addEventListener("DOMContentLoaded", function () {
    const logoutLink = document.getElementById("logout-link");
    let loggedInUser
    let messenger
    // Check if the user is logged in


    function logout(event) {
        event.preventDefault();
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('loggedInUser');
        fetch(`/api/v1/user/logout`, {
          method: 'delete',
        }).then(() => (window.location.href = '/'));
      }
      class Messenger {
        socket;
        constructor(){
            this.configurewebsocket();
        }
        configurewebsocket(){
            const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
            this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
            this.socket.onopen = (event) => {
              this.displayMsg('system', 'user', 'connected');
              messenger.broadcastEvent(loggedInUser, 'Logged In', Date.now());
            };
            this.socket.onclose = (event) => {
              this.displayMsg('system', 'user', 'disconnected');
            };
            this.socket.onmessage = async (event) => {
              const msg = JSON.parse(await event.data.text());
                this.displayMsg('user', msg.from, `logged in`);
            };
        }  
        displayMsg(cls, from, msg) {
            const chatText = document.querySelector('#message-container');
            chatText.innerHTML =
              `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
        }
        broadcastEvent(from, type, value) {
            const event = {
              from: from,
              type: type,
              value: value,
            };
            this.socket.send(JSON.stringify(event));
        }
      }

      const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
      if (isLoggedIn) {
          // Get the logged-in username from sessionStorage
          loggedInUser = sessionStorage.getItem("loggedInUser");
          messenger = new Messenger();
      } else {
          // If not logged in, redirect to the login page
          window.location.href = "index.html";
      }
});


    