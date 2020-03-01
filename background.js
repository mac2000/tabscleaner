chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({ currentWindow: true }, tabs => {
    const remove = [];
    for (let x = 0; x < tabs.length; x++) {
      if (tabs[x].url.indexOf("https://www.google.com/search") === 0) {
        remove.push(tabs[x].id);
      } else {
        for (let y = x + 1; y < tabs.length; y++) {
          if (tabs[x].url === tabs[y].url) {
            remove.push(tabs[x].id);
            break;
          }
        }
      }
    }
    if (remove.length > 0 && confirm(remove.length + " tab(s) will be closed")) {
      chrome.tabs.remove(remove);
    }
  });
});

const filter = tabs => {
  tabs.filter();
};
