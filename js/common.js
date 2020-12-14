window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      var navBar = document.getElementsByClassName('navbar')[0];
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navBar.classList.add('nav-dark')
        // navBar.classList.add('w3-white')
      } else {
        navBar.classList.remove('nav-dark')
        // navBar.classList.remove('w3-white')
      }
    }

    var counter = document.getElementsByClassName('countdown')[0];
    var countDownDate = new Date(counter.getAttribute('data-count')).getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      counter.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        counter.innerHTML = "EXPIRED";
      }
    }, 1000);