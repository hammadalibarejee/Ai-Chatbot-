

        // document.getElementById("h1").innerText="Hello World";
        function temperature() {
            let t = document.getElementById("temp").value;
            if (t >= 25) {
                document.getElementById("tmp").innerText = "There is no need to wear a jacket";
            }
            else if ((t >= 16) && (t <= 25)) {
                document.getElementById("tmp").innerText = "You need to wear a jacket ";
            }
            else if ((t >= 1) && (t <= 15)) {
                document.getElementById("tmp").innerText = "You need to wear double jackets";
            }
            else if (t <= 0) {
                document.getElementById("tmp").innerText = "You don't need to go outside";
            }
            else {
                document.getElementById("tmp").innerText = "Please enter the temprerature in range ";
            }
        }
        function marksshet() {
            let m = document.getElementById("marks").value;
            if (m >= 80 && m <= 100) {
                document.getElementById("per").innerText = "A1 Grade";
                document.getElementById("per").innerText = "Congo! You have got the schorlarship";
            }
            else if (m >= 70 && m <= 79) {
                document.getElementById("per").innerText = "A Grade";

            }
            else if (m >= 60 && m <= 69) {
                document.getElementById("per").innerText = "B Grade";

            }
            else {
                document.getElementById("per").innerText = "Failed! Better luck next time."
            }

        }
        function currencyConverterPkr() {
            //     // let pkr = document.getElementById("pkr").value;
            //     let usd = document.getElementById("usd").value;
            //     // if (pkr != null) {
            //     //     rate = 170.81 * usd;
            //     //     console.log(rate);
            //     //     document.getElementById("con").innerText = `The Rate is:${rate}`;
            //     // }
            //     rate = usd / 170.81;
            //     document.getElementById("con").innerText = `The converted amount in PKR is: ${rate}`;
            //     console.log(rate);


            // }
            // currencyConverterUsd(){
            //     let pkr = document.getElementById("pkr").value;
            //     rate = pkr * 170.81;
            //     document.getElementById("con").innerText = `The converted amount in PKR is: ${rate}`;
            //     console.log(rate);

            // 
            var pkr = document.getElementById("pkr").value;
            var usd = document.getElementById("usd").value;

            //   console.log(pkr);
            //   console.log(usd);

            if (pkr === "" && usd !== "") {
                //convert into pkr from usd
                let rate = usd * 170.8;
                console.log("result in pkr : ", rate);
                document.getElementById("con").innerText = `result in pkr :  ${rate}`;
            } else if (pkr !== "" && usd === "") {
                // convert into usd from pkr
                rate = pkr / 170.8;
                console.log("res in usd is : ", rate);
                document.getElementById("con").innerText = `result in usd :  ${rate}`;
            }
        }

