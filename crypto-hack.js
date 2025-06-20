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
        const b = [...document.querySelectorAll("button")].find(x => x.style.border === "3px solid rgb(0, 232, 0)");
        if (b) b.click();
      }, 100);
      alert("Auto Guess actief!");
    },
    "Choice ESP": () => {
      setInterval(() => {
        document.querySelectorAll("button").forEach(x => {
          if (x.style.border === "3px solid rgb(0, 232, 0)") x.style.backgroundColor = "#0f0";
        });
      }, 100);
      alert("Choice ESP actief!");
    },
    "Password ESP": () => {
      document.querySelectorAll("span").forEach(x => {
        if (x.innerText.length === 4) {
          x.style.color = "red";
          x.style.fontWeight = "bold";
        }
      });
      alert("Password ESP actief!");
    },
    "Set Crypto": () => {
      const amt = prompt("Hoeveel crypto instellen?");
      try {
        const nodes = Object.values(document.querySelector("#app")._reactRootContainer._internalRoot.current.child.memoizedState);
        const st = nodes.find(x => x.stateNode && x.stateNode.setState).stateNode;
        st.setState({ crypto: parseInt(amt) });
        alert("Crypto ingesteld: " + amt);
      } catch {
        alert("Fout bij instellen van crypto.");
      }
    },
    "Set Password": () => {
      const pwd = prompt("Nieuw wachtwoord?");
      document.querySelectorAll("span").forEach(x => {
        if (x.innerText.length === 4) x.innerText = pwd;
      });
      alert("Wachtwoord visueel aangepast.");
    },
    "Steal Players Crypto": () => {
      try {
        const nodes = Object.values(document.querySelector("#app")._reactRootContainer._internalRoot.current.child.memoizedState);
        const st = nodes.find(x => x.stateNode && x.stateNode.setState).stateNode;
        st.setState({ crypto: 9999 });
        alert("Crypto gestolen (visueel)!");
      } catch {
        alert("Fout bij stelen van crypto.");
      }
    },
    "Remove Hack": () => {
      location.reload();
    }
  };

  // Maak het menu
  const div = document.createElement("div");
  Object.assign(div.style, {
    position: "fixed", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff", border: "2px solid #000",
    padding: "20px", borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    fontFamily: "Arial, sans-serif",
    zIndex: 9999
  });

  const h = document.createElement("h3");
  h.textContent = "Crypto Hack Menu";
  h.style.textAlign = "center";
  div.appendChild(h);

  Object.entries(hacks).forEach(([name, fn]) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    Object.assign(btn.style, {
      display: "block", width: "100%", margin: "5px 0",
      padding: "8px", cursor: "pointer"
    });
    btn.onclick = () => {
      fn();
      document.body.removeChild(div);
    };
    div.appendChild(btn);
  });

  document.body.appendChild(div);
})();
