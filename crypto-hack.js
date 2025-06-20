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
        const btn = [...document.querySelectorAll("button")].find(b => b.style.border === "3px solid rgb(0, 232, 0)");
        if (btn) btn.click();
      }, 100);
      alert("Auto Guess actief!");
    },
    "Choice ESP": () => {
      setInterval(() => {
        document.querySelectorAll("button").forEach(b => {
          if (b.style.border === "3px solid rgb(0, 232, 0)") b.style.backgroundColor = "#00ff00";
        });
      }, 100);
      alert("Choice ESP actief!");
    },
    "Password ESP": () => {
      document.querySelectorAll("span").forEach(s => {
        if (s.innerText.length === 4) {
          s.style.color = "red";
          s.style.fontWeight = "bold";
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
        alert("Crypto gestolen (visueel)!");
      } catch {
        alert("Fout bij aanpassen van crypto.");
      }
    }
  };

  const menu = document.createElement('div');
  Object.assign(menu.style, {
    position: 'fixed', top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff', border: '2px solid #000',
    borderRadius: '10px', padding: '20px',
    zIndex: 9999, boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    fontFamily: 'Arial, sans-serif'
  });

  const title = document.createElement('h3');
  title.textContent = 'Crypto Hack Menu';
  title.style.textAlign = 'center';
  menu.appendChild(title);

  Object.entries(hacks).forEach(([name, fn]) => {
    const btn = document.createElement('button');
    btn.textContent = name;
    Object.assign(btn.style, {
      display: 'block', margin: '5px auto',
      padding: '8px 12px', width: '100%', fontSize: '14px',
      cursor: 'pointer'
    });
    btn.onclick = () => { fn(); document.body.removeChild(menu); };
    menu.appendChild(btn);
  });

  const close = document.createElement('button');
  close.textContent = 'Sluiten';
  close.style.marginTop = '10px';
  close.onclick = () => document.body.removeChild(menu);
  menu.appendChild(close);

  document.body.appendChild(menu);
})();
