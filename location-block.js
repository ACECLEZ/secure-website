function checkLocation() {
      fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
          var userIP = data.ip;
          fetch(`https://ipapi.co/${userIP}/json/`)
            .then(response => response.json())
            .then(data => {
              // Check if the user is located in Selected country
              if (data.country === 'replace_country_code_here') {
                window.location.href = 'error.html';
              }
            });
        });
}
/*@ACECLEZ*/
/*import code: <script src="https://ACECLEZ.github.io/secure-website/location-block.js"></script>   */
