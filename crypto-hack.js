(function(){
  const hacks = {
    "Always Triple": () => {
      Object.defineProperty(Object.prototype, 'valueOf', {
        value: function () {
          if (typeof this === "number") return 3;
          return this;
        }
      });
      alert("Always Triple geactiveerd!");
    },
    "Auto Guess": () => {
      setInterval(() => {
        const correct = [...document.querySelectorAll("button")].find(btn => btn.style.border === "3px solid rgb(0, 232, 0)");
        if (correct) correct.click();
      }, 100);
      alert("Auto Guess actief!");
    },
    "Choice ESP": () => {
      setInterval(() => {
        document.querySelectorAll("button").forEach(btn => {
          if (btn.style.border === "3px solid rgb(0, 232, 0)") {
            btn.style.backgroundColor = "#00ff00";
          }
        });
      }, 100);
      alert("Choice ESP actief!");
    },
    "Password ESP": () => {
      document.querySelectorAll("span").forEach(span => {
        if (span.innerText.length === 4) {
          span.style.color = "red";
          span.style.fontWeight = "bold";
        }
      });
      alert("Password ESP geactiveerd!");
    },
    "Set Crypto": () => {
      const amount = prompt("Hoeveel crypto?");
      try {
        const state = Object.values(document.querySelector("#app")._reactRootContainer._internalRoot.current.child.memoizedState)[1].stateNode;
        state.setState({ crypto: parseInt(amount) });
        alert("Crypto ingesteld!");
      } catch {
        alert("Fout bij instellen van crypto.");
      }
    },
    "Steal Players Crypto": () => {
      try {
        const state = Object.values(document.querySelector("#app")._reactRootContainer._internalRoot.current.child.memoizedState)[1].stateNode;
        state.setState({ crypto: 9999 });
        alert("Crypto gestolen (alleen visueel)!");
      } catch {
        alert("Fout bij aanpassen van crypto.");
      }
    }
  };

  // UI maken
  const menu = document.createElement('div');
  menu.style.position = 'fixed';
  menu.style.top = '50%';
  menu.style.left = '50%';
  menu.style.transform = 'translate(-50%, -50%)';
  menu.style.background = 'white';
  menu.style.border = '2px solid black';
  menu.style.borderRadius = '10px';
  menu.style.padding = '20px';
  menu.style.zIndex = 9999;
  menu.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  menu.style.fontFamily = 'Arial, sans-serif';

  const title = document.createElement('h3');
  title.textContent = 'Crypto Hack Menu';
  title.style.marginTop = '0';
  title.style.textAlign = 'center';
  menu.appendChild(title);

  Object.entries(hacks).forEach(([name, fn]) => {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.style.display = 'block';
    btn.style.margin = '5px auto';
    btn.style.padding = '8px 12px';
    btn.style.width = '100%';
    btn.style.fontSize = '14px';
    btn.onclick = () => {
      fn();
      document.body.removeChild(menu);
    };
    menu.appendChild(btn);
  });

  const close = document.createElement('button');
  close.textContent = 'Sluiten';
  close.style.marginTop = '10px';
  close.style.background = '#ccc';
  close.onclick = () => document.body.removeChild(menu);
  menu.appendChild(close);

  document.body.appendChild(menu);
})();
