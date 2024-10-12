(() => while((new Date()).getMinutes() != YOUUNLOCKMINUTE) await new Promise(r=>setTimeout(r, 10));
for(let i = 0;i<5;i++) {
  await fetch("yoururl", {method: "POST"})
  await new Promise(r => setTimeout(r, 100))
}
})()
