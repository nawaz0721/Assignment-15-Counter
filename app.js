let count = 0 ;
  const history = [];
  const even = [];
  const odd = [];

  function updateCounter() {
    const counterElement = document.getElementById('counter');
    const historyElement = document.getElementById('history');
    const evenElement = document.getElementById('even');
    const oddElement = document.getElementById('odd');

    counterElement.textContent = count < 10  ? "0" + count : count;

    historyElement.innerHTML = '<strong>History:</strong><br>' + history.join(' , ');
    historyElement.style.color = "grey";
    evenElement.innerHTML = '<strong>Even:</strong><br>' + even.join(' , ');
    evenElement.style.color = "Green";
    oddElement.innerHTML = '<strong>Odd:</strong><br>' + odd.join(' , ');
    oddElement.style.color = "Red";
  }

  function incrementCounter() {
    count++;
    history.push(count);

    if (count % 2 === 0) {
      even.push(count);
      
    } else {
      odd.push(count);
    }

    updateCounter();
  }

  function resetCounter() {
    count = 0;
    history.length = 0;
    even.length = 0;
    odd.length = 0;
    updateCounter();
  }

  updateCounter();