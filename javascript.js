window.addEventListener("load", function load(event) {
  document.getElementById("activate").onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        "code": "function partition(arr, lo, hi) { var pivot = arr[hi].position; var i = lo; for (var j = lo; j < hi; j++) { if (arr[j].position < pivot) { if (i !== j) { var t = arr[j]; arr[j] = arr[i]; arr[i] = t; } i++; } } var t = arr[hi]; arr[hi] = arr[i]; arr[i] = t; return i; } function quicksort(arr, lo, hi) { if (lo < hi) { var p = partition(arr, lo, hi); quicksort(arr, lo, p - 1); quicksort(arr, p + 1, hi); } } var got = []; var n = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'p']; for (var j = 0; j < n.length; j++) { for (var i = 0; i < document.getElementsByTagName(n[j]).length; i++) { got.push({ type: n[j], content: document.getElementsByTagName(n[j])[i].innerText, position: document.getElementsByTagName(n[j])[i].offsetTop }); } } document.body.innerHTML = ''; quicksort(got, 0, got.length - 1); for (var i = 0; i < got.length; i++) { document.body.innerHTML += `<${got[i].type}>${got[i].content}</${got[i].type}><br>` }"
      });
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "body { padding: 25px !important; } * { background-color: rgb(255, 255, 255) !important; color: rgb(0, 0, 0) !important; background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) !important; font-family: Helvetica !important; }"
      });
    });
  };
});
